import React from "react";

function ProjectTools({ projectTools }) {
  return (
    <div className="ml-4 lg:ml-8 mr-2">
      <span className=" text-white">tools:</span>
      <span className="text-gray-400">{` ['`}</span>
      {
        projectTools.map((tag, i) => (
          <React.Fragment key={i}>
            <span className="text-amber-300">{tag}</span>
            {
              projectTools?.length - 1 !== i
                ? <span className="text-gray-400">{`', '`}</span>
                : <span className="text-gray-400">{`'`}</span>
            }
          </React.Fragment>
        ))
      }
      <span className="text-gray-400">{"],"}</span>
    </div>
    )
}

export default ProjectTools
