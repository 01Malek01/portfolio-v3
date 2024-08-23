// import React from "react";
// import "../styles/Skills.css";
// import Slider from "./Slider";
// import { motion } from "framer-motion";

// function Skills() {

//   return (
//     <>
//       <div

//         className="skills-wrapper lg:min-h-screen p-8 mt-5"
//       >
//         <div
//           className="skills-container mt-[5rem]">
//           <header className="skills-title p-5">
//             <motion.h1
//               initial={{ opacity: 0, y: -100 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.5 }}
//               className="text-6xl font-bold text-center c-text-secondary"
//             >
//               Skills
//             </motion.h1>
//           </header>
//           <article className="skills bg-black bg-opacity-10 p-[2.5rem] rounded-lg shadow-lg">
//             <motion.div
//               initial={{ opacity: 0, y: -100 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.5, delay: 0.5 }}
//               viewport={{ once: true }}
//               className="skills-progress flex items-center justify-center"
//             >
//               <Slider />
//             </motion.div>
//           </article>
//         </div>
//       </div>
//       <div className="divider bold "></div>
//     </>
//   );
// }

// export default Skills;



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
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiMongoose } from "react-icons/si";
const skills = [
  {
    name: "HTML",
    body: "The standard markup language for creating web pages.",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    body: "A style sheet language used for describing the presentation of a document written in HTML.",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    body: "A programming language that allows you to implement complex features on web pages.",
    icon: <FaJsSquare />,
  },
  {
    name: "TypeScript",
    body: "A superset of JavaScript that adds static typing to the language.",
    icon: <FaFileCode />,
  },
  {
    name: "Node.js",
    body: "A JavaScript runtime built on Chrome's V8 JavaScript engine, designed for building scalable network applications.",
    icon: <FaNodeJs />,
  },
  {
    name: "React.js",
    body: "A JavaScript library for building user interfaces, maintained by Facebook.",
    icon: <FaReact />,
  },
  {
    name: "Express.js",
    body: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    icon: <SiExpress />,
  },
  {
    name: "MongoDB",
    body: "A document-oriented NoSQL database used for high volume data storage.",
    icon: <SiMongodb />,
  },
  {
    name: "Tailwind CSS",
    body: "A utility-first CSS framework for rapidly building custom designs.",
    icon: <SiTailwindcss />,
  },
  {
    name: "Next.js",
    body: "A React framework that enables several extra features, including server-side rendering and generating static websites for React-based web applications.",
    icon: <SiNextdotjs />,
  },
  {
    name: "REST API",
    body: "An architectural style for an application program interface (API) that uses HTTP requests to access and use data.",
    icon: <FaDatabase />,
  },
  {
    name: "Mongoose",
    body: "An elegant MongoDB object modeling for Node.js.",
    icon: <SiMongoose />,
  },
];

const ReviewCard = ({
  icon,
  name,
  username,
  body,
}) => {
  return (


    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] hover:scale-110 transition-all ease-in-out duration-200",
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-5xl">{icon}</span>
        <div className="flex flex-col">
          <figcaption className="text-md font-semibold dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Skills() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <h1 className="text-6xl font-bold text-center m-5"> Skills</h1>
      <Marquee pauseOnHover className="[--duration:35s] ">
        {skills.map((skill) => (
          <ReviewCard className={`hover:scale-110`} key={skills.name} {...skill} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
