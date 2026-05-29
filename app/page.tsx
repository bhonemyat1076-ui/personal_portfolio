import Image from "next/image";
import { AnimatedDeveloperSvg } from "./components/AnimatedDeveloperSvg";
import Typewriter from "./components/TypeWriter";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <div className="space-y-16 bg-background text-foreground transition-colors duration-300">

      {/* 1. Hero / Home Section */}
      <section id="home" className="px-6 md:px-12 pt-6">
        {/* Main interactive row frame */}
        {/* Cleaned layout container: Swapped justify-between for items-center and added uniform theme colors */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-16 bg-zinc-50 border border-zinc-200 p-8 sm:p-12 md:p-16 dark:bg-slate-900/50 dark:border-zinc-800 mt-4 solid-block transition-all duration-300">

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
      </section>

      {/* 2. About Me Section */}
      <section id="about" className="px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-cyan-900 dark:text-cyan-200">
            About Me
          </h2>
        <div className="w-full solid-block border border-zinc-200 bg-zinc-50 p-8 sm:p-12 dark:border-slate-900 dark:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-300">

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            {/* Content Segment Blocks */}
            <div className="md:col-span-3 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-cyan-700 dark:text-cyan-300 flex items-center gap-2">
                  Who I Am and <span className="font-mono text-green-500 font-bold">&lt;/&gt;</span>
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  I'm a software developer with a passion for creating efficient and scalable web applications.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-cyan-700 dark:text-cyan-300">
                  My Journey in Software Development
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  I started my journey in software development during my college years.
                  Over the years, I've honed my skills in various programming languages and frameworks,
                  working on projects that have challenged and inspired me.
                </p>
              </div>
            </div>

            {/* Media Presentation Display */}
            <div className="md:col-span-2 flex justify-center">
              <Image
                src="/Programming Computer.svg"
                alt="About Me Image"
                width={400}
                height={400}
                className="rounded-xl object-contain max-w-[240px] sm:max-w-[280px] md:max-w-full transition-transform duration-300 hover:scale-102"
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
      <section id="contact" className="px-6 md:px-12 pb-16">
        <div className="relative z-10 mb-10 text-center md:text-left w-full max-w-5xl">
          <h2 className="text-4xl text-center font-bold text-cyan-900 dark:text-cyan-200 tracking-tight">
            Contact Me
          </h2>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Image
              src="/contact.svg"
              alt="Contact Image"
              width={300}
              height={300}
            />
            <div className="space-y-4 max-w-md solid-block border rounded-2xl border-zinc-200 bg-zinc-50 p-6 dark:border-slate-900 dark:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-row items-center gap-3">
                <input type="text" placeholder="Your Name" className="bg-transparent border-b border-zinc-300 focus:outline-none focus:border-cyan-500" />
              </div>
              <div className="flex flex-row items-center gap-3">
                <input type="email" placeholder="Your Email" className="bg-transparent border-b border-zinc-300 focus:outline-none focus:border-cyan-500" />
              </div>
              <div className="flex flex-row items-center gap-3">
                <input type="text" placeholder="Your Message" className="bg-transparent border-b border-zinc-300 focus:outline-none focus:border-cyan-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}