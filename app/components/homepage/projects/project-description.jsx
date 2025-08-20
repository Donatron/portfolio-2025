import React from "react";

function ProjectDescription({ description }) {
  return (
    <div className="ml-4 lg:ml-8">
      <span className="text-white mr-2">description:</span>
      <span className="text-cyan-400">&apos;{description}&apos;</span>
      <span className="text-gray-400">,</span>
    </div>
  )
}

export default ProjectDescription
