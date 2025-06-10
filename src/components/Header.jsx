// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { motion } from "framer-motion";
// import "./Header.css";

// const Header = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const toggleMenu = () => setMobileMenuOpen(prev => !prev);
//   const closeMenu = () => setMobileMenuOpen(false);

//   return (
//     <motion.header
//       className="header"
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <a href="#home" className="logo">YourLogo</a>

//       <nav className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
//         <a href="#about" onClick={closeMenu}>About</a>
//         <a href="#skills" onClick={closeMenu}>Skills</a>
//         <a href="#projects" onClick={closeMenu}>Projects</a>
//         <a href="#contact" onClick={closeMenu}>Contact</a>
//       </nav>

//       <button className="menu-icon" onClick={toggleMenu}>
//         {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//       </button>
//     </motion.header>
//   );
// };

// export default Header;



import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="logo">LAXMI.</div>

      <nav className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>

      <div className="menu-icon" onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </motion.header>
  );
};

export default Header;
