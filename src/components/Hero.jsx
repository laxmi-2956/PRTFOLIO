import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="name-highlight">Laxmi Patil</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A Passionate <span className="highlight">Full Stack Web Developer</span> 🚀
          </motion.p>
        </div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {/* Direct path, no import */}
          <img src="https://media.istockphoto.com/id/2007398242/photo/businessman-uses-computer-with-pen-financial-graph-analysis-concepts-stock-market-information.webp?a=1&b=1&s=612x612&w=0&k=20&c=BVxvDOf3jtP8pstVtqLoc5Ggmr95fA_uY0DMCWegT9c=" alt="Laxmi Patil" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

// import React from "react";
// import "./Hero.css";

// const Hero = () => {
//   return (
//     <div
//       className="hero-section"
//       style={{
//         backgroundImage: `url('https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600')`, // directly used
//       }}
//     >
//       <div className="hero-content">
//         <p>Hi, my name is</p>
//         <h1>Diwakar Sharma</h1>
//         <h2>Full Stack Web Developer.</h2>
//         <button>View Work →</button>
//       </div>
//     </div>
//   );
// };

// export default Hero;


