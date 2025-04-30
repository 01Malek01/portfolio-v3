'use client';
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-b border-slate-800/80 backdrop-blur-sm fixed top-0 w-full  overflow-hidden z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu */}
        <div className="flex items-center lg:hidden">
          <MobileMenu />
        </div>

        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className=" items-center hidden lg:flex"
        >
          <Image
            priority
            src="/logo.png"
            alt="logo"
            width={48}
            height={48}
            className="rounded-full border-2 border-slate-700 hover:border-slate-600 transition-colors"
          />
        </motion.div>



        {/* Social Links */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          {[
            { href: 'https://github.com/01Malek01', icon: <BsGithub /> },
            { href: 'https://www.linkedin.com/in/malek-mostafa-web-dev/', icon: <BsLinkedin /> },
            { href: 'mailto:malekmostafa0051@gmail.com', icon: <HiOutlineMail /> }
          ].map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              className="p-2 rounded-lg hover:bg-slate-800/40 backdrop-blur transition-all"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                className="text-slate-300 hover:text-purple-400 text-xl transition-colors"
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
