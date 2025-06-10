import React from 'react';
import { motion } from 'framer-motion';
import 'animate.css';
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>

const About = () => {
  return (
    <motion.section id="about" className="section about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className='animate__animated animate__backInLeft' style={{fontSize : "45px"}}>About Me</h2>
      <p className='animate__animated animate__backInLeft'>I’m a self-motivated fullstack developer with expertise in frontend (React.js, HTML, CSS, JavaScript) and backend (Node.js, Express, MongoDB). I’ve built dynamic and responsive web apps, REST APIs, and authentication flows using JWT and bcrypt.</p>
    </motion.section>
  );
};

export default About;
