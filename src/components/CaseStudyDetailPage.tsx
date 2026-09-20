import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { JsonLd } from "@/components/JsonLd";
import { caseStudySchema } from "@/lib/structuredData";
import { CTASection } from "@/components/Sections";
import { RelatedLinks } from "@/components/RelatedLinks";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { getSourceLink } from "@/data/caseStudies";
import { industries } from "@/data/industries";
import { ROUTES } from "@/routes/paths";
import type { CaseStudy } from "@/types/content";

export function CaseStudyDetailPage({ caseStudy }: { caseStudy: CaseStudy }) {
  const sourceLink = getSourceLink(caseStudy);
  const industryLinks = (caseStudy.industrySlugs ?? [])
    .map((slug) => industries.find((i) => i.slug === slug))
    .filter((i): i is (typeof industries)[number] => Boolean(i))
    .map((i) => ({ label: i.navLabel, href: ROUTES.industry(i.slug) }));

  return (
    <>
      <Seo
        title={`${caseStudy.title} | Excelligent Case Study`}
        description={caseStudy.summary}
        canonical={`https://excelligent.co.in${ROUTES.caseStudy(caseStudy.id)}`}
      />
      <JsonLd data={caseStudySchema(caseStudy)} />
      <PageHero
        breadcrumb={[{ label: "Case Studies", href: ROUTES.caseStudies }, { label: caseStudy.title }]}
        title={caseStudy.title}
      />

      <section className="container-content py-16 space-y-10">
        {caseStudy.isThirdPartyContent && (
          <span className="inline-block rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-text-secondary">
            Partner content, not an Excelligent-delivered engagement
          </span>
        )}

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl text-lg text-text-secondary"
        >
          {caseStudy.summary}
        </motion.p>

        {!caseStudy.clientNamed && (
          <p className="text-sm text-text-secondary/80">
            Consistent with how this was published on the existing Excelligent website, the
            client name is withheld.
          </p>
        )}

        {(sourceLink || industryLinks.length > 0) && (
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <h2 className="text-h2 mb-6">Related Content</h2>
            <RelatedLinks
              groups={[
                { heading: "Related to", links: sourceLink ? [sourceLink] : [] },
                { heading: "Industry", links: industryLinks },
              ]}
            />
          </motion.div>
        )}

        <CTASection
          title="Considering a similar engagement?"
          description="Talk to our team about how Excelligent can support your business."
          ctaLabel="Let's Connect"
          ctaHref={ROUTES.contact}
        />
      </section>
    </>
  );
}
