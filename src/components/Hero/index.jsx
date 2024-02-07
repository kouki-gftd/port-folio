import React from "react";
import Image from "next/image";
import heroImg from "public/hero.png";

export const Hero = () => {
  return (
    <>
      <div className="bg-bg-green">
        <div className="flex justify-end">
          <Image src={heroImg} alt="hero" />
        </div>
        <div className="text-3xl text-white font-bold">
          <h1>メインタイトル</h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
