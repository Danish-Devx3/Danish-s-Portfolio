import React from 'react'
import { skills } from '../data'

const Skills = () => {
    return (
        <section id='skills'>
            <h2 className="text-xl font-bold mb-6 text-neutral-100">Skills</h2>
            <div className="flex flex-col gap-8">
                {skills.map((category, idx) => (
                    <div key={idx}>
                        <h3 className="text-lg font-medium text-neutral-400 mb-4">{category.category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {category.items.map((skill, sIdx) => (
                                <div
                                    key={sIdx}
                                    className="flex items-center gap-2 px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors cursor-default"
                                >
                                    <span className="text-lg" style={{ color: skill.color }}><skill.icon /></span>
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
