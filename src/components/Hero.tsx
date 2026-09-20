import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "@/lib/animations";
import { Button } from "@/components/Button";
import { ROUTES } from "@/routes/paths";

export function Hero({
  badge,
  title,
  supportingText,
  primaryCta,
  secondaryCta,
}: {
  badge?: string;
  title: string;
  supportingText: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-primary-gradient">
      <div
        className="absolute inset-0 bg-hero-grid bg-grid opacity-20"
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-content relative py-24 lg:py-32">
        <motion.div
          variants={staggerChildren()}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {badge && (
            <motion.span
              variants={fadeUp}
              className="mb-5 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm"
            >
              {badge}
            </motion.span>
          )}
          <motion.h1 variants={fadeUp} className="text-h1 text-white">
            {title}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-lg text-white/80">
            {supportingText}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            {primaryCta && (
              <Button as="a" href={primaryCta.href} size="lg" withArrow className="group">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button
                as="a"
                href={secondaryCta.href}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                {secondaryCta.label}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function DefaultHomeHero() {
  return (
    <Hero
      badge="Digital Transformation Partner"
      title="Your future is created by what you do today"
      supportingText="Excelligent helps enterprises adopt SAP, cloud, analytics, and intelligent automation with confidence — process-centric, automation-driven, and insight-led."
      primaryCta={{ label: "Explore Solutions", href: ROUTES.solutions }}
      secondaryCta={{ label: "Talk to Us", href: ROUTES.contact }}
    />
  );
}
