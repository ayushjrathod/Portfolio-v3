"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { skillCategories } from "@/lib/site";

type FloatingIcon = {
  src: string;
  name: string;
  top: string;
  left: string;
  size: number;
  speed: number;
  dir: "clockwise" | "counterclockwise";
};

const iconLayers: Array<{
  id: string;
  className: string;
  items: FloatingIcon[];
}> = [
  {
    id: "primary",
    className: "opacity-[0.24]",
    items: [
      { src: "/skills/typescript.png", name: "TypeScript", top: "12%", left: "18%", size: 54, speed: 22, dir: "clockwise" },
      { src: "/skills/python.png", name: "Python", top: "8%", left: "46%", size: 56, speed: 24, dir: "counterclockwise" },
      { src: "/skills/nodejs.png", name: "Node.js", top: "14%", left: "72%", size: 52, speed: 20, dir: "clockwise" },
      { src: "/skills/fastapi.png", name: "FastAPI", top: "34%", left: "84%", size: 48, speed: 19, dir: "counterclockwise" },
    ],
  },
  {
    id: "secondary",
    className: "opacity-[0.18]",
    items: [
      { src: "/skills/nextjs.png", name: "Next.js", top: "34%", left: "10%", size: 44, speed: 28, dir: "counterclockwise" },
      { src: "/skills/postgres.png", name: "PostgreSQL", top: "48%", left: "32%", size: 42, speed: 26, dir: "clockwise" },
      { src: "/skills/docker.png", name: "Docker", top: "56%", left: "66%", size: 44, speed: 30, dir: "counterclockwise" },
      { src: "/skills/react.png", name: "React", top: "46%", left: "88%", size: 40, speed: 32, dir: "clockwise" },
    ],
  },
  {
    id: "tertiary",
    className: "opacity-[0.12]",
    items: [
      { src: "/skills/git.png", name: "Git", top: "72%", left: "14%", size: 34, speed: 36, dir: "clockwise" },
      { src: "/skills/linux.png", name: "Linux", top: "78%", left: "36%", size: 34, speed: 38, dir: "counterclockwise" },
      { src: "/skills/javascript.png", name: "JavaScript", top: "74%", left: "60%", size: 34, speed: 34, dir: "clockwise" },
      { src: "/skills/mongo.png", name: "MongoDB", top: "80%", left: "82%", size: 34, speed: 40, dir: "counterclockwise" },
    ],
  },
];

const capabilities = [
  {
    icon: "/skills/sde.svg",
    title: "Backend Systems",
    subtitle: "Distributed & reliable",
    body: "Kafka-based microservices, REST and GraphQL APIs, database optimization, AWS infrastructure (EC2, S3, Lambda, ALB, VPC), Docker-based deployments, and CI/CD pipelines that actually hold up under load.",
  },
  {
    icon: "/skills/ml.svg",
    title: "AI / LLM Engineering",
    subtitle: "Production-grade AI",
    body: "RAG pipelines, LangChain and LangGraph workflows, AST-based semantic code analysis across 19 languages, MCP servers exposing AI-friendly APIs, and LLM output validation with schema enforcement.",
  },
  {
    icon: "/skills/react.svg",
    title: "Full-Stack Product",
    subtitle: "End-to-end ownership",
    body: "Next.js and React frontends, Node.js and FastAPI backends, Stripe billing, real-time features, PostgreSQL and MongoDB data layers — built and shipped from zero to production.",
  },
] as const;

export default function WhatIDo() {
  return (
    <Section id="whatido" aria-labelledby="whatido-heading">
      <div className="relative w-full py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {iconLayers.map((layer) => (
            <div key={layer.id} className={layer.className}>
              {layer.items.map((icon) => (
                <div
                  key={icon.name}
                  className="absolute"
                  style={{
                    top: icon.top,
                    left: icon.left,
                    width: icon.size,
                    height: icon.size,
                    animation: `${icon.dir === "clockwise" ? "spin" : "spin-reverse"} ${icon.speed}s linear infinite`,
                  }}
                >
                  <Image
                    src={icon.src}
                    alt={icon.name}
                    width={icon.size}
                    height={icon.size}
                    className="invert brightness-150"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="relative mx-auto max-w-6xl px-6 md:px-10">
          <SectionHeading
            id="whatido-heading"
            number="02"
            label="What I do"
            title="What I bring to the table."
            description="Three areas where I've built real systems — not just polished demos."
          />

          <div className="relative mt-14 grid gap-5 md:grid-cols-3">
            {capabilities.map((cap, i) => (
              <FadeIn key={cap.title} delay={i * 0.06}>
                <div className="surface-panel flex h-full flex-col gap-5 p-8 md:p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.03] transition-colors group-hover:border-accent/30">
                    <Image
                      src={cap.icon}
                      alt={cap.title}
                      width={24}
                      height={24}
                      className="invert opacity-55"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
                      {cap.subtitle}
                    </p>
                    <h3 className="mt-1.5 text-lg font-medium tracking-tight text-slate-50">
                      {cap.title}
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm text-slate-500">
                    <span className="block font-mono text-[10px] text-slate-700">&lt;p&gt;</span>
                    <p className="border-l border-white/[0.07] pl-4 text-[15px] leading-relaxed text-slate-400">
                      {cap.body}
                    </p>
                    <span className="block font-mono text-[10px] text-slate-700">&lt;/p&gt;</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="relative mt-20">
            <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-600">Tech Stack</p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skillCategories.map((cat, i) => (
                <FadeIn key={cat.category} delay={i * 0.04}>
                  <div className="surface-card p-6">
                    <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-accent/70">{cat.category}</p>
                    <ul className="flex flex-wrap gap-2">
                      {cat.skills.map((s) => (
                        <li key={s} className="rounded-full border border-white/[0.07] bg-white/[0.02] px-2.5 py-1.5 font-mono text-[11px] text-slate-400">{s}</li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
