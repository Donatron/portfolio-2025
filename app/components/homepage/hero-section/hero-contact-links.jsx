import React from 'react'
import { MdDownload } from 'react-icons/md'
import { RiContactsFill } from 'react-icons/ri'
import Link from 'next/link'

import { personalData } from '@/utils/data/personal-data'

function HeroContactLinks() {
  return (
    <div className="flex flex-col items-center gap-3 lg:flex-row">
      <Link
        href="#contact"
        className="w-[250px] rounded-full bg-gradient-to-r from-violet-600 to-pink-500 p-[1px] transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
      >
        <button className="flex w-full items-center justify-center gap-1 rounded-full border-none bg-[#0d1224] px-3 py-3 text-center text-xs font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:gap-3 md:px-8 md:py-4 md:text-sm md:font-semibold">
          <span>Contact me</span>
          <RiContactsFill size={16} />
        </button>
      </Link>

      <Link
        className="flex w-[250px] items-center justify-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 py-3 text-center text-xs font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:gap-3 hover:text-white hover:no-underline md:px-8 md:py-4 md:text-sm md:font-semibold"
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
