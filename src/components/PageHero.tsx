import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "@/lib/animations";
import { Breadcrumb, type Crumb } from "@/components/Breadcrumb";

// The shared hero used at the top of every non-homepage route (Overview,
// Team, Partnerships, Solutions/Services/Industries/Products/Case Studies
// indexes, Contact). Rebuilt for Phase 13 as a large, spacious, dark
// editorial panel — replacing the previous "small blue rectangle + title"
// treatment — so every inner page opens with real enterprise presence,
// not just the homepage.
export function PageHero({
  breadcrumb,
  eyebrow,
  title,
  description,
  tag,
}: {
  breadcrumb: Crumb[];
  eyebrow?: string;
  title: string;
  description?: string;
  /** A short right-aligned label, e.g. an active section count — used sparingly. */
  tag?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-mesh">
      <div className="absolute inset-0 bg-hero-grid bg-grid opacity-[0.12]" aria-hidden="true" />
      <div
        className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-content relative py-16 lg:py-24">
        <motion.div variants={staggerChildren()} initial="hidden" animate="show">
          <motion.div variants={fadeUp}>
            <Breadcrumb items={breadcrumb} tone="inverted" />
          </motion.div>

          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              {eyebrow && (
                <motion.p variants={fadeUp} className="eyebrow eyebrow-light mb-4">
                  {eyebrow}
                </motion.p>
              )}
              <motion.h1 variants={fadeUp} className="text-h1 text-white">
                {title}
              </motion.h1>
              {description && (
                <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
                  {description}
                </motion.p>
              )}
            </div>
            {tag && (
              <motion.span
                variants={fadeUp}
                className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
              >
                {tag}
              </motion.span>
            )}
          </div>
        </motion.div>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-secondary via-primary-light to-secondary" aria-hidden="true" />
    </section>
  );
}
