import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { imageReveal, viewportOnce } from "@/lib/animations";

// A reusable "premium abstract visual" panel used everywhere the design
// calls for large-scale imagery (hero, editorial sections, solution/
// industry showcases, CTAs). Phase 13's brief prioritizes real corporate
// photography, but no licensed/verified photography assets exist in this
// project (see docs/CONTENT_REVIEW_REQUIRED.md) — and the brief is
// equally explicit that fabricated stock-style or AI-looking imagery must
// be avoided. This component is the deliberate middle path: a
// sophisticated, on-brand gradient/geometry treatment that gives every
// section real visual weight without inventing photography. Swap the
// rendered markup here for real <img> tags, section by section, the
// moment Excelligent supplies approved photography.

type Tone = "navy" | "tint" | "surface";

const toneClasses: Record<Tone, string> = {
  navy: "bg-navy-mesh",
  tint: "bg-panel-tint",
  surface: "bg-surface-tint",
};

export function VisualPanel({
  tone = "navy",
  label,
  icon: Icon,
  eyebrow,
  className = "",
  children,
  animate = true,
}: {
  tone?: Tone;
  label: string;
  icon?: LucideIcon;
  eyebrow?: string;
  className?: string;
  children?: React.ReactNode;
  animate?: boolean;
}) {
  const content = (
    <div className={`relative isolate flex h-full w-full flex-col justify-end overflow-hidden rounded-3xl ${toneClasses[tone]} ${className}`}>
      <div className="absolute inset-0 bg-hero-grid bg-grid opacity-[0.15]" aria-hidden="true" />
      <div
        className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-secondary/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-primary-light/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative z-10 p-6 sm:p-8" role="img" aria-label={label}>
        {Icon && (
          <span
            className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl ${
              tone === "surface" ? "bg-primary/10 text-primary" : "bg-white/15 text-white"
            }`}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        )}
        {eyebrow && (
          <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${tone === "surface" ? "text-primary" : "text-white/70"}`}>
            {eyebrow}
          </p>
        )}
        {children}
      </div>
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div
      variants={imageReveal}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="h-full w-full"
    >
      {content}
    </motion.div>
  );
}
