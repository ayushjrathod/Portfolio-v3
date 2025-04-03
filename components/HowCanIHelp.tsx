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
    // Define icons data
    const iconData = [
      { iconPath: "/skills/cpp.png", name: "C++" },
      { iconPath: "/skills/docker.png", name: "Docker" },
      { iconPath: "/skills/express.png", name: "Express" },
      { iconPath: "/skills/fastapi.png", name: "FastAPI" },
      { iconPath: "/skills/figma.png", name: "Figma" },
      { iconPath: "/skills/git.png", name: "Git" },
      { iconPath: "/skills/linux.png", name: "Linux" },
      { iconPath: "/skills/mongo.png", name: "MongoDB" },
      { iconPath: "/skills/nextjs.png", name: "Next.js" },
      { iconPath: "/skills/postgres.png", name: "PostgreSQL" },
      { iconPath: "/skills/python.png", name: "Python" },
      { iconPath: "/skills/typescript.png", name: "TypeScript" },
      { iconPath: "/skills/javascript.png", name: "JavaScript" },
      { iconPath: "/skills/nodejs.png", name: "Node.js" },
      { iconPath: "/skills/zod.png", name: "Zod" },
      { iconPath: "/skills/html.png", name: "HTML" },
      { iconPath: "/skills/streamlit.png", name: "Streamlit" },
    ];

    // Create a grid-based layout for even distribution
    const numIcons = iconData.length;

    // Calculate grid dimensions (approximate square grid)
    const gridSize = Math.ceil(Math.sqrt(numIcons));
    const cellWidth = 100 / gridSize; // percentage
    const cellHeight = 80 / Math.ceil(numIcons / gridSize); // percentage

    // Generate positions based on grid
    const techIcons: TechIcon[] = iconData.map((icon, index) => {
      // Calculate grid position
      const row = Math.floor(index / gridSize);
      const col = index % gridSize;

      // Add some randomness within each cell
      const randomOffsetX = (Math.random() * 0.6 + 0.2) * cellWidth; // 20%-80% of cell width
      const randomOffsetY = (Math.random() * 0.6 + 0.2) * cellHeight; // 20%-80% of cell height

      // Calculate final position
      const top = `${row * cellHeight + randomOffsetY}%`;
      const left = `${col * cellWidth + randomOffsetX}%`;

      return {
        ...icon,
        position: { top, left },
        rotation: {
          speed: 10 + Math.random() * 20,
          direction: Math.random() > 0.5 ? "clockwise" : "counterclockwise",
        },
        size: 40 + Math.floor(Math.random() * 16),
      };
    });

    setIcons(techIcons);
  }, []);

  return (
    <div className="w-full bg-white text-gray-900 py-16 relative overflow-hidden">
      {/* Background with rotating icons */}
      <div className="absolute inset-0 opacity-20">
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
            <Image src={tech.iconPath} alt={tech.name} width={tech.size} height={tech.size} />
          </div>
        ))}
      </div>
      <p className="text-4xl font-bold text-center mb-3">How Can I Help ?</p>
      <p className="text-center text-xl text-gray-600 mb-6">The things I bring to the table!</p>
      <div className="container  mx-auto px-4 w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Software Development */}
          <div className="border shadow-xs border-gray-200 p-8 relative">
            <div className="flex items-center mb-6">
              <Image src="/skills/sde.svg" alt="Software Development" width={72} height={72} className="size-12 mr-2" />
              <div>
                <h2 className="text-2xl font-bold">Software</h2>
                <h2 className="text-2xl font-bold">Development</h2>
              </div>
            </div>
            <div className="text-gray-600 space-y-4">
              <div className="text-xs text-gray-400">&lt;h3&gt;</div>
              <p className="text-sm border-l-2 px-4 ml-3">
                Experienced in developing Full Stack applications with Typescript, Node.js, Express.js, FastAPI(python),
                PostgreSQL, MongoDB, and Docker.
              </p>
              <div className="text-xs text-gray-400">&lt;/h3&gt;</div>
            </div>
          </div>

          {/* Frontend Dev */}
          <div className="border shadow-xs border-gray-200 p-8 relative">
            <div className="flex items-center mb-6">
              <Image
                src="/skills/react.svg"
                alt="Frontend Development"
                width={72}
                height={72}
                className="size-12 mr-2"
              />
              <div>
                <h2 className="text-2xl font-bold">Frontend Dev</h2>
                <h2 className="text-2xl font-bold">React, NextJS</h2>
              </div>
            </div>
            <div className="text-gray-600 space-y-4">
              <div className="text-xs text-gray-400 ">&lt;h3&gt;</div>
              <p className="text-sm border-l-2 px-4 ml-3">
                Passionate about UI/UX. Have built user-friendly and responsive web applications using React.js,
                Next.js, and Tailwind CSS frameworks.
              </p>
              <div className="text-xs text-gray-400">&lt;/h3&gt;</div>
            </div>
          </div>

          {/* Machine Learning */}
          <div className="border shadow-xs border-gray-200 p-8 relative">
            <div className="flex items-center mb-6">
              <Image src="/skills/ml.svg" alt="Web Design" width={72} height={72} className="size-12 mr-2" />
              <div>
                <h2 className="text-2xl font-bold">Machine</h2>
                <h2 className="text-2xl font-bold">Learning, Gen. AI</h2>
              </div>
            </div>
            <div className="text-gray-600 space-y-4">
              <div className="text-xs text-gray-400">&lt;h3&gt;</div>
              <p className="text-sm border-l-2 px-4 ml-3">
                I have a strong foundation in Machine Learning and Generative AI. I have worked on projects involving
                Natural Language Processing (NLP) and Computer Vision.
              </p>
              <div className="text-xs text-gray-400">&lt;/h3&gt;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowCanIHelp;
