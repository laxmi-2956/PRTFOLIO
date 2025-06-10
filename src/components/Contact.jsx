import React from "react";
import { motion } from "framer-motion";
import "animate.css";
import "./Contact.css";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="contact-section animate__animated animate__fadeInDownBig"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 style={{ fontSize: "45px" }}>Contact Me</h2>
      <div className="contact-boxes">
        <div className="contact-box">
          <a href="mailto:lp002665@gmail.com">
            <h4>Email</h4>
          </a>
        </div>
        <div className="contact-box">
          <a
            href="https://www.linkedin.com/in/laxmi-patil"
            target="_blank"
            rel="noreferrer"
          >
            <h4>LinkedIn</h4>
          </a>
        </div>
        <div className="contact-box">
          <a
            href="https://github.com/laxmi-2956"
            target="_blank"
            rel="noreferrer"
          >
            <h4>GitHub</h4>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
