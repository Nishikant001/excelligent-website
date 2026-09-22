import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { Button } from "@/components/Button";
import { ROUTES } from "@/routes/paths";
import { insights } from "@/data/homeSections";

// Section 13 — "Insights. Don't call it Blog." Three topic cards. The article
// library is still empty, so the cards say so honestly and lead to the
// Insights page rather than to non-existent posts.
export function InsightsSection() {
  return (
    <section className="bg-background py-24 lg:py-36" aria-labelledby="insights-heading">
      <div className="container-content">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="max-w-3xl">
            <p className="eyebrow mb-5">{insights.eyebrow}</p>
            <h2 id="insights-heading" className="text-statement text-text-primary">{insights.headline}</h2>
          </motion.div>
          <Button as="a" href={insights.cta.href} variant="text" withArrow className="group shrink-0 text-base font-semibold">
            {insights.cta.label}
          </Button>
        </div>

        <motion.ul
          variants={staggerChildren(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {insights.cards.map((c) => (
            <motion.li key={c.title} variants={fadeUp} className="flex">
              <Link
                to={ROUTES.blog}
                className="group flex min-h-[15rem] w-full flex-col justify-between rounded-3xl border border-border bg-surface p-8 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-primary/40 hover:shadow-panel-light"
              >
                <span className="text-gradient-ai text-sm font-bold uppercase tracking-[0.2em]">{c.category}</span>
                <div>
                  <h3 className="font-display text-2xl font-bold italic leading-snug text-text-primary">{c.title}</h3>
                  <span className="mt-4 inline-block rounded-full bg-surface-muted px-2.5 py-0.5 text-[11px] font-semibold text-text-secondary">
                    Coming soon
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
