import React            from "react";
import Image            from "next/image";
import futureImg        from "public/future.png"
import classes          from "src/components/Future/Future.module.css";
import { SectionTitle } from "src/components/SectionTitle";

export const Future = () => {
  return (
    <>
      <section id="future" className={`${classes.bg} py-20 flex justify-center`}>
        <div className="md:flex flex-row ml-20 mt-10">
          <div className="flex flex-col items-baseline justify-center">
            <SectionTitle title="3年後にやりたいこと" lead="FUTURE" position="start" />
            <p className="mt-10 mr-10 whitespace-normal">
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
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