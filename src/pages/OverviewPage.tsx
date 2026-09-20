import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Gauge,
  Handshake,
  Lightbulb,
  Lock,
  Sparkles,
  TrendingUp,
  UserCog,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { pageSeo } from "@/data/seo";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/Sections";
import { Button } from "@/components/Button";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { company } from "@/data/company";
import { ROUTES } from "@/routes/paths";

// Icons are purely decorative pairings for each guiding principle.
const principleIcon: Record<string, LucideIcon> = {
  "Customer Centricity": Users,
  "Innovation and Continuous Improvement": Lightbulb,
  "Quality and Excellence": Sparkles,
  "Agility and Flexibility": Gauge,
  "Collaboration and Team Work": Handshake,
  "Integrity and Transparency": Lock,
  "Security and Privacy": Lock,
  "Employee Empowerment and Development": UserCog,
  "Result Driven": TrendingUp,
};

const whatWeDo = [
  {
    title: "Solutions",
    description: "SAP S/4HANA, BTP, OKR, HCM, and Cyber Security.",
    href: ROUTES.solutions,
  },
  {
    title: "Services",
    description: "Implementation, AMS, conversions, and analytics.",
    href: ROUTES.services,
  },
  {
    title: "Industries",
    description: "Sectors we work across, from chemical to automotive.",
    href: ROUTES.industries,
  },
];

export default function OverviewPage() {
  return (
    <>
      <Seo {...pageSeo.overview} />

      <PageHero
        breadcrumb={[
          { label: "Company", href: ROUTES.overview },
          { label: "Overview" },
        ]}
        eyebrow="Company"
        title="Overview"
        description={company.tagline}
      />

      {/* =========================================================
          COMPANY INTRODUCTION
      ========================================================== */}
      <section className="section-y container-content">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          
          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <p className="eyebrow mb-4">Who We Are</p>

            <h2 className="text-h2 max-w-xl">
              An IT consulting company built by industry veterans,
              founded in {company.founded}.
            </h2>

            <div className="mt-6 space-y-4">
              {company.aboutParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="leading-relaxed text-text-secondary"
                >
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT SIDE IMAGE
          ====================================================== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative overflow-hidden rounded-3xl border border-border/50 bg-surface shadow-panel-light"
          >
            <div className="relative aspect-[4/3.2] w-full overflow-hidden">
              
              <img
                src="/overview/bbsr.jpg"
                alt="Excelligent Consulting Services team"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />

              {/* Subtle brand overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0b3b82]/20 via-transparent to-[#00a6b2]/10" />

              {/* Bottom information */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-7 pt-20">
                <p className="text-sm font-medium text-white/80">
                  Excelligent Consulting Services
                </p>

                <p className="mt-1 font-display text-xl font-bold text-white">
                  Bhubaneswar
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          MISSION / VISION
      ========================================================== */}
      <section className="section-y bg-surface-muted">
        <div className="container-content">
          <SectionHeader
            eyebrow="Purpose"
            title="Our mission &amp; vision"
            align="center"
          />

          <motion.div
            variants={staggerChildren()}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-border/70 bg-surface p-9"
            >
              <h3 className="text-h3">Mission</h3>

              <p className="mt-3 leading-relaxed text-text-secondary">
                {company.mission}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-border/70 bg-surface p-9"
            >
              <h3 className="text-h3">Vision</h3>

              <p className="mt-3 leading-relaxed text-text-secondary">
                {company.vision}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          GUIDING PRINCIPLES
      ========================================================== */}
      <section className="section-y container-content">
        <SectionHeader
          eyebrow="Core Values"
          title="Guiding principles"
          align="center"
        />

        <motion.ul
          variants={staggerChildren(0.04)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-8"
        >
          {company.guidingPrinciples.map((principle) => {
            const Icon = principleIcon[principle] ?? Sparkles;

            return (
              <motion.li
                key={principle}
                variants={fadeUp}
                className="flex w-28 flex-col items-center text-center"
              >
                <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-border text-primary">
                  <Icon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </span>

                <span className="text-xs font-medium leading-tight text-text-secondary">
                  {principle}
                </span>
              </motion.li>
            );
          })}
        </motion.ul>
      </section>

      {/* =========================================================
          WHAT WE DO
      ========================================================== */}
      <section className="section-y bg-surface-muted">
        <div className="container-content">
          <SectionHeader
            eyebrow="What We Do"
            title="From SAP adoption to full digital transformation"
            description="Excelligent's work spans enterprise solutions, delivery services, and industry-specific expertise."
          />

          <motion.div
            variants={staggerChildren()}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3"
          >
            {whatWeDo.map((item) => (
              <motion.a
                key={item.title}
                href={item.href}
                variants={fadeUp}
                className="group flex flex-col justify-between rounded-3xl border border-border bg-surface p-8 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-primary/30 hover:shadow-panel-light"
              >
                <div>
                  <h3 className="font-display text-xl font-bold text-text-primary group-hover:text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>

                <ArrowUpRight className="mt-6 h-5 w-5 text-text-secondary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="section-y container-content">
        <CTASection
          title="Let's build your digital transformation roadmap"
          description="Talk to our team about how Excelligent can support your SAP and enterprise technology goals."
          ctaLabel="Let's Connect"
          ctaHref={ROUTES.contact}
        />

        <div className="mt-8 text-center">
          <Button
            as="a"
            href={ROUTES.ourTeam}
            variant="text"
            withArrow
            className="group"
          >
            Meet the team behind Excelligent
          </Button>
        </div>
      </section>
    </>
  );
}