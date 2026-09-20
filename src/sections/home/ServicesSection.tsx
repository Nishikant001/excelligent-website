import { motion } from "framer-motion";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/Cards";
import { Button } from "@/components/Button";
import { services } from "@/data/services";
import { ROUTES } from "@/routes/paths";

export function ServicesSection() {
  // Exclude the SAP BTP Development entry, which duplicates the SAP BTP
  // solution page content on the live site (see
  // docs/CONTENT_REVIEW_REQUIRED.md item 9/12) — avoids showing the same
  // content twice on the homepage.
  const displayed = services.filter((s) => s.slug !== "sap-btp-development");

  return (
    <section className="container-content py-16 lg:py-24">
      <SectionHeader
        eyebrow="Services"
        title="End-to-end SAP delivery services"
        description="Implementation, application management, conversions and upgrades, and analytics."
      />
      <motion.div
        variants={staggerChildren()}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {displayed.map((s) => (
          <motion.div key={s.slug} variants={fadeUp}>
            <ServiceCard service={s} />
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-10">
        <Button as="a" href={ROUTES.services} variant="text" withArrow className="group">
          View All Services
        </Button>
      </div>
    </section>
  );
}
