// components/ImageStack.tsx
"use client";
import Image from 'next/image';
import { memo } from 'react';

const images = [
  { src: '/card-system-1.png', alt: 'Project-Image 1' },
  { src: '/card-system-2.png', alt: 'Project-Image 2' },
  { src: '/card-system-3.png', alt: 'Project-Image 3' },
];

const ImageStack = memo(function ImageStack() {
  return (
    // Outer container: Controls the overall block height (e.g., h-96 or h-[500px])
    <div className="flex items-center justify-center h-96 bg-amber-70 dark:bg-slate-800 w-full">
      
      {/* Container box: Must match the full height (h-full) of your parent.
      */}
      <div className="group relative h-full overflow-hidden flex items-center justify-center w-full">
        
        {images.map((img, i) => (
          <div
            key={img.src}
            // CHANGE 1: Added 'flex items-center justify-center' here so the inner card is centered
            className="absolute w-full h-full flex items-center justify-center animate-card-loop group-hover:[animation-play-state:paused] transition-transform duration-300 hover:!scale-105"
            style={{
              animationDelay: `${i * -4}s`,
            }}
          >

            <div className="relative w-[700px] h-full overflow-hidden border border-white/20 bg-amber-70 dark:bg-slate-800 rounded-2xl shadow-2xl">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                // CHANGE 3: Changed object-cover to object-contain if you don't want your text cropped, 
                // or keep object-cover if you want it to bleed to the edges perfectly.
                className="object-contain" 
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 700px"
              />
            </div>
          </div>
        ))}

      </div>
    </div>
  );
});

export default ImageStack;