import React from 'react';
import { motion } from 'framer-motion';
import 'animate.css';
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  import './Projects.css';

const projects = [
  {
    title: "CoffeeClone - JavaScript E-commerce App",
    description: "A fully functional coffee shop website clone built using HTML, CSS, and vanilla JavaScript. Features include dynamic product listings, interactive cart management, and a clean responsive UI. Designed to simulate a real-world shopping experience without frameworks.",
    link: "https://vitecoast.vercel.app/"
  },
  {
    title: "ViteCost-Fullstack website",
    description: "A full-fledged e-commerce web application inspired by Vitacost, built using React.js for the frontend and Node.js with Express and MongoDB for the backend. Features include user authentication, product listings, cart functionality, checkout flow, and admin product management. Fully responsive design with custom CSS and smooth animations.",
    link: "https://new-vitecost-8.netlify.app/"
  },
  {
    title: "Blog App",
    description: "MERN Stack blog app with CRUD, JWT auth, and user role management.",
    link: "https://github.com/laxmi-2956/MERN-PROJECT"
  }
];

const Projects = () => {
  return (
    <motion.section id="projects" className="section projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 style={{fontSize : "45px"}}>Projects</h2>
      <div className="project-cards  animate__animated animate__backInRight">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
