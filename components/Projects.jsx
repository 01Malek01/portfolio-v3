'use client';
import React, { useEffect, useState } from 'react';
import FrontProject from './FrontProjects';
import FullProjects from './FullProjects';
import { motion } from 'framer-motion';
import { RiArrowGoBackFill } from "react-icons/ri";
import { FiCode, FiServer } from "react-icons/fi";
import { ChevronRightIcon } from 'lucide-react';

function Projects() {
  const [choice, setChoice] = useState(null);

  const handleChoice = (choice) => {
    setChoice(choice);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="projects"
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 md:px-8 min-h-screen flex flex-col items-center"
    >
      {/* Go Back Button */}
      {choice !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-6 left-6 z-20"
        >
          <button
            onClick={() => setChoice(null)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-400/30 bg-slate-900/30 backdrop-blur-sm text-purple-400 hover:bg-purple-400/10 transition-colors"
          >
            <RiArrowGoBackFill className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </button>
        </motion.div>
      )}

      {/* Main Content */}
      {choice == null ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center"
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8"
          >
            Project Portfolio
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl text-slate-200 font-medium mb-4">
              Explore My Development Work
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Select a category to view detailed case studies and live demonstrations
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="flex flex-col md:flex-row gap-6 md:gap-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-2xl bg-slate-900/30 backdrop-blur-sm border border-slate-800 cursor-pointer"
              onClick={() => handleChoice("full-stack")}
            >
              <div className="p-8 md:p-12 flex flex-col items-center">
                <FiServer className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-semibold text-slate-200 mb-4">
                  Full Stack Solutions
                </h3>
                <p className="text-slate-400 text-center mb-6">
                  End-to-end applications with modern architecture
                </p>
                <div className="flex items-center text-purple-400 group-hover:text-blue-400 transition-colors">
                  <span className="mr-2">View Projects</span>
                  <ChevronRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-2xl bg-slate-900/30 backdrop-blur-sm border border-slate-800 cursor-pointer"
              onClick={() => handleChoice("front-end")}
            >
              <div className="p-8 md:p-12 flex flex-col items-center">
                <FiCode className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-semibold text-slate-200 mb-4">
                  Front-End Experiences
                </h3>
                <p className="text-slate-400 text-center mb-6">
                  Interactive interfaces with cutting-edge UX
                </p>
                <div className="flex items-center text-blue-400 group-hover:text-purple-400 transition-colors">
                  <span className="mr-2">View Projects</span>
                  <ChevronRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : choice === "front-end" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full mt-8"
        >
          <FrontProject />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full mt-8"
        >
          <FullProjects />
        </motion.div>
      )}

      <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-16" />
    </motion.section>
  );
}

export default Projects;