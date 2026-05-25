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
  }, []);

  const scrollPrev = useCallback((e: React.MouseEvent) => {
    e.preventDefault(); // Prevents triggers if card is inside a link wrapper
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex flex-row h-full overflow-hidden solid-block border border-zinc-200 bg-amber-100 dark:border-zinc-800 dark:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
      {/* 1. Card Metadata Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex-1">
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

          <h3 className="text-xl font-bold mt-3 text-foreground tracking-tight">
            {project.title}
          </h3>
          
          <p className="text-sm mt-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Action Project Links */}
        <div className="pt-6 mt-auto flex gap-4 border-t border-zinc-100 dark:border-zinc-800/60">
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
        {/* 2. Internal Image Carousel Box */}
      <div className="relative aspect-video w-full overflow-hidden bg-amber-100 dark:bg-slate-800 group/carousel">
        {mounted && (
          <div className="overflow-hidden h-full" ref={emblaRef}>
            <div className="flex h-full">
              {project.images.map((src, index) => (
                <div key={index} className="relative flex-[0_0_100%] h-full w-full">
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    sizes="max-width: 50% 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Carousel Navigation Arrows Overlay (Only shows when hovering the image block) */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200/50 bg-white/80 text-zinc-800 shadow-xs backdrop-blur-xs opacity-0 group-hover/carousel:opacity-100 dark:border-zinc-700/50 dark:bg-zinc-900/80 dark:text-zinc-200 transition-all duration-200 hover:scale-105"
              aria-label="Previous image"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="h-3 w-3" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200/50 bg-white/80 text-zinc-800 shadow-xs backdrop-blur-xs opacity-0 group-hover/carousel:opacity-100 dark:border-zinc-700/50 dark:bg-zinc-900/80 dark:text-zinc-200 transition-all duration-200 hover:scale-105"
              aria-label="Next image"
            >
              <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}