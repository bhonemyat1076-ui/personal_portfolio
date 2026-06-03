"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToHome() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate total scrollable height and current scroll position
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      // 2. Trigger visibility if the user is past 50% of the page depth
      if (totalHeight > 0 && scrollPosition / totalHeight > 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHome = () => {
    // 3. Smooth scroll back up to your target home section element
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToHome}
      className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-800 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-200 dark:shadow-zinc-950/50 ${
        isVisible 
          ? "translate-y-0 opacity-100 pointer-events-auto" 
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll back to top"
    >
      <FontAwesomeIcon icon={faArrowUp} className="h-4 w-4 animate-pulse hover:animate-none" />
    </button>
  );
}