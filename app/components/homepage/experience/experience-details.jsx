import React from "react";

import ExperienceList from "./experience-list";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";

function ExperienceDetails() {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex justify-center items-start">
          <div className="w-full h-full">
            <AnimationLottie animationPath={experience} />
          </div>
        </div>
        <ExperienceList />
      </div>
    </div>
  )
}

export default ExperienceDetails
