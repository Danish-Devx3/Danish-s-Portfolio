import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data'
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi'

const Projects = () => {
  return (
    <section id='projects' className="scroll-mt-32">
      <h2 className="text-3xl font-bold mb-8 text-neutral-100 tracking-tight">Projects</h2>

      <div className="grid gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative"
          >
            <div className="flex flex-col md:flex-row gap-6 p-4 rounded-2xl hover:bg-neutral-900/50 transition-colors border border-transparent hover:border-neutral-800">
              <div className="w-full md:w-48 h-32 shrink-0 rounded-lg overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-neutral-100 group-hover:text-white flex items-center gap-2">
                    {project.title}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400 hover:text-white">
                        <FiArrowUpRight size={18} />
                      </a>
                    )}
                  </h3>

                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                        <FiGithub size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-2 text-neutral-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="text-xs font-medium text-neutral-500 bg-neutral-900/50 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="https://github.com/Danish-Devx3"
          target="_blank"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm font-medium border-b border-transparent hover:border-white pb-0.5"
        >
          View Full Project Archive <FiArrowUpRight />
        </a>
      </div>
    </section>
  )
}

export default Projects
