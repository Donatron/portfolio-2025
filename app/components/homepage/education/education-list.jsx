import React from 'react'

import GlowCard from '../../helper/glow-card'
import GlowCardContent from '../../helper/glow-card-content'
import { educations } from '@/utils/data/educations'

function EducationList() {
  return (
    <div>
      <div className="flex flex-col gap-6">
        {educations.map((education) => (
          <GlowCard key={education.id} identifier={`education-${education.id}`}>
            <GlowCardContent
              organistaion={education.institution}
              title={education.title}
              duration={education.duration}
            />
          </GlowCard>
        ))}
      </div>
    </div>
  )
}

export default EducationList
