import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Breadcrumb, type Crumb } from "@/components/Breadcrumb";
import { fadeUp, staggerChildren } from "@/lib/animations";
import { DataNetworkCanvas } from "@/components/visuals/DataNetworkCanvas";

// Shared hero for Solution/Service/Product detail pages — each keeps its
// own category-tinted gradient (via `gradient`) for visual variety, but
// all three now share one consistent, premium layout and spacing so the
// site doesn't feel like three slightly-different implementations of the
// same idea.
//
// Also carries the homepage Hero's animated data-network canvas (all the
// category gradients above are dark navy/blue/violet tones, so the canvas
// reads fine on every one of them) for the same reason it was added to
// PageHero and ContactHero — one consistent design language across the
// whole site, not just Home.
export function DetailHero({
  breadcrumb,
  eyebrow,
  title,
  description,
  icon: Icon,
  gradient,
}: {
  breadcrumb: Crumb[];
  eyebrow: string;
  title: string;
  description?: string;
  icon: LucideIcon;
  gradient: string;
}) {
  return (
    <section className={`relative overflow-hidden ${gradient}`}>
      <div className="absolute inset-0 bg-hero-grid bg-grid opacity-[0.12]" aria-hidden="true" />
      <div className="absolute inset-0 opacity-[0.3]" aria-hidden="true">
        <DataNetworkCanvas className="block h-full w-full" />
      </div>
      <div
        className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-content relative py-16 lg:py-24">
        <motion.div variants={staggerChildren()} initial="hidden" animate="show">
          <motion.div variants={fadeUp}>
            <Breadcrumb items={breadcrumb} tone="inverted" />
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 flex items-start gap-5">
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 sm:flex">
              <Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <div>
              <p className="eyebrow eyebrow-light mb-4">{eyebrow}</p>
              <h1 className="text-h1 text-white">{title}</h1>
              {description && (
                <p className="mt-4 max-w-2xl text-base text-white/75 sm:text-lg">{description}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-white/40 via-white/10 to-white/40" aria-hidden="true" />
    </section>
  );
}
