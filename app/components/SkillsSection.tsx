"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic"; // 1. Import Next's dynamic tool
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faPhp,
  faLaravel,
  faNodeJs,
  faReact,
  faCss3Alt
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";

// 2. Safe Dynamic Import: Tells Turbopack to skip SSR compilation completely for this component
const DotField = dynamic(() => import("./react-bits/DotField"), {
  ssr: false,
});

interface Skill {
  name: string;
  category: string;
  icon: any;
  iconColor: string;
}

export default function SkillsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skillsData: Skill[] = [
    { name: "JavaScript", category: "Frontend", icon: faJs, iconColor: "text-amber-500" },
    { name: "React / Next.js", category: "Frontend", icon: faReact, iconColor: "text-cyan-400" },
    { name: "Tailwind CSS", category: "Frontend", icon: faCss3Alt, iconColor: "text-sky-400" },
    { name: "PHP", category: "Backend", icon: faPhp, iconColor: "text-indigo-500" },
    { name: "Laravel", category: "Backend", icon: faLaravel, iconColor: "text-red-500" },
    { name: "Node.js", category: "Backend", icon: faNodeJs, iconColor: "text-green-500" },
    { name: "MySQL / Databases", category: "Backend", icon: faDatabase, iconColor: "text-blue-600" },
    { name: "Server Admin", category: "DevOps", icon: faServer, iconColor: "text-zinc-500" },
  ];

  return (
    <div className="mx-auto max-w-5xl solid-block border border-zinc-200 bg-zinc-50 dark:bg-slate-900/30 transition-all duration-300 relative overflow-hidden p-8 sm:p-12">

      {/* Background Dots canvas field safely loading only on client layer */}
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

      {/* Responsive Grid */}
      <div className="relative z-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 border border-zinc-200/80 dark:border-zinc-800/80 bg-transparent dark:bg-transparent backdrop-blur-xs shadow-xs hover:shadow-md hover:border-cyan-500/40 dark:hover:border-cyan-400/30 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className={`text-4xl sm:text-5xl mb-3 ${skill.iconColor} transition-transform duration-300 group-hover:scale-110`}>
              <FontAwesomeIcon icon={skill.icon} />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-zinc-800 dark:text-zinc-200 text-center">
              {skill.name}
            </h3>
            <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-400 dark:text-zinc-500 mt-1">
              {skill.category}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}