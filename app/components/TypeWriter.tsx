"use client";
import { useState, useEffect } from "react";

const Typewriter = () => {
  const sentences = [
    "Driven by enthusiasm in technology.",
    "Passionate about creating innovation."
  ];

  const [displayText, setDisplayText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let typingInterval;

    if (charIndex < sentences[sentenceIndex].length) {
      typingInterval = setInterval(() => {
        setDisplayText((prev) => prev + sentences[sentenceIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // typing speed (ms per character)
    } else {
      // sentence fully typed
      const holdTimeout = setTimeout(() => {
        // clear text after 2s
        setDisplayText("");
        setCharIndex(0);
        setSentenceIndex((prev) => (prev + 1) % sentences.length);
      }, 2000); // hold duration

      return () => clearTimeout(holdTimeout);
    }

    return () => clearInterval(typingInterval);
  }, [charIndex, sentenceIndex]);

  return (
    <div className="text-lg font-mono">
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default Typewriter;
