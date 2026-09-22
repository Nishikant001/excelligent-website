import { motion } from "framer-motion";

import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { whySection } from "@/data/homeSections";

// Section 11 — "Why Excelligent": instead of a generic "Why choose us?".
export function WhySection() {
  return (
    <section className="bg-surface py-24 lg:py-36" aria-labelledby="why-heading">
      <div className="container-content">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <p className="eyebrow mb-5">{whySection.eyebrow}</p>
          <h2 id="why-heading" className="text-statement max-w-4xl text-text-primary">
            {whySection.headlineLine1}
            <br />
            <span className="text-gradient-ai">{whySection.headlineLine2}</span>
          </h2>
        </motion.div>

        <motion.ul
          variants={staggerChildren(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-20"
        >
          {whySection.statements.map((s, i) => (
            <motion.li key={s.title} variants={fadeUp} className="border-t border-border pt-6">
              <span className="text-gradient-ai font-display text-sm font-bold tracking-widest">0{i + 1}</span>
              <h3 className="mt-3 font-display text-2xl font-bold text-text-primary lg:text-3xl">{s.title}</h3>
              <p className="mt-3 max-w-md text-lg text-text-secondary">{s.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
