import React from 'react';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Footer() {
 return (
  <motion.footer
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 1 }}
   viewport={{ once: true }}
   className="border-t border-slate-800/50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
  >
   <div className="container mx-auto py-8 px-4">
    <div className="flex flex-col items-center justify-center gap-6">
     {/* Social Links */}
     <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="flex gap-6"
     >
      {[
       {
        href: "https://github.com/01Malek01",
        icon: <BsGithub className="text-2xl" />,
       },
       {
        href: "https://www.linkedin.com/in/malek-mostafa-web-dev/",
        icon: <BsLinkedin className="text-2xl" />,
       },
       {
        href: "mailto:malekmostafa0051@gmail.com",
        icon: <HiOutlineMail className="text-2xl" />,
       },
       {
        href: "https://wa.me/201125485384",
        icon: <BsWhatsapp className="text-2xl" />,
       }
      ].map((link, index) => (

       <Link
        key={link.href}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-lg bg-slate-800/30 backdrop-blur-sm transition-all text-slate-300 hover:scale-110 "
       >
        <motion.div whileHover={{ scale: 1.1 }}>
         {link.icon}
        </motion.div>
       </Link>
      ))}
     </motion.div>

     {/* Copyright */}
     <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-center text-slate-400 text-sm"
     >
      © 2024 <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Malek Mostafa</span>
      <br />
     </motion.p>
    </div>
   </div>
  </motion.footer>
 );
}

export default Footer;