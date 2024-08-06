import React, { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const servicesRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const resumeRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'services':
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'works':
        worksRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'resume':
        resumeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skills':
        skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <ScrollContext.Provider
      value={{
        servicesRef,
        worksRef,
        contactRef,
        skillsRef,
        resumeRef,
        scrollToSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
