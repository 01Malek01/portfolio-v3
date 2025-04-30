import React from 'react'
import { frontProjects } from '@/utils/front-end'
import ProjectCard from './ProjectCard'
function FrontProject({ styles }) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-7  p-5 justify-center  ' >
      {frontProjects.map((project) => (
        <ProjectCard
          key={project.name}
          projectTitle={project.name}
          projectDescription={project.description}
          projectImage={project.image}
          liveLink={project?.liveLink}
          githubLink={project?.githubLink}
          githubLink2={project?.githubLink2}
          styles={styles}

        />
      ))}
    </div>
  )
}

export default FrontProject
