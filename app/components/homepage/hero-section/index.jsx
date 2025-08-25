// @flow strict

import React from 'react'
import Image from 'next/image'

import HeroCodeSection from './hero-code-section'
import HeroContactlLinks from './hero-contact-links'
import HeroSocialLinks from './hero-social-links'
import HeroTitle from './hero-title'

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <HeroTitle />
          <HeroSocialLinks />
          <HeroContactlLinks />
        </div>
        <HeroCodeSection />
      </div>
    </section>
  )
}

export default HeroSection
