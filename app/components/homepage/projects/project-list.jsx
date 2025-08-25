import React from 'react'

import ProjectCard from './project-card'
import { projectsData } from '@/utils/data/projects-data'

function ProjectList() {
  return (
    <div className="pt-24">
      <div className="flex flex-col gap-6">
        {projectsData.map((project, index) => (
          <div
            id={`sticky-card-${index + 1}`}
            key={index}
            className="sticky-card w-full mx-auto max-w-2xl sticky"
          >
            <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList
