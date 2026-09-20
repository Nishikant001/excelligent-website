import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Beaker,
  Boxes,
  Building2,
  Car,
  Cpu,
  FlaskConical,
  Milk,
  ShoppingBag,
  Truck,
  Wheat,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { SectionHeader } from "@/components/SectionHeader";
import { industries } from "@/data/industries";
import { ROUTES } from "@/routes/paths";

const industryIcon: Record<string, LucideIcon> = {
  chemical: Beaker,
  brewery: Wheat,
  pharma: FlaskConical,
  dairy: Milk,
  "consumer-goods": ShoppingBag,
  logistics: Truck,
  electronics: Cpu,
  automotive: Car,
  distribution: Boxes,
  "engineering-construction": Building2,
};

const industryImages: Record<string, string> = {
  chemical: "/industries/chemical.jpg",
  brewery: "/industries/brewery.jpg",
  pharma: "/industries/pharma.jpg",
  dairy: "/industries/dairy.png",
  "consumer-goods": "/industries/consumer-goods.jpg",
  logistics: "/industries/logistics.jpg",
  electronics: "/industries/electronics.jpg",
  automotive: "/industries/automotive.png",
  distribution: "/industries/distribution.jpg",
  "engineering-construction": "/industries/engineering-construction.png",
};

// Replaces the previous 10-tiny-card grid with large, horizontally
// scrollable tiles — each still links to its real route (or, for the 5
// content-pending industries, is visually marked rather than hidden, per
// docs/CONTENT_REVIEW_REQUIRED.md).
export function IndustriesSection() {
  const scrollerRef = useRef<HTMLUListElement>(null);

  function scrollByTile(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 320, behavior: "smooth" });
  }

  return (
    <section className="section-y container-content">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Real industries. Real impact."
          description="We bring deep domain understanding and tailored solutions across a wide range of industries."
          cta={{ label: "Explore All Industries", href: ROUTES.industries }}
        />
        <div className="hidden shrink-0 gap-2 lg:flex">
          <button
            type="button"
            onClick={() => scrollByTile(-1)}
            aria-label="Scroll industries left"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-colors duration-150 hover:border-primary hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByTile(1)}
            aria-label="Scroll industries right"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-colors duration-150 hover:border-primary hover:text-primary"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <motion.ul
        ref={scrollerRef}
        variants={staggerChildren(0.05)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {industries.map((industry) => {
          const Icon = industryIcon[industry.slug] ?? Boxes;
          // Alternate tone slightly so the row doesn't feel monotonous
          // across ten tiles, while staying inside the brand palette.
         

          return (
            <motion.li
              key={industry.slug}
              variants={fadeUp}
              className="w-64 shrink-0 snap-start sm:w-72"
            >
              <Link
                to={ROUTES.industry(industry.slug)}
                className="group relative flex h-80 w-full flex-col justify-between overflow-hidden rounded-3xl p-6 text-white transition-transform duration-300 ease-premium hover:-translate-y-1"
              >
                <img
                  src={industryImages[industry.slug]}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#06245F] via-[#0B4385]/15 to-[#075A7C]/20"
                  aria-hidden="true"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#06245F]/80 via-transparent to-transparent"
                  aria-hidden="true"
                />

                <Icon
                  className="relative z-10 h-9 w-9 text-white/90"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {industry.contentPending && (
                    <span className="mb-2 inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium backdrop-blur-sm">
                      Content coming soon
                    </span>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">
                      {industry.navLabel}
                    </span>

                    <ArrowUpRight className="h-5 w-5 shrink-0 text-white/70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </div>
                </div>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
