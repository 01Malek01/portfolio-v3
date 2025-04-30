import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <div className="lg:hidden relative">
      {/* Menu Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 rounded-lg text-slate-300 hover:text-purple-400 transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </motion.button>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-lg"
        >
          <div className="container mx-auto px-4 pt-20 bg-purple-800 p-10 h-screen">
            {/* Header */}
            {/* Close Button */}
            <div className="flex justify-end mb-12">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-purple-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-8">
              {[
                { href: '#who-am-i', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#projects', label: 'Projects' },
                { href: '#contact', label: 'Contact' }
              ].map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group relative text-2xl font-medium text-slate-300 hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-400 group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Social Links */}
            <div className="mt-16 flex gap-6 justify-center">
              {[
                { href: 'https://github.com/01Malek01', icon: <BsGithub className="w-6 h-6" /> },
                { href: 'https://linkedin.com/in/malek-mostafa-salah-026362222/', icon: <BsLinkedin className="w-6 h-6" /> },
                { href: 'mailto:malekmostafa0051@gmail.com', icon: <HiOutlineMail className="w-6 h-6" /> }
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="text-slate-300 hover:text-purple-400 transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default MobileMenu;