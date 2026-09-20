import { motion } from "framer-motion";
import { DetailHero } from "@/components/DetailHero";
import { Seo } from "@/components/Seo";
import { FeatureGrid, FeaturedCaseStudy, CTASection } from "@/components/Sections";
import { RelatedLinks } from "@/components/RelatedLinks";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { categoryGradient, categoryIcon } from "@/lib/contentVisuals";
import { solutions } from "@/data/solutions";
import { services } from "@/data/services"; 
import { industries } from "@/data/industries";
import { ROUTES } from "@/routes/paths";
import type { SolutionContent } from "@/types/content";
import { Boxes } from "lucide-react";

export function SolutionDetailPage({ solution }: { solution: SolutionContent }) {
  const Icon = (solution.category && categoryIcon[solution.category]) || Boxes;
  const gradient = (solution.category && categoryGradient[solution.category]) || "bg-primary-gradient";

  const relatedServices = (solution.relatedServiceSlugs ?? [])
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[number] => Boolean(s))
    .map((s) => ({ label: s.navLabel, href: ROUTES.service(s.slug) }));

  const relatedIndustries = (solution.relatedIndustrySlugs ?? [])
    .map((slug) => industries.find((i) => i.slug === slug))
    .filter((i): i is (typeof industries)[number] => Boolean(i))
    .map((i) => ({ label: i.navLabel, href: ROUTES.industry(i.slug) }));

  const relatedSolutions = (solution.relatedSolutionSlugs ?? [])
    .map((slug) => solutions.find((s) => s.slug === slug))
    .filter((s): s is SolutionContent => Boolean(s))
    .map((s) => ({ label: s.navLabel, href: ROUTES.solution(s.slug) }));

  return (
    <>
      <Seo {...solution.seo} />
      {/* Category-tinted gradient + icon gives each solution a distinct
          visual identity while staying inside the shared hero system. */}
      <DetailHero
        breadcrumb={[{ label: "Solutions", href: ROUTES.solutions }, { label: solution.navLabel }]}
        eyebrow={solution.category ?? "Solution"}
        title={solution.title}
        description={!solution.contentPending ? solution.intro : undefined}
        icon={Icon}
        gradient={gradient}
      />

    <section className="relative overflow-hidden bg-[#f7faff]">

  {/* Background decoration */}
  <div
    className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl"
    aria-hidden="true"
  />

  <div
    className="pointer-events-none absolute -right-40 top-[45%] h-[30rem] w-[30rem] rounded-full bg-indigo-100/30 blur-3xl"
    aria-hidden="true"
  />

  <div className="container-content py-20 lg:py-28">

    {solution.contentPending ? (
      <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-text-secondary shadow-sm">
        Content coming soon — this page is awaiting real content from Excelligent.
      </p>
    ) : (
      <>

        {/* ==============================
            CAPABILITIES
        =============================== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-1 w-8 rounded-full bg-primary" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Capabilities
            </span>
          </div>

          <h2 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-[#101d35] sm:text-5xl">
            Built around the way{" "}
            <span className="text-primary">
              your business works.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
            Explore the business capabilities that help organisations
            simplify operations, improve visibility and create sustainable
            growth.
          </p>
        </motion.div>

        <FeatureGrid features={solution.featureBlocks} />


        {/* ==============================
            CASE STUDY
        =============================== */}
        {solution.caseStudy && (
          <div className="mt-20 lg:mt-28">
            <FeaturedCaseStudy title="Case Study" caseStudy={solution.caseStudy} />
          </div>
        )}


        {/* ==============================
            RELATED CONTENT
        =============================== */}
        <div className="mt-20 lg:mt-28">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-10"
          >

            <div className="mb-4 flex items-center gap-3">
              <span className="h-1 w-8 rounded-full bg-primary" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Explore More
              </span>
            </div>

            <h2 className="font-display text-3xl font-bold tracking-tight text-[#101d35] sm:text-4xl">
              Continue exploring
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">
              Discover related services, industries and solutions that
              complement this offering.
            </p>

          </motion.div>

          <RelatedLinks
            groups={[
              {
                heading: "Related Services",
                links: relatedServices,
              },
              {
                heading: "Related Industries",
                links: relatedIndustries,
              },
              {
                heading: "Related Solutions",
                links: relatedSolutions,
              },
            ]}
          />

        </div>

      </>
    )}


    {/* ==============================
        CTA
    =============================== */}
    <div className="mt-20 lg:mt-28">

      <CTASection
        title={`Talk to us about ${solution.navLabel}`}
        description="Let our team help you scope the right approach for your business."
        ctaLabel="Let's Connect"
        ctaHref={ROUTES.contact}
      />

    </div>

  </div>
</section>
    </>
  );
}