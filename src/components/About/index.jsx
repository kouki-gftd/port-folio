import React from "react";
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
            cardTitle = "趣味"
            text      = "テキスト"
          />
          <Card
            src       = "/about-2.png"
            alt       = "食べ物"
            width     = "184"
            height    = "157"
            cardTitle = "好きな食べ物"
            text      = "テキスト"
          />
          <Card
            src       = "/about-3.png"
            alt       = "性格"
            width     = "184"
            height    = "157"
            cardTitle = "性格"
            text      = "テキスト"
          />
        </div>
      </section>
    </>
  )
}

export default About;