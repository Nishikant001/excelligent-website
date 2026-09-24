import { motion } from "framer-motion";

import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { CountUp } from "@/components/CountUp";
import { evidence } from "@/data/homeSections";

// Section 8 of the brief — "Evidence: very minimal". Big animated numbers,
// then the one-line mission. (Numbers flagged `verified: false` in
// homeSections.ts still need to be confirmed by the business before launch.)
//
// The customer-logo wall that used to live at the bottom of this section
// now renders once, higher up the page, via <TrustSection /> right after
// the Hero (see HomePage.tsx and suggestions.docx #4) — it isn't repeated
// here to avoid showing the same logos twice on one page.
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
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-14 lg:mt-24 lg:grid-cols-4"
        >
          {evidence.stats.map((stat) => {
            const numericValue = typeof stat.value === "number" ? stat.value : Number.parseFloat(String(stat.value));

            return (
              <motion.div key={stat.label} variants={fadeUp} className="flex flex-col-reverse border-t border-border pt-6">
                <dt className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-text-secondary">{stat.label}</dt>
                <dd className="font-display text-giant leading-none tracking-tight text-text-primary">
                  <CountUp value={numericValue} suffix={stat.suffix} />
                </dd>
              </motion.div>
            );
          })}
        </motion.dl>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 flex flex-col gap-4 border-t border-border pt-10 sm:flex-row sm:items-baseline sm:gap-10 lg:mt-24"
        >
          <p className="font-display text-giant leading-none text-gradient-ai">50K</p>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-text-secondary">{evidence.mission.label}</p>
            <p className="mt-2 font-display text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
              {evidence.mission.statement}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
