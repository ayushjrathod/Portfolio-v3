"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site, status } from "@/lib/site";
import { useEffect, useRef, useState } from "react";

const CV_PATH = "/AyushRathod.pdf";
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

const stats = [
  { value: 3, suffix: "+", label: "Companies Experience" },
  { value: 5, suffix: "+", label: "Hackathons Won" },
  { value: 5, suffix: "+", label: "Systems Shipped" },
] as const;

const quickNotes = [
  "Fast from idea to shipped product",
  "Backend and AI systems built for real users",
  "I own execution end to end",
] as const;

const socialIcons = {
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

const heroSocials = [
  { label: "GitHub", href: site.social.github, icon: socialIcons.github },
  { label: "LinkedIn", href: site.social.linkedin, icon: socialIcons.linkedin },
  { label: "X (Twitter)", href: site.social.twitter, icon: socialIcons.twitter },
] as const;

// --- Scramble name animation ---
function ScrambleName({ name, delay = 0 }: { name: string; delay?: number }) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState<string[]>(() => name.split("").map(() => " "));
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (reduce) { setDisplay(name.split("")); return; }

    // 50ms per frame → ~20fps. Each letter resolves left-to-right over ~30 frames (~1.5s).
    const FRAME_MS = 50;
    const total = 30;

    const tid = window.setTimeout(() => {
      let frame = 0;

      const intervalId = window.setInterval(() => {
        setDisplay(
          name.split("").map((ch, i) => {
            const resolveAt = Math.floor((i / name.length) * total);
            if (ch === " ") return " ";
            if (frame >= resolveAt + 3) return ch;
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          }),
        );
        frame++;
        if (frame > total + 3) {
          window.clearInterval(intervalId);
          setDisplay(name.split(""));
        }
      }, FRAME_MS);

      frameRef.current = intervalId as unknown as number;
    }, delay);

    return () => {
      clearTimeout(tid);
      if (frameRef.current !== null) window.clearInterval(frameRef.current);
    };
  }, [name, delay, reduce]);

  return (
    <span className="inline-block font-mono" style={{ letterSpacing: "-0.035em" }}>
      {display.map((ch, i) => (
        <span
          key={i}
          className={ch === " " ? "inline-block w-[0.25em]" : "inline-block"}
          style={{
            color: display.join("") === name ? undefined : `rgba(100,255,218,${0.4 + Math.random() * 0.3})`,
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

// --- Count-up number ---
function CountUp({ to, delay = 0 }: { to: number; delay?: number }) {
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : 0);

  useEffect(() => {
    if (reduce) { setVal(to); return; }
    const tid = window.setTimeout(() => {
      let start: number | null = null;
      const duration = 900;
      const step = (ts: number) => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        setVal(Math.floor(progress * to));
        if (progress < 1) requestAnimationFrame(step);
        else setVal(to);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(tid);
  }, [to, delay, reduce]);

  return <>{val}</>;
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92svh] flex-col justify-center px-6 pb-24 pt-32 md:px-10"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-12">
          <div className="max-w-4xl">
          <motion.div
            className="mb-8 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-slate-400">
                {site.title}
              </p>
            </div>
            <div className="hidden h-4 w-px bg-white/[0.1] sm:block" aria-hidden="true" />
            <p className="text-xs text-slate-500">
              {status.current}
            </p>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="max-w-4xl text-[clamp(3.1rem,8vw,6.4rem)] font-semibold leading-[0.94] text-slate-50"
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 0.01 }}
            aria-label="Ayush Rathod"
          >
            <ScrambleName name="Ayush" delay={300} />
            {" "}
            <ScrambleName name="Rathod" delay={550} />
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl text-lg leading-relaxed text-slate-400 md:text-[1.2rem]"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.tagline}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={CV_PATH}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 border border-white/[0.15] bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:bg-white/[0.07] hover:text-white focus-visible:border-accent/50"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Get CV
              </a>
              <a
                href="mailto:ayushjrathod7@gmail.com"
                className="inline-flex items-center gap-2 bg-accent/90 px-5 py-2.5 text-sm font-semibold text-canvas transition-colors hover:bg-accent focus-visible:bg-accent"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
                Reach Out
              </a>
            </div>
            <div
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400"
              role="status"
              aria-label={status.label}
            >
              <span className="relative flex h-1.5 w-1.5 shrink-0" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60 opacity-40" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {status.label}
            </div>

          </motion.div>

          <motion.div
            className="mt-14 grid gap-3 border-t border-white/[0.06] pt-8 sm:grid-cols-3"
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            {stats.map(({ value, suffix, label }, i) => (
              <div key={label} className="surface-card p-5">
                <p className="font-mono text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
                  <CountUp to={value} delay={900 + i * 120} />
                  <span className="text-accent">{suffix}</span>
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-slate-600">{label}</p>
              </div>
            ))}
          </motion.div>
          </div>

          <motion.aside
            className="surface-panel hidden p-6 lg:block"
            initial={reduce ? false : { opacity: 0, x: 18 }}
            animate={reduce ? undefined : { opacity: 1, x: 0 }}
            transition={{ delay: 0.95, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-slate-500">
                Snapshot
              </p>
              <div className="mt-6 grid gap-4 text-sm text-slate-400">
                <div className="rounded-2xl border border-white/[0.08] bg-transparent p-4">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-slate-600">Based in</p>
                  <p className="mt-2 text-base text-slate-100">{site.location}</p>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-transparent p-4">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-slate-600">Current focus</p>
                  <p className="mt-2 leading-relaxed text-slate-300">Applied AI systems, backend architecture and system design, and shipping developer-facing infrastructure.</p>
                </div>
              </div>

              <div className="mt-6 space-y-3 border-t border-white/[0.08] pt-6">
                {quickNotes.map((note) => (
                  <div key={note} className="flex items-start gap-3 text-sm leading-relaxed text-slate-400">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    <span>{note}</span>
                  </div>
                ))}

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  {heroSocials.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={item.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.02] text-slate-400 transition-colors hover:border-accent/30 hover:text-accent focus-visible:border-accent/40 focus-visible:text-accent"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.4 }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-slate-600">
          <span>Scroll</span>
          <span className="block h-8 w-px bg-gradient-to-b from-slate-600 to-transparent" />
        </div>
      </motion.div>

    </section>
  );
}
