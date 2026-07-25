import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { useLenis } from "@/components/LenisProvider";

const navLinks = [
  { href: '#who-am-i', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#ai-tools', label: 'AI Tools' },
  { href: '#projects', label: 'Projects' },
  { href: '#freelance', label: 'Freelance' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://github.com/01Malek01', icon: <BsGithub className="w-6 h-6" /> },
  { href: 'https://linkedin.com/in/malek-mostafa-salah-026362222/', icon: <BsLinkedin className="w-6 h-6" /> },
  { href: 'mailto:malekmostafa0051@gmail.com', icon: <HiOutlineMail className="w-6 h-6" /> },
];

function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const lenis = useLenis();

  return (
    <div className="lg:hidden relative">
      <button
        className="p-2 rounded-lg text-apple-50/80 hover:text-purple-400 transition-colors active:scale-90"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-apple-950"
          style={{ animation: 'navSlideIn 0.35s ease-out' }}
        >
          <div className="container mx-auto px-6 pt-20 h-screen">
            <div className="flex justify-end mb-12">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-apple-50/80 hover:text-purple-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex flex-col gap-8">
              {navLinks.map((link, index) => (
                <div key={link.href} style={{ animation: `heroFadeSlide 0.4s ${index * 0.08 + 0.15}s both` }}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(false);
                      lenis?.scrollTo(link.href, { offset: -80 });
                    }}
                    className="group relative text-2xl font-medium text-apple-50/80 hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-400 group-hover:w-full transition-all duration-300" />
                  </a>
                </div>
              ))}
            </nav>

            <div className="mt-16 flex gap-6 justify-center">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-apple-50/80 hover:text-purple-400 transition-colors"
                  style={{ animation: `heroIconIn 0.4s ${index * 0.08 + 0.5}s both` }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
