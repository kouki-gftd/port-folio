import React    from "react";
import PageHead from "../components/PageHead";
import Header   from "../components/Header";
import Hero     from "../components/Hero";
import About    from "../components/About";
import Skills   from "../components/Skills";
import Values   from "../components/Values";
import Future   from "../components/Future";
import Footer   from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";

const Home = () => {
  return (
    <>
      <PageHead />
      <Header />
      <Hero/>
      <About />
      <Skills />
      <Values />
      <Future />
      <Footer />
      <Analytics/>
    </>
  )
}

export default Home;