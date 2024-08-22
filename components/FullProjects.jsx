import React from 'react'
import { fullProjects } from '@/utils/full-stack'
import ProjectCard from './ProjectCard'
function FullProjects({ styles }) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7  p-5 justify-center '>
      {fullProjects.map((project) => (
        <ProjectCard
          key={project.name}
          projectTitle={project.name}
          projectDescription={project.description}
          projectImage={project.image}
          githubLink={project?.githubLink}
          githubLink2={project?.githubLink2}
          liveLink={project?.liveLink}
          styles = {styles}
        />
      ))}
    </div>
  )
}

export default FullProjects
