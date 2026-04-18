"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

const CALENDLY = "https://calendly.com/ayushjrathod7";

function LiveTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 10_000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <div className="hidden items-center gap-1.5 text-[10px] font-medium text-slate-500 md:flex" aria-label={`Current time in IST: ${time}`}>
      <span className="h-1 w-1 rounded-full bg-accent/50" aria-hidden="true" />
      <span className="font-mono tracking-wider">{time}</span>
      <span className="text-slate-700">IST</span>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-5 z-40 flex justify-center px-4 sm:px-6">
      <motion.nav
        aria-label="Primary"
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "flex items-center gap-0 border px-1.5 py-1.5 rounded-full",
          "transition-[background-color,border-color,box-shadow] duration-300",
          scrolled
            ? "border-white/[0.13] bg-[#08080c]/92 shadow-[0_8px_40px_rgba(0,0,0,0.65)] backdrop-blur-xl"
            : "border-white/[0.08] bg-[#08080c]/75 backdrop-blur-md",
        )}
        initial={reduce ? false : { opacity: 0, y: -12, scale: 0.96 }}
        animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Monogram */}
        <a
          href="#top"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.1] text-[11px] font-semibold text-slate-200 transition-colors hover:border-accent/50 hover:text-accent focus-visible:border-accent/50 focus-visible:text-accent"
          aria-label="Ayush Rathod — back to top"
        >
          AR
        </a>

        {/* Divider */}
        <div className="mx-3 h-5 w-px shrink-0 bg-white/[0.08]" aria-hidden="true" />

        {/* Nav links with sliding pill indicator */}
        <ul className="hidden items-center gap-0.5 sm:flex" role="list">
          {links.map((l) => (
            <li key={l.href} className="relative">
              <a
                href={l.href}
                onMouseEnter={() => setHovered(l.href)}
                className="relative z-10 block rounded-full px-3 py-1.5 text-sm text-slate-400 transition-colors duration-150 hover:text-slate-100 focus-visible:text-accent"
              >
                {/* Sliding background pill */}
                {hovered === l.href ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.06]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    aria-hidden="true"
                  />
                ) : null}
                <span className="relative">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="mx-3 hidden h-5 w-px shrink-0 bg-white/[0.08] sm:block" aria-hidden="true" />

        {/* Live IST time */}
        <LiveTime />

        {/* Divider (only if time is shown) */}
        <div className="mx-3 hidden h-5 w-px shrink-0 bg-white/[0.08] md:block" aria-hidden="true" />

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:text-slate-100 sm:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="4" y1="8" x2="20" y2="8" /><line x1="4" y1="16" x2="20" y2="16" /></>
            )}
          </svg>
        </button>

        {/* Book a Call */}
        <a
          href={CALENDLY}
          target="_blank"
          rel="noreferrer noopener"
          className="shrink-0 rounded-full bg-accent/90 px-4 py-2 text-xs font-semibold text-canvas transition-colors hover:bg-accent focus-visible:bg-accent"
        >
          Book a Call
        </a>
      </motion.nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <motion.div
          className="mt-2 flex flex-col gap-1 rounded-2xl border border-white/[0.1] bg-[#08080c]/95 p-3 backdrop-blur-xl sm:hidden"
          initial={reduce ? false : { opacity: 0, y: -8 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-2.5 text-sm text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-slate-100"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </div>
  );
}
