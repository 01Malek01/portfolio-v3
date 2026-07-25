import React from 'react';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';

const links = [
  { href: "https://github.com/01Malek01", icon: <BsGithub className="text-2xl" /> },
  { href: "https://www.linkedin.com/in/malek-mostafa-web-dev/", icon: <BsLinkedin className="text-2xl" /> },
  { href: "mailto:malekmostafa0051@gmail.com", icon: <HiOutlineMail className="text-2xl" /> },
  { href: "https://wa.me/201125485384", icon: <BsWhatsapp className="text-2xl" /> },
];

function Footer() {
  return (
    <footer className="border-t border-white/[0.05]">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass-card transition-all text-apple-300 hover:scale-110"
              >
                {link.icon}
              </Link>
            ))}
          </div>
          <p className="text-center text-apple-300 text-sm">
            &copy; 2024 <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Malek Mostafa</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
