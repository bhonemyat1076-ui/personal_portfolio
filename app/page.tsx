import Image from "next/image";
import { AnimatedDeveloperSvg } from "./components/AnimatedDeveloperSvg";

export default function Home() {
  return (
    <section className="flex min-h-auto items-center justify-center bg-background transition-colors duration-300">
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center justify-between 
      gap-24 md:flex-row ">

        {/* Left Side: Text Introduction */}
        <div className="text-center space-y-4 max-w-xl md:text-left">

          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Hello, I'm
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-cyan-600 dark:text-cyan-200 sm:text-5xl">
            Min Chit Thu
          </h1>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            a passionate software developer specializing in building web applications.
            Explore my projects and skills below!
          </p>

          {/* Optional Call to Action Buttons */}
          <div className="pt-4 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 transition-colors"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Animated Illustration */}
        {/* Changed from fixed w-64 h-64 to a responsive container so the SVG looks crisp and properly scaled */}
        <div className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[460px]">
          <AnimatedDeveloperSvg />
        </div>

      </div>
    </section>
  );
}
