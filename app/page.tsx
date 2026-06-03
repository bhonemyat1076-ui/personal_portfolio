import Image from "next/image";
import { AnimatedDeveloperSvg } from "./components/AnimatedDeveloperSvg";
import Typewriter from "./components/TypeWriter";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import { Icon } from "@iconify/react";
import FirstTimeReveal from "./components/FirstTimeReveal";
import ContactForm from "./components/ContactForm";
import ContactEmail from "./components/PersonalEmail";


export default function Home() {
  return (
    <div className="space-y-16 bg-background text-foreground transition-colors duration-300">
      {/* 1. Hero / Home Section */}
      <section id="home" className="px-6 md:px-12 pt-6">
        <FirstTimeReveal storageKey="home-hero">
        {/* Main interactive row frame */}
        {/* Cleaned layout container: Swapped justify-between for items-center and added uniform theme colors */}
        <div className="w-full border border-zinc-200 bg-zinc-50 p-8 sm:p-12 dark:border-slate-900
        dark:bg-slate-800 solid-block transition-all duration-300 flex flex-col md:flex-row items-center gap-12">

          {/* Left Side: Text Introduction (Removed the conflicting py-16 / sm:py-4 paddings) */}
          <div className="flex-1 text-center space-y-4 max-w-xl md:text-left">
            <p className="text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
              Hello, I'm
            </p>
            <h1 className="text-4xl font-extrabold font-mono tracking-tight text-cyan-600 dark:text-cyan-400 sm:text-5xl">
              Min Chit Thu
            </h1>
              <Typewriter />
            <p className="text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              a passionate software developer specializing in building web applications.
              Explore my projects and skills below!
            </p>

            {/* Call to Action Buttons */}
            <div className="pt-4 flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="#projects"
                className="bg-zinc-900 solid-block px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 transition-colors"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="solid-block border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Side: Animated Illustration Container */}
          <div className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[440px] flex justify-center">
            <AnimatedDeveloperSvg />
          </div>
        </div>
      </FirstTimeReveal>
      </section>
      {/* 2. About Me Section */}
      <section id="about" className="px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-cyan-900 dark:text-cyan-200">
          About Me
        </h2>
        <div className="w-full">

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            {/* Content Segment Blocks */}
            <div className="md:col-span-3 space-y-6">
              <FirstTimeReveal storageKey="about-me">
              <div className="space-y-2 solid-block bg-zinc-50 dark:bg-slate-800 transition-all duration-300 hover:border-cyan-500/40 p-6">
                <h3 className="text-xl font-semibold text-cyan-700 dark:text-cyan-300 flex items-center gap-2">
                  Who I Am and <span className="font-mono text-green-500 font-bold">&lt;/&gt;</span>
                </h3>
                <p className="text-sm leading-relaxed text-black dark:text-white">
                 A Junior Full Stack Developer and IT Administrator focused on clean code and minimalist design. I specialize in building functional web applications using JavaScript, PHP, Laravel, and Tailwind CSS, while ensuring the underlying server infrastructure is rock-solid.
                </p>
              </div>
              </FirstTimeReveal>

              <FirstTimeReveal storageKey="about-journey">
              <div className="space-y-2 solid-block bg-zinc-50 dark:bg-slate-800 transition-all duration-300 hover:border-cyan-500/40 p-6">
                <h3 className="text-xl font-semibold text-cyan-700 dark:text-cyan-300">
                  Education and Journey <span className="font-mono text-green-500 font-bold">&lt;/&gt;</span>
                </h3>
                <ul className="text-sm leading-relaxed text-black dark:text-white list-disc list-inside space-y-1">
                  <li>Foundation: Learned the fundamentals through the Full Stack course at Strongforce Technology.</li>
                  <li>Self-Study: Expanded my skills independently into Next.js and Node.js.</li>
                  <li>Application: Gained practical experience by building custom software to automate tasks at my IT support job.</li>
                </ul>
              </div>
              </FirstTimeReveal>
            </div>

            {/* Media Presentation Display */}
            <div className="md:col-span-2 flex justify-center h-full solid-block bg-zinc-50 dark:bg-slate-800 transition-all duration-300 hover:border-cyan-500/40 p-4">
              <Image
                src="/Programming Computer.svg"
                alt="About Me Image"
                width={400}
                height={400}
                className="rounded-xl object-contain max-w-[240px] sm:max-w-[280px] md:max-w-full transition-transform duration-300 hover:scale-102"
                style={{ height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Projects Grid Layout Section */}
      <section id="projects" className="px-6 md:px-12">
        <ProjectsSection />
      </section>

      {/* 4. Skills Section */}
      <section id="skills" className="px-6 md:px-12">
        {/* Section Header */}
        <div className="relative z-10 mb-10 text-center md:text-left w-full max-w-5xl">
          <h2 className="text-3xl text-center font-bold text-cyan-900 dark:text-cyan-200 tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-sm text-center sm:text-base mt-2 text-zinc-600 dark:text-zinc-400">
            My technical stack and tools for building full-stack engineering platforms.
          </p>
        </div>
        <SkillsSection />
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="px-6 md:px-12">
        <div className="relative z-10 mb-10 text-center md:text-left w-full">
          <h2 className="text-4xl text-center font-bold text-cyan-900 dark:text-cyan-200 tracking-tight">
            Contact Me
          </h2>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-12">
            <Image
              src="/contact.svg"
              alt="Contact Image"
              width={300}
              height={300}
            />
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md p-8 bg-zinc-50 dark:bg-slate-800 
               solid-block rounded-lg transition-all duration-300 hover:border-cyan-500/40">
                <h2 className="text-xl font-bold text-center text-cyan-900 dark:text-cyan-200 mb-6">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
      <footer className="h-86 w-full bg-radial-[at_top] from-amber-200 to-amber-50 dark:from-slate-800 dark:to-slate-900">
        <div className="flex flex-col md:flex-row sm:flex-col justify-around items-stretch py-12 mx-12">
          <div> 
          <h1 className="text-[2rem] md:text-[4rem] sm:text-[3rem] text-black font-bold dark:text-white tracking-tight w-half md:text-left sm:text-center mb-8 md:mb-0">
            Have an idea? <br />
            <span className="text-slate-700">Let's build together!</span>
          </h1>
            <ContactEmail />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <a href="https://github.com/bhonemyat1076-ui" target="_blank" rel="noopener noreferrer"
            className="bg-zinc-800 w-50 text-center solid-block px-5 py-2.5 text-sm font-medium text-zinc-50 dark:text-zinc-800 hover:bg-zinc-700 dark:bg-zinc-200 dark:hover:bg-zinc-300 transition-colors">
              GitHub <Icon icon="mdi:github" className="inline-block w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/min-chit-thu-1076-ui/" target="_blank" rel="noopener noreferrer"
            className="bg-blue-600 w-50 text-center solid-block px-5 py-2.5 text-sm font-medium text-zinc-50 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors">
              LinkedIn <Icon icon="mdi:linkedin" className="inline-block w-5 h-5" />
            </a>
          </div>
        </div>
        <hr className="h-[2px] w-full border-0 bg-gradient-to-r from-transparent via-zinc-400 to-transparent opacity-75" />
        <div className="text-center text-sm text-zinc-500 dark:text-zinc-400 py-4">
          &copy; {new Date().getFullYear()} Min Chit Thu. All rights reserved.
        </div>
      </footer>
    </div>
  );
}