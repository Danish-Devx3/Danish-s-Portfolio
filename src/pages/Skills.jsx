import React from 'react'
import { skills } from '../data'

const Skills = () => {
    return (
        <section id='skills'>
            <h2 className="text-xl font-bold mb-6 text-neutral-100">Skills</h2>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-2 px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors cursor-default"
                    >
                        <span className="text-lg" style={{ color: skill.color }}><skill.icon /></span>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
