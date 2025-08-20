import React from 'react'

function ProjectTitle({ title }) {
  return (
    <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
      <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
        <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
        <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
        <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
      </div>
      <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
        {title}
      </p>
    </div>
  )
}

export default ProjectTitle
