'use client';
import React, { useEffect, useState } from 'react';
import FrontProject from './FrontProjects';
import FullProjects from './FullProjects';
import { motion } from 'framer-motion';
import { RiArrowGoBackFill } from "react-icons/ri";
import { AnimatedSubscribeButton } from './magicui/animated-subscribe-button';
import { ChevronRightIcon } from 'lucide-react';
import { Button } from './ui/button';

function Projects() {
  const [choice, setChoice] = useState(null);

  const handleChoice = (choice) => {
    setChoice(choice);
  };

  useEffect(() => {
    console.log(choice);
  }, [choice]);

  return (
    <section id="projects" className="relative bg-white py-12 px-6 lg:px-12 min-h-[50vh] flex flex-col items-center">
      {/* Go Back Button */}
      {choice !== null && (
        <div className="absolute top-4 left-4">
          <Button
            className="bg-black text-white hover:bg-gray-800 transition-colors duration-300"
            onClick={() => setChoice(null)}
          >
            Go Back <RiArrowGoBackFill className="ml-2" />
          </Button>
        </div>
      )}

      {/* Main Content */}
      {choice == null ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Projects</h1>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl text-gray-900 font-semibold mb-2">What Would You Like To See?</h2>
            <p className="text-lg text-gray-600">Click to show the projects</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div onClick={() => handleChoice("full-stack")}
            >

              <AnimatedSubscribeButton
                onClick={() => handleChoice("full-stack")}
                buttonColor="#FFD700"
                buttonTextColor="black"
                initialText={
                  <span className="group inline-flex items-center text-lg md:text-xl font-medium">
                    Full Stack Projects{" "}
                    <ChevronRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                }
                changeText={
                  <span className="group inline-flex items-center text-lg md:text-xl font-medium">
                    Full Stack Projects{" "}
                    <ChevronRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                }
              />
            </div>
            <div onClick={() => handleChoice("front-end")}
            >

              <AnimatedSubscribeButton
                buttonColor="black"
                buttonTextColor="white"
                initialText={
                  <span className="group inline-flex items-center text-lg md:text-xl font-medium">
                    Front-End Projects{" "}
                    <ChevronRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                }
                changeText={
                  <span className="group inline-flex items-center text-lg md:text-xl font-medium">
                    Front-End Projects{" "}
                    <ChevronRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                }
              />
            </div>
          </div>
        </motion.div>
      ) : choice === "front-end" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="flex justify-center items-center mt-8"
        >
          <FrontProject styles="card-front" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="flex justify-center items-center mt-8"
        >
          <FullProjects styles="card-full" />
        </motion.div>
      )}
      <div className="divider my-8"></div>
    </section>
  );
}

export default Projects;
