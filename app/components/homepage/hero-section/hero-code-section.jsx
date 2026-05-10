import React from 'react'

import HeroAttributes from './hero-attributes'
import HeroCertifications from './hero-certifications'
import HeroCode from './hero-code'
import HeroFunction from './hero-function'
import HeroHireable from './hero-hireable'
import HeroSkills from './hero-skills'

import { skillsData, coreSkills, secondarySkills } from '@/utils/data/skills'

function HeroCodeSection() {
  return (
    <HeroCode>
      <HeroFunction />
      <HeroSkills skillsData={coreSkills} label="coreSkills" />
      <HeroSkills skillsData={secondarySkills} label="secondarySkills" />
      <HeroCertifications />
      <HeroAttributes />
      <HeroHireable />
    </HeroCode>
  )
}

export default HeroCodeSection
