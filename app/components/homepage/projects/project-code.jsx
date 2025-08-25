import React from 'react'

import ProjectTitle from './project-title'

function ProjectCode({ children, projectName }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      <ProjectTitle title={projectName} />
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div className="ml-4 lg:ml-8">
            <span className="text-white mr-2">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{projectName}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          {children}

          <div>
            <span className="text-gray-400">{`};`}</span>
          </div>
        </code>
      </div>
    </div>
  )
}

export default ProjectCode
