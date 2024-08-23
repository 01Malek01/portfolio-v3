import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Smooth scroll for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });

        setMenuOpen(false); // Close menu on link click
      });
    });
  }, []);

  return (
    <div className="lg:hidden relative">
      {/* Menu Button */}
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.ul
          ref={menuRef}
          tabIndex={0}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`menu menu-sm dropdown-content bg-[#535353cd] rounded-box z-50 mt-3 w-52 p-4 shadow justify-center items-center gap-4 absolute left-0 top-full`}
        >
          {[
            { href: "#who-am-i", label: "Who am I?" },
            { href: "#skills", label: "Skills" },
            { href: "#projects", label: "Projects" },
            { href: "#contact", label: "Contact me" },
          ].map((link, index) => (
            <li key={link.href}>
              <Link href={link.href} className="text-lg">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="font-bold hover:animate-pulse mb-4"
                >
                  {link.label}
                </motion.div>
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}

export default MobileMenu;
