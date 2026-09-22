import { motion } from "framer-motion";
import { Bot, LineChart, ShoppingCart, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { Button } from "@/components/Button";
import { EnterpriseAIDiagram } from "@/components/visuals/EnterpriseAIDiagram";
import { enterpriseAi } from "@/data/homeSections";

const useCaseIcons: LucideIcon[] = [LineChart, ShoppingCart, Bot, Wrench];

// Section 4 of the brief — "The showpiece: Enterprise AI". The most visually
// rich part of the page: an animated architecture diagram with data flowing up
// and down the stack, and the four enterprise-specific AI use cases beneath it.
export function EnterpriseAISection({ withCta = true }: { withCta?: boolean }) {
  return (
    <section className="relative isolate overflow-hidden bg-midnight py-24 lg:py-36" aria-labelledby="enterprise-ai-heading">
      <div className="absolute inset-0 bg-navy-mesh" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-hero-grid bg-grid opacity-[0.14] [mask-image:radial-gradient(ellipse_at_50%_40%,black,transparent_75%)]"
        aria-hidden="true"
      />

      <div className="container-content relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr,1.05fr] lg:gap-20">
          <motion.div variants={staggerChildren()} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <motion.p variants={fadeUp} className="eyebrow eyebrow-light mb-5">
              {enterpriseAi.eyebrow}
            </motion.p>
            <motion.h2 id="enterprise-ai-heading" variants={fadeUp} className="text-statement text-white">
              {enterpriseAi.headline}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-statement text-gradient-ai mt-2">
              {enterpriseAi.accent}
            </motion.p>
            <motion.p variants={fadeUp} className="mt-8 max-w-xl text-lg leading-relaxed text-white/75 lg:text-xl">
              {enterpriseAi.body}
            </motion.p>
            {withCta && (
              <motion.div variants={fadeUp} className="mt-10">
                <Button as="a" href={enterpriseAi.cta.href} size="lg" variant="gradient" withArrow className="group">
                  {enterpriseAi.cta.label}
                </Button>
              </motion.div>
            )}
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <EnterpriseAIDiagram />
          </motion.div>
        </div>

        <motion.ul
          variants={staggerChildren(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4 lg:gap-5"
        >
          {enterpriseAi.useCases.map((uc, i) => {
            const Icon = useCaseIcons[i];
            return (
              <motion.li
                key={uc.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-secondary-light/40 hover:bg-white/[0.07]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary-light/25 to-violet/25 text-secondary-light ring-1 ring-white/10">
                  <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-white">{uc.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/65">{uc.description}</p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
