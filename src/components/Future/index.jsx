import React from "react";
import Image from "next/image";
import classes from "src/components/Future/Future.module.css";
import { SectionTitle } from "src/components/SectionTitle";

export const Future = () => {
  return (
    <>
      <SectionTitle title="3年後にやりたいこと" lead="FUTURE" position="start" />
      <section id="future" className={`${classes.bg} py-20`}>
        <Image src="/future.png" alt="" width="480" height="251" />
      </section>
    </>
  )
}

export default Future;