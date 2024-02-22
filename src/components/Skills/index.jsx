import React            from "react";
import Image            from "next/image";
import skillLogo        from "public/skill.png"
import classes          from "src/components/Skills/Skills.module.css"
import { SectionTitle } from "src/components/SectionTitle";
import { ProgressBar }  from "../ProgressBar/progressBar";

export const Skills = () => {
  return (
    <>
      <section id="skills" className={`${classes.bg} py-20 flex justify-center`}>
        <Image src={skillLogo} alt="スキル" className="mx-10"/>
        <div className="flex flex-col">
          <SectionTitle title="スキル" lead="SKILLS" position="start" />
          <p className="m-5 whitespace-nowrap">
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
          </p>
          <ProgressBar name="SKILLSKILL" percentWidth="w-2/5" percent="40%" />
          <ProgressBar name="SKILLSKILL" percentWidth="w-2/5" percent="40%" />
          <ProgressBar name="SKILLSKILL" percentWidth="w-2/5" percent="40%" />
          <ProgressBar name="SKILLSKILL" percentWidth="w-2/5" percent="40%" />
        </div>
      </section>
    </>
  );
};

export default Skills;