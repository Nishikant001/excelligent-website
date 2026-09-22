import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { Button } from "@/components/Button";
import { contact } from "@/data/company";
import { finalCta } from "@/data/homeSections";

// Section 14 — "Final CTA": the screen goes almost completely black; small
// kicker, huge headline, one action, contact details underneath.
export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-midnight-950 py-28 lg:py-44">
      <div
        className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/20 to-violet/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-content relative">
        <motion.div variants={staggerChildren()} initial="hidden" whileInView="show" viewport={viewportOnce} className="mx-auto max-w-5xl text-center">
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55 sm:text-sm">
            {finalCta.kicker}
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-8 font-display text-giant text-white">
            {finalCta.headline}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gradient-ai mt-8 font-display text-xl font-bold sm:text-2xl">
            {finalCta.strap}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-12">
            <Button as="a" href={finalCta.cta.href} size="lg" variant="gradient" withArrow className="group">
              {finalCta.cta.label}
            </Button>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-16 flex flex-col items-center justify-center gap-4 text-white/70 sm:flex-row sm:gap-10">
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4 text-secondary-light" aria-hidden="true" />
              {contact.email}
            </a>
            <a href={`tel:${contact.phones[0].replace(/[^+\d]/g, "")}`} className="inline-flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4 text-secondary-light" aria-hidden="true" />
              {contact.phones.join(" · ")}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
