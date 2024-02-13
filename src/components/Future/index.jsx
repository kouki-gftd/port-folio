import React from "react";
import Image from "next/image";
import classes from "src/components/Future/Future.module.css";
import { SectionTitle } from "src/components/SectionTitle";

const ITEMS = [{
  text: `テキストテキストテキストテキスト`
}];

export const Future = () => {
  return (
    <>
      <section id="future" className={`${classes.bg} py-20 pr-20 flex justify-end`}>
      <SectionTitle title="3年後にやりたいこと" lead="FUTURE" position="start" />
        <Image src="/future.png" alt="" width="480" height="251" />
      </section>
    </>
  )
}

export default Future;