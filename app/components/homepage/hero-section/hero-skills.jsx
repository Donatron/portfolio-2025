import React from "react";

import { skillsData } from '@/utils/data/skills';

function HeroSkills() {
  return (
    <div className="ml-4 lg:ml-8 mr-2">
      <span className=" text-white">skills:</span>
      <span className="text-gray-400">{`['`}</span>
      {
        skillsData.map((skill, id) => (
          <React.Fragment key={id}>
            <span className="text-amber-300">{skill}</span>
            <span className="text-gray-400">{"', '"}</span>
          </React.Fragment>
        ))
      }
    </div>
  )
}

export default HeroSkills
