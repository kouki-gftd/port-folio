import React from "react";
import Image from "next/image";
import logoWhite from "public/logo_white.png";
import logoTwitter from "public/twitter.png";
import logoFb from "public/facebook.png";

export const Footer = () => {
  return (
    <>
      <div className="container bg-bg-black flex flex-col items-center justify-center">
        <p className="text-white pt-10 pb-8">CREATED BY 名前 太郎</p>
        <Image className="py-10" src={logoWhite} alt="ロゴ" width="120" height="60" />
        <div className="flex">
          <Image className="m-3" src={logoTwitter} alt="ロゴ" width="36" height="30" />
          <Image className="m-3" src={logoFb} alt="ロゴ" width="36" height="36" />
        </div>
        <p className="text-white text-xs py-5">© 2024 KIKAGAKU</p>
      </div>
    </>
  )
}

export default Footer;