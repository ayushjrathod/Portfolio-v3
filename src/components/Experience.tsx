import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerList, { StaggerItem } from "@/components/ui/StaggerList";
import { experience } from "@/lib/site";

export default function Experience() {
  return (
    <Section id="work" aria-labelledby="work-heading">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <SectionHeading
          id="work-heading"
          number="03"
          label="Work"
          title="Where I've shipped."
          description="Three roles, one throughline: measurable backend and AI infrastructure that survived contact with production."
        />

        <ol className="mt-16 space-y-8 md:space-y-10">
          {experience.map((job) => (
            <FadeIn key={job.id}>
              <li className="relative border-l border-white/[0.08] pl-8 md:pl-10">
                <span
                  className="absolute -left-[5px] top-[0.6rem] h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_4px_#08080c]"
                  aria-hidden="true"
                />
                <article className="surface-panel p-7 md:p-8">
                  <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                    <div>
                      <h3 className="text-xl font-medium tracking-tight text-slate-50 md:text-2xl">
                        {job.company}
                        {job.isCurrent ? (
                          <span className="ml-3 align-middle text-[10px] font-medium uppercase tracking-[0.22em] text-accent">
                            · Current
                          </span>
                        ) : null}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">
                        {job.role}
                        <span className="text-slate-600"> — {job.location}</span>
                      </p>
                    </div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500 sm:text-right">
                      {job.period}
                    </p>
                  </header>
                  <StaggerList className="mt-6 space-y-3 text-[15px] leading-relaxed text-slate-400">
                    {job.highlights.map((h) => (
                      <StaggerItem key={h} className="relative pl-5">
                        <span
                          className="absolute left-0 top-[0.7em] h-px w-3 bg-accent/50"
                          aria-hidden="true"
                        />
                        {h}
                      </StaggerItem>
                    ))}
                  </StaggerList>
                </article>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </Section>
  );
}
