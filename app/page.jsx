'use client';
import { useState, useEffect, Suspense, lazy, memo, useCallback } from 'react';
import { IoMdRocket } from 'react-icons/io';
import { motion } from 'framer-motion';
import { throttle } from 'lodash';
import dynamic from 'next/dynamic';
// Lazy load components to reduce initial load time
const Header = dynamic(() => import('@/components/Header'), {
  ssr: false
});
const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: false
});
const Projects = dynamic(() => import('@/components/Projects'),
  {
    ssr: false
  });
const Skills = dynamic(() => import('@/components/Skills'),
  {
    ssr: false
  });
const WhoAmI = dynamic(() => import('@/components/WhoAmI'), {
  ssr: false
});
const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: false
});
const Contact = dynamic(() => import('@/components/Contact'), {
  ssr: false
});

export default function Home() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    }, 200);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, 200);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <motion.main>
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
    </>

  );
}
