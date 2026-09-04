"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Icon } from "@iconify/react";
import { motion, Variants } from "framer-motion";

const DotField = dynamic(() => import("./react-bits/DotField"), {
  ssr: false,
});

interface Skill {
  name: string;
  category: string;
  icon: string;
  iconColor?: string;
}

export default function SkillsSection() {
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skillsData: Skill[] = [
    { name: "HTML", category: "Frontend", icon: "vscode-icons:file-type-html" },
    { name: "CSS", category: "Frontend", icon: "vscode-icons:file-type-css" },
    { name: "JavaScript", category: "Frontend", icon: "logos:javascript" },
    { name: "JQuery", category: "Frontend", icon: "devicon:jquery" },
    { name: "React", category: "Frontend", icon: "logos:react" },
    { name: "Next.js", category: "Frontend", icon: "logos:nextjs-icon", iconColor: "dark:invert" },
    { name: "Tailwind", category: "Frontend", icon: "devicon:tailwindcss" },
    { name: "Bootstrap", category: "Frontend", icon: "logos:bootstrap" },
    { name: "PHP", category: "Backend", icon: "logos:php" },
    { name: "Laravel", category: "Backend", icon: "logos:laravel" },
    { name: "Node.js", category: "Backend", icon: "logos:nodejs-icon" },
    { name: "MySQL", category: "Backend", icon: "lineicons:mysql" },
    { name: "PostgreSQL", category: "Backend", icon: "lineicons:postgresql" },
    { name: "VS Code", category: "Tools", icon: "logos:visual-studio-code" },
    { name: "Git", category: "Tools", icon: "logos:git-icon" },
    { name: "GitHub", category: "Tools", icon: "bi:github", iconColor: "text-zinc-800 dark:text-zinc-100" },
    { name: "Linux", category: "Tools", icon: "devicon:archlinux" },
    { name: "Gemini", category: "Tools", icon: "vscode-icons:file-type-gemini" },
  ];

  const totalItems = skillsData.length;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 15, 
      scale: 0.95 
    },
    visible: { 
      opacity: [0, 0.5, 0.2, 0.85, 0.4, 1], 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.45,
        ease: "easeOut",
      } 
    },
  };

  return (
    <div className="mx-auto max-w-5xl solid-block border border-zinc-200 bg-zinc-50 dark:bg-slate-900/30 transition-all duration-300 relative overflow-hidden p-8 sm:p-12">

      {mounted && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <DotField
            dotRadius={2}
            dotSpacing={14}
            bulgeStrength={67}
            glowRadius={100}
            sparkle={false}
            waveAmplitude={0}
            cursorRadius={500}
            cursorForce={0.1}
            bulgeOnly
            gradientFrom="#00d2f2"
            gradientTo="#52e1f7"
            glowColor="#06B6D4"
          />
        </div>
      )}

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative z-10 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-6 sm:gap-8 md:gap-10"
      >
        {skillsData.map((skill, index) => {
          let currentCols = 4;
          if (windowWidth >= 768) currentCols = 6;
          else if (windowWidth >= 640) currentCols = 5;

          const leftovers = totalItems % currentCols;
          const isLastRowStart = index === totalItems - (leftovers || currentCols);

          // 🔄 RESTORED: Your clean mathematical style calculations logic
          let itemStyle: Record<string, any> = {
            gridColumnStart: "auto",
            gridColumnEnd: "auto"
          };

          if (isLastRowStart && leftovers > 0) {
            const rawStart = ((currentCols - leftovers) / 2) + 1;
            const cleanStart = Math.floor(rawStart);
            
            itemStyle.gridColumnStart = cleanStart;

            if (rawStart % 1 !== 0) {
              itemStyle.gridColumnEnd = `span 2`;
            } else {
              itemStyle.gridColumnEnd = `span 1`;
            }
          }

          return (
            <motion.div
              key={index}
              // 🛠️ TYPE FIX: Casting itemStyle cleanly as React.CSSProperties overrides the motion types safely!
              style={itemStyle as React.CSSProperties}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="flex flex-col items-center justify-center p-2 border border-zinc-200/80 
              dark:border-zinc-800/80 bg-transparent dark:bg-transparent backdrop-blur-xs shadow-xs 
              hover:shadow-md hover:border-cyan-500/40 dark:hover:border-cyan-400/30 
              transition-colors duration-300 group cursor-default"
            >
              <div className={`text-2xl sm:text-3xl mb-3 ${skill.iconColor || ""} transition-transform duration-300 group-hover:scale-110 flex items-center justify-center`}>
                <Icon icon={skill.icon} />
              </div>
              
              <span className="text-[12px] sm:text-base font-bold text-zinc-800 dark:text-zinc-200 text-center">
                {skill.name}
              </span>
              <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-400 dark:text-zinc-500 mt-1">
                {skill.category}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

    </div>
  );
}