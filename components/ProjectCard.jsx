import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

function ProjectCard({ projectTitle, projectDescription, projectImage, githubLink, githubLink2, liveLink }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderDescription = () => {
    if (isExpanded || projectDescription.length <= 100) {
      return projectDescription;
    }
    return `${projectDescription.substring(0, 100)}...`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      whileHover={{ scale: 1.03 }}
      className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm"
    >
      <div className="h-48 relative overflow-hidden">
        {liveLink ? (
          <Link href={liveLink}>
            <Image
              src={projectImage}
              alt={projectTitle}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>
        ) : (
          <Image
            src={projectImage}
            alt={projectTitle}
            fill
            className="object-cover"
          />
        )}
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-slate-200">{projectTitle}</h3>

        <div className="space-y-2">
          <p className="text-slate-400 leading-relaxed">
            {renderDescription()}
          </p>
          {projectDescription.length > 100 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-purple-400 hover:text-blue-400 transition-colors text-sm"
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-3">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/40 transition-colors"
              >
                <FiGithub className="w-5 h-5 text-purple-400" />
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/40 transition-colors"
              >
                <FiExternalLink className="w-5 h-5 text-blue-400" />
              </a>
            )}
          </div>

          {githubLink2 && (
            <a
              href={githubLink2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-purple-400 transition-colors"
            >
              <FiCode className="w-4 h-4" />
              <span>Backend Code</span>
            </a>
          )}
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900/80 to-slate-800/80" />
    </motion.div>
  );
}

export default ProjectCard;