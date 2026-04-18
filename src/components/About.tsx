import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutParagraphs, awards, workingPrinciples } from "@/lib/site";

export default function About() {
  return (
    <Section id="about" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <SectionHeading
          id="about-heading"
          number="01"
          label="About"
          title={
            <>
              Backend-heavy engineer <br className="hidden sm:block" />
              with a taste for AI systems.
            </>
          }
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
          <div className="surface-panel p-8 md:p-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" aria-hidden="true" />
            <div className="space-y-7">
            {aboutParagraphs.map((p, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <p className="text-base leading-[1.75] text-slate-400 md:text-[17px]">
                  {p}
                </p>
              </FadeIn>
            ))}
            </div>
          </div>

          <FadeIn delay={0.1}>
            <div className="grid gap-6">
              <div className="surface-card p-7">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500">
                  How I work
                </p>
                <div className="mt-4 space-y-3">
                  {workingPrinciples.map((principle) => (
                    <div key={principle} className="flex items-start gap-3 text-sm leading-relaxed text-slate-400">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-accent/80" aria-hidden="true" />
                      <p>{principle}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="surface-card p-7">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500">
                  Currently
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  SWE Intern at <span className="text-slate-200">DevDynamics</span>,
                  wrapping a B.Tech in AI &amp; Data Science at VIIT Pune.
                </p>
              </div>

              <div className="surface-card p-7">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500">
                  Highlights
                </p>
                <div className="mt-4 space-y-3">
                  {awards.map((award) => (
                    <div key={award.title} className="flex items-start gap-3 text-sm leading-relaxed text-slate-400">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-accent/80" aria-hidden="true" />
                      <div>
                        <p className="text-slate-200">{award.title}</p>
                        <p className="text-slate-500">{award.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
