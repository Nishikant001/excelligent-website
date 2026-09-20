import { motion } from "framer-motion";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { transformationPillars } from "@/data/homeContent";

export function TransformationSection() {
  return (
    <section className="bg-brand-navy py-16 text-white lg:py-24">
      <div className="container-content">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-secondary">
            Your Digital Transformation Partner
          </p>
          <h2 className="text-h2 text-white">
            Process. Automation. Intelligence.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerChildren()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3"
        >
          {/* connecting line, desktop only */}
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-white/15 sm:block"
            aria-hidden="true"
          />
          {transformationPillars.map((pillar, i) => (
            <motion.div key={pillar.title} variants={fadeUp} className="relative text-center">
              <div className="relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-sm font-bold">
                {i + 1}
              </div>
              <h3 className="text-h3 text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm text-white/70">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
