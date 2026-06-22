import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiExternalLink, FiMapPin } from "react-icons/fi";
import { HiAcademicCap } from "react-icons/hi";
import SectionHeading from "../components/SectionHeading";
import { experiences, education, certifications } from "../data";

const isActive = (duration) => /present|now/i.test(duration);

const TimelineItem = ({ exp, last }) => {
    const active = isActive(exp.duration);
    const [open, setOpen] = useState(active);

    return (
        <div className="relative pl-12">
            {!last && <span className="absolute left-[18px] top-7 -bottom-4 w-px bg-neutral-200 dark:bg-white/10" aria-hidden="true" />}
            <span className="absolute left-[11px] top-3 flex h-4 w-4 items-center justify-center" aria-hidden="true">
                {active && <span className="absolute h-4 w-4 rounded-full bg-accent-green/30 animate-pulse-ring" />}
                <span className={`relative h-2.5 w-2.5 rounded-full ${active ? "bg-accent-green" : "bg-neutral-400 dark:bg-neutral-600"}`} />
            </span>

            <div className="glass rounded-xl">
                <button
                    type="button"
                    onClick={() => setOpen((o) => !o)}
                    aria-expanded={open}
                    className="flex w-full items-start justify-between gap-3 p-4 text-left"
                >
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5 font-mono text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                            {exp.company[0]}
                        </div>
                        <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                                <h3 className="font-semibold text-neutral-900 dark:text-white">{exp.company}</h3>
                                <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded-full border ${active ? "text-accent-green border-accent-green/30 bg-accent-green/10" : "text-neutral-500 border-neutral-300 dark:border-white/10"}`}>
                                    {active ? "● Active" : "● Done"}
                                </span>
                            </div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">{exp.role}</p>
                        </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                        <span className="hidden font-mono text-xs text-neutral-500 dark:text-neutral-500 sm:block">{exp.duration}</span>
                        <FiChevronDown size={16} className={`text-neutral-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                    </div>
                </button>

                <AnimatePresence initial={false}>
                    {open && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <ul className="space-y-1.5 border-t border-neutral-200 px-4 pb-4 pt-3 text-sm text-neutral-600 dark:border-white/10 dark:text-neutral-400">
                                <li className="mb-1 flex items-center gap-1.5 font-mono text-xs text-neutral-400 dark:text-neutral-500 sm:hidden">{exp.duration}</li>
                                <li className="flex items-center gap-1.5 font-mono text-xs text-neutral-400 dark:text-neutral-500">
                                    <FiMapPin size={12} /> {exp.location}
                                </li>
                                {exp.description.map((desc, i) => (
                                    <li key={i} className="flex gap-2">
                                        <span className="mt-0.5 text-accent-green">▹</span>
                                        <span>{desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="scroll-mt-24">
            <SectionHeading>Work Experience</SectionHeading>

            <div className="space-y-4">
                {experiences.map((exp, i) => (
                    <TimelineItem key={i} exp={exp} last={i === experiences.length - 1} />
                ))}
            </div>

            <h3 className="mb-4 mt-12 font-mono text-xs text-neutral-500 dark:text-neutral-500">
                <span className="text-accent-purple">#</span> Education
            </h3>
            <div className="space-y-4">
                {education.map((edu, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.45 }}
                        className="glass flex items-start gap-3 rounded-xl p-4"
                    >
                        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-neutral-200">
                            <HiAcademicCap size={18} />
                        </div>
                        <div className="min-w-0">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <h4 className="font-semibold text-neutral-900 dark:text-white">{edu.institution}</h4>
                                <span className="font-mono text-xs text-neutral-500 dark:text-neutral-500">{edu.duration}</span>
                            </div>
                            <p className="text-sm text-neutral-700 dark:text-neutral-300">{edu.degree}</p>
                            <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-500">{edu.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {certifications && certifications.length > 0 && (
                <>
                    <h3 className="mb-4 mt-12 font-mono text-xs text-neutral-500 dark:text-neutral-500">
                        <span className="text-accent-purple">#</span> Certifications
                    </h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {certifications.map((cert, i) => {
                            const Tag = cert.url ? motion.a : motion.div;
                            return (
                                <Tag
                                    key={i}
                                    {...(cert.url && { href: cert.url, target: "_blank", rel: "noreferrer" })}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{ duration: 0.45, delay: i * 0.05 }}
                                    className="glass group block overflow-hidden rounded-xl transition-colors hover:border-neutral-300 dark:hover:border-white/20"
                                >
                                    {cert.image && (
                                        <div className="overflow-hidden border-b border-neutral-200 bg-neutral-100 dark:border-white/10 dark:bg-white/5">
                                            <img
                                                src={cert.image}
                                                alt={`${cert.title} certificate`}
                                                loading="lazy"
                                                onError={(e) => { e.currentTarget.parentElement.style.display = "none"; }}
                                                className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                                            />
                                        </div>
                                    )}
                                    <div className="flex items-center gap-2 p-3.5 text-sm">
                                        <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
                                        <span className="font-medium text-neutral-800 dark:text-neutral-200">{cert.title}</span>
                                        <span className="text-neutral-500 dark:text-neutral-500">· {cert.issuer}</span>
                                        {cert.url && <FiExternalLink size={13} className="ml-auto text-neutral-400 transition-colors group-hover:text-neutral-900 dark:group-hover:text-white" />}
                                    </div>
                                </Tag>
                            );
                        })}
                    </div>
                </>
            )}
        </section>
    );
};

export default Experience;
