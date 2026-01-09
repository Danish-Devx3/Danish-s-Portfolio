import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data'
import { FiGithub, FiArrowUpRight } from 'react-icons/fi'

const Projects = () => {
  return (
    <section id='projects' className="scroll-mt-32">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-neutral-500 text-sm font-mono mb-2 block">&lt; About Me</span>
          <h2 className="text-3xl font-bold text-white tracking-tight">Projects</h2>
          <p className="text-neutral-400 mt-2">Selected works that showcase my skills.</p>
        </div>
        <a href="https://github.com/Danish-Devx3" target="_blank" className="text-sm font-mono text-neutral-500 hover:text-white">View GitHub &gt;</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-neutral-900/30 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition-colors"
          >
            <div className="aspect-video w-full overflow-hidden bg-neutral-900 border-b border-neutral-800 relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
            </div>

            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-lg text-white">{project.title}</h3>
                <div className="flex gap-3 text-neutral-500">
                  {project.github && <a href={project.github} target="_blank" className="hover:text-white"><FiGithub size={18} /></a>}
                  {project.live && <a href={project.live} target="_blank" className="hover:text-white"><FiArrowUpRight size={18} /></a>}
                </div>
              </div>

              <p className="text-sm text-neutral-400 mb-4 line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs bg-neutral-900 text-neutral-300 px-2 py-1 rounded border border-neutral-800">{tech}</span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs text-neutral-500 py-1 pl-1">+{project.technologies.length - 3}</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
