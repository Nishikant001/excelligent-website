import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { pageSeo } from "@/data/seo";
import { SectionHeader } from "@/components/SectionHeader";
import { ProductCard } from "@/components/Cards";
import { CTASection } from "@/components/Sections";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { products } from "@/data/products";
import { ROUTES } from "@/routes/paths";

export default function ProductsIndexPage() {
  return (
    <>
      <Seo {...pageSeo.productsIndex} />
      <PageHero
        breadcrumb={[{ label: "Products" }]}
        eyebrow="Accelerators"
        title="Products"
        description="Purpose-built accelerators Excelligent has developed on top of SAP ECC and S/4HANA to solve specific operational challenges."
      />

      <section className="section-y-tight container-content">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-3xl text-lg text-text-secondary"
        >
          Beyond core implementation and support, Excelligent builds product accelerators —
          tools designed around real operational gaps we've seen in the field, from
          asset-tracking to dealer management.
        </motion.p>
      </section>

      <section className="section-y-tight container-content">
        <SectionHeader title="Our Products" />
        <motion.div
          variants={staggerChildren()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((p) => (
            <motion.div key={p.slug} variants={fadeUp}>
              <ProductCard product={p} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="pb-20 lg:pb-28 container-content">
        <CTASection
          title="Want to see a product in action?"
          description="Talk to our team about which accelerator fits your operations."
          ctaLabel="Let's Connect"
          ctaHref={ROUTES.contact}
        />
      </section>
    </>
  );
}
