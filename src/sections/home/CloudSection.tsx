import { motion } from "framer-motion";

import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { Button } from "@/components/Button";
import { CloudStack } from "@/components/visuals/CloudStack";
import { cloudSection } from "@/data/homeSections";

// Section 6 of the brief — "AWS + Cloud. Dark again." SAP meets Cloud, with the
// layered stack (applications → AWS cloud services → modern enterprise).
export function CloudSection() {
  return (
    <section className="relative isolate overflow-hidden bg-midnight py-24 lg:py-36" aria-labelledby="cloud-heading">
      <div className="absolute inset-0 bg-navy-mesh opacity-80" aria-hidden="true" />
      <div className="container-content relative grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div variants={staggerChildren()} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <motion.p variants={fadeUp} className="eyebrow eyebrow-light mb-5">
            {cloudSection.eyebrow}
          </motion.p>
          <motion.h2 id="cloud-heading" variants={fadeUp} className="text-statement text-white">
            {cloudSection.headline}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 max-w-lg text-xl leading-relaxed text-white/75 lg:text-2xl">
            {cloudSection.subheading}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10">
            <Button as="a" href={cloudSection.cta.href} size="lg" variant="gradient" withArrow className="group">
              {cloudSection.cta.label}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <CloudStack />
        </motion.div>
      </div>
    </section>
  );
}
