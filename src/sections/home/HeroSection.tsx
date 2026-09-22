import { motion } from "framer-motion";

import { fadeUp, staggerChildren } from "@/lib/animations";
import { Button } from "@/components/Button";
import { DataNetworkCanvas } from "@/components/visuals/DataNetworkCanvas";
import { hero } from "@/data/homeSections";

// Section 1 of the homepage brief — "Hero, first 5 seconds": near-black
// background, a subtle animated network of data nodes flowing between SAP,
// cloud, AI and enterprise systems, the headline, two CTAs, and a slowly
// moving technology ribbon along the bottom.
export function HeroSection() {
  const ribbon = [...hero.ribbon, ...hero.ribbon, ...hero.ribbon, ...hero.ribbon];

  return (
    <section className="relative isolate overflow-hidden bg-midnight">
      {/* Backdrop: midnight mesh + faint grid */}
      <div className="absolute inset-0 bg-navy-mesh" aria-hidden="true" />
      <div className="absolute inset-0 bg-hero-grid bg-grid opacity-[0.18] [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" aria-hidden="true" />

      {/* Animated data network */}
      <div className="absolute inset-0 opacity-45 sm:opacity-70 lg:opacity-100" aria-hidden="true">
        <DataNetworkCanvas className="block h-full w-full" />
      </div>

      {/* Left-hand readability scrim */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/70 to-transparent lg:via-midnight/40"
        aria-hidden="true"
      />

      <div className="container-content relative z-10 flex min-h-[calc(100svh-4.5rem)] items-center pb-28 pt-16 xl:min-h-[calc(100svh-5rem)] lg:pb-32">
        <motion.div variants={staggerChildren()} initial="hidden" animate="show" className="w-full max-w-3xl">
          <motion.p variants={fadeUp} className="eyebrow eyebrow-light mb-6 tracking-[0.3em]">
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-[clamp(2.5rem,1.35rem+3.6vw,4.6rem)] font-extrabold leading-[1.04] tracking-[-0.02em] text-white"
          >
            {hero.headlineLine1}
            <br />
            {hero.headlineLine2Prefix} <span className="text-gradient-ai">{hero.headlineLine2Accent}</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 lg:text-xl">
            {hero.subheading}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <Button as="a" href={hero.primaryCta.href} size="lg" variant="gradient" withArrow className="group">
              {hero.primaryCta.label}
            </Button>
            <Button as="a" href={hero.secondaryCta.href} size="lg" variant="outlineLight" withArrow className="group">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Technology ribbon */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-midnight/60 backdrop-blur-md">
        <div className="overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <ul className="flex w-max animate-ribbon items-center gap-10 motion-reduce:animate-none" aria-label="Technology focus">
            {ribbon.map((item, i) => (
              <li
                key={`${item}-${i}`}
                aria-hidden={i >= hero.ribbon.length ? true : undefined}
                className="flex items-center gap-10 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
              >
                {item}
                <span className="h-1 w-1 rounded-full bg-secondary-light/70" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
