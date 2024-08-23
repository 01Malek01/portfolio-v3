"use client";
import React from "react";
import { motion } from "framer-motion";
import "@/styles/Hero.css";
import LoopingIcons from "./LoopingIcons";

function Hero() {
  return (
    <section className="hero-wrapper relative md:h-[70vh] flex items-center justify-center bg-gradient-to-b from-blue-900 to-purple-900">
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 z-[2]">
        <LoopingIcons slice={10} animation={'moveRandom'} />
      </div> */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="hero-container glass z-[3] min-h-screen md:h-[80vh] relative flex flex-col items-center justify-center gap-4 px-4 py-6 md:py-12"
      >
        <motion.div
          initial={{ translateY: -100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="hero-text mt-10 flex flex-col gap-4 justify-center items-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Malek Mostafa
          </h1>
          <p className="text-lg md:text-2xl text-center text-slate-300">
            MERN Stack Developer
          </p>
        </motion.div>

        <motion.div
          initial={{ translateX: -100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="intro px-4 md:px-0"
        >
          <p className="text-sm md:text-base text-center text-slate-100 mt-4 md:w-[60%] mx-auto leading-relaxed">
            I'm a passionate and creative web developer with expertise in modern web technologies including React, Next.js, Node.js, and more. I love building responsive and user-friendly interfaces that provide great user experiences. Check out my projects to see my work!
          </p>
        </motion.div>

        <div className="hero-btns-container mt-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
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
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
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
