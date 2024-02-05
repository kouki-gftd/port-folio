import React from "react";
import classes from "src/components/About/About.module.css"
import { SectionTitle } from "../SectionTitle";

export const About = () => {
  return (
    <>
      <SectionTitle title= "私について" lead="ABOUT"/>
      <section id="about" className="bg-bg-about-pc bg-no-repeat bg-cover py-20"></section>
    </>
  )
}

export default About;