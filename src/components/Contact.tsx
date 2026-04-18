import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

const icons = {
  github: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.9c.57.1.78-.25.78-.55 0-.27-.01-1.16-.01-2.1-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.72 1.26 3.38.96.1-.75.41-1.26.74-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 6 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.82 1.19 3.08 0 4.42-2.69 5.38-5.26 5.66.41.36.78 1.08.78 2.18 0 1.57-.02 2.84-.02 3.23 0 .31.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
      />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.64 0 4.31 2.4 4.31 5.52v6.22ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"
      />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  ),
} as const;

const socials = [
  { label: "GitHub", href: site.social.github, icon: icons.github },
  { label: "LinkedIn", href: site.social.linkedin, icon: icons.linkedin },
  { label: "X (Twitter)", href: site.social.twitter, icon: icons.twitter },
] as const;

export default function Contact() {
  return (
    <Section id="contact" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40">
        <SectionHeading
          id="contact-heading"
          number="05"
          label="Contact"
          title="Let's work together."
          description="If you have a role, project, or problem worth solving, send it over and I’ll reply directly."
        />

        <FadeIn className="mt-14" delay={0.1}>
          <div className="surface-panel grid gap-8 p-8 md:grid-cols-[minmax(0,1fr)_16rem] md:p-10">
            <div className="relative">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
                Start a conversation
              </p>
              <a
                href={`mailto:${site.email}`}
                className="group mt-4 inline-flex max-w-full items-center gap-3 text-2xl font-medium tracking-tight text-slate-100 transition-colors hover:text-accent sm:text-3xl md:text-4xl"
                aria-label={`Email ${site.email}`}
              >
                <span className="break-all">{site.email}</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent md:h-7 md:w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </a>

              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-400">
                The fastest way to reach me is email. I’m happy to discuss full-time roles, internships, and select freelance work.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="mt-10" delay={0.15}>
          <ul className="flex flex-wrap items-center gap-3">
            {socials.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={item.label}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.02] text-slate-400 transition-colors hover:border-accent/30 hover:text-accent focus-visible:border-accent/40 focus-visible:text-accent"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </Section>
  );
}
