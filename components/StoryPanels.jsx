'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from '@/components/LenisProvider';
import { FaReact, FaNodeJs } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

function useLenisScrollRefresh() {
  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;
    const fn = () => ScrollTrigger.refresh();
    lenis.on('scroll', fn);
    return () => lenis.off('scroll', fn);
  }, [lenis]);
}

function SplitText({ text, className, gradient, baseDelay = 0 }) {
  return (
    <h2 className={`font-bold ${className}`}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="char inline-block"
          style={{ backgroundImage: gradient, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h2>
  );
}

export function Panel1() {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  useLenisScrollRefresh();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chars = el.querySelectorAll('.char');
    const icon = el.querySelector('.story-icon');
    const sub = el.querySelector('.story-sub');
    const desc = el.querySelector('.story-desc');

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100',
          end: 'center center',
          scrub: 0.3,
        },
      });

      tl.fromTo(icon,
        { scale: 0, rotation: -180, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }
      );

      tl.fromTo(chars,
        { y: 80, opacity: 0, rotateX: -90 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.6, stagger: 0.04, ease: 'power3.out' },
        '-=0.4'
      );

      tl.fromTo(sub,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.2'
      );

      tl.fromTo(desc,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.1'
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="story-react" ref={sectionRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/3 via-transparent to-transparent pointer-events-none" />
      <div ref={ref} className="text-center px-6 z-10">
        <div className="story-icon mb-8 flex justify-center">
          <div className="p-4 rounded-2xl border border-white/[0.06] backdrop-blur-sm bg-white/[0.03]">
            <FaReact size={48} color="#61DAFB" />
          </div>
        </div>
        <SplitText
          text="Built with React"
          className="text-4xl sm:text-5xl md:text-7xl mb-6 leading-tight"
          gradient="linear-gradient(135deg, #60A5FA, #A78BFA)"
        />
        <p className="story-sub text-apple-300 text-lg sm:text-xl mb-3 tracking-widest uppercase opacity-0">
          The Foundation
        </p>
        <p className="story-desc text-apple-50/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed opacity-0">
          Crafting interactive user interfaces with a component-driven architecture
        </p>
      </div>
    </section>
  );
}

export function Panel2() {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  useLenisScrollRefresh();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll('.word-float');
    const icon = el.querySelector('.story-icon-2');
    const sub = el.querySelector('.story-sub-2');
    const desc = el.querySelector('.story-desc-2');

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100',
          end: 'center center',
          scrub: 0.3,
        },
      });

      tl.fromTo(icon,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'elastic.out(1, 0.5)' }
      );

      tl.fromTo(words,
        { x: (i) => i % 2 === 0 ? -200 : 200, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out' },
        '-=0.3'
      );

      tl.fromTo(sub,
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' },
        '-=0.2'
      );

      tl.fromTo(desc,
        { y: 20, opacity: 0, filter: 'blur(8px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power2.out' },
        '-=0.1'
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="story-nodejs" ref={sectionRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/4 via-transparent to-transparent pointer-events-none" />
      <div ref={ref} className="text-center px-6 z-10">
        <div className="story-icon-2 mb-8 flex justify-center">
          <div className="p-4 rounded-2xl border border-white/[0.06] backdrop-blur-sm bg-white/[0.03]">
            <FaNodeJs size={48} color="#339933" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6">
          {['Powered', 'by', 'Node.js'].map((word, i) => (
            <span
              key={i}
              className="word-float inline-block text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
              style={{
                backgroundImage: i === 2
                  ? 'linear-gradient(135deg, #34D399, #22C55E)'
                  : 'linear-gradient(135deg, #F5F5F7, #AEAEB2)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {word}
            </span>
          ))}
        </div>
        <p className="story-sub-2 text-apple-300 text-lg sm:text-xl mb-3 tracking-widest uppercase opacity-0">
          The Engine
        </p>
        <p className="story-desc-2 text-apple-50/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed opacity-0">
          Scalable backend solutions with event-driven, non-blocking architecture
        </p>
      </div>
    </section>
  );
}

export function Panel3() {
  const ref = useRef(null);
  const pinRef = useRef(null);
  const textRef = useRef(null);
  const lineLeftRef = useRef(null);
  const lineRightRef = useRef(null);
  const subRef = useRef(null);
  useLenisScrollRefresh();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top top',
        end: '+=350',
        pin: pinRef.current,
              scrub: 0.3,
      });

      const chars = textRef.current?.querySelectorAll('.char');
      if (chars?.length) {
        gsap.fromTo(chars,
          { opacity: 0, y: 40, rotateZ: -5 },
          {
            opacity: 1, y: 0, rotateZ: 0,
            duration: 0.5,
            stagger: 0.03,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top center',
              end: '+=200',
              scrub: 0.3,
            },
          }
        );
      }

      if (subRef.current) {
        gsap.fromTo(subRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6,
            scrollTrigger: {
              trigger: el,
              start: 'top center+=50',
              end: '+=100',
              scrub: 0.3,
            },
          }
        );
      }

      if (lineLeftRef.current && lineRightRef.current) {
        gsap.to([lineLeftRef.current, lineRightRef.current], {
          scaleX: 1, duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top center',
            end: '+=150',
            scrub: 0.3,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="story-philosophy" ref={ref} className="relative h-[120vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/3 via-transparent to-purple-500/3 pointer-events-none" />
      <div ref={pinRef} className="w-full h-screen flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <p ref={subRef} className="text-apple-300 text-sm sm:text-base mb-6 tracking-widest uppercase">
            The Philosophy
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div ref={lineLeftRef} className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-purple-400/50 to-transparent origin-right" />
            <div ref={textRef}>
              <span className="text-xl sm:text-2xl md:text-4xl font-bold text-apple-50 leading-tight block">
                {'Transforming ideas into scalable, performant solutions'.split('').map((char, i) => (
                  <span key={i} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
                ))}
              </span>
            </div>
            <div ref={lineRightRef} className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-purple-400/50 to-transparent origin-left" />
          </div>
          <p className="text-apple-50/40 text-xs sm:text-sm mt-8 max-w-lg mx-auto">
            Every line of code tells a story of precision and purpose
          </p>
        </div>
      </div>
    </section>
  );
}
