import { ProjectCardTemplate, ProjectProps } from "./ProjectCardTemplate";
import FirstTimeReveal from "./FirstTimeReveal";

const MY_PORTFOLIO_DATA: ProjectProps[] = [
  {
    title: "Automated ID Card Generation System",
    description: " Developed a custom, automated ID card generation system that replaced a tedious manual process with bulk CSV importing. To ensure consistent performance across low-spec staff devices, I migrated the workload from client-side rendering to a server-side headless browser architecture. The final enterprise-ready utility features a real-time batch-rendering UI, optimized bulk downloads, and automated storage-cleaning hooks to prevent server bloat.",
    techStack: ["Laravel", "Tailwind CSS","Node.js", "PHP","MySQL"],
    images: [
      "/card-system-1.png", // Add your sample screenshot paths inside your /public folder
      "/card-system-2.png",
      "/card-system-3.png"
    ],
    liveUrl: "#", // Optional: Add a live demo URL if available
    githubUrl: "https://github.com/bhonemyat1076-ui/Card-Generator-Project.git"
  },
  {
    title: "Request Ticketing System",
    description: "Designed and implemented a custom request ticketing system to replace an inefficient email-based workflow. The new system features a user-friendly interface for submitting and tracking requests, automated email notifications, and a robust backend for managing tickets. This solution significantly improved response times and streamlined communication between departments.",
    techStack: ["Laravel", "Breeze", "Node.js", "PHP","MySQL"],
    images: [
      "/Request-ticket-1.png",
      "/Request-ticket-2.png",
      "/Request-ticket-3.png"
    ],
      liveUrl: "#",
    githubUrl: "https://github.com/bhonemyat1076-ui/request_ticket_system.git"
  },
  {
    title: "Personal Portfolio Website",
    description: "Built a personal portfolio website to showcase my projects and skills. The website features a clean and modern design, responsive layout, and smooth animations. It includes sections for my bio, project highlights, and contact information. The site is optimized for performance and accessibility, providing an engaging user experience across all devices.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    images: [
      "/Portfolio-img.png"
    ],
    liveUrl: "https://bhonemyat1076-ui.vercel.app/",
    githubUrl: "https://github.com/bhonemyat1076-ui/personal-portfolio.git"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          My Projects
        </h2>
        <p className="text-base text-zinc-500 dark:text-zinc-400 mt-2">
          A showcase of recent engineering applications and custom full-stack solutions.
        </p>
      </div>

      {/* Grid Layout that switches columns automatically based on screen resolution */}
      <div className="flex flex-col gap-6 sm:gap-6 md:gap-8 items-stretch">
        {MY_PORTFOLIO_DATA.map((project, index) => (
          <FirstTimeReveal key={index} storageKey={`project-${index}`}>
            <ProjectCardTemplate project={project} />
          </FirstTimeReveal>
        ))}
      </div>
    </section>
  );
}