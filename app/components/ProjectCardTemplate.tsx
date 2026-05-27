"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// Define the shape of data our template expects
export interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  images: string[]; // Array of paths to images (e.g. ['/img1.png', '/img2.png'])
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCardTemplate({ project }: { project: ProjectProps }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Cleanup embla carousel on unmount
    return () => {
      if (emblaApi) {
        emblaApi.destroy();
      }
    };
  }, [emblaApi]);

  const scrollPrev = useCallback((e: React.MouseEvent) => {
    e.preventDefault(); // Prevents triggers if card is inside a link wrapper
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
  <div className="flex flex-col md:flex-row h-full w-full min-h-[380px] overflow-hidden solid-block border border-zinc-200 bg-zinc-50 dark:border-slate-900 dark:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
    
    {/* 1. Left Side: Card Metadata Content (Takes up exactly half the width on desktop) */}
    <div className="flex flex-col flex-1 p-6 md:w-1/2 justify-between">
      <div className="space-y-4">
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-block px-2.5 py-0.5 rounded-md font-mono text-xs font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
          {project.title}
        </h3>
        
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-prose">
          {project.description}
        </p>
      </div>

      {/* Action Project Links */}
      <div className="pt-6 mt-6 flex gap-4 border-t border-zinc-100 dark:border-zinc-800/60">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:underline"
          >
            Live Demo &rarr;
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Source Code
          </a>
        )}
      </div>
    </div>

    {/* 2. Right Side: Internal Image Carousel Box (Takes up exactly half the width on desktop) */}
    {/* 2. Right Side: Internal Image Carousel Box (Fixed height and containing logic) */}
<div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] flex items-center justify-center bg-zinc-100 dark:bg-zinc-950/40 group/carousel">
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
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-contain object-center drop-shadow-md rounded-lg"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )}

  {/* Carousel Navigation Arrows Overlay */}
  {project.images.length > 1 && (
    <>
      <button
        onClick={scrollPrev}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/60 bg-white/90 text-zinc-800 shadow-md backdrop-blur-xs opacity-0 group-hover/carousel:opacity-100 dark:border-zinc-700/60 dark:bg-zinc-900/90 dark:text-zinc-200 transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Previous image"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="h-3.5 w-3.5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/60 bg-white/90 text-zinc-800 shadow-md backdrop-blur-xs opacity-0 group-hover/carousel:opacity-100 dark:border-zinc-700/60 dark:bg-zinc-900/90 dark:text-zinc-200 transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Next image"
      >
        <FontAwesomeIcon icon={faChevronRight} className="h-3.5 w-3.5" />
      </button>
    </>
  )}
</div>
  </div>
);
}