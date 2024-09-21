import React, { useEffect, useState } from 'react';
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
  const isMobile = useMobileDetect(); // Detect if user is on mobile

  return (
    <div>
      {/* Background that stays constant */}
      <StarryBackground />

      {/* Show a full-screen block message if on mobile */}
      {isMobile ? (
        <div className="mobile-blocker">
          <p>This site is best viewed on a desktop. Please visit from a larger screen.</p>
        </div>
      ) : (
        <>
          {/* Navbar */}
          <Navbar />

          {/* Continuous Scrolling Layout */}
          <div className="scroll-container">
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
        </>
      )}
    </div>
  );
}

export default App;
