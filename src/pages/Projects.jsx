import {motion } from 'framer-motion'
import React from 'react'
import {projectData} from '../projectData'

const Projects = () => {
  return (
    <div id='projects' className='mx-auto max-w-6xl p-4 sm:p-10 text-white flex flex-col gap-10 sm:gap-16 items-center justify-center'>
      <motion.h1
       initial={{opacity: 0, y: 20}}
       whileInView={{opacity: 1, y: 0}}
       viewport={{once: true}}
       transition={{duration: 0.8}}
       className='text-4xl text-indigo-500 text-shadow-md font-bold text-center sm:text-3xl'
      >
        Projects
      </motion.h1>

      <motion.div
       initial={{opacity: 0, x: -100}}
       whileInView={{opacity: 1, x: 0}}
       viewport={{once: true}}
       transition={{duration: 0.8, delay: 0.4}}
       className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full'
      >
        {projectData.map((project)=>(
          <a href={project.link} key={project.id} target='_blank' className='flex flex-col rounded-xl overflow-hidden border-2 border-neutral-400 shadow-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400 ' >
            <img src={project.image} alt="image" className='hover:scale-105 transition-transform duration-300 ' />
            <div className='flex flex-col gap-3  p-5 transition-colors duration-300 hover:bg-neutral-300 flex-grow'>
              <h3 className='text-xl font-semibold'>
                {project.title}
              </h3>
              <p className='text-sm text-slate-400'>{project.description}</p>
              <div className='flex gap-3 flex-wrap mt-auto'>
                {project.technologies.map((tech, idx)=>(
                <span key={idx} className='px-2 py-1 bg-indigo-900 rounded-xl text-sm' >{tech}</span>
              ))}
              </div>
            </div>
          </a>
        ))}
      </motion.div>
    </div>
  )
}

export default Projects
