import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { FiGithub, FiExternalLink, FiCode, FiArrowRight } from 'react-icons/fi';

function ProjectCard({ projectTitle, projectDescription, projectImage, projectImages, projectSlug, githubLink, githubLink2, liveLink }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const imgSrc = projectImage || projectImages?.[0] || '';

  const renderDescription = () => {
    if (isExpanded || projectDescription.length <= 100) {
      return projectDescription;
    }
    return `${projectDescription.substring(0, 100)}...`;
  };

  const showPlaceholder = !imgSrc || imageError;

  return (
    <div className="relative overflow-hidden rounded-2xl glass-card transition-all duration-300">
      <div className="h-48 relative overflow-hidden bg-apple-900/30">
        {showPlaceholder ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full border-2 border-purple-400/30 border-t-purple-400 animate-spin" />
              <p className="text-apple-300 text-xs mt-3">Screenshots coming soon</p>
            </div>
          </div>
        ) : !imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-purple-500/50 rounded-full" />
              <div className="w-2 h-2 bg-blue-500/50 rounded-full" />
              <div className="w-2 h-2 bg-indigo-500/50 rounded-full" />
            </div>
          </div>
        )}
        {liveLink ? (
          <Link href={liveLink} className={`block h-full w-full ${!imageLoaded || imageError ? 'opacity-0' : 'opacity-100'}`}>
              <Image
              src={imgSrc}
              alt={projectTitle}
              fill
              className="object-cover"
              onLoadingComplete={() => setImageLoaded(true)}
              onError={() => { setImageError(true); setImageLoaded(true); }}
              priority={false}
            />
          </Link>
        ) : (
          <div className={`h-full w-full ${!imageLoaded || imageError ? 'opacity-0' : 'opacity-100'}`}>
              <Image
              src={imgSrc}
              alt={projectTitle}
              fill
              className="object-cover"
              onLoadingComplete={() => setImageLoaded(true)}
              onError={() => { setImageError(true); setImageLoaded(true); }}
              priority={false}
            />
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-apple-50">{projectTitle}</h3>

        <div className="space-y-2">
          <p className="text-apple-300 leading-relaxed">
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
                className="p-2 rounded-lg border border-white/[0.08] hover:bg-white/[0.06] transition-colors"
              >
                <FiGithub className="w-5 h-5 text-purple-400" />
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-white/[0.08] hover:bg-white/[0.06] transition-colors"
              >
                <FiExternalLink className="w-5 h-5 text-blue-400" />
              </a>
            )}
          </div>

          <div className="flex items-center gap-3">
            {projectSlug && (
              <Link
                href={`/projects/${projectSlug}`}
                className="flex items-center gap-1.5 text-sm text-purple-400 hover:text-blue-400 transition-colors font-medium"
              >
                <span>Details</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            )}
            {githubLink2 && (
              <a
                href={githubLink2}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-apple-300 hover:text-purple-400 transition-colors"
              >
                <FiCode className="w-4 h-4" />
                <span>Backend Code</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-apple-950/80 to-apple-900/80" />
    </div>
  );
}

export default ProjectCard;
