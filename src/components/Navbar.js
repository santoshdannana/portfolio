import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './Navbar.css'; // Your custom styles

export default function Navbar({ activeSection }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ top: 0, zIndex: 1100, fontFamily: '"Fragile", monospace', background: 'transparent' }}>
        <Toolbar className="bar" sx={{ fontFamily: '"Fragile", monospace' }}>
          <div className="first">
            {/* You can add your logo or brand name here */}
          </div>
          <div className="second">
            {/* Add active class based on the activeSection prop */}
            <a href="#home" className={`item ${activeSection === 'home' ? 'active' : ''}`}>
              Home
            </a>
            <a href="#about" className={`item ${activeSection === 'about' ? 'active' : ''}`}>
              About
            </a>
            <a href="#experience" className={`item ${activeSection === 'experience' ? 'active' : ''}`}>
              Experience
            </a>
            <a href="#projects" className={`item ${activeSection === 'projects' ? 'active' : ''}`}>
              Projects
            </a>
            <a href="#contact" className={`item contact ${activeSection === 'contact' ? 'active' : ''}`}>
              Contact me
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
