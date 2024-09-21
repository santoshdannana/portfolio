import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from './components/Experience';
import StarryBackground from "./components/StarryBackground";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home'); // Track active section

  // ScrollSpy logic: update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'home';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 50) { // Trigger when section is near top
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Background that stays constant */}
      <StarryBackground />
      
      {/* Navbar */}
      <Navbar activeSection={activeSection} /> {/* Pass the active section as a prop */}

      {/* Continuous Scrolling Layout */}
      <div className="scroll-container">
        {/* Each section is rendered in sequence */}
        <section id="home" className="section">
          <Home />
        </section>
        
        <section id="about" className="section">
          <About />
        </section>
        
        <section id="experience" className="section">
          <Experience />
        </section>
        
        <section id="projects" className="section">
          <Projects />
        </section>
        
        <section id="contact" className="section">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
