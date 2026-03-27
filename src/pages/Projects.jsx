import { motion } from 'framer-motion'
import { projects } from '../data'
import { FiGithub, FiArrowUpRight } from 'react-icons/fi'

const Projects = () => {
  return (
    <section id='projects' className="scroll-mt-32">
      <div className="flex flex-col items-center text-center gap-3 mb-12">
        <div>
          <span className="text-neutral-500 dark:text-neutral-500 text-sm font-mono mb-2 block">&lt; About Me</span>
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">Projects</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mt-2">Selected works that showcase my skills.</p>
        </div>
        <a href="https://github.com/Danish-Devx3" target="_blank" rel="noreferrer" className="text-sm font-mono text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white">View GitHub &gt;</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-white/80 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-300"
          >
            <div className="aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
              />
            </div>

            <div className="p-5">
              <div className="flex flex-col items-center mb-3">
                <h3 className="font-semibold text-lg text-neutral-900 dark:text-white text-center">{project.title}</h3>
                <div className="flex gap-3 text-neutral-500 dark:text-neutral-500 mt-2">
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`} className="hover:text-neutral-900 dark:hover:text-white"><FiGithub size={18} /></a>}
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} Live`} className="hover:text-neutral-900 dark:hover:text-white"><FiArrowUpRight size={18} /></a>}
                </div>
              </div>

              <p className="text-sm text-neutral-700 dark:text-neutral-400 mb-4 line-clamp-2 text-center">{project.description}</p>

              <div className="flex flex-wrap gap-2 justify-center">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 px-2 py-1 rounded border border-neutral-200 dark:border-neutral-800">{tech}</span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs text-neutral-600 dark:text-neutral-500 py-1 pl-1">+{project.technologies.length - 3}</span>
                )}
              </div>

              {(project.github || project.live) && (
                <div className="mt-4 flex gap-2 justify-center">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-500 transition-colors"
                    >
                      <FiGithub size={14} />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} Live`}
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-500 transition-colors"
                    >
                      <FiArrowUpRight size={14} />
                      Live
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
