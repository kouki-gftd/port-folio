import React from "react";
import Image from "next/image";
import futureImg from "public/future.png"
import classes from "src/components/Future/Future.module.css";
import { SectionTitle } from "src/components/SectionTitle";

export const Future = () => {
  return (
    <>
      <section id="future" className={`${classes.bg} py-20 flex justify-center`}>
        <div className="flex flex-col mr-10">
          <SectionTitle title="3年後にやりたいこと" lead="FUTURE" position="start" />
          <p className="mt-10 whitespace-nowrap">
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
            テキストテキスト
          </p>
        </div>
        <Image src={futureImg} alt="future" width="480" height="251" />
      </section>
    </>
  )
}

export default Future;