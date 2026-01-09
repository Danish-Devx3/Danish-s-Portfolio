import React from 'react'
import { skills } from '../data'

const Skills = () => {
    return (
        <section id='skills' className="scroll-mt-32">
            <h2 className="text-3xl font-bold mb-8 text-neutral-100 tracking-tight">Skills</h2>

            <div className="grid gap-10">
                {skills.map((category, idx) => (
                    <div key={idx}>
                        <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">{category.category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {category.items.map((skill, sIdx) => (
                                <div
                                    key={sIdx}
                                    className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900/50 rounded text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-default"
                                >
                                    <skill.icon size={16} style={{ color: skill.color }} />
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
