'use client';
import React from "react";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const contactItems = [
  {
    icon: FaWhatsapp,
    color: "text-green-400",
    title: "WhatsApp",
    detail: "+20 112 548 5384",
    href: "https://wa.me/201125485384",
    action: "Message",
    actionColor: "text-blue-400",
  },
  {
    icon: FaLinkedin,
    color: "text-blue-400",
    title: "LinkedIn",
    detail: "Malek Mostafa Salah",
    href: "https://www.linkedin.com/in/malek-mostafa-web-dev/",
    action: "Connect",
    actionColor: "text-purple-400",
  },
  {
    icon: FaEnvelope,
    color: "text-purple-400",
    title: "Email",
    detail: "malekmostafa0051@gmail.com",
    href: "mailto:malekmostafa0051@gmail.com",
    action: "Contact",
    actionColor: "text-blue-400",
  },
];

export default function Contact() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[600px] w-full py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
            Reach out through any of these channels for collaborations or opportunities.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {contactItems.map((item, i) => (
            <div
              key={item.title}
              className="group relative w-full max-w-xs sm:max-w-sm p-6 rounded-2xl glass-card overflow-hidden"
            >
              <div className="flex items-center gap-4">
                <div className="z-10 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl border border-white/[0.08] glass-card transition-transform hover:scale-110">
                  <item.icon className={`text-2xl sm:text-3xl ${item.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-apple-50">{item.title}</h3>
                  <p className="text-apple-300 mt-1 text-sm sm:text-base">{item.detail}</p>
                </div>
              </div>
              <a
                href={item.href}
                target={item.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="absolute inset-0"
              >
                <div className={`absolute bottom-4 right-4 ${item.actionColor} flex items-center gap-1`}>
                  <span className="text-xs sm:text-sm">{item.action}</span>
                  <FiArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
