import React, { useEffect, useState, useRef } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from './components/Experience';
import StarryBackground from "./components/StarryBackground";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import useMobileDetect from './hooks/useMobileDetect'; // Custom hook to detect mobile
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useMobileDetect();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = () => {
    const sections = [
      { id: 'home', ref: homeRef },
      { id: 'about', ref: aboutRef },
      { id: 'experience', ref: experienceRef },
      { id: 'projects', ref: projectsRef },
      { id: 'contact', ref: contactRef },
    ];
    const scrolledPosition = window.scrollY + window.innerHeight / 2;

    for (let section of sections) {
      const el = section.ref.current;
      if (el.offsetTop <= scrolledPosition && el.offsetTop + el.offsetHeight > scrolledPosition) {
        if (activeSection !== section.id) {
          setActiveSection(section.id);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <div>
      <StarryBackground />
      {isMobile ? (
        <div className="mobile-blocker">
          <p>This site is best viewed on a desktop. Please visit from a larger screen.</p>
        </div>
      ) : (
        <>
          <Navbar activeSection={activeSection} />
          <div className="scroll-container">
            <section id="home" className="section" ref={homeRef}>
              <Home />
            </section>
            <section id="about" className="section" ref={aboutRef}>
              <About />
            </section>
            <section id="experience" className="section" ref={experienceRef}>
              <Experience />
            </section>
            <section id="projects" className="section" ref={projectsRef}>
              <Projects />
            </section>
            <section id="contact" className="section" ref={contactRef}>
              <Contact />
            </section>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
