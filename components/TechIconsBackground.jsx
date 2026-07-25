'use client';
import { useEffect, useRef } from 'react';
import {
  FaReact, FaNodeJs, FaDocker, FaAws, FaPython,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiMongodb, SiPostgresql,
  SiTailwindcss, SiExpress, SiRedis,
} from 'react-icons/si';

const icons = [
  { tech: 'react', Icon: FaReact, color: '#61DAFB', size: 28 },
  { tech: 'nextjs', Icon: SiNextdotjs, color: '#fff', size: 26 },
  { tech: 'nodejs', Icon: FaNodeJs, color: '#339933', size: 26 },
  { tech: 'typescript', Icon: SiTypescript, color: '#3178C6', size: 24 },
  { tech: 'mongodb', Icon: SiMongodb, color: '#47A248', size: 24 },
  { tech: 'express', Icon: SiExpress, color: '#fff', size: 22 },
  { tech: 'tailwind', Icon: SiTailwindcss, color: '#06B6D4', size: 24 },
  { tech: 'docker', Icon: FaDocker, color: '#2496ED', size: 24 },
  { tech: 'aws', Icon: FaAws, color: '#FF9900', size: 24 },
  { tech: 'postgresql', Icon: SiPostgresql, color: '#4169E1', size: 22 },
  { tech: 'python', Icon: FaPython, color: '#3776AB', size: 24 },
  { tech: 'redis', Icon: SiRedis, color: '#DC382D', size: 22 },
];

// Added heroX and heroY to control where they fly to on screen
const sectionTechs = [
  { id: 'story-react', hero: 'react', heroX: 25, heroY: 50, techs: ['react', 'typescript', 'nextjs'] },
  { id: 'story-nodejs', hero: 'nodejs', heroX: 75, heroY: 50, techs: ['nodejs', 'express', 'mongodb', 'redis'] },
  { id: 'who-am-i', hero: null, heroX: 50, heroY: 50, techs: ['react', 'typescript', 'mongodb', 'express', 'tailwind', 'nextjs', 'nodejs'] },
  { id: 'skills', hero: null, heroX: 50, heroY: 50, techs: ['all'] },
  { id: 'ai-tools', hero: 'python', heroX: 50, heroY: 50, techs: ['python', 'redis', 'postgresql'] },
  { id: 'projects', hero: 'docker', heroX: 50, heroY: 50, techs: ['docker', 'aws', 'postgresql', 'redis'] },
  { id: 'freelance', hero: null, heroX: 50, heroY: 50, techs: ['nodejs', 'express', 'mongodb', 'react'] },
  { id: 'contact', hero: null, heroX: 50, heroY: 50, techs: ['react', 'nextjs', 'typescript', 'tailwind'] },
];

