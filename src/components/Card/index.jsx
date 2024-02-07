import React from "react";
import Image from "next/image";

export const Card = (props) => {
  return (
    <>
      <div className="text-center mx-20">
        <Image
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
        <h1 className="text-center text-2xl font-bold text-text-green pt-7">{props.cardTitle}</h1>
      </div>
    </>
  )
}

export default Card;