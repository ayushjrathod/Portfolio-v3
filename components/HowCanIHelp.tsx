"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type TechIcon = {
  iconPath: string;
  name: string;
  position: { top: string; left: string };
  rotation: { speed: number; direction: "clockwise" | "counterclockwise" };
  size: number;
};

const HowCanIHelp = () => {
  const [icons, setIcons] = useState<TechIcon[]>([]);

  useEffect(() => {
    const iconData = [
      { iconPath: "/skills/cpp.png", name: "C++" },
      { iconPath: "/skills/docker.png", name: "Docker" },
      { iconPath: "/skills/express.png", name: "Express" },
      { iconPath: "/skills/fastapi.png", name: "FastAPI" },
      { iconPath: "/skills/figma.png", name: "Figma" },
      { iconPath: "/skills/git.png", name: "Git" },
      { iconPath: "/skills/honojs.png", name: "HonoJS" },
      { iconPath: "/skills/javascript.png", name: "JavaScript" },
      { iconPath: "/skills/linux.png", name: "Linux" },
      { iconPath: "/skills/mongo.png", name: "MongoDB" },
      { iconPath: "/skills/nextjs.png", name: "Next.js" },
      { iconPath: "/skills/nodejs.png", name: "Node.js" },
      { iconPath: "/skills/postgres.png", name: "PostgreSQL" },
      { iconPath: "/skills/python.png", name: "Python" },
      { iconPath: "/skills/react.png", name: "React" },
      { iconPath: "/skills/sql.png", name: "SQL" },
      { iconPath: "/skills/streamlit.png", name: "Streamlit" },
      { iconPath: "/skills/typescript.png", name: "TypeScript" },
      { iconPath: "/skills/zod.png", name: "Zod" },
    ];

    const techIcons = iconData.map((tech) => {
      const top = `${Math.random() * 100}%`;
      const left = `${Math.random() * 100}%`;
      return {
        ...tech,
        position: { top, left },
        rotation: {
          speed: 10 + Math.random() * 20,
          direction: Math.random() > 0.5 ? ("clockwise" as const) : ("counterclockwise" as const),
        },
        size: 20 + Math.floor(Math.random() * 12), // Reduced icon sizes for better mobile view
      };
    });

    setIcons(techIcons);
  }, []);

  return (
    <div className="w-full text-gray-900 dark:text-white py-8 md:py-16 relative overflow-hidden">
      {/* Background tech icons */}
      <div className="absolute inset-0 opacity-10 ">
        {icons.map((tech, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              top: tech.position.top,
              left: tech.position.left,
              animation: `${tech.rotation.direction === "clockwise" ? "spin" : "spin-reverse"} ${
                tech.rotation.speed
              }s linear infinite`,
              width: `${tech.size}px`,
              height: `${tech.size}px`,
            }}
          >
            <Image src={tech.iconPath} alt={tech.name} width={tech.size} height={tech.size} className="dark:invert" />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 dark:text-white">How Can I Help ?</h2>
        <p className="text-center text-base md:text-xl text-gray-600 dark:text-gray-400 mb-8 px-4">
          The things I bring to the table!
        </p>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Software Development */}
            <div className="border  border-gray-200 dark:border-gray-700 p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="shrink-0">
                  <Image
                    src="/skills/sde.svg"
                    alt="Software Development"
                    width={48}
                    height={48}
                    className="size-10 md:size-12 dark:invert"
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl md:text-2xl font-bold dark:text-white">Software</h2>
                  <h2 className="text-xl md:text-2xl font-bold dark:text-white">Development</h2>
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-400 space-y-4">
                <div className="text-xs text-gray-400 dark:text-gray-500">&lt;h3&gt;</div>
                <p className="text-sm md:text-base border-l-2 px-4 ml-3">
                  Experienced in developing Full Stack applications with Typescript, Node.js, Express.js,
                  FastAPI(python), PostgreSQL, MongoDB, and Docker.
                </p>
                <div className="text-xs text-gray-400 dark:text-gray-500">&lt;/h3&gt;</div>
              </div>
            </div>

            {/* Frontend Dev */}
            <div className="border border-gray-200 dark:border-gray-700 p-6 md:p-8 ">
              <div className="flex items-center mb-6">
                <div className="shrink-0">
                  <Image
                    src="/skills/react.svg"
                    alt="Frontend Development"
                    width={48}
                    height={48}
                    className="size-10 md:size-12 dark:invert"
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl md:text-2xl font-bold dark:text-white">Frontend Dev</h2>
                  <h2 className="text-xl md:text-2xl font-bold dark:text-white">React, NextJS</h2>
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-400 space-y-4">
                <div className="text-xs text-gray-400 dark:text-gray-500">&lt;h3&gt;</div>
                <p className="text-sm md:text-base border-l-2 px-4 ml-3">
                  Passionate about UI/UX. Have built user-friendly and responsive web applications using React.js,
                  Next.js, and Tailwind CSS frameworks.
                </p>
                <div className="text-xs text-gray-400 dark:text-gray-500">&lt;/h3&gt;</div>
              </div>
            </div>

            {/* Machine Learning */}
            <div className="border  border-gray-200 dark:border-gray-700 p-6 md:p-8 ">
              <div className="flex items-center mb-6">
                <div className="shrink-0">
                  <Image
                    src="/skills/ml.svg"
                    alt="ML"
                    width={48}
                    height={48}
                    className="size-10 md:size-12 dark:invert"
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl md:text-2xl font-bold dark:text-white">Machine</h2>
                  <h2 className="text-xl md:text-2xl font-bold dark:text-white">Learning</h2>
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-400 space-y-4">
                <div className="text-xs text-gray-400 dark:text-gray-500">&lt;h3&gt;</div>
                <p className="text-sm md:text-base border-l-2 px-4 ml-3">
                  Proficient in developing and deploying ML models, with a particular focus on NLP, Computer Vision, and
                  Generative AI.
                </p>
                <div className="text-xs text-gray-400 dark:text-gray-500">&lt;/h3&gt;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowCanIHelp;
