import React from "react";
import Image from "next/image";

export const Card = (props) => {
  return (
    <>
      <div className="text-center mx-20">
        <div>
        <Image
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
          style={{ display: 'inline' }}
        />
        </div>
        <h1 className="text-center text-2xl whitespace-nowrap font-bold text-text-green py-5">{props.cardTitle}</h1>
        <p className="text-center mb-10 whitespace-pre-wrap">{props.text}</p>
      </div>
    </>
  )
}

export default Card;