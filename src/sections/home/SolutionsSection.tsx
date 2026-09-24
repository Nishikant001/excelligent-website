import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Boxes, Cloud, ShieldCheck, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { solutions } from "@/data/solutions";
import { ROUTES } from "@/routes/paths";

const categoryIcon: Record<string, LucideIcon> = {
  "SAP Enterprise Platform": Cloud,
  "People & Performance": Users,
  Security: ShieldCheck,
  "Enterprise Applications": Boxes,
};

// Replaces the previous 3-column solution-card grid with an interactive
// list-navigation + large featured-detail panel — every solution still
// links to its real route, but only one is shown in full at a time so
// the section reads as one confident showcase rather than seven small
// boxes.
export function SolutionsSection() {
  const [activeSlug, setActiveSlug] = useState(solutions[0].slug);
  const active = solutions.find((s) => s.slug === activeSlug) ?? solutions[0];
  const Icon = (active.category && categoryIcon[active.category]) || Boxes;

  return (
    <section className="section-y bg-surface-muted">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.75fr,1.25fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Our Solutions"
              title="Solutions for a changing world"
              description="From SAP S/4HANA to  SAP SuccessFactors, and cyber security — our integrated solutions help you stay ahead in a rapidly evolving business landscape."
              cta={{ label: "View All Solutions", href: ROUTES.solutions }}
            />
          </div>

          <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-surface shadow-panel-light sm:grid-cols-[minmax(0,220px),1fr]">
            {/* List navigation */}
            <nav aria-label="Solutions" className="border-b border-border sm:border-b-0 sm:border-r">
              <ul className="flex overflow-x-auto sm:block sm:overflow-visible">
                {solutions.map((s) => {
                  const isActive = s.slug === activeSlug;
                  return (
                    <li key={s.slug} className="shrink-0 sm:shrink">
                      <button
                        type="button"
                        onClick={() => setActiveSlug(s.slug)}
                        aria-current={isActive ? "true" : undefined}
                        className={`flex w-full items-center justify-between gap-2 whitespace-nowrap px-5 py-4 text-left text-sm font-medium transition-colors duration-150 sm:whitespace-normal ${
                          isActive
                            ? "bg-primary/5 text-primary"
                            : "text-text-secondary hover:bg-surface-muted hover:text-text-primary"
                        }`}
                      >
                        <span className={isActive ? "border-l-2 border-primary pl-3 -ml-3" : ""}>
                          {s.category === "SAP Enterprise Platform" ? s.navLabel.replace(" S/4HANA Public Cloud", "").replace(" S/4HANA Private Cloud", "") : s.navLabel}
                        </span>
                        <ArrowRight className={`hidden h-3.5 w-3.5 shrink-0 sm:block ${isActive ? "opacity-100" : "opacity-0"}`} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Featured panel */}
            <div className="relative min-h-[22rem] overflow-hidden bg-navy-mesh p-8 sm:p-10">
              <div className="absolute inset-0 bg-hero-grid bg-grid opacity-[0.12]" aria-hidden="true" />
              <div
                className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"
                aria-hidden="true"
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.slug}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
                  viewport={viewportOnce}
                  className="relative z-10 flex h-full flex-col justify-between"
                >
                  <div>
                    <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {active.category && (
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                        {active.category}
                      </p>
                    )}
                    <h3 className="mt-3 text-2xl font-display font-bold text-white">{active.navLabel}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                      {active.contentPending
                        ? "Detailed content for this solution is coming soon."
                        : active.intro.length > 240
                        ? `${active.intro.slice(0, 240).trim()}…`
                        : active.intro}
                    </p>
                  </div>
                  <div className="mt-8">
                    <Button
                      as="a"
                      href={ROUTES.solution(active.slug)}
                      variant="secondary"
                      withArrow
                      className="group"
                    >
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
