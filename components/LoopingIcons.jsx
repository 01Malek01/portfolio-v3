import React, { useEffect, useRef, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiMongoose } from 'react-icons/si';
import { gsap } from 'gsap';
import '../styles/LoopingIcons.css';

function LoopingIcons({ slice, animation }) {
 const iconsRef = useRef([]);
 const [screenWidthLessThan768, setScreenWidthLessThan768] = useState(false);

 useEffect(() => {
  // Check screen width on mount and resize
  const handleResize = () => {
   setScreenWidthLessThan768(window.innerWidth < 768);
  };

  handleResize(); // Initial check
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
 }, []);

 const addToRefs = (el) => {
  if (el && !iconsRef.current.includes(el)) {
   iconsRef.current.push(el);
  }
 };

 const moveRandom = () => {
  iconsRef.current.forEach((icon, index) => {
   gsap.to(icon, {
    x: screenWidthLessThan768 ? `random(-80, 60)` : `random(-200, 200)`,
    y: screenWidthLessThan768 ? `random(-80, 60)` : `random(-200, 200)`,
    repeat: -1,//infinite
    yoyo: true,
    duration: 4,
    delay: 0.5 + (index * 0.2),
    ease: 'power1.inOut',
   });
  });
 }


 const move = () => {
  iconsRef.current.forEach((icon, index) => {
   if (iconsRef.current.indexOf(icon) === 0) {

   
  // const tl = gsap.timeline({defaults: {duration: 3, ease: 'power1.inOut'}});

  // tl.from(icon,{x:-200}).to(icon, {x: 200}).to(icon,{y:200})
    // Create a GSAP timeline
    const tl = gsap.timeline({
     repeat: -1, // Infinite repetition
     yoyo: true, // Reverse direction on each repeat
     ease: 'power1.inOut' // Easing function
    });

    // Add the animation to the timeline
    tl.to(icon, {
     x: 300, // End position
     duration: 4 // Duration in seconds
    }).to(icon, {
     x: -300, // Start position
     duration: 4 // Duration in seconds
    });



   }else if (iconsRef.current.indexOf(icon) === 1) {
    gsap.to(icon, {
     // x: (200),
     right: 0,
     position: 'absolute',
     y: (0,300),
     repeat: -1,//infinite
     yoyo: true,
     duration: 4,
     delay: 0.5 + (index * 0.2),
     ease: 'power1.inOut',
    });
   } else if (iconsRef.current.indexOf(icon) === 2) {
    gsap.to(icon, {
     y: (0, -300),
     position: 'absolute',
     left: 0,
     bottom: 0,
     repeat: -1,//infinite
     yoyo: true,
     duration: 4,
     delay: 0.5 + (index * 0.2),
     ease: 'power1.inOut',
    });
   }
  });
 }
 useEffect(() => {
  if (animation == 'move') move();
  if (animation == 'moveRandom') moveRandom();

 }, [screenWidthLessThan768]);

 return (
  <div className="loop md:h-[500px] md:w-[500px]">
   {[FaHtml5, FaCss3Alt, FaJs, SiTailwindcss, FaReact, SiNextdotjs, FaNodeJs, SiExpress, SiMongodb, SiMongoose].map((Icon, index) => (
    <div key={index} ref={addToRefs} className="icon-container -z-10">
       <Icon color='#252525' size={screenWidthLessThan768 ? 50 : 100} className='icon -z-10 opacity-80' />
    </div>
   )).slice(0, slice)}
  </div>
 );
}

export default LoopingIcons;
