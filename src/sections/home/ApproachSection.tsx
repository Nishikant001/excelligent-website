import { motion } from "framer-motion";
import { BarChart3, Workflow, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import {
  fadeUp,
  staggerChildren,
  viewportOnce,
} from "@/lib/animations";

import { SectionHeader } from "@/components/SectionHeader";
import { company } from "@/data/company";
import { transformationPillars } from "@/data/homeContent";
import { ROUTES } from "@/routes/paths";

const pillarIcons: LucideIcon[] = [
  Workflow,
  Zap,
  BarChart3,
];

const pillarImages = [
  "/approach/process.png",
  "/approach/automation.png",
  "/approach/insights.png",
];

export function ApproachSection() {
  return (
    <section className="section-y container-content">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr,1.15fr] lg:gap-20">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div>
          <SectionHeader
            eyebrow="Our Approach"
            title="Turning possibilities into real business impact"
            description={company.aboutParagraphs[0]}
            cta={{
              label: "Know More About Us",
              href: ROUTES.overview,
            }}
          />
        </div>

        {/* =========================
            RIGHT CARDS
        ========================== */}
        <motion.div
          variants={staggerChildren(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {transformationPillars.map((pillar, i) => {
            const Icon = pillarIcons[i];

            return (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                className="group relative flex min-h-[19rem] flex-col justify-end overflow-hidden rounded-3xl bg-brand-navy p-7 transition-all duration-500 ease-premium hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* =========================
                    CARD IMAGE
                ========================== */}
                <img
                  src={pillarImages[i]}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* =========================
                    BLUE IMAGE OVERLAY
                ========================== */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#06245F] via-[#0B4385]/40 to-[#075A7C]/35"
                  aria-hidden="true"
                />

                {/* =========================
                    EXTRA DARK OVERLAY
                ========================== */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#06245F]/80 via-transparent to-transparent"
                  aria-hidden="true"
                />

                {/* =========================
                    ICON
                ========================== */}
                <span className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-md ring-1 ring-white/10 transition-all duration-300 group-hover:bg-secondary/30">
                  <Icon
                    className="h-6 w-6"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </span>

                {/* =========================
                    TITLE
                ========================== */}
                <h3 className="relative z-10 text-xl font-semibold leading-tight text-white">
                  {pillar.title}
                </h3>

                {/* =========================
                    DESCRIPTION
                ========================== */}
                <p className="relative z-10 mt-3 text-sm leading-relaxed text-white/75">
                  {pillar.description}
                </p>

                {/* =========================
                    BOTTOM ACCENT
                ========================== */}
                <span
                  className="absolute bottom-0 left-7 right-7 z-10 h-[2px] origin-left scale-x-0 bg-secondary transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}