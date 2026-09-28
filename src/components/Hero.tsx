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
  title: React.ReactNode; 
  supportingText: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-background text-text-primary">
      <div className="container-content relative py-20 lg:py-28">
        <motion.div
          variants={staggerChildren()}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          <div className="lg:col-span-8">
            {badge && (
              <motion.span
                variants={fadeUp}
                className="mb-6 block text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary"
              >
                {badge}
              </motion.span>
            )}
            {/* CHANGED: Swapped font styling to display-serif tracks and removed aggressive heavy font weights for an elegant editorial look */}
            <motion.h1 variants={fadeUp} className="text-hero text-text-primary font-normal tracking-tight">
              {title}
            </motion.h1>
          </div>
          
          <div className="lg:col-span-4 lg:mt-16">
            <motion.p variants={fadeUp} className="text-base text-text-secondary leading-relaxed">
              {supportingText}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              {primaryCta && (
                <Button as="a" href={primaryCta.href} size="lg" className="bg-text-primary text-white hover:bg-text-primary/90">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  as="a"
                  href={secondaryCta.href}
                  size="lg"
                  variant="outline"
                  className="border-text-primary text-text-primary hover:bg-text-primary hover:text-white"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function DefaultHomeHero() {
  return (
    <Hero
      badge="Artery — Consulting &amp; Technologies"
      /* CHANGED: Reformatted text blocks using clean italic emphasis wrappers to create the exact structural look of the Artery homepage headline */
      title={
        <>
          We design, <br />
          build and run <br />
          the <span className="font-serif italic text-secondary-dark">intelligent enterprise.</span>
        </>
      }
      supportingText="Strategy, AI, engineering and global capability — assembled into one operating system and owned by a single accountable partner, from first principle to steady state."
      primaryCta={{ label: "Speak with leadership", href: ROUTES.contact }}
      secondaryCta={{ label: "See the practice", href: ROUTES.solutions }}
    />
  );
}
