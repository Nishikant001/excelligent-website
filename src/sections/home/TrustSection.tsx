// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ArrowUpRight } from "lucide-react";
// import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { brandsServed } from "@/data/homeContent";
// import { partners as verifiedPartners } from "@/data/partners";
// import { ROUTES } from "@/routes/paths";

// Customer-logo section — SAP + verified technology partners, plus the
// scrolling "Brands We Have Served" wall. Per suggestions.docx #4, this now
// renders right after the Hero (see HomePage.tsx) instead of being buried
// near the Evidence section. Partner names are shown as typographic
// wordmarks (no recreated partner-logo artwork); brand logos in the
// scrolling wall are DEMO/PLACEHOLDER images (see data/homeContent.ts) to be
// swapped for real artwork later.
export function TrustSection() {
  // const named = verifiedPartners.filter((p) => p.name);
  const looped = [...brandsServed, ...brandsServed];

  return (
    <section className="border-y border-border bg-surface py-14 lg:py-16">
      {/* <div className="container-content">
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
      </div> */}

      <div className="container-content ">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary/70">
          Brands We Have Served
        </p>
      </div>
      {/* Monochrome scrolling logo wall. `brand.logo` is a DEMO/PLACEHOLDER
          wordmark (see data/homeContent.ts) — swap the files in
          public/customers/ for real logo artwork when it's available;
          no code change is needed here to do that. */}
      <div className="overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-[marquee_30s_linear_infinite] items-center gap-14">
          {looped.map((brand, i) => (
            <img
              key={`${brand.name}-${i}`}
              src={brand.logo}
              alt={brand.name}
              title={brand.name}
              className="h-16 w-auto shrink-0  transition-all duration-200 hover:opacity-100 hover:grayscale-0"
            />
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
