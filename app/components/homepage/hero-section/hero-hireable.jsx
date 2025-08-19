import React from "react";

function HeroHireable() {
  return (
    <>
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-green-400">
          hireable:
        </span>
        <span className="text-gray-400">{'() => {'}</span>
      </div>
      <div>
        <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
          return
        </span>
        <span className="text-gray-400">{`(`}</span>
      </div>
      <div>
        <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
        <span className="mr-2 text-white">problemSolver</span>
        <span className="text-amber-300">&amp;&amp;</span>
      </div>
      <div>
        <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
        <span className="mr-2 text-white">autonomousWorker</span>
        <span className="text-amber-300">&amp;&amp;</span>
      </div>
      <div>
        <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
        <span className="mr-2 text-white">skills.length</span>
        <span className="mr-2 text-amber-300">&gt;=</span>
        <span className="text-orange-400">5</span>
      </div>
      <div>
        <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
      </div>
    </>
  )
}

export default HeroHireable
