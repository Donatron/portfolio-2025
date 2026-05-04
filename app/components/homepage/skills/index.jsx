// @flow strict

import { skillsData } from '@/utils/data/skills'
import Marquee from 'react-fast-marquee'

import SectionTitle from '../../helper/section-title'
import Skill from './skill'

function Skills() {
  return (
    <div
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <SectionTitle sectionName="Skills" />

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData?.length
            ? skillsData.map((skill, id) => (
                <Skill key={`skill-${id}`} id={`skill-${id}`} skill={skill} />
              ))
            : null}
        </Marquee>
      </div>
    </div>
  )
}

export default Skills
