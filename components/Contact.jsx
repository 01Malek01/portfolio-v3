'use client';
import React, { forwardRef, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const Circle = forwardRef(({ className, children }, ref) => (
  <div
    ref={ref}
    className={cn(
      "z-10 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/30 backdrop-blur-sm",
      "transition-transform hover:scale-110 hover:bg-slate-800/40",
      className
    )}
  >
    {children}
  </div>
));
Circle.displayName = "Circle";

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center justify-center min-h-[600px] w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
            Reach out through any of these channels for collaborations or opportunities.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="group relative w-full max-w-xs sm:max-w-sm p-6 rounded-2xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm overflow-hidden"
          >
            <div className="flex items-center gap-4">
              <Circle>
                <FaWhatsapp className="text-2xl sm:text-3xl text-green-400" />
              </Circle>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-200">WhatsApp</h3>
                <p className="text-slate-400 mt-1 text-sm sm:text-base">+20 112 548 5384</p>
              </div>
            </div>
            <a
              href="https://wa.me/201125485384"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
            >
              <div className="absolute bottom-4 right-4 text-blue-400 flex items-center gap-1">
                <span className="text-xs sm:text-sm">Message</span>
                <FiArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="group relative w-full max-w-xs sm:max-w-sm p-6 rounded-2xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm overflow-hidden"
          >
            <div className="flex items-center gap-4">
              <Circle>
                <FaLinkedin className="text-2xl sm:text-3xl text-blue-400" />
              </Circle>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-200">LinkedIn</h3>
                <p className="text-slate-400 mt-1 text-sm sm:text-base">Malek Mostafa Salah</p>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/malek-mostafa-web-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
            >
              <div className="absolute bottom-4 right-4 text-purple-400 flex items-center gap-1">
                <span className="text-xs sm:text-sm">Connect</span>
                <FiArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="group relative w-full max-w-xs sm:max-w-sm p-6 rounded-2xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm overflow-hidden"
          >
            <div className="flex items-center gap-4">
              <Circle>
                <FaEnvelope className="text-2xl sm:text-3xl text-purple-400" />
              </Circle>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-200">Email</h3>
                <p className="text-slate-400 mt-1 text-sm sm:text-base">malekmostafa0051@gmail.com</p>
              </div>
            </div>
            <a
              href="mailto:malekmostafa0051@gmail.com"
              className="absolute inset-0"
            >
              <div className="absolute bottom-4 right-4 text-blue-400 flex items-center gap-1">
                <span className="text-xs sm:text-sm">Contact</span>
                <FiArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
