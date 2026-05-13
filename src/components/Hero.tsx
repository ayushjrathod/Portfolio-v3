"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site, status } from "@/lib/site";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const CV_PATH = "/AyushRathod.pdf";
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

const stats = [
  { value: 3, suffix: "+", label: "Companies Experience" },
  { value: 5, suffix: "+", label: "Hackathons Won" },
  { value: 5, suffix: "+", label: "Systems Shipped" },
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
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-14">
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
            className="hidden self-stretch lg:block"
            initial={reduce ? false : { opacity: 0, x: 18 }}
            animate={reduce ? undefined : { opacity: 1, x: 0 }}
            transition={{ delay: 0.95, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-full min-h-[420px] overflow-hidden">
              <Image
                src="/my_image_sketch.png"
                alt="Ayush Rathod"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute inset-x-0 top-0 h-[15%]" style={{ background: "linear-gradient(to bottom, #08080c 0%, transparent 100%)" }} />
                <div className="absolute inset-x-0 bottom-0 h-2/5" style={{ background: "linear-gradient(to top, #08080c 0%, transparent 100%)" }} />
                <div className="absolute inset-y-0 left-0 w-[28%]" style={{ background: "linear-gradient(to right, #08080c 0%, transparent 100%)" }} />
                <div className="absolute inset-y-0 right-0 w-[28%]" style={{ background: "linear-gradient(to left, #08080c 0%, transparent 100%)" }} />
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
