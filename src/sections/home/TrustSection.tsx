import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { brandsServed } from "@/data/homeContent";
import { partners as verifiedPartners } from "@/data/partners";
import { ROUTES } from "@/routes/paths";

// Merges the former "Partners" card grid and "Brands We Have Served"
// marquee into one editorial trust strip — real, verified names only
// (docs/CONTENT_REVIEW_REQUIRED.md), shown as typographic wordmarks
// rather than recreated brand-logo artwork (no genuine SAP/Profit.co/
// Resecurity/HostBooks logo assets exist in this project — see
// docs/DESIGN_SYSTEM.md "Logo rules").
export function TrustSection() {
  const named = verifiedPartners.filter((p) => p.name);
  const looped = [...brandsServed, ...brandsServed];

  return (
    <section className="border-y border-border bg-surface py-14 lg:py-16">
      <div className="container-content">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col items-center justify-between gap-6 lg:flex-row"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
            Working with SAP, and our technology partners
          </p>
          <motion.ul
            variants={staggerChildren(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          >
            <motion.li variants={fadeUp} className="font-display text-xl font-extrabold tracking-tight text-text-primary">
              SAP
            </motion.li>
            {named.map((p) => (
              <motion.li key={p.id} variants={fadeUp} className="text-lg font-semibold text-text-secondary">
                {p.name}
              </motion.li>
            ))}
            <motion.li variants={fadeUp}>
              <Link
                to={ROUTES.ourPartnerships}
                className="group flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark"
              >
                and more
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>

      <div className="container-content mt-10">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary/70">
          Brands We Have Served
        </p>
      </div>
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-[marquee_30s_linear_infinite] gap-12">
          {looped.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="whitespace-nowrap text-lg font-semibold text-text-secondary/50 grayscale transition-colors duration-200 hover:text-primary hover:grayscale-0"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
      {/* @keyframes-based marquee — already caught by the global
          prefers-reduced-motion rule in index.css (which forces
          animation-duration to ~0 for every element), so no local
          override is needed here. */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
