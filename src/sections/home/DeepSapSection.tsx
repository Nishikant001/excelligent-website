import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { Button } from "@/components/Button";
import { deepSap } from "@/data/homeSections";

// Section 5 of the brief — "Deep SAP": the visual tone changes to a lighter,
// highly structured layout. A DISCOVER → … → OPTIMIZE journey, then four large
// capability blocks. This is where a prospect sees the serious SAP capability
// underneath the new AI appearance.
export function DeepSapSection() {
  return (
    <section className="bg-surface py-24 lg:py-36" aria-labelledby="deep-sap-heading">
      <div className="container-content">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="max-w-4xl">
          <p className="eyebrow mb-5">{deepSap.eyebrow}</p>
          <h2 id="deep-sap-heading" className="text-statement text-text-primary">
            {deepSap.headline}
          </h2>
        </motion.div>

        {/* Journey */}
        <motion.ol
          variants={staggerChildren(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:mt-20 lg:grid-cols-6"
          aria-label="Our SAP journey"
        >
          {/* connecting line (desktop) */}
          <span className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-gradient-to-r from-primary/10 via-primary/40 to-violet/40 lg:block" aria-hidden="true" />
          {deepSap.journey.map((step, i) => (
            <motion.li key={step} variants={fadeUp} className="relative">
              <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-surface font-display text-sm font-bold text-primary shadow-sm">
                {i + 1}
              </span>
              <p className="mt-4 font-display text-lg font-bold uppercase tracking-[0.08em] text-text-primary sm:text-xl">{step}</p>
            </motion.li>
          ))}
        </motion.ol>

        {/* Capability blocks */}
        <motion.ul
          variants={staggerChildren(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
        >
          {deepSap.blocks.map((block) => (
            <motion.li key={block.title} variants={fadeUp} className="flex">
              <Link
                to={block.href}
                className="group flex min-h-[13rem] w-full flex-col justify-between rounded-3xl border border-border bg-background p-7 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-primary/40 hover:bg-surface hover:shadow-panel-light"
              >
                <div className="flex items-start justify-between">
                  <span className="h-1 w-10 rounded-full bg-ai-gradient" aria-hidden="true" />
                  <ArrowUpRight className="h-5 w-5 text-text-secondary/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-text-primary">{block.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{block.description}</p>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-12">
          <Button as="a" href={deepSap.cta.href} size="lg" withArrow className="group">
            {deepSap.cta.label}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
