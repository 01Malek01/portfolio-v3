"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "@/styles/Hero.css";
import WordPullUp from "./magicui/word-pull-up";
import { useCallback } from "react/cjs/react.production.min";

function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = useCallback(() => {
      setIsMobile(window.innerWidth <= 768);
    }, []);

    // Check window width when component mounts
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <section className="hero-wrapper relative md:h-[70vh] flex items-center justify-center bg-gradient-to-b from-blue-900 to-purple-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="hero-container glass z-[3] min-h-screen md:h-[80vh] relative flex flex-col items-center justify-center gap-4 px-4 py-6 md:py-12"
      >
        <motion.div
          key={isMobile ? "mobile" : "desktop"} // Add key based on isMobile state
          initial={{ scale: isMobile ? 1.2 : 2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
          className="hero-text mt-10 flex flex-col gap-4 justify-center items-center"
        >
          <WordPullUp
            words={"Malek Mostafa"}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 2.5 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-slate-300"
          >
            MERN Stack Developer
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ translateX: -100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 3.5 }}
          viewport={{ once: true }}
          className="intro px-4 md:px-0"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-slate-100 mt-4 md:w-[60%] mx-auto leading-relaxed">
            I'm a passionate and creative web developer with expertise in modern web technologies including React, Next.js, Node.js, and more. I love building responsive and user-friendly interfaces that provide great user experiences. Check out my projects to see my work!
          </p>
        </motion.div>

        <div className="hero-btns-container mt-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
            viewport={{ once: true }}
            className="hero-btn-container md:mt-10"
          >
            <a href="/Resume.pdf" download="/Resume.pdf">
              <button className="c-button bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                Download Resume
              </button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.9 }}
            viewport={{ once: true }}
            className="hero-btn-container md:mt-10"
          >
            <a href="#projects">
              <button className="c-button bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                Go to Projects
              </button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
