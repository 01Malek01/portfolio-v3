import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { motion } from "framer-motion";
import { FaTasks, FaCode, FaPalette, FaGithub, FaSearch, FaCodeBranch } from "react-icons/fa";
import { SiOpenai, SiClickup, SiCanva } from "react-icons/si";

const aiTools = [
  {
    name: "ChatGPT",
    body: "Advanced language model for code generation, problem-solving, and technical discussions.",
    icon: <FaCode className="text-green-500" />
  },
  {
    name: "Notion",
    body: "All-in-one workspace for task management, documentation, and project organization.",
    icon: <FaTasks className="text-gray-800" />
  },
  {
    name: "ClickUp",
    body: "Productivity platform for managing tasks, projects, and team collaboration.",
    icon: <FaTasks className="text-blue-500" />
  },
  {
    name: "GitHub Copilot",
    body: "AI pair programmer that helps write better code faster with intelligent suggestions.",
    icon: <FaCode className="text-blue-300" />
  },
  {
    name: "Canva",
    body: "Graphic design platform with AI-powered tools for creating professional visuals and presentations.",
    icon: <FaPalette className="text-blue-400" />
  },
  {
    name: "Stitch",
    body: "AI-powered web design tool that helps create and optimize website layouts.",
    icon: <FaPalette className="text-pink-500" />
  },
  {
    name: "Jules",
    body: "Asynchronous AI coding agent that automates GitHub workflows, bug fixes, and feature additions.",
    icon: <FaGithub className="text-gray-700" />
  },
  {
    name: "Perplexity AI",
    body: "AI research assistant that helps find and understand complex technical information.",
    icon: <FaSearch className="text-purple-400" />
  },
  {
    name: "Windsurf IDE",
    body: "AI-powered development environment that enhances coding with intelligent assistance and automation.",
    icon: <FaCodeBranch className="text-blue-600" />
  },
];

const AIToolCard = ({ name, body, icon }) => {
  return (
    <motion.figure
      whileHover={{ scale: 1.05 }}
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-2xl border md:p-6 p-1",
        "border-slate-800 bg-slate-900/30 backdrop-blur-sm",
        "hover:bg-slate-800/40 transition-all duration-300"
      )}
    >
      <div className="flex flex-col items-center gap-4 md:p-2">
        <div className="text-4xl">{icon}</div>
        <figcaption className="text-xl font-semibold text-slate-200 text-center">
          {name}
        </figcaption>
        <blockquote className="text-sm text-slate-400 text-center">
          {body}
        </blockquote>
      </div>
    </motion.figure>
  );
};

export default function AITools() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12 text-center"
      >
        AI Tools & Technologies
      </motion.h1>

      <Marquee pauseOnHover className="[--duration:35s]">
        {aiTools.map((tool) => (
          <AIToolCard key={tool.name} name={tool.name} body={tool.body} icon={tool.icon} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-slate-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-slate-900"></div>
    </motion.div>
  );
}
