import Image   from "next/image";
import React   from "react";
import heroImg from "public/hero.png";

export const Hero = () => {
  return (
    <>
      <div className="bg-bg-green flex items-center justify-between py-5">
        <div className="text-white whitespace-nowrap ml-20">
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold py-5">メインタイトル</h1>
          <p className="text-1xl md:text-2xl lg:text-3xl xl:text-4xl py-5">サブタイトル</p>
        </div>
        <div className="flex justify-end pr-10">
          <Image src={heroImg} alt="hero" />
        </div>
      </div>
    </>
  );
};

export default Hero;
