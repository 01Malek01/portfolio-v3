import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaFileCode,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiMongoose, SiNestjs } from "react-icons/si";

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
    name: "NestJS",
    body: "Progressive Node.js framework for scalable server-side apps.",
    icon: <SiNestjs className="text-red-500" />,
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
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-2xl p-6 glass-card",
        "transition-all duration-300 hover:scale-105 hover:bg-white/[0.08]"
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <span className="text-5xl">{icon}</span>
        <div className="flex flex-col text-center">
          <figcaption className="text-xl font-semibold text-apple-50">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-4 text-sm text-apple-300 text-center">
        {body}
      </blockquote>
    </figure>
  );
};

export default function Skills() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden py-20">
      <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-12 text-center"
        style={{ animation: 'heroFadeSlide 0.8s 0.3s both' }}
      >
        Technical Expertise
      </h2>

      <Marquee pauseOnHover className="[--duration:35s]" repeat={2}>
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-apple-950"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-apple-950"></div>
    </div>
  );
}