const FLOAT_DIRS = ['RU', 'RD', 'LU', 'LD'];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function TechIconsBackground() {
  const rootRef = useRef(null);

  useEffect(() => {
    // 1. Inject float Keyframes (Now with endless rotation)
    const style = document.createElement('style');
    const vars = [];
    FLOAT_DIRS.forEach((dir) => {
      const xs = dir[0] === 'R' ? 1 : -1;
      const ys = dir[1] === 'D' ? 1 : -1;
      const rotDir = xs * ys > 0 ? 1 : -1; // Randomizes spin direction

      vars.push(`
@keyframes iconFloat${dir} {
  0%   { transform: translate(0px, 0px) rotate(0deg); }
  33%  { transform: translate(${xs * 25}px, ${ys * 18}px) rotate(${rotDir * 120}deg); }
  66%  { transform: translate(${xs * 10}px, ${ys * 28}px) rotate(${rotDir * 240}deg); }
  100% { transform: translate(0px, 0px) rotate(${rotDir * 360}deg); }
}`);
    });
    style.textContent = vars.join('\n');
    document.head.appendChild(style);

    const root = rootRef.current;
    if (!root) return () => style.remove();

    const containers = new Map();
    const inners = new Map();
    root.querySelectorAll('[data-c]').forEach((el) => containers.set(el.getAttribute('data-c'), el));
    root.querySelectorAll('[data-i]').forEach((el) => inners.set(el.getAttribute('data-i'), el));

    let activeTechs = new Set();

    const observer = new IntersectionObserver((entries) => {
      let best = null;
      let bestRatio = 0;
      entries.forEach((e) => {
        if (e.intersectionRatio > bestRatio) {
          bestRatio = e.intersectionRatio;
          best = e;
        }
      });
      if (best && bestRatio > 0) {
        const section = sectionTechs.find((s) => s.id === best.target.id);
        activeTechs = new Set(section ? section.techs : []);
      }
    }, { threshold: [0.25, 0.5, 0.75] });

    sectionTechs.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    // 2. The Apple-Style Scroll Loop
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const vh = window.innerHeight;
          const heroDataMap = new Map();

          // Map each hero to its focus scale and its specific X/Y target
          sectionTechs.forEach(sec => {
            if (sec.hero) {
              const el = document.getElementById(sec.id);
              if (el) {
                const rect = el.getBoundingClientRect();
                const sectionCenter = rect.top + (rect.height / 2);
                const screenCenter = vh / 2;

                const dist = Math.abs(sectionCenter - screenCenter);

                const rawFocus = Math.max(0, 1 - (dist / (vh * 0.85)));
                const focus = rawFocus * rawFocus * (3 - 2 * rawFocus);

                heroDataMap.set(sec.hero, { focus, x: sec.heroX, y: sec.heroY });
              }
            }
          });

          containers.forEach((container, tech) => {
            const inner = inners.get(tech);
            if (!inner) return;

            const heroData = heroDataMap.get(tech);
            const focus = heroData ? heroData.focus : 0;
            const targetX = heroData ? heroData.x : 50;
            const targetY = heroData ? heroData.y : 50;

            const isStandardActive = activeTechs.has('all') || activeTechs.has(tech);

            if (focus > 0.01) {
              const startX = parseFloat(container.getAttribute('data-sx'));
              const startY = parseFloat(container.getAttribute('data-sy'));

              // Interpolate towards specific target (25% for React, 75% for Node, etc.)
              const currentX = startX + (targetX - startX) * focus;
              const currentY = startY + (targetY - startY) * focus;
              const currentTranslate = -50 * focus;

              container.style.left = `${currentX}%`;
              container.style.top = `${currentY}%`;
              // This translate explicitly zeroes out the spin rotation so it levels out straight while zooming
              container.style.transform = `translate(${currentTranslate}%, ${currentTranslate}%)`;
              container.style.animationPlayState = 'paused';

              inner.style.transition = 'none';
              inner.style.transform = `scale(${1 + 19 * focus})`;
              inner.style.opacity = `${0.15 + 0.85 * focus}`;
              inner.style.zIndex = focus > 0.5 ? '5' : '2';

            } else {
              // Restore normal float and endless spinning
              container.style.left = container.getAttribute('data-ol');
              container.style.top = container.getAttribute('data-ot');
              container.style.transform = '';
              container.style.animationPlayState = 'running';

              inner.style.transition = 'transform 0.4s ease-out, opacity 0.4s ease-out';
              inner.style.transform = isStandardActive ? 'scale(2.4)' : 'scale(1)';
              inner.style.opacity = isStandardActive ? '0.8' : '0.15';
              inner.style.zIndex = isStandardActive ? '2' : '1';
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      style.remove();
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={rootRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-apple-950/50 via-apple-950/40 to-apple-950/50" />
      {icons.map((item) => {
        const floatDir = FLOAT_DIRS[Math.floor(Math.random() * 4)];
        const x = randomBetween(2, 94);
        const y = randomBetween(2, 94);
        const duration = randomBetween(16, 30); // Slightly longer for softer spinning
        const delay = randomBetween(-30, 0);
        return (
          <div
            key={item.tech}
            data-c={item.tech}
            data-sx={x}
            data-sy={y}
            data-ol={`${x}%`}
            data-ot={`${y}%`}
            data-oa={`iconFloat${floatDir} ${duration}s ${delay}s infinite linear`}
            className="absolute pointer-events-none will-change-transform"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              animation: `iconFloat${floatDir} ${duration}s ${delay}s infinite linear`
            }}
          >
            <div
              data-i={item.tech}
              style={{ transition: 'transform 0.4s ease-out, opacity 0.4s ease-out', transform: 'scale(1)', opacity: 0.15 }}
            >
              <item.Icon size={item.size} color={item.color} />
            </div>
          </div>
        );
      })}
    </div>
  );
}