import React from "react";

import { personalData } from '@/utils/data/personal-data';

function HeroTitle() {
  return (
    <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
      Hi, <br />
      I&apos;m <span className=" text-pink-500">{personalData.name}</span>
      {', '}
      <span className=" text-[#16f2b3]">{personalData.designation}</span>.
    </h1>
  )
}

export default HeroTitle
