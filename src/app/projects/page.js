import Link from 'next/link'
import React from 'react'
import ArrowLeft from '../../../components/Icons/ArrowLeft'
import projects from "./../../../helpers/projects.json"
import ProjectCard from '../../../components/ProjectCard'
export const metadata = {
  title: "Portfolio | Projects",
    description: "Welcome to my projects page",

}

const page = () => {
  return (
    <div className=''>
        <section className='h-full max-w-5xl mx-auto pt-4 md:pt-16 mb-16 '>
            <Link href="/" className='projectsLink flex items-center space-x-4 font-semibold pb-6 text-gray-600 hover:text-gray-800  transition-colors duration-300'>
                <ArrowLeft className="w-8 h-8 mr-2" />
                <span className=''>Back to Home</span>
            </Link>

            {/* Projects */}
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-6'>
                {projects.map((project, index) => (
                    <ProjectCard key={index} projectInformation={project} />
                ))}
            </div>
        </section>
    </div>
  )
}

export default page