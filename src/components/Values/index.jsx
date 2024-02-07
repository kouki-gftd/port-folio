import React from "react";
import Image from "next/image";
import { SectionTitle } from "src/components/SectionTitle";

export const Values = () => {
  return (
    <>
      <SectionTitle title="価値観" lead="VALUES" position="center"/>
      <section id="values" className="py-20">
      <div className={`flex items-baseline justify-center`}>
        <Image src="/value1.png" alt="ロケット" width="200" height="200" className="mx-5"/>
        <Image src="/value2.png" alt="太陽" width="200" height="200" className="mx-5"/>
        <Image src="/value3.png" alt="電球" width="200" height="200" className="mx-5"/>
        </div>
      </section>
    </>
  )
}

export default Values;