import { motion } from "framer-motion";
import { DetailHero } from "@/components/DetailHero";
import { Seo } from "@/components/Seo";
import { JsonLd } from "@/components/JsonLd";
import { productSchema } from "@/lib/structuredData";
import { FeatureGrid, FeaturedCaseStudy, CTASection } from "@/components/Sections";
import { RelatedLinks } from "@/components/RelatedLinks";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { ROUTES } from "@/routes/paths";
import type { ProductContent } from "@/types/content";
import { Boxes } from "lucide-react";

export function ProductDetailPage({ product }: { product: ProductContent }) {
  const relatedIndustries = (product.relatedIndustrySlugs ?? [])
    .map((slug) => industries.find((i) => i.slug === slug))
    .filter((i): i is (typeof industries)[number] => Boolean(i))
    .map((i) => ({ label: i.navLabel, href: ROUTES.industry(i.slug) }));

  const relatedServices = (product.relatedServiceSlugs ?? [])
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[number] => Boolean(s))
    .map((s) => ({ label: s.navLabel, href: ROUTES.service(s.slug) }));

  return (
    <>
      <Seo {...product.seo} />
      {!product.contentPending && <JsonLd data={productSchema(product)} />}
      <DetailHero
        breadcrumb={[{ label: "Products", href: ROUTES.products }, { label: product.navLabel }]}
        eyebrow="Product"
        title={product.title}
        description={!product.contentPending ? product.intro : undefined}
        icon={Boxes}
        gradient="bg-primary-gradient"
      />

      <section className="container-content py-16 space-y-16">
        {product.contentPending ? (
          <p className="rounded-xl border border-dashed border-border p-8 text-center text-text-secondary">
            Content coming soon — this page is awaiting real content from Excelligent.
          </p>
        ) : (
          <>
            {product.featureBlocks.length > 0 && (
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
                <h2 className="text-h2 mb-6">Key Features</h2>
                <FeatureGrid features={product.featureBlocks} />
              </motion.div>
            )}

            {product.caseStudy && (
              <FeaturedCaseStudy title="Use Case" caseStudy={product.caseStudy} />
            )}

            {(relatedIndustries.length > 0 || relatedServices.length > 0) && (
              <motion.div variants={staggerChildren()} initial="hidden" whileInView="show" viewport={viewportOnce}>
                <h2 className="text-h2 mb-6">Explore Related Content</h2>
                <RelatedLinks
                  groups={[
                    { heading: "Related Industries", links: relatedIndustries },
                    { heading: "Related Services", links: relatedServices },
                  ]}
                />
              </motion.div>
            )}
          </>
        )}

        <CTASection
          title={`Interested in ${product.navLabel}?`}
          description="Talk to our team to see how this fits your operations."
          ctaLabel="Let's Connect"
          ctaHref={ROUTES.contact}
        />
      </section>
    </>
  );
}