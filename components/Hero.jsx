"use client";
import React from "react";
import { motion } from "framer-motion";
import "@/styles/Hero.css";
import LoopingIcons from "./LoopingIcons";

function Hero() {
  return (
    <section className="hero-wrapper relative md:h-[70vh] flex items-center justify-center">
      {/* <div className="absolute  top-0 left-0 right-0 bottom-0 z-[2]">
        <LoopingIcons slice={10} animation={'moveRandom'} />
      </div> */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="hero-container glass z-[3]  min-h-screen  md:h-[80vh] relative flex flex-col items-center justify-center gap-1">

        <motion.div
          initial={{ translateY: -100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="hero-text mt-10 card-title flex flex-col gap-9 justify-center items-center"
        >
          <h1 className="text-[2rem] md:text-[4rem] font-bold text-slate-100">
            Malek Mostafa
          </h1>
          <p className="text-[1.3rem] text-center md:text-[1.5rem] text-slate-300">MERN Stack Developer</p>

        </motion.div>
        <motion.div
          initial={{ translateX: -100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="intro">
          <p className="text-[15px] text-center md:text-[18px] text-slate-100 mt-4 md:w-[50%] mx-auto   ">
            I'm a passionate and creative web developer with expertise in modern web technologies including React, Next.js, Node.js, and more. I love building responsive and user-friendly interfaces that provide great user experiences. Check out my projects to see my work!
          </p>
        </motion.div>

        <div className="hero-btns-container mt-1 flex justify-between md:gap-2 lg:flex-row flex-col gap-1 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="hero-btn-container md:mt-10 animate-pulse "
          >
            <a href="/Resume.pdf" download="/Resume.pdf">
              <button className="c-button w-80">Download Resume</button>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="hero-btn-container md:mt-10 "
          >
            <a href="#projects" >
              <button className="c-button w-80">Go to Projects</button>
            </a>
          </motion.div>


        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
