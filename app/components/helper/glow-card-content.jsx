import React from 'react'
import { BsPersonWorkspace } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'

function GlowCarContent({ organistaion, title, duration, certificationLink }) {
  return (
    <div className="p-3 relative">
      <Image
        src="/blur-23.svg"
        alt="Hero"
        width={1080}
        height={200}
        className="absolute bottom-0 opacity-80"
      />
      <div className="flex justify-center">
        <p className="text-xs sm:text-sm text-[#16f2b3]">{duration}</p>
      </div>
      <div className="flex items-center gap-x-8 px-3 py-5">
        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
          <BsPersonWorkspace size={36} />
        </div>
        <div>
          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
            {title}
          </p>
          <p className="text-sm sm:text-base">{organistaion}</p>
          {certificationLink ? (
            <div className="mt-2">
              <Link className="text-[#16f2b3]" href={certificationLink}>
                Verify Certification
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default GlowCarContent
