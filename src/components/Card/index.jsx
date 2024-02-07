import React from "react";
import Image from "next/image";

export const Card = (props) => {
  return (
    <Image
    src       = {props.src} 
    alt       = {props.alt}
    width     = {props.width}
    height    = {props.height}
    className = {props.className}
    />
  )
}

export default Card;