import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { CTASection } from "@/components/Sections";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CaseStudyCard } from "@/components/Cards";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import {
  getRelatedCaseStudiesForIndustry,
  getRelatedProductsForIndustry,
  getRelatedServicesForIndustry,
  getRelatedSolutionsForIndustry,
  industryHasAnyRealContent,
} from "@/lib/industryConnections";
import { ROUTES } from "@/routes/paths";
import type { IndustryContent } from "@/types/content";

export function IndustryDetailPage({ industry }: { industry: IndustryContent }) {
  const relatedSolutions = getRelatedSolutionsForIndustry(industry.slug);
  const relatedServices = getRelatedServicesForIndustry(industry.slug);
  const relatedProducts = getRelatedProductsForIndustry(industry.slug);
  const relatedCaseStudies = getRelatedCaseStudiesForIndustry(industry.slug);
  const hasContent = industryHasAnyRealContent(industry.slug);

  return (
    <>
      <Seo {...industry.seo ?? { title: `${industry.navLabel} Industry | Excelligent` }} />
      <PageHero
        breadcrumb={[{ label: "Industries", href: ROUTES.industries }, { label: industry.navLabel }]}
        title={industry.navLabel}
      />

      <section className="container-content py-16 space-y-16">
        {!hasContent ? (
          <p className="rounded-xl border border-dashed border-border p-8 text-center text-text-secondary">
            Content coming soon — Excelligent has not yet published dedicated content for this
            industry.
          </p>
        ) : (
          <>
            {relatedCaseStudies.length > 0 && (
              <motion.div variants={staggerChildren()} initial="hidden" whileInView="show" viewport={viewportOnce}>
                <h2 className="text-h2 mb-6">Case Studies in {industry.navLabel}</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {relatedCaseStudies.map((c) => (
                    <motion.div key={c.id} variants={fadeUp}>
                      <CaseStudyCard caseStudy={c} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {(relatedSolutions.length > 0 || relatedServices.length > 0 || relatedProducts.length > 0) && (
              <motion.div variants={staggerChildren()} initial="hidden" whileInView="show" viewport={viewportOnce}>
                <h2 className="text-h2 mb-6">How Excelligent Can Help</h2>
                <RelatedLinks
                  groups={[
                    { heading: "Related Solutions", links: relatedSolutions },
                    { heading: "Related Services", links: relatedServices },
                    { heading: "Related Products", links: relatedProducts },
                  ]}
                />
              </motion.div>
            )}
          </>
        )}

        <CTASection
          title={`Talk to us about ${industry.navLabel}`}
          description="Let our team help you scope the right approach for your business."
          ctaLabel="Let's Connect"
          ctaHref={ROUTES.contact}
        />
      </section>
    </>
  );
}
