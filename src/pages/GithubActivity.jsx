import { useState, useEffect } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { FiGithub } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { personalDetails } from "../data";

const calendarTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

const GithubActivity = ({ theme }) => {
    const [data, setData] = useState(null);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        let active = true;
        fetch(`https://github-contributions-api.jogruber.de/v4/${personalDetails.githubUsername}?y=last`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to load contributions");
                return res.json();
            })
            .then((json) => {
                if (!active) return;
                setData(json);
                setStatus("ok");
            })
            .catch(() => {
                if (active) setStatus("error");
            });
        return () => {
            active = false;
        };
    }, []);

    const total = data?.total?.lastYear ?? 0;
    const contributions = data?.contributions ?? [];
    const profileUrl = `https://github.com/${personalDetails.githubUsername}`;

    return (
        <section id="activity" className="scroll-mt-24">
            <SectionHeading>GitHub Activity</SectionHeading>

            <div className="glass overflow-hidden rounded-2xl p-5 sm:p-6">
                {status === "error" ? (
                    <div className="flex flex-col items-start justify-between gap-3 text-sm text-neutral-500 sm:flex-row sm:items-center">
                        <span>Couldn&apos;t load live activity right now.</span>
                        <a href={profileUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-neutral-700 transition-colors hover:text-accent-green dark:text-neutral-300">
                            <FiGithub size={14} /> View on GitHub
                        </a>
                    </div>
                ) : (
                    <>
                        <div className="mb-4 flex items-center justify-between gap-3">
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                <span className="font-semibold tabular-nums text-neutral-900 dark:text-white">{total.toLocaleString()}</span> contributions in the last year
                            </p>
                            <a href={profileUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-500 transition-colors hover:text-accent-green">
                                <FiGithub size={13} /> {personalDetails.githubUsername}
                            </a>
                        </div>
                        <div className="overflow-x-auto pb-1">
                            <ActivityCalendar
                                data={contributions}
                                loading={status === "loading"}
                                colorScheme={theme === "light" ? "light" : "dark"}
                                blockSize={11}
                                blockMargin={3}
                                fontSize={12}
                                hideTotalCount
                                theme={calendarTheme}
                            />
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default GithubActivity;
