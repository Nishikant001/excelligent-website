import { motion } from "framer-motion";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { SectionHeader } from "@/components/SectionHeader";
import { PartnerCard } from "@/components/Cards";
import { Button } from "@/components/Button";
import { partners } from "@/data/partners";
import { ROUTES } from "@/routes/paths";

export function PartnersSection() {
  return (
    <section className="container-content py-16 lg:py-24">
      <SectionHeader
        eyebrow="Technology Ecosystem"
        title="Our partner network"
        description="We work with a growing network of technology partners so we can be a single point of contact for your enterprise needs."
        align="center"
      />
      <motion.div
        variants={staggerChildren()}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {partners.map((partner) => (
          <motion.div key={partner.id} variants={fadeUp}>
            <PartnerCard partner={partner} />
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-10 text-center">
        <Button as="a" href={ROUTES.ourPartnerships} variant="text" withArrow className="group">
          Learn More About Our Partnerships
        </Button>
      </div>
    </section>
  );
}
