import React from 'react'

import HeroAttributes from './hero-attributes'
import HeroCode from './hero-code'
import HeroFunction from './hero-function'
import HeroHireable from './hero-hireable'
import HeroSkills from './hero-skills'

function HeroCodeSection() {
  return (
    <HeroCode>
      <HeroFunction />
      <HeroSkills />
      <HeroAttributes />
      <HeroHireable />
    </HeroCode>
  )
}

export default HeroCodeSection
