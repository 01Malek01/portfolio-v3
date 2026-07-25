'use client';
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

function Header() {
  return (
    <header className="bg-apple-950/80 backdrop-blur-xl border-b border-white/[0.05] fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between h-20 px-6 sm:px-8 lg:px-12">
        <div className="flex items-center lg:hidden">
          <MobileMenu />
        </div>

        <div className="items-center hidden lg:flex">
          <span className="text-lg font-semibold text-apple-50 tracking-tight">Malek Mostafa</span>
        </div>

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
              className="p-2 rounded-lg hover:bg-white/[0.08] backdrop-blur transition-all text-apple-300 hover:text-purple-400 text-xl"
              style={{ animation: `heroIconIn 0.5s ${index * 0.15 + 0.2}s both` }}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
