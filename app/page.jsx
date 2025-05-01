'use client';
import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { IoMdRocket } from "react-icons/io";
import throttle from "lodash/throttle";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoAmI from "@/components/WhoAmI";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { useState } from "react";

export default function Home() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setShowScrollToTop(window.scrollY > window.innerHeight);
    }, 200);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="relative flex bg-slate-900 text-slate-100 w-full min-h-screen ">
      <Nav />

      <div className=" w-full">
        <Header />
        <Hero />

        <main className="space-y-20 lg:space-y-32 pb-20 overflow-hidden">
          <section id="who-am-i" className="scroll-mt-24">
            <WhoAmI />
          </section>

          <section id="skills" className="scroll-mt-24">
            <Skills />
          </section>

          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>

          <section id="contact" className="scroll-mt-24">
            <Contact />
          </section>
        </main>

        <Footer />

        <motion.button
          className="fixed bottom-8 right-8 p-2  md:p-4 bg-purple-600/80 hover:bg-purple-700/90 backdrop-blur rounded-full shadow-lg transition-all"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showScrollToTop ? 1 : 0, y: showScrollToTop ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center">
            <IoMdRocket size={32} className="mb-1 animate-bounce" />
            <span className="text-xs font-medium">Scroll to Top</span>
          </div>
        </motion.button>
      </div>
    </div>
  );
}
