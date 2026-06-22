import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiClock, FiDownload, FiMail } from "react-icons/fi";
import { personalDetails } from "../data";

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const initials = personalDetails.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const About = () => {
    const [avatarError, setAvatarError] = useState(false);
    const [time, setTime] = useState("");

    useEffect(() => {
        const tick = () =>
            setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }));
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <section id="about" className="scroll-mt-24 pt-4">
            <motion.div variants={container} initial="hidden" animate="show">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                    <motion.div variants={item} className="relative shrink-0">
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent-green/40 via-accent-purple/40 to-accent-blue/40 blur-md opacity-60 animate-glow" aria-hidden="true" />
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-600 flex items-center justify-center">
                            {avatarError ? (
                                <span className="text-2xl font-bold text-white select-none">{initials}</span>
                            ) : (
                                <img
                                    src={personalDetails.avatar}
                                    alt={personalDetails.name}
                                    width={112}
                                    height={112}
                                    onError={() => setAvatarError(true)}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                    </motion.div>

                    <div className="flex-1 min-w-0">
                        <motion.h1 variants={item} className="flex items-center gap-2 text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
                            {personalDetails.name} <span className="text-xl">🚀</span>
                        </motion.h1>
                        <motion.p variants={item} className="font-mono text-sm text-neutral-500 dark:text-neutral-500 mt-1">
                            {personalDetails.handle}
                        </motion.p>
                        <motion.p variants={item} className="mt-2 font-mono text-sm text-accent-blue">
                            {personalDetails.tagline}
                        </motion.p>
                        <motion.div variants={item} className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-neutral-500 dark:text-neutral-400">
                            <span className="inline-flex items-center gap-1.5"><FiMapPin size={13} /> {personalDetails.location}</span>
                            <span className="inline-flex items-center gap-1.5 tabular-nums"><FiClock size={13} /> {time}</span>
                        </motion.div>
                    </div>
                </div>

                <motion.div variants={item} className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent-green/30 bg-accent-green/10 px-3 py-1.5 font-mono text-xs text-accent-green">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-accent-green animate-pulse-ring" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
                    </span>
                    Available for new opportunities
                </motion.div>

                <motion.p variants={item} className="mt-6 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    Yup! I&apos;m a <span className="font-semibold text-neutral-900 dark:text-white">{personalDetails.role}</span>. {personalDetails.about}
                </motion.p>

                <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-3">
                    <a
                        href={`mailto:${personalDetails.email}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 dark:bg-white px-4 py-2.5 text-sm font-medium text-white dark:text-black hover:opacity-90 transition-opacity"
                    >
                        <FiMail size={16} /> Email Me
                    </a>
                    <a
                        href={personalDetails.resumeUrl}
                        download={personalDetails.resumeFileName}
                        className="glass inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:border-accent-blue/50 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                        <FiDownload size={16} /> Resume
                    </a>

                    <div className="flex items-center gap-2">
                        {personalDetails.socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={social.name}
                                className="glass grid place-items-center h-10 w-10 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-accent-purple/50 hover:-translate-y-0.5 transition-all"
                            >
                                <social.icon size={18} />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
