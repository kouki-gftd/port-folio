import React from "react";
import Image from "next/image";
import skillLogo from "public/skill.png"
import classes from "src/components/Skills/Skills.module.css"
import { SectionTitle } from "src/components/SectionTitle";

export const Skills = () => {
  return (
    <>
      <section id="skills" className={`${classes.bg} py-20 flex`}>
        <Image src={skillLogo} alt="スキル" />
        <SectionTitle title="スキル" lead="SKILLS" position="start" />
      </section>
    </>
  );
};

export default Skills;