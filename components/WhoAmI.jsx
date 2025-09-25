"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiServer, FiCpu, FiZap, FiDatabase, FiCloud } from "react-icons/fi";

function WhoAmI() {
  const techStack = [
    { name: "React", color: "text-cyan-400", level: 90 },
    { name: "Node.js", color: "text-emerald-400", level: 85 },
    { name: "MongoDB", color: "text-green-700", level: 80 },
    { name: "TypeScript", color: "text-blue-400", level: 75 },
    { name: "Next.js", color: "text-white", level: 88 },
    { name: "AWS", color: "text-orange-400", level: 70 }
  ];

  const floatingIcons = [
    { icon: FiCode, delay: 0, x: -20, y: 10 },
    { icon: FiServer, delay: 0.5, x: 20, y: -10 },
    { icon: FiDatabase, delay: 1, x: -15, y: -15 },
    { icon: FiZap, delay: 1.5, x: 15, y: 15 },
    { icon: FiCloud, delay: 2, x: -25, y: 5 },
    { icon: FiCpu, delay: 2.5, x: 25, y: -5 }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center bg-slate-900/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 border border-slate-800"
        >
          {/* Animated Tech Visualization Section */}
          <motion.div
            className="w-full md:w-2/5 relative order-1"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
          

      
            {/* Animated Code Snippet */}
            <motion.div
              className="mt-8 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50 font-mono text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex space-x-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <motion.pre
                className="text-slate-300 overflow-hidden"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {`const developer = {\n  passion: "coding",\n  stack: "MERN",\n  focus: "user experience",\n  status: "always learning"\n};`}
              </motion.pre>
                {/* Floating Icons */}
            <div className="relative h-64 md:h-80">
              {floatingIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: item.delay,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  animate={{
                    x: [0, item.x, 0],
                    y: [0, item.y, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 4,
                    delay: item.delay,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  style={{
                    left: `${20 + (index * 15) % 60}%`,
                    top: `${30 + (index * 10) % 40}%`
                  }}
                >
                  <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                    <item.icon className="w-6 h-6 text-purple-400" />
                  </div>
                </motion.div>
              ))}
            </div>
            </motion.div>
            
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full md:w-3/5 space-y-6   "
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
              {[FiCode, FiServer, FiCpu, FiZap, FiDatabase, FiCloud].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/40 transition-colors border border-slate-700/50"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-6 h-6 text-purple-400" />
                </motion.div>
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