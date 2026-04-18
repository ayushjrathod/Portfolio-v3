import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  divider?: boolean;
  "aria-labelledby"?: string;
};

export default function Section({
  id,
  children,
  className,
  divider = true,
  "aria-labelledby": labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative z-10 scroll-mt-24",
        divider && "border-t border-white/[0.05]",
        className,
      )}
    >
      {children}
    </section>
  );
}
