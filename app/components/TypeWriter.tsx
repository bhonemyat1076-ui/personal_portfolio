"use client";
import { useState, useEffect, useRef } from "react";

const Typewriter = () => {
  const sentences = [
    "Driven by enthusiasm in technology.",
    "Passionate about creating innovation."
  ];

  const [displayText, setDisplayText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const holdTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentSentence = sentences[sentenceIndex];
    
    const typeNextChar = () => {
      if (!isDeleting && charIndex < currentSentence.length) {
        // Typing
        setDisplayText((prev) => prev + currentSentence[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setDisplayText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentSentence.length) {
        // Finished typing, hold before deleting
        setIsDeleting(true);
        holdTimeoutRef.current = setTimeout(() => {
          setIsDeleting(false);
          setSentenceIndex((prev) => (prev + 1) % sentences.length);
        }, 2000);
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next sentence
        setIsDeleting(false);
        setSentenceIndex((prev) => (prev + 1) % sentences.length);
      }
    };

    typingIntervalRef.current = setInterval(typeNextChar, 100);

    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
      if (holdTimeoutRef.current) {
        clearTimeout(holdTimeoutRef.current);
      }
    };
  }, [sentenceIndex, charIndex, isDeleting]);

  return (
    <div className="text-lg font-mono">
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default Typewriter;
