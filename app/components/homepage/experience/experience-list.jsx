import React from "react";

import GlowCard from "../../helper/glow-card";
import GlowCardContent from "../../helper/glow-card-content";
import { experiences } from "@/utils/data/experience";

function ExperienceList() {
  return (
    <div>
      <div className="flex flex-col gap-6">
        {
          experiences.map(experience => (
            <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
              <GlowCardContent
                organistaion={experience.company}
                title={experience.title}
                duration={experience.duration}
              />
            </GlowCard>
          ))
        }
      </div>
    </div>
  )
}

export default ExperienceList
