import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Layers, PackageSearch, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { caseStudies } from "@/data/caseStudies";
import { ROUTES } from "@/routes/paths";

// Replaces three separate homepage sections (Services grid, Products
// grid, Case Studies grid) with one consolidated, large-panel showcase —
// keeping all three real content areas visible on the homepage without
// reverting to a "heading + 6 cards + 4 cards" layout. Full card grids
// for each remain on their own index pages (/services, /products,
// /case-studies), which received the same premium treatment in Phase 13.
export function ExploreSection() {
  const deliveryServices = services.filter((s) => s.slug !== "sap-btp-development");
  const availableProducts = products.filter((p) => !p.contentPending);

  const panels: {
    icon: LucideIcon;
    eyebrow: string;
    title: string;
    description: string;
    meta: string;
    href: string;
    cta: string;
  }[] = [
    {
      icon: Wrench,
      eyebrow: "Services",
      title: "End-to-end SAP delivery",
      description: "Implementation, application management, conversions and upgrades, and cloud analytics.",
      meta: `${deliveryServices.length} services`,
      href: ROUTES.services,
      cta: "View All Services",
    },
    {
      icon: PackageSearch,
      eyebrow: "Products",
      title: "Purpose-built accelerators",
      description: "Ready-made products that speed up specific, recurring enterprise workflows.",
      meta: `${availableProducts.length} products`,
      href: ROUTES.products,
      cta: "Explore Products",
    },
    {
      icon: Layers,
      eyebrow: "Case Studies",
      title: "Real engagements, real outcomes",
      description:
        caseStudies.length > 0
          ? "Client names are withheld, consistent with how these were published on the existing site."
          : "Explore our solutions and services to see how we approach delivery.",
      meta: caseStudies.length > 0 ? `${caseStudies.length} case studies` : "Coming soon",
      href: ROUTES.caseStudies,
      cta: "View Case Studies",
    },
  ];

  return (
    <section className="section-y-tight container-content">
      <motion.div
        variants={staggerChildren(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-6 lg:grid-cols-3"
      >
        {panels.map((panel) => (
          <motion.div key={panel.eyebrow} variants={fadeUp}>
            <Link
              to={panel.href}
              className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-surface p-8 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-primary/30 hover:shadow-panel-light"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <panel.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-medium text-text-secondary">{panel.meta}</span>
                </div>
                <p className="eyebrow mt-6 mb-2">{panel.eyebrow}</p>
                <h3 className="text-xl font-display font-bold text-text-primary">{panel.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{panel.description}</p>
              </div>
              <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                {panel.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
