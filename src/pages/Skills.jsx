import React from 'react'
import { skills } from '../data'

const Skills = () => {
    return (
        <section id='skills' className="scroll-mt-32">
            <div className="mb-12">
                <span className="text-neutral-500 text-sm font-mono mb-2 block">&lt; Projects</span>
                <h2 className="text-3xl font-bold text-white tracking-tight">Skills & Tools</h2>
            </div>

            <div className="grid gap-12">
                {skills.map((category, idx) => (
                    <div key={idx}>
                        <h3 className="text-sm font-bold text-white border-b border-neutral-800 pb-2 mb-6 inline-block pr-8">{category.category}</h3>
                        <div className="flex flex-wrap gap-x-8 gap-y-4">
                            {category.items.map((skill, sIdx) => (
                                <div
                                    key={sIdx}
                                    className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors cursor-default group"
                                >
                                    <skill.icon size={20} className="group-hover:text-white transition-colors" style={{ color: skill.color }} />
                                    <span className="text-sm font-medium">{skill.name}</span>
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
