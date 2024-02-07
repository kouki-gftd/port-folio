import React from "react";
import Image from "next/image";
import classes from "src/components/Skills/Skills.module.css"
import { SectionTitle } from "src/components/SectionTitle";

export const Skills = () => {
  return (
    <>
      <section id="skills" className={`${classes.bg} py-20`}>
        <Image src="/skill.png" alt="スキル" width="532" height="372" />
        <SectionTitle title="スキル" lead="SKILLS" position="start" />
      </section>
    </>
  );
};

export default Skills;