import { motion } from "framer-motion";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { projects, personalDetails } from "../data";

const Projects = () => {
    return (
        <section id="projects" className="scroll-mt-24">
            <SectionHeading>Featured Projects</SectionHeading>

            <div className="space-y-6">
                {projects.map((project, idx) => (
                    <motion.article
                        key={project.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: Math.min(idx, 3) * 0.05 }}
                        className="glass glow-hover group relative flex flex-col overflow-hidden rounded-2xl md:flex-row"
                    >
                        <div className="relative shrink-0 overflow-hidden border-b border-neutral-200 bg-neutral-100 dark:border-white/10 dark:bg-white/5 md:w-2/5 md:border-b-0 md:border-r">
                            <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full"
                            />
                        </div>

                        <div className="flex flex-1 flex-col p-5">
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{project.title}</h3>
                                <div className="flex items-center gap-1.5">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`} className="grid h-8 w-8 place-items-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-white/10 dark:hover:text-white">
                                            <FiGithub size={16} />
                                        </a>
                                    )}
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} Live`} className="grid h-8 w-8 place-items-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-white/10 dark:hover:text-white">
                                            <FiArrowUpRight size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{project.description}</p>

                            <div className="mb-4 mt-3 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="rounded-md border border-neutral-200 bg-neutral-100/60 px-2 py-0.5 font-mono text-[11px] text-neutral-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-400">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto flex gap-2">
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black">
                                        <FiArrowUpRight size={14} /> Live Demo
                                    </a>
                                )}
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
                                        <FiGithub size={14} /> GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>

            <div className="mt-6 flex justify-center">
                <a
                    href={`https://github.com/${personalDetails.githubUsername}`}
                    target="_blank"
                    rel="noreferrer"
                    className="glass inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-accent-blue/50 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                >
                    More Projects <FiArrowUpRight size={15} />
                </a>
            </div>
        </section>
    );
};

export default Projects;
