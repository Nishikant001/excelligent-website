import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { CaseStudyCard } from "@/components/Cards";
import { caseStudies } from "@/data/caseStudies";
import { ROUTES } from "@/routes/paths";

export function CaseStudiesSection() {
  if (caseStudies.length === 0) {
    // Per Phase 3 spec: if no verified case studies exist, do not fabricate
    // examples — direct visitors to relevant services/solutions instead.
    return (
      <section className="container-content py-16 lg:py-24 text-center">
        <SectionHeader
          title="See how Excelligent can help"
          description="Explore our SAP solutions and services to find the right fit for your business."
          align="center"
        />
        <div className="mt-8">
          <Button as="a" href={ROUTES.solutions} withArrow className="group">
            Explore Solutions
          </Button>
        </div>
      </section>
    );
  }

  const [featured, ...rest] = caseStudies;

  return (
    <section className="container-content py-16 lg:py-24">
      <SectionHeader
        eyebrow="Success Stories"
        title="Real engagements, real outcomes"
        description="Client names are withheld, consistent with how these were published on the existing site."
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-10"
      >
        <Link
          to={ROUTES.caseStudy(featured.id)}
          className="block rounded-2xl border border-border bg-surface p-8 transition-colors duration-200 hover:border-primary lg:p-12"
        >
          {featured.isThirdPartyContent && (
            <span className="mb-3 inline-block rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-text-secondary">
              Partner content
            </span>
          )}
          <h3 className="text-h2">{featured.title}</h3>
          <p className="mt-3 max-w-2xl text-text-secondary">{featured.summary}</p>
        </Link>
      </motion.div>

      {rest.length > 0 && (
        <motion.div
          variants={staggerChildren()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {rest.slice(0, 3).map((c) => (
            <motion.div key={c.id} variants={fadeUp}>
              <CaseStudyCard caseStudy={c} />
            </motion.div>
          ))}
        </motion.div>
      )}

      <div className="mt-10">
        <Button as="a" href={ROUTES.caseStudies} variant="text" withArrow className="group">
          View All Case Studies
        </Button>
      </div>
    </section>
  );
}
