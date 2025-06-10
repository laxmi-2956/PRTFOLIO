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
    title: "Vitacost Clone",
    description: "Fullstack clone of Vitacost website with product listings, cart, checkout, and admin dashboard.",
    link: "https://your-vitacost-clone.vercel.app"
  },
  {
    title: "Nike India UI Clone",
    description: "Frontend clone of Nike India using React and CSS with responsive design and animations.",
    link: "https://nike-clone-laxmi.vercel.app"
  },
  {
    title: "Blog App",
    description: "MERN Stack blog app with CRUD, JWT auth, and user role management.",
    link: "https://your-blog-app.vercel.app"
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
