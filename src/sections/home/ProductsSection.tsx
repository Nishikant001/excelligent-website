import { motion } from "framer-motion";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { SectionHeader } from "@/components/SectionHeader";
import { ProductCard } from "@/components/Cards";
import { Button } from "@/components/Button";
import { products } from "@/data/products";
import { ROUTES } from "@/routes/paths";

export function ProductsSection() {
  // GST Compliance Reporting is a stub page on the live site with no
  // published content — excluded from the homepage teaser grid, still
  // reachable from the full /products index.
  const verified = products.filter((p) => !p.contentPending);

  return (
    <section className="container-content py-16 lg:py-24">
      <SectionHeader eyebrow="Products" title="Purpose-built accelerators" />
      <motion.div
        variants={staggerChildren()}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {verified.map((p) => (
          <motion.div key={p.slug} variants={fadeUp}>
            <ProductCard product={p} />
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-10">
        <Button as="a" href={ROUTES.products} variant="text" withArrow className="group">
          Explore Products
        </Button>
      </div>
    </section>
  );
}
