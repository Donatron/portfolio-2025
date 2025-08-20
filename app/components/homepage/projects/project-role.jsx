import React from "react";

function ProjectRole({ role }) {
  return (
    <div className="ml-4 lg:ml-8">
      <span className="text-white mr-2">myRole:</span>
      <span className="text-orange-400">&apos;{role}&apos;</span>
      <span className="text-gray-400">,</span>
    </div>
  )
}

export default ProjectRole
