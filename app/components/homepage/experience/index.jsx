// @flow strict

import Image from "next/image";
import ExperienceDetails from "./experience-details";
import ExperienceTitle from "./experience-title";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <ExperienceTitle />
      <ExperienceDetails />
    </div>
  );
};

export default Experience;