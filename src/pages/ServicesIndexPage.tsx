import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { pageSeo } from "@/data/seo";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/Cards";
import { ProcessSteps, CTASection } from "@/components/Sections";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";
import { company } from "@/data/company";
import { ROUTES } from "@/routes/paths";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

// The recurring "Why Choose Excelligent" strengths actually published
// across the SAP Implementation, SAP AMS, and SAP System Conversion
// pages (see docs/EXISTING_WEBSITE_AUDIT.md items 12, 13, 15).
const whyServiceStrengths = [
  { title: "Focused SAP Expertise", description: "We focus exclusively on SAP-related services for deeper engagement and faster completion." },
  { title: "Experienced Delivery Teams", description: "Business-domain and hands-on SAP delivery experience across implementation, AMS, and migration projects." },
  { title: "Best-Practice Methodology", description: "SAP Activate and ITIL-based support models applied consistently across engagements." },
  { title: "Cost-Effective Delivery", description: "Significant value for the price, combining high quality with affordability." },
];

// SAP Implementation's real SAP Activate methodology, reused here as the
// representative delivery approach across Excelligent's SAP services.
const deliveryApproach = services.find((s) => s.slug === "sap-implementation")?.methodologyPhases ?? [];

// Industries genuinely referenced across service case studies (see
// docs/EXISTING_WEBSITE_AUDIT.md items 12, 13, 16).
const connectedIndustrySlugs = ["chemical", "electronics", "automotive", "dairy", "engineering-construction"];
const connectedIndustries = industries.filter((i) => connectedIndustrySlugs.includes(i.slug));

// Solutions that Excelligent's services deliver against.
const connectedSolutionSlugs = ["rise-with-sap", "grow-with-sap", "sap-btp"];
const connectedSolutions = solutions.filter((s) => connectedSolutionSlugs.includes(s.slug));

export default function ServicesIndexPage() {
  return (
    <>
      <Seo {...pageSeo.servicesIndex} />
      <PageHero
        breadcrumb={[{ label: "Services" }]}
        eyebrow="What We Deliver"
        title="Services"
        description="End-to-end SAP delivery: implementation, application management, BTP development, system conversion, value-added products, and analytics."
      />

      {/* Editorial introduction */}
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

      {/* Services grid */}
      <section className="section-y-tight container-content">
        <SectionHeader eyebrow="What We Deliver" title="Our Services" />
        <motion.div
          variants={staggerChildren()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services
            .filter((s) => s.slug !== "sap-btp-development")
            .map((s) => (
              <motion.div key={s.slug} variants={fadeUp}>
                <ServiceCard service={s} />
              </motion.div>
            ))}
        </motion.div>
      </section>

      {/* Service delivery / approach */}
      {deliveryApproach.length > 0 && (
        <section className="section-y bg-surface-muted">
          <div className="container-content">
            <SectionHeader
              eyebrow="Service Delivery"
              title="A proven, phased approach"
              description="Every SAP engagement follows Excelligent's structured SAP Activate methodology."
            />
            <div className="mt-10">
              <ProcessSteps steps={deliveryApproach} />
            </div>
          </div>
        </section>
      )}

      {/* Why Excelligent for Services */}
      <section className="section-y container-content">
        <SectionHeader eyebrow="Why Excelligent" title="Built for SAP delivery" />
        <motion.div
          variants={staggerChildren()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyServiceStrengths.map((s) => (
            <motion.div key={s.title} variants={fadeUp} className="rounded-2xl border border-border/70 bg-surface p-7">
              <h3 className="text-h3">{s.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{s.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Solutions connection */}
      <section className="section-y bg-surface-muted">
        <div className="container-content">
          <SectionHeader eyebrow="Solutions Connection" title="Services that power our solutions" />
          <motion.div
            variants={staggerChildren()}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-8 flex flex-wrap gap-3"
          >
            {connectedSolutions.map((s) => (
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

      {/* Industry connection */}
      {connectedIndustries.length > 0 && (
        <section className="section-y container-content">
          <SectionHeader eyebrow="Industry Connection" title="Industries our services have supported" />
          <motion.div
            variants={staggerChildren()}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-8 flex flex-wrap gap-3"
          >
            {connectedIndustries.map((i) => (
              <motion.div key={i.slug} variants={fadeUp}>
                <Link
                  to={ROUTES.industry(i.slug)}
                  className="group inline-flex items-center gap-1 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text-primary hover:border-primary hover:text-primary"
                >
                  {i.navLabel}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      <section className="pb-20 lg:pb-28 container-content">
        <CTASection
          title="Ready to plan your next SAP engagement?"
          description="Talk to our team about implementation, support, or your next transformation project."
          ctaLabel="Let's Connect"
          ctaHref={ROUTES.contact}
        />
      </section>
    </>
  );
}
