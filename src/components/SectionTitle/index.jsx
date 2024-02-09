import React from "react";

export const SectionTitle = (props) => {
  return (
    <div className={`flex items-baseline justify-${props.position} mt-10`}>
      <h1 className="text-3xl font-bold">{props.title}</h1>
      <span className="ml-4 text-xl text-text-green">{props.lead}</span>
    </div>
  )
}

export default SectionTitle;