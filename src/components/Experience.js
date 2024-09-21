import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Avatar,
  Grid
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SLU from "../assets/slu-primary-white-rgb.png";
import COG from "../assets/cognizant.svg";
import NTT from "../assets/NTT.jpg";
import './Experience.css';

const experiences = [
  {
    company: 'Saint Louis University',
    role: 'Full Stack Developer',
    period: 'February 2024 to May 2024',
    logo: SLU,
    description: "As a Full-Stack Developer, I was involved in developing and maintaining a full-stack application using Java, Spring Boot, and React. My work involved enhancing back-end services with Spring Boot to create secure, scalable, and efficient APIs. I implemented key security measures and optimized database interactions, improving the application's performance and reliability. On the front end, I utilized React to build dynamic, responsive user interfaces, focusing on performance optimization through techniques like lazy loading and state management.",
  },
  {
    company: 'Saint Louis University',
    role: 'React Developer',
    period: 'September 2023 to December 2023',
    logo: SLU,
    description: "As a React Developer, I focused on developing dynamic, responsive user interfaces with React, ensuring performance optimization through techniques like lazy loading and state management.",
  },
  {
    company: 'Cognizant',
    role: 'Junior Full Stack Developer',
    period: 'August 2022 to December 2022',
    logo: COG,
    description: "As a Junior Full Stack Developer, I worked on developing and maintaining applications using Java, Spring Boot, and React, optimizing both back-end and front-end functionalities.",
  },
  {
    company: 'Cognizant',
    role: 'Full Stack Developer Intern',
    period: 'February 2022 to July 2022',
    logo: COG,
    description: "As a Full Stack Developer Intern, I contributed to various development tasks using Java, Spring Boot, and React, focusing on both back-end and front-end development.",
  },
  {
    company: 'NTT Data',
    role: 'Software Development Intern',
    period: 'February 2021 to December 2021',
    logo: NTT,
    description: "As a Software Development Intern, I gained experience in developing full-stack applications, working with Java, Spring Boot, and React, and assisting in both back-end and front-end tasks.",
  },
];

const Experience = () => {
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = (panel) => {
    setExpanded(panel);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  return (
    <div className='section-container'>
    <div className='Container'>
      {experiences.map((exp, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onMouseEnter={() => handleMouseEnter(`panel${index}`)}
          onMouseLeave={handleMouseLeave}
          style={{ borderRadius: '4px' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            style={{ color: '#370544' }}
          >
            <Grid container alignItems="center">
              <Grid item>
                <Avatar alt={`${exp.company} logo`} src={exp.logo} style={{  marginRight: 16 }} />
              </Grid>
              <Grid item>
                <Typography variant="h6" style={{ fontSize: '1.25rem', fontFamily: 'monospace', fontWeight: 'bold' }}>
                  {exp.role}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{ fontSize: '0.875rem', fontStyle: 'italic' }}>
                  {exp.company} &bull; {exp.period}
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ fontSize: '1rem' }}>
              {exp.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
    </div>
  );
};

export default Experience;
