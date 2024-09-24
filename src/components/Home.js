import React, { useState, useEffect, useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Home.css";

const texts = ["Frontend Developer.", "Backend Developer.", "Full Stack Developer."];

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentText, setCurrentText] = useState(texts[0]);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [speed, setSpeed] = useState(100);
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const typeEffect = () => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, index));
        setIndex(index - 1);
        if (index === 0) {
          setIsDeleting(false);
          setIndex(0);
          setTextIndex((textIndex + 1) % texts.length);
          setCurrentText(texts[textIndex]);
          setSpeed(200); // Pause before starting to type the next text
        }
      } else {
        setDisplayText(currentText.substring(0, index + 1));
        setIndex(index + 1);
        if (index === currentText.length) {
          setIsDeleting(true);
          setSpeed(100); // Speed of deleting
        }
      }
    };

    const timer = setInterval(typeEffect, speed);
    return () => clearInterval(timer);
  }, [index, isDeleting, currentText, speed, textIndex]);

  useEffect(() => {
    if (textRef.current && cursorRef.current) {
      const textWidth = textRef.current.offsetWidth;
      cursorRef.current.style.width = `${textWidth}px`; // Ensure cursor width matches text
    }
  }, [displayText]);

  return (
    <div className='container'>
    <div className='Main'>
      <div className='box1'>
        <div className='icons'>
          <a href="https://github.com/santoshdannana" target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize="large" /></a>
          <a href="https://www.linkedin.com/in/santosh-kumar-4972791a2" target="_blank" rel="noopener noreferrer"><LinkedInIcon fontSize="large" /></a>
          <a href="https://www.instagram.com/_santoshhhhh_/" target="_blank" rel="noopener noreferrer"><InstagramIcon fontSize="large" /></a>
        </div>
      </div>
      <div className='box2'>
        <div className='hi'>Hy! This is</div>
        <div className='name'>
          Santosh Kumar
        </div>
        <div className='title'>
          <span>I am a <span ref={textRef} className='animated-text'>{displayText}</span></span>
          <span className='cursor' ref={cursorRef}>|</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
