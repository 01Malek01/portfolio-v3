'use client';
import { useState, useEffect, Suspense, lazy } from 'react';
import { IoMdRocket } from 'react-icons/io';
import { motion } from 'framer-motion';
import { useCallback } from 'react';
// Lazy load components to reduce initial load time
const Header = lazy(() => import('@/components/Header'));
const Hero = lazy(() => import('@/components/Hero'));
const Projects = lazy(() => import('@/components/Projects'));
const Skills = lazy(() => import('@/components/Skills'));
const WhoAmI = lazy(() => import('@/components/WhoAmI'));
const Footer = lazy(() => import('@/components/Footer'));
const Contact = lazy(() => import('@/components/Contact'));

export default function Home() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = useCallback(() => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    }, [setShowScrollToTop]);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <motion.main>
        <Header />
        <Hero />
        <div id='who-am-i'>
          <WhoAmI />
        </div>
        <motion.div id="skills">
          <Skills />
        </motion.div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
        {showScrollToTop && (
          <button
            className="scroll-to-top text-sm flex flex-col hover:text-purple-700 hover:scale-125 transition-all tracking-tight"
            onClick={scrollToTop}
          >
            <IoMdRocket size={50} />
            <span className='text-sm'>Top</span>
          </button>
        )}
        <Footer />
      </motion.main>
    </Suspense>
  );
}
