import React from "react";

function HeroAttributes() {
  const attributes = ['experienced', 'problemSolver', 'autonomousWorker', 'goodCommunicator']
  return (
   <>
    {attributes.map((attribute, id) => (
      <div key={id}>
        <span className="ml-4 lg:ml-8 mr-2 text-white">
          {attribute}:
        </span>
        <span className="text-orange-400">true</span>
        <span className="text-gray-400">,</span>
      </div>
    ))}
  </>
  )
}

export default HeroAttributes
