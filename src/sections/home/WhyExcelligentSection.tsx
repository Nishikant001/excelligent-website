import { motion } from "framer-motion";

import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { SectionHeader } from "@/components/SectionHeader";
import { company } from "@/data/company";
import { ROUTES } from "@/routes/paths";

export function WhyExcelligentSection() {
  return (
    <section className="section-y container-content">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* =========================
            IMAGE PANEL
        ========================== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="group relative aspect-[4/3.4] overflow-hidden rounded-[2rem]"
        >
          {/* Background Image */}
          <img
            src="/why-excelligent/why-excelligent.png"
            alt="Excelligent delivery team"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 "
          />

          {/* Main Blue Gradient
          <div
            className="absolute inset-0 bg-gradient-to-t to-transparent"
            aria-hidden="true"
          /> */}

          {/* Subtle Brand Tint */}
          <div
            className="absolute inset-0 bg-[#075A7C]/10"
            aria-hidden="true"
          />

         
       

   
        </motion.div>

        {/* =========================
            RIGHT CONTENT
        ========================== */}
        <motion.div
          variants={staggerChildren()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <SectionHeader
            eyebrow="Why Excelligent"
            title="A partner built around SAP delivery"
            description={company.mission}
          />

          <div className="mt-10 space-y-8">
          

            <motion.div variants={fadeUp}>
              <h3 className="text-lg font-semibold text-text-primary">
                Experienced Delivery Teams
              </h3>

              <p className="mt-2 text-base leading-relaxed text-text-secondary">
                Our consultants combine business-domain experience with
                hands-on SAP delivery experience across implementation, AMS,
                and migration projects.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="text-lg font-semibold text-text-primary">
                Practical, Outcome-Focused Delivery
              </h3>

              <p className="mt-2 text-base leading-relaxed text-text-secondary">
                We combine process understanding, technology expertise, and
                delivery discipline to create solutions that support measurable
                business outcomes.
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="mt-8">
            <a
              href={ROUTES.contact}
              className="inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-secondary"
            >
              Talk to Us
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}