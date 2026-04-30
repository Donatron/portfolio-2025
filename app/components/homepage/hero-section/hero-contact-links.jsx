import React from 'react'
import { MdDownload } from 'react-icons/md'
import { RiContactsFill } from 'react-icons/ri'
import Link from 'next/link'

import { personalData } from '@/utils/data/personal-data'

function HeroContactLinks() {
  return (
    <div className="flex items-center gap-3">
      <Link
        href="#contact"
        className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
      >
        <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
          <span>Contact me</span>
          <RiContactsFill size={16} />
        </button>
      </Link>

      <Link
        className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
        role="button"
        target="_blank"
        href={personalData.resume}
        rel="noopener noreferrer"
        download
      >
        <span>Download Resume</span>
        <MdDownload size={16} />
      </Link>
    </div>
  )
}

export default HeroContactLinks
