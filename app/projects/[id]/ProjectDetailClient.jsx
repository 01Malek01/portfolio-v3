'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiExternalLink, FiArrowLeft, FiCode, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useLenis } from '@/components/LenisProvider';

export default function ProjectDetailClient({ project }) {
  const lenis = useLenis();
  const [currentImage, setCurrentImage] = useState(0);

  const images = project.images && project.images.length > 0
    ? project.images
    : project.image
      ? [project.image]
      : [];

  return (
    <div className="min-h-screen bg-apple-950 text-apple-50">
      <div className="fixed top-0 left-0 z-50 p-4 sm:p-6">
        <Link
          href="/#projects"
          onClick={(e) => {
            e.preventDefault();
            if (lenis) {
              lenis.scrollTo('#projects', { offset: -80 });
            } else {
              const el = document.querySelector('#projects');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-card text-apple-300 hover:text-purple-400 transition-all text-sm"
        >
          <FiArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back to Projects</span>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3 space-y-6">
              <div
                className="relative w-full aspect-video rounded-2xl overflow-hidden glass-card"
                style={{ animation: 'projectFadeUp 0.6s 0.1s both' }}
              >
                {images.length === 0 ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-apple-900/30">
                    <div className="w-16 h-16 rounded-full border-2 border-purple-400/30 border-t-purple-400 animate-spin mb-4" />
                    <p className="text-apple-400 text-sm">Screenshots coming soon</p>
                  </div>
                ) : (
                  <>
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={() => setCurrentImage((p) => (p - 1 + images.length) % images.length)}
                          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                        >
                          <FiChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => setCurrentImage((p) => (p + 1) % images.length)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                        >
                          <FiChevronRight className="w-5 h-5" />
                        </button>
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                          {images.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setCurrentImage(i)}
                              className={`w-2 h-2 rounded-full transition-all ${i === currentImage ? 'bg-purple-400 w-4' : 'bg-white/40'}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                    <Image
                      src={images[currentImage]}
                      alt={project.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </>
                )}
              </div>

            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                      i === currentImage ? 'border-purple-400 opacity-100' : 'border-transparent opacity-60 hover:opacity-80'
                    }`}
                    style={{ animation: `projectFadeUp 0.4s ${i * 0.08 + 0.3}s both` }}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div style={{ animation: 'projectFadeUp 0.6s 0.3s both' }}>
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                About This Project
              </h2>
              <p className="text-apple-300 leading-relaxed text-base sm:text-lg">
                {project.description}
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div
              className="glass-card p-6 sm:p-8 space-y-6"
              style={{ animation: 'projectFadeUp 0.6s 0.2s both' }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-apple-50 leading-tight">
                {project.name}
              </h1>

              {project.techs && project.techs.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-apple-400 uppercase tracking-wider mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.06] border border-white/[0.08] text-apple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all font-semibold text-sm"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    View Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg border border-white/[0.15] hover:bg-white/[0.06] transition-all text-sm font-medium"
                  >
                    <FiGithub className="w-4 h-4" />
                    Frontend Code
                  </a>
                )}
                {project.githubLink2 && (
                  <a
                    href={project.githubLink2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg border border-white/[0.15] hover:bg-white/[0.06] transition-all text-sm font-medium"
                  >
                    <FiCode className="w-4 h-4" />
                    Backend Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
