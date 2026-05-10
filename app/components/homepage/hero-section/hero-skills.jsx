import React from 'react'

function HeroSkills({ skillsData, label }) {
  return (
    <div className="ml-4 lg:ml-8 mr-2">
      <span className=" text-white">{label}:</span>
      <span className="text-gray-400">{`['`}</span>
      {skillsData.map((skill, id) => (
        <React.Fragment key={id}>
          <span className="text-amber-300">{skill}</span>
          <span className="text-gray-400">
            {id < skillsData.length - 1 ? "', '" : "']"}
          </span>
        </React.Fragment>
      ))}
      <span className="text-gray-400">,</span>
    </div>
  )
}

export default HeroSkills
