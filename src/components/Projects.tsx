"use client";

import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerList, { StaggerItem } from "@/components/ui/StaggerList";
import { projects } from "@/lib/site";

const ArrowUpRight = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-3.5 w-3.5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export default function Projects() {
  const reduce = useReducedMotion();

  return (
    <Section id="projects" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <SectionHeading
          id="projects-heading"
          number="04"
          label="Projects"
          title="Selected work."
          description="A small set of builds I'm proud of. Focusing on depth over volume. Each one solved a specific, non-trivial problem end-to-end."
        />

        <div className="mt-16 flex flex-col gap-10 md:gap-14">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.05}>
              <motion.article
                className="surface-panel p-8 md:p-12"
                whileHover={
                  reduce
                    ? undefined
                    : {
                        scale: 1.004,
                        transition: {
                          duration: 0.2,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }
                }
              >
                <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-12">
                  <div className="max-w-2xl">
                    <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-600">
                      {String(i + 1).padStart(2, "0")} / Project
                    </p>
                    <h3 className="mt-3 text-2xl font-medium tracking-tight text-slate-50 md:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm text-accent/80 md:text-base">
                      {project.tagline}
                    </p>
                    <p className="mt-5 text-[15px] leading-relaxed text-slate-400">
                      {project.description}
                    </p>

                    <div className="relative mt-8 flex flex-wrap gap-2">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/[0.07] bg-white/[0.02] px-2.5 py-1.5 font-mono text-[11px] text-slate-500"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="surface-card flex shrink-0 flex-col gap-3 self-start p-5 lg:items-start">
                    <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-slate-600">Links</p>
                    {project.links.repositories.map((repository) => (
                      <a
                        key={repository.href}
                        href={repository.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-slate-300 transition-colors hover:text-accent focus-visible:text-accent"
                        aria-label={`${project.name} ${repository.label} repository`}
                      >
                        {repository.label}
                        <ArrowUpRight />
                      </a>
                    ))}
                    {project.links.live ? (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-slate-300 transition-colors hover:text-accent focus-visible:text-accent"
                        aria-label={`${project.name} live demo`}
                      >
                        Live
                        <ArrowUpRight />
                      </a>
                    ) : null}
                    <p className="pt-3 text-sm leading-relaxed text-slate-500">
                      Repos include the implementation details, architecture choices, and trade-offs behind the build.
                    </p>
                  </div>
                </div>

                <StaggerList className="relative mt-10 space-y-3 text-[15px] leading-relaxed text-slate-400">
                  {project.bullets.map((b) => (
                    <StaggerItem key={b} className="relative pl-5">
                      <span
                        className="absolute left-0 top-[0.7em] h-px w-3 bg-accent/50"
                        aria-hidden="true"
                      />
                      {b}
                    </StaggerItem>
                  ))}
                </StaggerList>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
