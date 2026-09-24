import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { pageSeo } from "@/data/seo";
import { SectionHeader } from "@/components/SectionHeader";
import { IndustryCard } from "@/components/Cards";
import { CTASection } from "@/components/Sections";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { industries } from "@/data/industries";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";
import { ROUTES } from "@/routes/paths";

// Industries that already have at least one genuine cross-reference from a
// solution/service/product/case study (see lib/industryConnections.ts).
const industriesWithConnections = new Set(["chemical", "electronics", "automotive", "dairy", "engineering-construction"]);

const servicesWithIndustryLinks = services.filter((s) => (s.relatedIndustrySlugs?.length ?? 0) > 0);
const solutionsWithIndustryLinks = solutions.filter((s) => (s.relatedIndustrySlugs?.length ?? 0) > 0);

export default function IndustriesIndexPage() {
  return (
    <>
      <Seo {...pageSeo.industriesIndex} />
      <PageHero
        breadcrumb={[{ label: "Industries" }]}
        eyebrow="Sectors We Serve"
        title="Industries"
        description="Excelligent's published industry categories, reflecting the sectors referenced across our solutions, services, and product case studies."
      />

      <section className="section-y-tight container-content">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-3xl text-lg text-text-secondary"
        >
          {company.aboutParagraphs[0]}
        </motion.p>
      </section>

      <section className="section-y-tight container-content">
        <SectionHeader title="Sectors We Work Across" />
        <motion.div
          variants={staggerChildren()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
        {industries.map((i, index) => (
  <motion.div key={i.slug} variants={fadeUp}>
    <IndustryCard
      index={index}
      industry={{
        ...i,
        contentPending: !industriesWithConnections.has(i.slug),
      }}
    />
  </motion.div>
))}
        </motion.div>
      </section>

      {/* Solutions connection */}
      <section className="section-y bg-surface-muted">
        <div className="container-content">
          <SectionHeader
            eyebrow="Solutions Connection"
            title="Solutions with real industry case studies"
            description="These solutions have documented engagements in specific industries."
          />
          <motion.div
            variants={staggerChildren()}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-8 flex flex-wrap gap-3"
          >
            {solutionsWithIndustryLinks.map((s) => (
              <motion.div key={s.slug} variants={fadeUp}>
                <Link
                  to={ROUTES.solution(s.slug)}
                  className="group inline-flex items-center gap-1 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text-primary hover:border-primary hover:text-primary"
                >
                  {s.navLabel}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services connection */}
      <section className="section-y container-content">
        <SectionHeader
          eyebrow="Services Connection"
          title="Services delivered across these industries"
        />
        <motion.div
          variants={staggerChildren()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 flex flex-wrap gap-3"
        >
          {servicesWithIndustryLinks.map((s) => (
            <motion.div key={s.slug} variants={fadeUp}>
              <Link
                to={ROUTES.service(s.slug)}
                className="group inline-flex items-center gap-1 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text-primary hover:border-primary hover:text-primary"
              >
                {s.navLabel}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="pb-20 lg:pb-28 container-content">
        <CTASection
          title="Don't see your industry?"
          description="Talk to our team about how our SAP expertise can apply to your business."
          ctaLabel="Let's Connect"
          ctaHref={ROUTES.contact}
        />
      </section>
    </>
  );
}
