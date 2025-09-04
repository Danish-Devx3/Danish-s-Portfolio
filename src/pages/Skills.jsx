import React from 'react'
import { FaAws, FaDocker, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiGithubactions, SiMongodb, SiNextdotjs, SiPostgresql, SiRedux, SiTypescript } from 'react-icons/si'

const Skills = () => {
  return (
    <div className='max-w-7xl mx-auto min-h-[50vh] p-4 md:p-8 lg:p-28 flex flex-col items-center justify-center' id='skills'>
      <h1 className='text-3xl text-indigo-600 mb-8'>My Skills</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full'>
            <div className='bg-white/10 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
                <h2 className='text-xl font-semibold mb-4 text-indigo-500'>Frontend</h2>
                <ul className='list-disc list-inside space-y-2 text-gray-300'>
                    <li className='flex items-center gap-2 text-sm text-neutral-800'><FaReact /> React.js</li>
                    <li className='flex items-center gap-2 text-sm text-neutral-800'><SiNextdotjs /> Next.js</li>
                    <li className='flex items-center gap-2 text-sm text-neutral-800'><SiTypescript /> TypeScript</li>
                    <li className='flex items-center gap-2 text-sm text-neutral-800'><SiRedux /> Redux</li>
                </ul>
            </div>
            <div className='bg-white/10 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
                <h2 className='text-xl font-semibold mb-4 text-indigo-500'>Backend</h2>
                <ul className='list-disc list-inside space-y-2 text-gray-300'>
                    <li className='flex items-center gap-2 text-sm text-neutral-800'><FaNodeJs /> Node.js</li>
                    <li className='flex items-center gap-2 text-sm text-neutral-800'><SiExpress /> Express.js</li>
                    <li className='flex items-center gap-2 text-sm text-neutral-800'><SiMongodb /> MongoDB</li>
                    <li className='flex items-center gap-2 text-sm text-neutral-800'><SiPostgresql /> PostgreSQL</li>
                </ul>
            </div>
            <div className='bg-white/10 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
                <h2 className='text-xl font-semibold mb-4 text-indigo-500'>DevOps & Tools</h2>
                <ul className='list-disc list-inside space-y-2 text-gray-300'>
                    <li className='flex items-center gap-2 text-sm text-neutral-800'><FaDocker /> Docker</li>
                    <li className='flex items-center gap-2 text-sm text-neutral-800'><FaAws /> AWS (EC2, S3)</li>
                    <li className='flex items-center gap-2 text-sm text-neutral-800'><FaGithub /> Git & GitHub</li>
                    <li className='flex items-center gap-2 text-sm text-neutral-800'><SiGithubactions /> CI/CD</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Skills
