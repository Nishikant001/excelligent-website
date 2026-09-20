import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { fadeUp } from "@/lib/animations";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-navy-mesh">
      <div className="absolute inset-0 bg-hero-grid bg-grid opacity-[0.12]" aria-hidden="true" />
      <div
        className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-content relative py-16 lg:py-24">
        <Breadcrumb items={[{ label: "Contact" }]} tone="inverted" />
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-8 flex items-start gap-5">
          <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 sm:flex">
            <MessageCircle className="h-6 w-6 text-white" aria-hidden="true" />
          </span>
          <div>
            <p className="eyebrow eyebrow-light mb-4">Get In Touch</p>
            <h1 className="text-h1 text-white">Let's build what's next, together.</h1>
            <p className="mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
              Reach out about SAP implementation, SAP AMS, SAP BTP, GROW or RISE with SAP,
              OKR, HCM, cyber security, or any of our other solutions and services — our team
              is ready to talk through your digital transformation needs.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-secondary via-primary-light to-secondary" aria-hidden="true" />
    </section>
  );
}
