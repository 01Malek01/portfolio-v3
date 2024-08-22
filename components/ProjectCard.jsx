import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function ProjectCard({ projectTitle, projectDescription, projectImage, githubLink, liveLink, styles }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const renderDescription = () => {
    if (!isMobile || isExpanded || projectDescription.length <= 100) {
      return projectDescription;
    }
    return `${projectDescription.substring(0, 100)}...`;
  };

  return (
    <div className={`${styles} bg-base-100 md:w-96 w-72 shadow-xl md:hover:scale-110 hover:z-10 transition duration-300 ease-in-out`}>
      <div className="card-body">
        <h2 className="card-title">{projectTitle}</h2>
        <p className='text-sm md:text-lg '>{renderDescription()}</p>
        {isMobile && projectDescription.length > 100 && (
          <span className="text-blue-500 underline" onClick={toggleExpand}>
            {isExpanded ? 'Read Less' : 'Read More'}
          </span>
        )}
        <div className="divider"></div>
        <span className='text-orange-500'>Available Links :</span>
        <div className="card-actions mt-5 flex flex-wrap justify-around">
          {githubLink && <Link href={githubLink} className="link">Github Repo</Link>}
          {liveLink && <Link href={liveLink} className="link">Live Preview</Link>}
        </div>
      </div>
      {liveLink ? (
        <Link href={liveLink}>
          <figure>
            <Image
              src={projectImage}
              alt="project image"
              width={500}
              height={500}
            />
          </figure>
        </Link>
      ) : (
        <figure>
          <Image
            src={projectImage}
            alt="project image"
            width={500}
            height={500}
          />
        </figure>
      )}
    </div>
  );
}

export default ProjectCard;
