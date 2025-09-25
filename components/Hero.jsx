"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WordPullUp from "./magicui/word-pull-up";
import { FiCode, FiServer, FiCpu, FiDownload, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 text-center w-full"
      >
        {/* Icons */}
        <div className="mb-8  justify-center gap-4 flex-wrap hidden lg:flex">
          {[FiCode, FiServer, FiCpu].map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.2 + 0.5 }}
              className="p-4 rounded-full bg-slate-700/30 backdrop-blur-sm hover:bg-slate-600/40 transition-colors"
            >
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
            </motion.div>
          ))}
        </div>

        {/* Name */}
        <WordPullUp
          words={"Malek Mostafa"}
          className="text-3xl sm:text-4xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
        />

        {/* Subtitle */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap justify-center items-center gap-4 mb-8"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent md:w-24 w-0" />
          <span className="text-lg sm:text-xl text-purple-200 font-medium">Full-Stack Architect</span>
          <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent md:w-24 w-0" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed px-2"
        >
          Crafting scalable solutions with{" "}
          <span className="text-cyan-400 font-semibold">React</span>,{" "}
          <span className="text-emerald-400 font-semibold">Node.js</span>, and{" "}
          <span className="text-green-700 font-semibold">MongoDB</span>.{" "}
          Specializing in high-performance web applications with modern architecture.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="flex flex-col md:flex-row justify-center gap-6"
        >
          <a
            href="/malek-mostafa-mern-dev.pdf"
            download
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all group"
          >
            <FiDownload className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">Download Resume</span>
          </a>

          <a
            href="#projects"
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg border-2 border-purple-400 hover:bg-purple-400/10 transition-colors group"
          >
            <span className="text-purple-400 font-semibold">View Projects</span>
            <FiArrowRight className="w-5 h-5 text-purple-400 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

     
      </motion.div>

      {/* Scroll Down Button */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center"
      >
        <Link href="#who-am-i" className="text-purple-400 hover:text-purple-500 transition-colors">
          <div className="animate-bounce w-6 h-6 border-4 border-purple-400 rounded-full" />
        </Link>
      </motion.div>
    </section>
  );
}

export default Hero;
