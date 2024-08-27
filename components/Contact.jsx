'use client';

import React, { forwardRef, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

// Circle Component
const Circle = forwardRef(({ className, children }, ref) => (
  <div
    ref={ref}
    className={cn(
      "z-10 flex h-24 w-24 items-center justify-center rounded-full border-2 bg-white p-3 shadow-xl transition-transform transform hover:scale-110",
      className
    )}
  >
    {children}
  </div>
));

Circle.displayName = "Circle";

// Contact Component
export function Contact() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Update screen size state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial state and add resize event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-10 md:shadow-2xl"
      ref={containerRef}
    >
      {/* Central Circle */}
      <div className="relative flex items-center justify-center">
        <div className="p-2 m-3 z-20">
          <span className="text-4xl font-extrabold text-white drop-shadow-lg ">
            Contact Me
          </span>
        </div>

        {/* Three Circles positioned around the central one */}
        <motion.div
          initial={{ opacity: 0, top: "0" }}
          whileInView={{ opacity: 1, top: `${isMobile ? '-8rem' : '-10rem'}` }}
          transition={{ duration: 1.5 }}
          className="absolute md:-top-40 left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          <a
            href="https://wa.me/201125485384"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center justify-center">
              <span className="font-extrabold text-white drop-shadow-lg text-center">
                01125485384
              </span>
              <Circle>
                <FaWhatsapp className="text-[#25d366] text-4xl" />
              </Circle>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, left: "-2rem" }}
          whileInView={{ opacity: 1, left: `${isMobile ? '0' : '-8rem'}` }}
          transition={{ duration: 1.5 }}
          className="absolute -bottom-24 md:-left-32 cursor-pointer"
        >
          <a
            href="https://linkedin.com/in/malek-mostafa-salah-026362222/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Circle>
              <FaLinkedin className="text-[#0e76a8] text-4xl" />
            </Circle>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, right: '-2rem' }}
          whileInView={{ opacity: 1, right: `${isMobile ? '0' : '-8rem'}` }}
          transition={{ duration: 1.5 }}
          className="absolute -bottom-24 md:-right-32 cursor-pointer"
        >
          <a href="mailto:malekmostafa0051@gmail.com">
            <Circle>
              <FaEnvelope className="text-black text-4xl" />
            </Circle>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
