"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";

// Define the shape of data our template expects
export interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardTemplateProps {
  project: ProjectProps;
  isCompact?: boolean; // New flag for grid items without images
}

export function ProjectCardTemplate({ project, isCompact = false }: ProjectCardTemplateProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (emblaApi) emblaApi.destroy();
    };
  }, [emblaApi]);

  const scrollPrev = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Determine if we should show the image carousel
  const hasImages = !isCompact && project.images && project.images.length > 0;

  return (
    <div
      className={`flex flex-col h-full w-full overflow-hidden solid-block bg-slate-200 dark:bg-slate-800 transition-all duration-300 ${
        hasImages ? "md:flex-row min-h-[380px]" : "min-h-[220px]"
      }`}
    >
      {/* 1. Metadata Content Area */}
      <div className={`flex flex-col flex-1 p-6 justify-between ${hasImages ? "md:w-1/2" : "w-full"}`}>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
            {project.title}
          </h3>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-block px-2.5 py-0.5 rounded-md font-mono text-xs font-medium bg-slate-300/70 text-slate-800 dark:bg-slate-700 dark:text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-sm text-zinc-700 dark:text-zinc-400 leading-relaxed max-w-prose">
            {project.description}
          </p>
        </div>

        {/* Action Project Links */}
        <div className="pt-6 mt-6 flex gap-4 border-t border-slate-300/80 dark:border-zinc-700/60">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 px-3.5 py-1.5 rounded-md transition-colors duration-200"
            >
              <Icon icon="mdi:link" className="w-4 h-4 mr-1.5" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 px-3.5 py-1.5 rounded-md transition-colors duration-200"
            >
              <Icon icon="mdi:github" className="w-4 h-4 mr-1.5" />
              Source Code
            </a>
          )}
        </div>
      </div>

      {/* 2. Image Carousel (Rendered only if images exist and card isn't forced compact) */}
      {hasImages && (
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] flex items-center justify-center bg-slate-100 dark:bg-zinc-950/40 group/carousel">
          {mounted && (
            <div className="overflow-hidden h-full w-full" ref={emblaRef}>
              <div className="flex h-full w-full">
                {project.images.map((src, index) => (
                  <div key={index} className="relative flex-[0_0_100%] h-full w-full min-w-0 flex items-center justify-center">
                    <div className="relative w-full h-[90%] max-w-[95%] transition-transform duration-300 group-hover/carousel:scale-[1.01]">
                      <Image
                        src={src}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain object-center drop-shadow-md rounded-lg"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.images.length > 1 && (
            <>
              <button
                onClick={scrollPrev}
                className="absolute left-5 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/60 bg-white/90 text-zinc-800 shadow-md backdrop-blur-xs opacity-0 group-hover/carousel:opacity-100 dark:border-zinc-700/60 dark:bg-zinc-900/90 dark:text-zinc-200 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Previous image"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-5 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/60 bg-white/90 text-zinc-800 shadow-md backdrop-blur-xs opacity-0 group-hover/carousel:opacity-100 dark:border-zinc-700/60 dark:bg-zinc-900/90 dark:text-zinc-200 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Next image"
              >
                <FontAwesomeIcon icon={faChevronRight} className="h-3.5 w-3.5" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}