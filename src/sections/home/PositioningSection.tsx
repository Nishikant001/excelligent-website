import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { fadeUp, viewportOnce } from "@/lib/animations";
import { positioning } from "@/data/homeSections";

// One giant word: an outlined base layer with a cyan -> violet filled copy on
// top that is revealed left-to-right as the visitor scrolls (section 2 of the
// brief: "Each word animates as the visitor scrolls").
function ScrollWord({
  word,
  caption,
  index,
  total,
  progress,
  reduce,
  showArrow,
}: {
  word: string;
  caption: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduce: boolean;
  showArrow: boolean;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const reveal = useTransform(progress, [start, end], [0, 100]);
  const clip = useTransform(reveal, (v) => `inset(0 ${100 - v}% 0 0)`);
  const captionOpacity = useTransform(progress, [start, Math.min(1, start + 0.08)], [0.35, 1]);

  const label = (
    <span className="flex items-center gap-[0.18em]">
      <span>{word}</span>
      {showArrow && <ArrowRight className="h-[0.55em] w-[0.55em] shrink-0" strokeWidth={2.2} aria-hidden="true" />}
    </span>
  );

  return (
  <li className="flex flex-col gap-1 border-b border-border py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:py-3">
  <div className="relative font-display text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.82] uppercase">
    <span
      className="text-outline block [--outline-color:rgba(11,18,38,0.28)]"
      aria-hidden="true"
    >
      {label}
    </span>

    {/* Accessible + animated filled text */}
    <motion.span
      className="text-gradient-ai absolute inset-0 block"
      style={reduce ? undefined : { clipPath: clip }}
    >
      {label}
    </motion.span>
  </div>

  <motion.p
    style={reduce ? undefined : { opacity: captionOpacity }}
    className="shrink-0 text-[10px] font-medium uppercase tracking-[0.16em] text-text-secondary sm:w-36 sm:text-right lg:text-xs"
  >
    {caption}
  </motion.p>
</li>
  );
}
 
export function PositioningSection() {
  const listRef = useRef<HTMLUListElement>(null);
  const reduce = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 78%", "end 62%"],
  });

  const accent = "Intelligent Enterprise.";
  const lead = positioning.headline.replace(accent, "");

  return (
    <section
      className="bg-surface py-12 lg:py-16"
      aria-labelledby="positioning-heading"
    >
      <div className="container-content">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-5xl"
        >
          <h2
            id="positioning-heading"
            className="text-statement text-text-primary"
          >
            {lead}
            <span className="text-gradient-ai">{accent}</span>
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-text-secondary lg:text-xl">
            {positioning.body}
          </p>
        </motion.div>

        <ul
          ref={listRef}
          className="mt-10 border-t border-border lg:mt-14"
          aria-label="How we help"
        >
          {positioning.words.map((w, i) => (
            <ScrollWord
              key={w.word}
              word={w.word}
              caption={w.caption}
              index={i}
              total={positioning.words.length}
              progress={scrollYProgress}
              reduce={reduce}
              showArrow={i < positioning.words.length - 1}
            />
          ))}
        </ul>

      </div>
    </section>
  );
}
