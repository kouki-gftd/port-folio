import React from "react";
import { SectionTitle } from "src/components/SectionTitle";
import { Card } from "src/components/Card";

const ITEMS = [{
  text: `テキストテキストテキストテキスト
テキストテキストテキストテキスト
テキストテキストテキストテキスト
テキストテキストテキストテキスト`
}];

export const Values = () => {
  return (
    <>
      <SectionTitle title="価値観" lead="VALUES" position="center" />
      <section id="values" className="py-20">
        <div className={`flex items-baseline justify-center`}>
          <Card
            src="/value1.png"
            alt="ロケット"
            width="200"
            height="200"
            cardTitle="価値観1"
            text={ITEMS.map((item) => item.text)}
          />
          <Card
            src="/value2.png"
            alt="太陽"
            width="200"
            height="200"
            cardTitle="価値観2"
            text={ITEMS.map((item) => item.text)}
          />
          <Card
            src="/value3.png"
            alt="ロケット"
            width="200"
            height="200"
            cardTitle="価値観3"
            text={ITEMS.map((item) => item.text)}
          />
        </div>
      </section>
    </>
  )
}

export default Values;