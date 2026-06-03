"use client";

import React, { useState, useEffect } from "react";
// 1. Add Variants to your import statement
import { motion, Variants } from "framer-motion"; 

interface FirstTimeRevealProps {
  children: React.ReactNode;
  storageKey: string;
}

export default function FirstTimeReveal({ children, storageKey }: FirstTimeRevealProps) {
  const [hasAnimated, setHasAnimated] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const sectionTriggered = sessionStorage.getItem(`animated_${storageKey}`);
    if (sectionTriggered) {
      setHasAnimated(true);
    } else {
      setHasAnimated(false);
    }
  }, [storageKey]);

  // 2. Explicitly type your variants object here
  const variants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] } 
    }
  };

  if (!isClient || hasAnimated) {
    return <div className="w-full h-full">{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants} 
      onAnimationComplete={() => {
        sessionStorage.setItem(`animated_${storageKey}`, "true");
        setHasAnimated(true);
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}