'use client';
import React, { useEffect } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { motion } from "framer-motion";

function Header() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <header className="bg-gray-800 text-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-6 lg:px-12">
        {/* Mobile Menu */}
        <MobileMenu />

        {/* Logo */}
        <div className="flex items-center">
          <Image priority src="/logo.png" alt="logo" width={60} height={60} className="rounded-full border border-white" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex flex-grow justify-center gap-8">
          {[
            { href: '#who-am-i', label: 'Who am I?' },
            { href: '#skills', label: 'Skills' },
            { href: '#projects', label: 'Projects' },
            { href: '#contact', label: 'Contact me' }
          ].map((link, index) => (
            <Link key={link.href} href={link.href} className="relative group">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="font-semibold text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </motion.div>
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex gap-6">
          {[
            { href: 'https://github.com/01Malek01', icon: <BsGithub className="text-xl hover:text-purple-700 transition-colors duration-300" /> },
            { href: 'https://www.linkedin.com/in/malek-mostafa-salah-026362222/', icon: <BsLinkedin className="text-xl hover:text-purple-700 transition-colors duration-300" /> },
            { href: 'mailto:malekmostafa0051@gmail.com', icon: <HiOutlineMail className="text-xl hover:text-purple-700 transition-colors duration-300" /> }
          ].map((link) => (
            <Link key={link.href} href={link.href} className="hover:scale-110 transition-transform duration-300">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-gray-300"
              >
                {link.icon}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
