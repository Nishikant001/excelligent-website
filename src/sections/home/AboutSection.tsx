import { motion } from "framer-motion";
import { fadeUp, imageReveal, viewportOnce } from "@/lib/animations";
import { Button } from "@/components/Button";
import { company } from "@/data/company";
import { ROUTES } from "@/routes/paths";

export function AboutSection() {
  return (
    <section className="container-content py-16 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-secondary-dark">
            About Excelligent
          </p>
          <h2 className="text-h2">A focused, experienced SAP delivery partner</h2>
          <p className="mt-4 text-text-secondary">{company.aboutParagraphs[0]}</p>
          <p className="mt-4 text-text-secondary">{company.aboutParagraphs[1]}</p>
          <div className="mt-8">
            <Button as="a" href={ROUTES.overview} variant="outline" withArrow className="group">
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-primary-gradient"
          role="img"
          aria-label="Abstract composition representing enterprise technology and digital transformation"
        >
          <div className="absolute inset-0 bg-hero-grid bg-grid opacity-20" aria-hidden="true" />
          <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-secondary/30 blur-3xl" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
