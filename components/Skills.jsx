import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaFileCode,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiMongoose } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    body: "The standard markup language for creating web pages.",
    icon: <FaHtml5 className="text-orange-500" />,
  },
  {
    name: "CSS",
    body: "Style sheet language for describing document presentation.",
    icon: <FaCss3Alt className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    body: "Programming language for interactive web features.",
    icon: <FaJsSquare className="text-yellow-400" />,
  },
  {
    name: "TypeScript",
    body: "Superset of JavaScript with static typing.",
    icon: <FaFileCode className="text-blue-400" />,
  },
  {
    name: "Node.js",
    body: "JavaScript runtime for scalable network applications.",
    icon: <FaNodeJs className="text-green-500" />,
  },
  {
    name: "React.js",
    body: "Library for building user interfaces.",
    icon: <FaReact className="text-cyan-400" />,
  },
  {
    name: "Express.js",
    body: "Minimal Node.js web application framework.",
    icon: <SiExpress className="text-gray-300" />,
  },
  {
    name: "MongoDB",
    body: "Document-oriented NoSQL database.",
    icon: <SiMongodb className="text-green-400" />,
  },
  {
    name: "Tailwind CSS",
    body: "Utility-first CSS framework.",
    icon: <SiTailwindcss className="text-cyan-300" />,
  },
  {
    name: "Next.js",
    body: "React framework with SSR and static generation.",
    icon: <SiNextdotjs className="text-white" />,
  },
  {
    name: "REST API",
    body: "Architectural style for web APIs.",
    icon: <FaDatabase className="text-purple-400" />,
  },
  {
    name: "Mongoose",
    body: "MongoDB object modeling for Node.js.",
    icon: <SiMongoose className="text-red-400" />,
  },
];

const SkillCard = ({ icon, name, body }) => {
  return (
    <motion.figure
      whileHover={{ scale: 1.05 }}
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-2xl border p-6",
        "border-slate-800 bg-slate-900/30 backdrop-blur-sm",
        "hover:bg-slate-800/40 transition-all duration-300"
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <span className="text-5xl">{icon}</span>
        <div className="flex flex-col text-center">
          <figcaption className="text-xl font-semibold text-slate-200">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-4 text-sm text-slate-400 text-center">
        {body}
      </blockquote>
    </motion.figure>
  );
};

export default function Skills() {
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
        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-12"
      >
        Technical Expertise
      </motion.h1>

      <Marquee pauseOnHover className="[--duration:35s]">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-slate-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-slate-900"></div>
    </motion.div>
  );
}