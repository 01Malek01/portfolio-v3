import React from 'react'
import { frontProjects } from '@/utils/front-end'
import ProjectCard from './ProjectCard'
import ChromaGrid from './ChromaGrid'
function FrontProject({ styles }) {
  return (

    <ChromaGrid items={frontProjects} />

  )
}

export default FrontProject
