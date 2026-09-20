import { motion } from "framer-motion";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { Button } from "@/components/Button";
import { ROUTES } from "@/routes/paths";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-mesh py-24 lg:py-32">
      <div className="absolute inset-0 bg-hero-grid bg-grid opacity-[0.12]" aria-hidden="true" />
      <div
        className="absolute left-1/4 top-0 h-80 w-80 -translate-y-1/3 rounded-full bg-secondary/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-content relative">
        <motion.div
          variants={staggerChildren()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <motion.p variants={fadeUp} className="eyebrow eyebrow-light">
              Let's Build What's Next
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-5 text-h1 text-white">
              Ready to transform your business?
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-xl text-lg text-white/75">
              Partner with Excelligent to unlock new opportunities, adopt SAP with confidence,
              and build a stronger, more resilient tomorrow.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9">
              <Button as="a" href={ROUTES.contact} size="lg" variant="secondary" withArrow className="group">
                Let's Connect
              </Button>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="shrink-0 text-right">
            <p className="font-display text-2xl font-bold text-white sm:text-3xl">
              Higher Possibilities.
              <br />
              Together.
            </p>
            <span className="mt-3 inline-block h-px w-16 bg-secondary/60" aria-hidden="true" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
