import { motion } from "framer-motion";
import { DetailHero } from "@/components/DetailHero";
import { Seo } from "@/components/Seo";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema } from "@/lib/structuredData";
import { FeatureGrid, ProcessSteps, FeaturedCaseStudy, CTASection } from "@/components/Sections";
import { ProductCard } from "@/components/Cards";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SectionHeader } from "@/components/SectionHeader";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { serviceGradient, serviceIcon } from "@/lib/contentVisuals";
import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";
import { products } from "@/data/products";
import { ROUTES } from "@/routes/paths";
import type { ServiceContent } from "@/types/content";
import { Boxes } from "lucide-react";

export function ServiceDetailPage({ service }: { service: ServiceContent }) {
  const Icon = serviceIcon[service.slug] ?? Boxes;
  const gradient = serviceGradient[service.slug] ?? "bg-primary-gradient";

  const relatedSolutions = (service.relatedSolutionSlugs ?? [])
    .map((slug) => solutions.find((s) => s.slug === slug))
    .filter((s): s is (typeof solutions)[number] => Boolean(s))
    .map((s) => ({ label: s.navLabel, href: ROUTES.solution(s.slug) }));

  const relatedIndustries = (service.relatedIndustrySlugs ?? [])
    .map((slug) => industries.find((i) => i.slug === slug))
    .filter((i): i is (typeof industries)[number] => Boolean(i))
    .map((i) => ({ label: i.navLabel, href: ROUTES.industry(i.slug) }));

  const hubProducts = service.isProductHub
    ? (service.productSlugs ?? [])
        .map((slug) => products.find((p) => p.slug === slug))
        .filter((p): p is (typeof products)[number] => Boolean(p))
    : [];

  return (
    <>
      <Seo {...service.seo} />
      {!service.isProductHub && service.seo.robots !== "noindex, follow" && (
        <JsonLd data={serviceSchema(service)} />
      )}
      <DetailHero
        breadcrumb={[{ label: "Services", href: ROUTES.services }, { label: service.navLabel }]}
        eyebrow="Service"
        title={service.title}
        description={service.intro}
        icon={Icon}
        gradient={gradient}
      />

      <section className="container-content py-16 space-y-16">
        {service.knownContentBug && (
          <p className="rounded-lg border border-accent/30 bg-accent/10 p-4 text-sm text-accent-dark">
            Note: {service.knownContentBug}
          </p>
        )}

        {/* Product hub layout (SAP Value Added Services) */}
        {service.isProductHub && hubProducts.length > 0 && (
          <motion.div variants={staggerChildren()} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <SectionHeader title="Our Value-Added Products" />
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {hubProducts.map((p) => (
                <motion.div key={p.slug} variants={fadeUp}>
                  <ProductCard product={p} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Standard service sections — only rendered when real content exists */}
        {service.whyChooseUs.length > 0 && (
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <SectionHeader title="Why Choose Excelligent" />
            <div className="mt-8">
              <FeatureGrid features={service.whyChooseUs} />
            </div>
          </motion.div>
        )}

        {service.methodologyPhases.length > 0 && (
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <SectionHeader title="Approach" />
            <div className="mt-8">
              <ProcessSteps steps={service.methodologyPhases} />
            </div>
          </motion.div>
        )}

        {service.caseStudy && (
          <FeaturedCaseStudy title="Case Study" caseStudy={service.caseStudy} />
        )}

        {(relatedSolutions.length > 0 || relatedIndustries.length > 0) && (
          <motion.div variants={staggerChildren()} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <h2 className="text-h2 mb-6">Explore Related Content</h2>
            <RelatedLinks
              groups={[
                { heading: "Related Solutions", links: relatedSolutions },
                { heading: "Related Industries", links: relatedIndustries },
              ]}
            />
          </motion.div>
        )}

        <CTASection
          title={`Talk to us about ${service.navLabel}`}
          description="Let our team help you scope the right approach for your business."
          ctaLabel="Let's Connect"
          ctaHref={ROUTES.contact}
        />
      </section>
    </>
  );
}