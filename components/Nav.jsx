'use client';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLenis } from '@/components/LenisProvider';

export default function Nav() {
 const [isOpen, setIsOpen] = useState(false);
 const lenis = useLenis();

 const links = [
  { href: '#who-am-i', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#ai-tools', label: 'AI Tools' },
  { href: '#projects', label: 'Projects' },
  { href: '#freelance', label: 'Freelance' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' }
 ];

  const handleClick = (href, e) => {
    e.preventDefault();
    setIsOpen(false);
    if (lenis) {
      lenis.scrollTo(href, { offset: -80 });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

 return (
  <>
   <button
    onClick={() => setIsOpen(!isOpen)}
    className="fixed top-[9%] left-0 z-50 px-3 py-2 rounded-md glass-card hidden lg:flex items-center gap-2 text-sm font-medium text-apple-50/80 hover:text-apple-50 transition-colors"
    aria-label="Toggle Menu"
   >
    {isOpen ? <FiX size={16} /> : <FiMenu size={16} />}
   </button>

   {isOpen && (
    <nav className="fixed top-[11%] left-0 h-full w-64 z-40 bg-apple-950/90 backdrop-blur-xl border-r border-white/[0.05] p-8 flex flex-col gap-6"
     style={{ animation: 'navSlideIn 0.4s ease-out' }}
    >
     {links.map((link) => (
       <a
         key={link.href}
         href={link.href}
         className="relative px-2 py-2 group transition-colors duration-300 rounded-lg"
         onClick={(e) => handleClick(link.href, e)}
        >
         <span className="text-apple-50/80 group-hover:text-purple-400 font-medium text-lg">
          {link.label}
         </span>
         <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full" />
       </a>
     ))}
    </nav>
   )}
  </>
 );
}
