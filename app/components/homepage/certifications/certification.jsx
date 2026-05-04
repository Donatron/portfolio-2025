import React from 'react'
import Image from 'next/image'

import { skillsImage } from '@/utils/skill-image'
import Link from 'next/link'

function Certification({ id, certification }) {
  return (
    <div
      className="w-60 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
      key={id}
    >
      <div className="min-w-100 h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
        <div className="flex -translate-y-[1px] justify-center">
          <div className="w-3/4">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-6">
          <div className="h-20 sm:h-20">
            {certification ? (
              <Image
                src={skillsImage(certification.title)?.src}
                alt={certification.title}
                width={80}
                height={80}
                className="h-full w-auto rounded-lg"
              />
            ) : null}
          </div>
          <p className="text-white text-sm sm:text-lg">{certification.title}</p>
          <Link
            className="text-[#16f2b3] text-xs sm:text-md"
            href={certification.verificationLink}
            target="_blank"
          >
            Verify Certification
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Certification
