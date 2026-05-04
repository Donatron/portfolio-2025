import React from 'react'

import { certifications } from '@/utils/data/certifications'

function HeroCertifications() {
  return (
    <div className="ml-4 lg:ml-8 mr-2">
      <span className=" text-white">certifications:</span>
      <span className="text-gray-400">{`['`}</span>
      {certifications.map((certification, id) => (
        <React.Fragment key={id}>
          <span className="text-amber-300">{certification.title}</span>
          <span className="text-gray-400">
            {id < certifications.length - 1 ? "', '" : "']"}
          </span>
        </React.Fragment>
      ))}
      <span className="text-gray-400">,</span>
    </div>
  )
}

export default HeroCertifications
