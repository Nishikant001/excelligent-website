import { motion } from "framer-motion";

import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { CountUp } from "@/components/CountUp";
import { brandsServed } from "@/data/homeContent";
import { evidence } from "@/data/homeSections";

// Section 8 of the brief — "Evidence: very minimal". Big animated numbers,
// then the one-line mission. (Numbers flagged `verified: false` in
// homeSections.ts still need to be confirmed by the business before launch.)
export function EvidenceSection() {
  const looped = [...brandsServed, ...brandsServed];

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
          {evidence.stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="flex flex-col-reverse border-t border-border pt-6">
              <dt className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-text-secondary">{stat.label}</dt>
              <dd className="font-display text-giant leading-none tracking-tight text-text-primary">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dd>
            </motion.div>
          ))}
        </motion.dl>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 flex flex-col gap-4 border-t border-border pt-10 sm:flex-row sm:items-baseline sm:gap-10 lg:mt-24"
        >
          <p className="font-display text-giant leading-none text-gradient-ai">{evidence.mission.value}</p>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-text-secondary">{evidence.mission.label}</p>
            <p className="mt-2 font-display text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
              {evidence.mission.statement}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Brands already published on the existing site — kept as a quiet strip. */}
      <div className="container-content mt-20">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary/70">Brands we have served</p>
      </div>
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-ribbon gap-12 motion-reduce:animate-none">
          {looped.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              aria-hidden={i >= brandsServed.length ? true : undefined}
              className="whitespace-nowrap text-lg font-semibold text-text-secondary/55 transition-colors duration-200 hover:text-primary"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
