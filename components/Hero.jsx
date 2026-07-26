"use client";
import React from "react";
import WordPullUp from "./magicui/word-pull-up";
import { FiCode, FiServer, FiCpu, FiDownload, FiArrowRight } from "react-icons/fi";
import { useLenis } from "@/components/LenisProvider";

function Hero() {
  const lenis = useLenis();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 sm:px-8 lg:px-12">
      <div className="relative z-10 text-center w-full">
        <div className="mb-8 justify-center gap-4 flex-wrap hidden lg:flex">
          {[FiCode, FiServer, FiCpu].map((Icon, i) => (
            <div
              key={i}
              className="glass-card p-4"
              style={{ animation: `heroIconIn 0.5s ${i * 0.2 + 0.5}s both` }}
            >
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
            </div>
          ))}
        </div>

        <WordPullUp
          words={"Malek Mostafa"}
          className="text-3xl sm:text-4xl md:text-7xl font-bold text-apple-50 mb-4"
        />

        <div
          className="flex flex-wrap justify-center items-center gap-4 mb-8"
          style={{ animation: 'heroFadeSlide 0.6s 1.2s both' }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent md:w-24 w-0" />
          <span className="text-lg sm:text-xl text-purple-200 font-medium">Developer</span>
          <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent md:w-24 w-0" />
        </div>

        <p
          className="text-base sm:text-lg md:text-xl text-apple-50/80 max-w-3xl mx-auto mb-12 leading-relaxed px-2"
          style={{ animation: 'heroFade 0.8s 1.5s both' }}
        >
          Crafting scalable solutions with{" "}
          <span className="text-cyan-400 font-semibold">React</span>,{" "}
          <span className="text-emerald-400 font-semibold">Node.js</span>, and{" "}
          <span className="text-green-700 font-semibold">MongoDB</span>.{" "}
          Over 3 years of experience building, optimizing, and automating business solutions.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="/malek-mostafa-mern-dev.pdf"
            download
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all group"
          >
            <FiDownload className="w-5 h-5" />
            <span className="font-semibold">Download Resume</span>
          </a>

          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); if (lenis) { lenis.scrollTo('#projects', { offset: -80 }); } else { const el = document.querySelector('#projects'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }}
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-white/[0.15] hover:bg-white/[0.06] transition-colors group cursor-pointer"
          >
            <span className="text-purple-400 font-semibold">View Projects</span>
            <FiArrowRight className="w-5 h-5 text-purple-400 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center"
        style={{ animation: 'heroFadeSlide 0.6s 2.5s both' }}
      >
        <a href="#who-am-i" onClick={(e) => { e.preventDefault(); if (lenis) { lenis.scrollTo('#who-am-i', { offset: -80 }); } else { const el = document.querySelector('#who-am-i'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }} className="text-apple-300 hover:text-purple-400 transition-colors cursor-pointer">
          <div
            className="w-6 h-6 border-2 border-purple-400/60 rounded-full"
            style={{ animation: 'heroBounce 2s ease-in-out infinite' }}
          />
        </a>
      </div>
    </section>
  );
}

export default Hero;
