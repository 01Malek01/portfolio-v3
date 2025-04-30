"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiServer, FiCpu } from "react-icons/fi";
import WaiAnimations from "./WaiAnimations";

function WhoAmI() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 items-center bg-slate-900/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 border border-slate-800"
        >
          {/* Animation Section */}
          <div className="w-full md:w-1/2">
            <WaiAnimations />
          </div>

          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2 space-y-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Title */}
            <motion.header
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </h2>
            </motion.header>

            {/* First paragraph */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              As a passionate full-stack developer with expertise in modern web technologies, I specialize in crafting robust solutions with{" "}
              <span className="text-purple-400 font-semibold">React</span>,{" "}
              <span className="text-emerald-400 font-semibold">Node.js</span>, and{" "}
              <span className="text-cyan-400 font-semibold">MongoDB</span>. My focus lies in creating responsive, user-centric interfaces powered by scalable backend architectures.
            </motion.p>

            {/* Icons */}
            <motion.div
              className="flex flex-wrap gap-4 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {[FiCode, FiServer, FiCpu].map((Icon, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/40 transition-colors"
                >
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
              ))}
            </motion.div>

            {/* Second paragraph */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-slate-300 mt-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              I thrive in collaborative environments where I can contribute my technical expertise while continuously learning from peers. Committed to staying at the forefront of web development, I deliver solutions that combine cutting-edge technology with optimal performance.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhoAmI;
