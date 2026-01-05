import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Projects = () => {
  return (
    <section id='projects'>
      <h2 className="text-xl font-bold mb-6 text-neutral-100">Projects</h2>
      {/* Introduction text if needed */}
      <p className="text-neutral-400 mb-8 text-sm">Here are some of the projects I've worked on.</p>

      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group block p-4 -mx-4 rounded-xl hover:bg-neutral-900/50 transition-colors border border-transparent hover:border-neutral-800"
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* Image */}
              <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden border border-neutral-800 shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-neutral-200 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-200 transition-colors">
                        <FiExternalLink size={16} />
                      </a>
                    )}
                    {/* Assuming link is source, if there's a demo link separate it. For now using generic link */}
                  </div>
                </div>

                <p className="text-sm text-neutral-400 mt-2 line-clamp-2 md:line-clamp-none">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-neutral-800 text-neutral-300 text-xs px-2 py-1 rounded-md border border-neutral-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6">
        <a href="https://github.com/Danish-Devx3" target="_blank" className="text-sm text-neutral-400 hover:text-neutral-200 flex items-center gap-2 transition-colors">
          Show All Projects <FiGithub />
        </a>
      </div>
    </section>
  )
}

export default Projects
