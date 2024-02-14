import React from "react";

export const ProgressBar = (props) => {
  return (
    <>
      <span className="inline-block text-sm font-semibold tracking-wider text-text-green uppercase">{props.name}</span>
      <div className="grid grid-cols-10 text-left">
        <div className="flex overflow-hidden col-span-8 mt-2 h-3 text-xs bg-progress-pale rounded">
          <div className={`${props.percentWidth} flex flex-col justify-center text-center text-white whitespace-nowrap bg-progress-deep shadow-none`}></div>
        </div>
        <div className="col-span-2 ml-3">
          <span className="text-sm font-semibold text-text-green lg:text-base">{props.percent}</span>
        </div>
      </div>
    </>
  )
}