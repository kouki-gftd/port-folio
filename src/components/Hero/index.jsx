import Image   from "next/image";
import React   from "react";
import heroImg from "public/hero.png";

export const Hero = () => {
  return (
    <>
      <div className="bg-bg-green md:flex items-center justify-between py-5">
        <div className="text-white text-center whitespace-nowrap basis-1/2 md:ml-20 md:text-left">
          <h1 className="text-3xl md:ml-20 md:text-5xl font-bold py-5">メインタイトル</h1>
          <p className="text-2xl opacity-50 md:ml-20 md:text-4xl font-bold py-5">サブタイトル</p>
        </div>
        <div className="flex flex-center ml-10 md:flex justify-end pr-10 basis-1/2">
          <Image src={heroImg} alt="hero" />
        </div>
      </div>
    </>
  );
};

export default Hero;
