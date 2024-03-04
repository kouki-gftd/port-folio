import React from "react";

export const SectionTitle = (props) => {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-${props.position} ${props.hideOnMobile ? 'hidden md:flex' : ''} mt-10`}>
      <h1 className="text-3xl font-bold">{props.title}</h1>
      <span className="md:ml-4 text-xl text-text-green">{props.lead}</span>
    </div>
  )
}

export default SectionTitle;