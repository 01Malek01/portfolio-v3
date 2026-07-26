'use client';
import { useEffect, useCallback, useRef } from "react";
import { IoMdRocket } from "react-icons/io";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoAmI from "@/components/WhoAmI";
import Skills from "@/components/Skills";
import AITools from "@/components/AITools";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TechIconsBackground from "@/components/TechIconsBackground";
import { Panel1, Panel2, Panel3 } from "@/components/StoryPanels";
import { useLenis } from "@/components/LenisProvider";

const VISIBLE_CLASS = 'scroll-top-visible';

export default function Home() {
  const lenis = useLenis();
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const toggleBtn = (scrollY) => {
      btn.classList.toggle(VISIBLE_CLASS, scrollY > window.innerHeight);
    };

    if (lenis) {
      const handleScroll = (e) => toggleBtn(e.animatedScroll);
      lenis.on('scroll', handleScroll);
      return () => lenis.off('scroll', handleScroll);
    } else {
      const handleNative = () => toggleBtn(window.scrollY);
      window.addEventListener('scroll', handleNative, { passive: true });
      handleNative();
      return () => window.removeEventListener('scroll', handleNative);
    }
  }, [lenis]);

  const scrollToTop = useCallback(() => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [lenis]);

  return (
    <div className="relative flex bg-apple-950 text-apple-50 w-full min-h-screen">
      <TechIconsBackground />

      <Nav />

      <div className="w-full relative z-10">
        <Header />
        <Hero />

        <main className="pb-20">
          <section id="who-am-i" className="scroll-mt-24 min-h-screen flex items-center">
            <WhoAmI />
          </section>

          <Panel1 />

          <section id="skills" className="scroll-mt-24">
            <Skills />
          </section>

          <Panel2 />

          <section id="ai-tools" className="scroll-mt-24">
            <AITools />
          </section>

          <Panel3 />

          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>

          <section id="freelance" className="scroll-mt-24">
          </section>

          <section id="testimonials" className="scroll-mt-24">
            <Testimonials />
          </section>

          <section id="contact" className="scroll-mt-24">
            <Contact />
          </section>
        </main>

        <Footer />

        <button
          ref={btnRef}
          onClick={scrollToTop}
          className="scroll-top-btn fixed bottom-8 right-8 p-2 md:p-4 glass-card shadow-lg transition-all opacity-0 translate-y-5"
        >
          <div className="flex flex-col items-center">
            <IoMdRocket size={32} className="mb-1 text-apple-300" />
            <span className="text-xs font-medium text-apple-300">Top</span>
          </div>
        </button>
      </div>
    </div>
  );
}
