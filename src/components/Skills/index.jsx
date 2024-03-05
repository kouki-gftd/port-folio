import React            from "react";
import Image            from "next/image";
import skillLogo        from "public/skill.png";
import classes          from "src/components/Skills/Skills.module.css";
import { SectionTitle } from "src/components/SectionTitle";
import { ProgressBar }  from "../ProgressBar/progressBar";

export const Skills = () => {
  return (
    <>
      <section id="skills" className={`${classes.bg} py-20 md:flex flex-row md:pl-20`}>
        <div className="md:hidden">
          <SectionTitle title="スキル" lead="SKILLS" position="left" />
        </div>
        <div className="order-1 md:ml-20 mt-10 pl-10 ">
          <Image src={skillLogo} alt="スキル" />
        </div>
        <div className="order-3 ml-20 ">
          <div className="order-2">
            <SectionTitle title="スキル" lead="SKILLS" position="left" hideOnMobile={true} />
          </div>
          <p className="mt-5 whitespace-normal">
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
          </p>
          <div className="my-5">
            <ProgressBar name="SKILLSKILL" percentWidth="w-2/5" percent="40%" />
            <ProgressBar name="SKILLSKILL" percentWidth="w-2/5" percent="40%" />
            <ProgressBar name="SKILLSKILL" percentWidth="w-2/5" percent="40%" />
            <ProgressBar name="SKILLSKILL" percentWidth="w-2/5" percent="40%" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;