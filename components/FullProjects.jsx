import React from 'react'
import { fullProjects } from '@/utils/full-stack'
import ChromaGrid from './ChromaGrid'
function FullProjects({ styles }) {
  return (
<ChromaGrid  items={fullProjects} />
  )
}

export default FullProjects
