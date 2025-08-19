import React from "react";

import EducationList from "./education-list";
import study from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";

function EducationDetails() {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex justify-center items-start">
          <div className="w-3/4 h-3/4">
            <AnimationLottie animationPath={study} />
          </div>
        </div>
        <EducationList />
      </div>
    </div>
  )
}

export default EducationDetails
