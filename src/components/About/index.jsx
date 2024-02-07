import React from "react";
import Image from "next/image";
import classes from "src/components/About/About.module.css"
import { SectionTitle } from "src/components/SectionTitle";
import { Card } from "src/components/Card";

export const About = () => {
  return (
    <>
      <SectionTitle title="私について" lead="ABOUT" position="center" />
      <section id="about" className={`${classes.bg} py-20`}>
        <div className={`flex items-baseline justify-center`}>
          <Card
          src       = "/about-1.png" 
          alt       = "趣味"
          width     = "184"
          height    = "157"
          className = "mx-5"
          />
          <Image src="/about-2.png" alt="食べ物" width="184" height="157" className="mx-5"/>
          <Image src="/about-3.png" alt="性格" width="184" height="157" className="mx-5"/>
        </div>
      </section>
    </>
  )
}

export default About;