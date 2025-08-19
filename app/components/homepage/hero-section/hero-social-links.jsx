import React from "react";
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import Link from "next/link";


import { personalData } from '@/utils/data/personal-data';

function HeroSocialLinks() {
  return (
    <div className="my-12 flex items-center gap-5">
      <Link
        href={personalData.github}
        target="_blank"
        className="transition-all text-pink-500 hover:scale-125 duration-300"
      >
        <BsGithub size={30} />
      </Link>
      <Link
        href={personalData.linkedIn}
        target="_blank"
        className="transition-all text-pink-500 hover:scale-125 duration-300"
      >
        <BsLinkedin size={30} />
      </Link>
    </div>
  )
}

export default HeroSocialLinks
