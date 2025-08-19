import React from "react";

function HeroFunction() {
  return (
    <>
      <div className="blink">
        <span className="mr-2 text-pink-500">const</span>
        <span className="mr-2 text-white">sussMeOut</span>
        <span className="mr-2 text-pink-500">=</span>
        <span className="text-gray-400">{'{'}</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
        <span className="text-gray-400">{`'`}</span>
        <span className="text-amber-300">Don Macarthur</span>
        <span className="text-gray-400">{`',`}</span>
      </div>
    </>
  )
}

export default HeroFunction
