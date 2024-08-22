import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

function MobileMenu() {



  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    }, []);
  })


  return (
    <div className="lg:hidden ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
          className={`menu  menu-sm dropdown-content bg-[#535353cd]  rounded-box z-[1] mt-3 w-52 p-2 shadow justify-center items-center h-[50vh] gap-6 `}>
            {[
              { href: '#who-am-i', label: 'Who am I ?' },
              { href: '#skills', label: 'Skills' },
              { href: '#projects', label: 'Projects' },
              { href: '#contact', label: 'Contact me' }
            ].map((link, index) => (
              <Link key={link.href} href={link.href} className="text-lg" >
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className=" font-bold link hover:animate-pulse ">
                  {link.label}
                </motion.div>
              </Link>
            ))}
          </ul>
        </div>
     
    </div>
  );
}

export default MobileMenu;
