import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Statistics from "../components/Statistics ";
import Services from "../components/Services";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Works from "../components/Works";
import LoadingOverlay from "../components/Loading";
import { ScrollProvider } from '../components/ScrollContext';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingOverlay />}
      {!isLoading && (
        <ScrollProvider>
          <Header />
          <Statistics />
          <Services />
          <Works/>
          <Resume />
          <Skills />
          <Contact />
          <Footer />
        </ScrollProvider>
      )}
    </>
  );
};

export default React.memo(Home);
