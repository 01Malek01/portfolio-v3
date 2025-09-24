'use client';

import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Finance Notification Bot',
    tech: 'Node.js, Telegram API',
    description: 'Developed, enhanced, and maintained a Telegram bot providing automated financial analysis and instant price notifications. The bot supports real-time alerts and analytical insights for users tracking finance trends.',
    icon: '🤖'
  },
  {
    id: 2,
    title: 'Financial Web Dashboards & API Optimization',
    tech: 'MERN Stack (MongoDB, Express, React, Node.js)',
    description: 'Enhanced responsiveness and usability of various web apps and dashboards used by financial service providers. Refactored API endpoints and database queries, eliminating redundant data storage on page refresh and improving app efficiency.',
    icon: '📊'
  },
  {
    id: 3,
    title: 'Transaction Management Web App',
    tech: 'React, Node.js, Express, MongoDB',
    description: 'Developed a secure, Excel-like web app for easy management and storage of transaction records, tailored for financial operations, ensuring data integrity and usability.',
    icon: '💳'
  },
  {
    id: 4,
    title: 'Property Management Platform Enhancement',
    tech: 'MERN Stack',
    description: 'Worked on a smart property management platform to add new features, fix bugs, improve styling, and optimize for mobile devices. Streamlined workflows for tracking properties, automating finance tasks, and managing compliance.',
    icon: '🏠'
  },
  {
    id: 5,
    title: 'Currency Rate Management Dashboard',
    tech: 'Node.js, Supabase, React',
    description: 'Built a backend API endpoint for dynamic currency sell rates, and integrated it with a dashboard to give staff real-time control and auditing features.',
    icon: '💱'
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300"
    >
      <div className="flex-1">
        <div className="text-4xl mb-4">
          {project.icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-purple-400 text-sm mb-4">{project.tech}</p>
        <p className="text-slate-300">{project.description}</p>
      </div>
    </motion.div>
  );
};

export default function FreelanceExperience() {
  return (
    <section id="freelance" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Freelance Experience
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of projects I've worked on as a freelance developer
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
