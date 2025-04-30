'use client';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Nav() {
 const [isOpen, setIsOpen] = useState(false);

 const links = [
  { href: '#who-am-i', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
 ];

 return (
  <>
   {/* Toggle Button */}
   <button
    onClick={() => setIsOpen(!isOpen)}
    className="fixed top-[9%] left-0 z-50 p-2 rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700 hidden lg:block"
    aria-label="Toggle Menu"
   >
    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
   </button>

   {/* Sidebar Navigation */}
   <AnimatePresence>
    {isOpen && (
     <motion.nav
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed top-[11%] left-0 h-full w-64 z-40 bg-slate-900/90 backdrop-blur-md shadow-lg p-8 flex flex-col gap-6"
     >
      {links.map((link, index) => (
       <Link
        key={link.href}
        href={link.href}
        className="relative px-2 py-2 group transition-colors duration-300 hover:shadow-md hover:shadow-purple-500/50 rounded-lg"
        onClick={() => setIsOpen(false)}
       >
        <motion.div
         initial={{ opacity: 0, x: -20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{
          duration: 0.5,
          delay: index * 0.1,
          type: 'spring',
          stiffness: 260,
          damping: 20
         }}
        >
         <span className="text-slate-300 group-hover:text-purple-400 font-medium text-lg">
          {link.label}
         </span>
         <motion.span
          className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-400 origin-left scale-x-0"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
         />
        </motion.div>
       </Link>
      ))}
     </motion.nav>
    )}
   </AnimatePresence>
  </>
 );
}
