"use client";
import Image from "next/image";
import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "https://res.cloudinary.com/cnserver/image/upload/t_projects_section/twtykmlpjspyubqkayk3",
      alt: "Advista Home Page",
      title: "Advista",
      subtitle: "AI-Powered Advertising Research",
      description:
        "ADVISTA identifies user pain points and emotional triggers by aggregating data from platforms like Google, YouTube, Reddit, and social media.",
      github: "https://github.com/ayushjrathod/Advista",
      tech: ["Next.js", "Hono.js", "OpenAI", "Langchain", "Puppeteer"],
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/cnserver/image/upload/t_projects_section/vva14psdqbet8dnmm1vh",
      alt: "Nyaybodh Home Page",
      title: "NyayaBodh",
      subtitle: "AI Legal Research Engine",
      description:
        "Streamlines legal research and document handling using AI. Empowers users with intelligent access to legal information.",
      github: "https://github.com/ayushjrathod/NyayaBodh",
      tech: ["Next.js", "FastAPI", "PostgreSQL", "pgVector", "LlamaIndex"],
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/cnserver/image/upload/t_projects_section/p3ptajvvqag2nsjksd4j",
      title: "AuditIQ",
      subtitle: "AI-Powered Fraud Detection",
      description:
        "Automates expense submission reviews with integrated AI-driven fraud detection and intelligent voice-based interrogation.",
      alt: "AuditIQ Home Page",
      github: "https://github.com/ayushjrathod/AuditIQ",
      tech: ["Next.js", "Node.js", "Express", "MongoDB", "GCP"],
    },
  ];

  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <div id="projects" className="min-h-screen py-20 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          Things I’ve Built
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          Here are some of the projects I&apos;m most proud of. They showcase my passion for building useful and
          innovative solutions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          <div className="lg:col-span-1">
            <ul className="space-y-2 sticky top-24">
              {projects.map((project) => (
                <li key={project.id}>
                  <button
                    onClick={() => setActiveProject(project)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      activeProject.id === project.id
                        ? "bg-white dark:bg-gray-800/50 shadow-md"
                        : "hover:bg-gray-100 dark:hover:bg-gray-900/50"
                    }`}
                  >
                    <h3
                      className={`text-xl font-bold ${
                        activeProject.id === project.id
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{project.subtitle}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8 group">
                <Image
                  src={activeProject.image}
                  alt={activeProject.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">{activeProject.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{activeProject.description}</p>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                {activeProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
              >
                <span>View on GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 ml-2 fill-current">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
