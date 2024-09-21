import React from 'react';
import "./about.css";
import { SiSpring, SiJavascript, SiReact , SiMui , SiNextdotjs, SiSpringboot    } from "react-icons/si";
import { FaJava, FaHtml5, FaBootstrap, FaVuejs, FaGithub, FaNodeJs, FaDocker, FaPython      } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { AiOutlineConsoleSql } from "react-icons/ai";

export default function About() {
  return (
    <div className = 'container'>
    <div className='About'>
        <div className='desc'>Hi I'm Santosh Kumar Dannana, a dedicated Java Full Stack Developer with a passion for building scalable and efficient web applications. With expertise in Java, Spring Boot, and React, I've developed robust back-end systems and responsive front-end interfaces that enhance user experiences. I thrive on solving complex challenges and continuously learning to stay at the forefront of technology. I'm excited to contribute my skills and creativity to innovative projects that make a real impact.
        </div>
        <div className='Skills'>
            <a><FaHtml5  /></a>
            <a><IoLogoCss3 /></a>
            <a><SiJavascript /></a>
            <a><FaBootstrap /></a>
            <a><SiReact/></a>
            <a><FaNodeJs /></a>
            <a><SiMui  /></a>
            <a><SiNextdotjs /></a>
            <a><FaVuejs /></a>
            <a><FaPython /></a>
            
            <a><FaJava/></a>
            <a><SiSpring/></a>
            <a><SiSpringboot /></a>
            <a><IoLogoFirebase/></a>
            <a><AiOutlineConsoleSql /></a>
            <a><FaDocker /></a>
            <a><VscVscode/></a>
            <a><FaGithub /></a>
        </div>
    </div>
    </div>
  )
}
