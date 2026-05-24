import Image from "next/image";
import { AnimatedDeveloperSvg } from "./components/AnimatedDeveloperSvg";
import Typewriter from "./components/TypeWriter";
import ImageStack from "./components/ImageStack";


export default function Home() {
  return (
    <div>
      <section id="home" className="flex flex-col justify-center items-stretch 
      mx-12 mb-6 bg-background transition-colors duration-300">
        <div className="flex flex-col justify-between 
      gap-24 sm:gap-4 md:flex-row bg-amber-70 w-full py-16
      dark:bg-slate-800 mt-4 py-8x px-16 solid-block transition-shadow duration-300">

          {/* Left Side: Text Introduction */}
          <div className="text-center mx-8 space-y-4 space-x-4 max-w-xl md:text-left py-16 sm:py-4">

            <p className="text-lg py-2 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Hello, I'm
            </p>
            <h1 className="text-4xl font-extrabold font-mono tracking-tight
           text-cyan-600 dark:text-cyan-200 sm:text-5xl">
              Min Chit Thu
            </h1>
            <Typewriter />
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              a passionate software developer specializing in building web applications.
              Explore my projects and skills below!
            </p>

            {/* Optional Call to Action Buttons */}
            <div className="pt-4 flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="#projects"
                className="bg-zinc-900 solid-block px-5 py-2.5 text-sm font-medium text-white
               hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 transition-colors"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="solid-block border border-zinc-200 bg-white px-5 py-2.5 text-sm 
              font-medium text-zinc-950 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Side: Animated Illustration */}
          {/* Changed from fixed w-64 h-64 to a responsive container so the SVG looks crisp and properly scaled */}
          <div className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[460px] mx-8">
            <AnimatedDeveloperSvg />
          </div>
        </div>
        {/* About Me Section */}

      </section>
      <section id="about" className="flex flex-col justify-center items-stretch 
        mx-12 mb-6 bg-background transition-colors duration-300">
        <div className="flex flex-col justify-center mt-2 w-full gap-6 items-stretch transition-shadow duration-300">
          <h1 className="text-3xl font-bold text-center mt-8 text-cyan-900 dark:text-cyan-50">
            About Me
          </h1>
          <div className="flex flex-row justify-between items-stretch w-full gap-12">
            <div className="flex justify-between flex-col">
              <div className="px-12 py-4 flex justify-center flex-col items-start solid-block bg-amber-70
             dark:bg-slate-800 w-full">
                <h3 className="text-2xl font-semibold text-center mb-4 text-cyan-700 dark:text-cyan-300">
                  Who I Am and <span className="font-mono text-green-500 bold">&lt;/&gt;</span>
                </h3>
                <p className="text-md leading-relaxed text-zinc-600 dark:text-zinc-400 mx-auto text-start">
                  I'm a software developer with a passion for creating efficient and scalable web applications.
                </p>
              </div>
              <div className="px-12 py-4 flex justify-center flex-col items-start solid-block bg-amber-70
             dark:bg-slate-800 w-full">
                <h3 className="text-2xl font-semibold text-center mb-4 text-cyan-700 dark:text-cyan-300">
                  My Journey in Software Development
                </h3>
                <p className="text-md leading-relaxed text-zinc-600 dark:text-zinc-400 mx-auto text-start">
                  I started my journey in software development during my college years.
                  Over the years, I've honed my skills in various programming languages and frameworks,
                  and I've had the opportunity to work on a variety of projects that have challenged and inspired me.
                </p>
              </div>
            </div>
            <Image
              src="/Programming Computer.svg"
              alt="About Me Image"
              width={500}
              height={500}
              className="object-cover solid-block w-full 
            bg-amber-70 dark:bg-slate-800 max-w-md transition-transform
             duration-300 hover:scale-105 hidden sm:block max-w-[280px] md:max-w-[420px] lg:max-w-[460px]"
            />
          </div>
        </div>
      </section>
      <section id="projects" className="flex flex-col justify-center items-stretch 
        mx-12 mb-6 bg-background transition-colors duration-300">
        <div className="flex flex-col justify-center mt-2 w-full gap-6 items-stretch transition-shadow duration-300">
          <h1 className="text-3xl font-bold text-center mt-8 text-cyan-900 dark:text-cyan-50">
            My Projects
          </h1>
          <div className="flex flex-col gap-6">
            <div className="px-12 py-4 flex justify-center flex-col items-start solid-block bg-amber-70
             dark:bg-slate-800 w-full">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-700 dark:text-cyan-300">
                  Automated ID Card Generation System
                </h3>
                <p className="text-md leading-relaxed text-zinc-600 dark:text-zinc-400 mx-auto text-start">
                 Developed a custom, automated ID card generation system that replaced a tedious manual process with bulk CSV importing. To ensure consistent performance across low-spec staff devices, I migrated the workload from client-side rendering to a server-side headless browser architecture. The final enterprise-ready utility features a real-time batch-rendering UI, optimized bulk downloads, and automated storage-cleaning hooks to prevent server bloat.
                </p>
              </div>
                <ImageStack />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
