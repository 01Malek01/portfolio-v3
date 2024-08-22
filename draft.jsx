import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import '../styles/Contact.css';

function Contact() {
 const firstContactItemRef = useRef(null);

 useEffect(() => {
  const observer = new IntersectionObserver(
   ([entry]) => {
    if (entry.isIntersecting) {
     firstContactItemRef.current.classList.add('typewriter');
     observer.unobserve(firstContactItemRef.current);
    }
   },
   { threshold: 0.5 }
  );

  if (firstContactItemRef.current) {
   observer.observe(firstContactItemRef.current);
  }

  return () => {
   if (firstContactItemRef.current) {
    observer.unobserve(firstContactItemRef.current);
   }
  };
 }, []);

 return (
  <>
   <section className="contact-me-wrapper md:min-h-[20vh] flex items-center justify-center p-8">
    <div className="contact-me-container bg-black bg-opacity-10 p-10 rounded-lg shadow-lg max-w-md w-full">
     <h2 className="text-4xl font-bold text-center text-slate-200 mb-8">Contact Me</h2>
     <div className="contact-details space-y-4">
      <div ref={firstContactItemRef} className="contact-item flex items-center space-x-4">
       <FaWhatsapp className="text-slate-300 text-2xl" />
       <Link href={"https://wa.me/201125485384"} className="text-slate-300 text-xl link">01125485384</Link>
      </div>
      <div className="contact-item flex items-center space-x-4">
       <FaEnvelope className="text-slate-200 text-2xl" />
       <Link href="mailto:malekmostafa0051@gmail.com" className="text-slate-300 text-xl link">Gmail</Link>
      </div>
      <div className="contact-item flex items-center space-x-4">
       <FaLinkedin className="text-slate-200 text-2xl" />
       <Link href="https://www.linkedin.com/in/malek-mostafa-salah-026362222" target="_blank" className="text-slate-200 text-xl link">LinkedIn</Link>
      </div>
     </div>
    </div>
   </section>
  </>
 );
}

export default Contact;
