import React from "react";
import Header from "../components/Header";
import Statistics from "../components/Statistics ";
import Services from "../components/Services";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Works from "../components/Works";

const Home = () => {
  return (
    <>
      <Header />
      <Statistics />
      <Services />
      <Works/>
      <Resume />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default React.memo(Home);
