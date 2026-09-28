import { motion } from "framer-motion";

import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { CountUp } from "@/components/CountUp";
import { evidence } from "@/data/homeSections";

export function EvidenceSection() {
  return (
    <section className="bg-surface py-24 lg:py-36" aria-labelledby="evidence-heading">
      <div className="container-content">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <p className="eyebrow mb-5">{evidence.eyebrow}</p>
          <h2 id="evidence-heading" className="text-statement max-w-3xl text-text-primary">
            {evidence.headline}
          </h2>
        </motion.div>

        <motion.dl
          variants={staggerChildren(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          // INCREASED GAP: Added lg:gap-x-8 xl:gap-x-12 to give columns more breathing room
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-14 lg:mt-24 lg:grid-cols-4 lg:gap-x-8 xl:gap-x-12"
        >
          {evidence.stats.map((stat) => {
            const numericValue = typeof stat.value === "number" ? stat.value : Number.parseFloat(String(stat.value));

            return (
              // ADDED min-w-0 to prevent the flex container from forcing the grid wider than 100%
              <motion.div key={stat.label} variants={fadeUp} className="flex flex-col-reverse border-t border-border pt-6 min-w-0">
                <dt className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-text-secondary">
                  {stat.label}
                </dt>
                {/* RESPONSIVE TEXT: Scaled the font size so it only hits `text-giant` on ultra-wide screens */}
                <dd className="font-display text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-giant leading-none tracking-tight text-text-primary whitespace-nowrap">
                  <CountUp value={numericValue} suffix={stat.suffix}  />
                </dd>
              </motion.div>
            );
          })}
        </motion.dl>
      </div>
    </section>
  );
}