import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import FadeIn from "./FadeIn";

type SectionHeadingProps = {
  number: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  id: string;
  className?: string;
};

export default function SectionHeading({
  number,
  label,
  title,
  description,
  id,
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn>
      <div className={cn("max-w-3xl", className)}>
        <div
          className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-slate-500"
          aria-hidden="true"
        >
          <span className="text-accent">{number}</span>
          <span className="h-px w-10 bg-white/[0.12]" />
          <span>{label}</span>
        </div>
        <h2
          id={id}
          className="mt-6 text-3xl font-semibold tracking-[-0.02em] text-slate-50 sm:text-4xl md:text-5xl"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-500 md:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </FadeIn>
  );
}
