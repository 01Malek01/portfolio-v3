'use client';
import React, { useState } from 'react';
import FrontProject from './FrontProjects';
import FullProjects from './FullProjects';
import { RiArrowGoBackFill } from "react-icons/ri";
import { FiCode, FiServer } from "react-icons/fi";

function ChevronRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform group-hover:translate-x-1">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}

function Projects() {
  const [choice, setChoice] = useState(null);

  const handleChoice = (choice) => {
    setChoice(choice);
  };

  return (
    <section
      id="projects"
      className="relative py-20 px-6 md:px-8 lg:px-12 min-h-screen flex flex-col items-center"
    >
      {choice !== null && (
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={() => setChoice(null)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card text-purple-400 hover:bg-white/[0.08] transition-colors"
          >
            <RiArrowGoBackFill className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </button>
        </div>
      )}

      {choice == null ? (
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">
            Project Portfolio
          </h1>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl text-slate-200 font-medium mb-4">
              Explore My Development Work
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Select a category to view detailed case studies and live demonstrations
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div
              className="group relative overflow-hidden rounded-2xl glass-card cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => handleChoice("full-stack")}
            >
              <div className="p-8 md:p-12 flex flex-col items-center">
                <FiServer className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-semibold text-apple-50 mb-4">
                  Full Stack Solutions
                </h3>
                <p className="text-apple-300 text-center mb-6">
                  End-to-end applications with modern architecture
                </p>
                <div className="flex items-center text-purple-400 group-hover:text-blue-400 transition-colors">
                  <span className="mr-2">View Projects</span>
                  <ChevronRight />
                </div>
              </div>
            </div>

            <div
              className="group relative overflow-hidden rounded-2xl glass-card cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => handleChoice("front-end")}
            >
              <div className="p-8 md:p-12 flex flex-col items-center">
                <FiCode className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-semibold text-apple-50 mb-4">
                  Front-End Experiences
                </h3>
                <p className="text-apple-300 text-center mb-6">
                  Interactive interfaces with cutting-edge UX
                </p>
                <div className="flex items-center text-blue-400 group-hover:text-purple-400 transition-colors">
                  <span className="mr-2">View Projects</span>
                  <ChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : choice === "front-end" ? (
        <div className="w-full mt-8">
          <FrontProject />
        </div>
      ) : (
        <div className="w-full mt-8">
          <FullProjects />
        </div>
      )}

      <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-16" />
    </section>
  );
}

export default Projects;
