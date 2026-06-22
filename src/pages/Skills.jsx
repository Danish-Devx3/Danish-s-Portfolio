import { motion } from 'framer-motion'
import { skills } from '../data'
import SectionHeading from '../components/SectionHeading'

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.03 } },
}

const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

const Skills = () => {
    return (
        <section id="skills" className="scroll-mt-24">
            <SectionHeading>My Skills</SectionHeading>

            <div className="space-y-7">
                {skills.map((category) => (
                    <div key={category.category}>
                        <p className="mb-3 font-mono text-xs text-neutral-500 dark:text-neutral-500">
                            <span className="text-accent-purple">#</span> {category.category}
                        </p>
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-40px" }}
                            className="flex flex-wrap gap-2.5"
                        >
                            {category.items.map((skill) => (
                                <motion.span
                                    variants={item}
                                    key={skill.name}
                                    className="glass group inline-flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 dark:hover:border-white/20 hover:shadow-md dark:hover:shadow-black/40"
                                >
                                    <skill.icon size={16} style={{ color: skill.color }} className="opacity-80 transition-opacity group-hover:opacity-100" />
                                    <span className="transition-colors group-hover:text-neutral-900 dark:group-hover:text-white">{skill.name}</span>
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
