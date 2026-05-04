// @flow strict

import { certifications } from '@/utils/data/certifications'
import Marquee from 'react-fast-marquee'

import SectionTitle from '../../helper/section-title'
import Certification from './certification'

function Certifications() {
  return (
    <div
      id="certifications"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <SectionTitle sectionName="Certifications" />

      <div className="w-full my-12 flex justify-center">
        {certifications?.length
          ? certifications.map((certification, id) => (
              <Certification
                key={`certification-${id}`}
                id={`certification-${id}`}
                certification={certification}
              />
            ))
          : null}
      </div>
    </div>
  )
}

export default Certifications
