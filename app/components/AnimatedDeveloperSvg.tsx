"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState, memo } from "react";

export const AnimatedDeveloperSvg = memo(function AnimatedDeveloperSvg() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent layout/hydration shift until theme is resolved on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // While mounting, show an empty block matching the image size to prevent layout jumps
  if (!mounted) {
    return <div className="w-full h-[350px] md:h-[450px]" />;
  }

  return (
    <div 
      className="w-full max-w-md md:max-w-lg mx-auto group transition-all duration-700 ease-in-out hover:scale-[1.03] hover:rotate-1"
    >
      {theme === "dark" ? (
        /* Dark Mode Illustration */
        <Image
          src="/developer-dark.svg" // Make sure this matches your dark file name in /public
          alt="Developer illustration Dark Mode"
          width={500}
          height={500}
          priority
          className="w-full h-auto object-contain transition-opacity duration-500 animate-fade-in opacity-90"
          sizes="(max-width: 768px) 100vw, 500px"
        />
      ) : (
        /* Light Mode Illustration */
        <Image
          src="/developer-light.svg" // Make sure this matches your light file name in /public
          alt="Developer illustration Light Mode"
          width={500}
          height={500}
          priority
          className="w-full h-auto object-contain transition-opacity duration-500 animate-fade-in"
          sizes="(max-width: 768px) 100vw, 500px"
        />
      )}
    </div>
  );
});