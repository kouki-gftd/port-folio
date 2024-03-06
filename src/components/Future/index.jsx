import React            from "react";
import Image            from "next/image";
import futureImg        from "public/future.png"
import classes          from "src/components/Future/Future.module.css";
import { SectionTitle } from "src/components/SectionTitle";

export const Future = () => {
  return (
    <>
      <section id="future" className={`${classes.bg} py-10 flex justify-center`}>
        <div className="md:flex flex-row ml-10 mt-10">
          <div className="md:flex flex-col items-baseline justify-center mr-5">
            <SectionTitle title="3年後にやりたいこと" lead="FUTURE" position="start" />
            <p className="mt-10 whitespace-normal">
              テキストテキストテキストテキストテキストテキストテキストテキスト<br />
              テキストテキストテキストテキストテキストテキストテキストテキスト<br />
              テキストテキストテキストテキストテキストテキストテキストテキスト<br />
              テキストテキストテキストテキストテキストテキストテキストテキスト<br />
              テキストテキスト
            </p>
          </div>
          <div className="mt-10">
            <Image src={futureImg} alt="future" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Future;