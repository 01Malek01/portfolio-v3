"use client";
import React from "react";
import { FiCode, FiServer, FiCpu, FiZap, FiDatabase, FiCloud, FiAward, FiBriefcase } from "react-icons/fi";

const stats = [
  { label: "Experience", value: "3+", suffix: "Years", icon: FiBriefcase },
  { label: "Client Satisfaction", value: "100", suffix: "%", icon: FiAward },
  { label: "Projects Delivered", value: "20+", suffix: "", icon: FiCode },
  { label: "Technologies", value: "15+", suffix: "", icon: FiZap },
];

function WhoAmI() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl w-full relative z-10">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center glass-card p-6 sm:p-8 md:p-12">
          <div className="w-full md:w-2/5">
            <div className="p-4 bg-apple-900/50 rounded-lg border border-white/[0.06] font-mono text-sm">
              <div className="flex space-x-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <pre className="text-apple-50/60 overflow-hidden">
                {`const developer = {\n  passion: "coding",\n  stack: "MERN",\n  focus: "user experience",\n  status: "always learning"\n};`}
              </pre>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.03] text-center">
                  <stat.icon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-apple-50">
                    {stat.value}<span className="text-purple-400">{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-apple-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-3/5 space-y-6">
            <header>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </h2>
            </header>

            <p className="text-base sm:text-lg md:text-xl text-apple-50/80 leading-relaxed">
              Self-taught MERN stack developer with <span className="text-purple-400 font-semibold">3+ years</span> of hands-on experience delivering full-stack solutions — from AI-integrated SaaS tools and e-commerce platforms to real-time financial dashboards and CRM systems. I specialize in transforming complex requirements into performant, user-centric web applications.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-apple-50/80 leading-relaxed">
              Currently maintaining and scaling the internal CRM at <span className="text-cyan-400 font-semibold">Thiraa</span>, building corporate websites, integrating AI APIs for data analytics, and developing SaaS features like a custom Brochure Builder. I also work as an <span className="text-emerald-400 font-semibold">AI Trainer at Outlier</span>, evaluating model outputs and refining AI-generated code.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-apple-50/80 leading-relaxed">
              Beyond coding, I hold a <span className="text-purple-400 font-semibold">Meta Front-End Development</span> certification and am pursuing a degree in Computers & AI at Beni Suef University. I speak Arabic (Native), English (B2), and German (A2) — and I&apos;m always open to new challenges.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              {[FiCode, FiServer, FiCpu, FiZap, FiDatabase, FiCloud].map((Icon, i) => (
                <div key={i} className="p-3 rounded-xl border border-white/[0.08] bg-white/[0.03]">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoAmI;
