import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12 text-xs text-slate-600 md:flex-row md:items-center md:justify-between md:px-10">
        <p>
          Designed &amp; built by{" "}
          <span className="text-slate-400">{site.name}</span> · {year}
        </p>
        <p className="font-mono text-[11px] text-slate-600">
          Built with Next.js, Tailwind &amp; Framer Motion.
        </p>
      </div>
    </footer>
  );
}
