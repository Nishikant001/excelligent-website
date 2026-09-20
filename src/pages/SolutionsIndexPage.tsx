import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { pageSeo } from "@/data/seo";
import { SectionHeader } from "@/components/SectionHeader";
import { SolutionCard } from "@/components/Cards";
import { CTASection } from "@/components/Sections";
import { Button } from "@/components/Button";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { solutions } from "@/data/solutions";
import { company } from "@/data/company";
import { ROUTES } from "@/routes/paths";

// Group solutions by the real categories assigned in data/solutions.ts.
// Order reflects how prominently each category features on the live site.
const categoryOrder = ["SAP Enterprise Platform", "People & Performance", "Security", "Enterprise Applications"];

export default function SolutionsIndexPage() {
  const grouped = categoryOrder
    .map((category) => ({
      category,
      items: solutions.filter((s) => s.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <>
      <Seo {...pageSeo.solutionsIndex} />
      <PageHero
        breadcrumb={[{ label: "Solutions" }]}
        eyebrow="Our Solutions"
        title="Solutions"
        description="Enterprise solutions spanning SAP S/4HANA, cloud platform, OKR, HCM, and cyber security — built around Excelligent's SAP-centric delivery approach."
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

      {/* Categorized solution cards */}
      {grouped.map((group) => (
        <section key={group.category} className="section-y-tight container-content">
          <SectionHeader title={group.category} />
          <motion.div
            variants={staggerChildren()}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {group.items.map((s) => (
              <motion.div key={s.slug} variants={fadeUp}>
                <SolutionCard solution={s} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      ))}

      {/* How Excelligent Helps */}
      <section className="section-y bg-surface-muted">
        <div className="container-content">
          <SectionHeader
            eyebrow="How Excelligent Helps"
            title="A focused, experienced SAP delivery partner"
            description={company.aboutParagraphs[1]}
          />
        </div>
      </section>

      {/* Related services */}
      <section className="section-y container-content text-center">
        <SectionHeader
          title="Looking for delivery services?"
          description="Solutions are backed by our implementation, AMS, and analytics services."
          align="center"
        />
        <div className="mt-8">
          <Button as="a" href={ROUTES.services} withArrow className="group">
            View Our Services
          </Button>
        </div>
      </section>

      <section className="pb-20 lg:pb-28 container-content">
        <CTASection
          title="Not sure where to start?"
          description="Talk to our team about the right solution for your business."
          ctaLabel="Let's Connect"
          ctaHref={ROUTES.contact}
        />
      </section>
    </>
  );
}
