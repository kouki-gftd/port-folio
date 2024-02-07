import React   from "react";
import Header  from "../components/Header";
import Hero    from "../components/Hero";
import About   from "../components/About";
import Skills  from "../components/Skills";
import Values  from "../components/Values";
import Future  from "../components/Future";

const Home = () => {
  return (
    <> 
      <Header />
      <Hero/>
      <About />
      <Skills />
      <Values />
      <Future />
    </>
  )
}

export default Home;