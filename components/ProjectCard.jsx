import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function ProjectCard({ projectTitle, projectDescription, projectImage, githubLink, githubLink2, liveLink, styles }) {
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
    if (isExpanded || projectDescription.length <= 100) {
      return projectDescription;
    }
    return `${projectDescription.substring(0, 100)}...`;
  };

  return (
    <div className={`${styles} bg-base-100 md:w-96 w-72 shadow-xl md:hover:scale-110 hover:z-10 transition duration-300 ease-in-out`}>
      <div className="card-body">
        <h2 className="card-title text-semibold text-2xl mb-2">{projectTitle}</h2>
        <p className='text-sm md:text-lg'>{renderDescription()}</p>
        {projectDescription.length > 100 && (
          <span className="text-blue-500 underline cursor-pointer" onClick={toggleExpand}>
            {isExpanded ? 'Read Less' : 'Read More'}
          </span>
        )}
        <div className="divider"></div>
        <span className='text-orange-500'>Available Links :</span>
        <div className="card-actions m-5 flex flex-wrap justify-around">
          {githubLink && <Link href={githubLink} className="link">Github Repo Front-end</Link>}
          {githubLink2 && <Link href={githubLink2} className="link">Github Repo Back-end</Link>}
          {liveLink && <Link href={liveLink} className="link">Live Preview</Link>}
        </div>
      </div>
      <figure>
        <Link href={liveLink || '#'}>
          <Image
            src={projectImage}
            alt="project image"
            width={500}
            height={300} // Adjust height for aspect ratio if needed
            layout="responsive" // Ensure the image is responsive
            priority // Optional: Use for critical images
            placeholder="blur" // Use for a placeholder
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            loading="lazy" // Enable lazy loading
          />
        </Link>
      </figure>
    </div>
  );
}

export default ProjectCard;
