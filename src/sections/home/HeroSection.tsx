import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { fadeUp, staggerChildren } from "@/lib/animations";
import { Button } from "@/components/Button";
import { ROUTES } from "@/routes/paths";

const heroSlides = [
  {
    image: "/hero/hero-1.png",
    alt: "Business transformation and SAP technology",
  },
  {
    image: "/hero/hero-2.png",
    alt: "Enterprise digital transformation",
  },
  {
    image: "/hero/hero-3.png",
    alt: "Cloud and intelligent enterprise technology",
  },
  {
    image: "/hero/hero-4.png",
    alt: "Analytics and business automation",
  },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#06245F] lg:min-h-[760px]">
      {/* =========================
          BACKGROUND IMAGE SLIDER
      ========================== */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={heroSlides[activeSlide].image}
            src={heroSlides[activeSlide].image}
            alt={heroSlides[activeSlide].alt}
            initial={{
              opacity: 0,
              scale: 1.06,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.02,
            }}
            transition={{
              opacity: {
                duration: 1.3,
                ease: "easeInOut",
              },
              scale: {
                duration: 5,
                ease: "linear",
              },
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* Left dark gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06245F]/100 via-[#073B7A]/60 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06245F]/75 via-transparent to-transparent" />

        {/* Subtle blue glow */}
        <div
          className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[#20C7E8]/15 blur-3xl"
          aria-hidden="true"
        />
      </div>

      {/* =========================
          HERO CONTENT
      ========================== */}
      <div className="container-content relative z-10 flex min-h-[680px] items-center py-20 lg:min-h-[760px] lg:py-24">
        <motion.div
          variants={staggerChildren()}
          initial="hidden"
          animate="show"
          className="w-full max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-5 w-1 rounded-full bg-[#5FD1CF]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#5FD1CF]">
              Your Partner In Business Transformation
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            className="max-w-3xl text-hero text-white"
          >
            Business transformation,
            <br className="hidden sm:block" />
            powered by{" "}
            <span className="text-[#5FD1CF]">SAP</span>.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 lg:text-xl"
          >
            Excelligent helps enterprises adopt SAP, cloud, analytics, and
            intelligent automation with confidence — a focused, experienced
            delivery team combining deep SAP expertise with a people-first
            approach.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button
              as="a"
              href={ROUTES.solutions}
              size="lg"
              withArrow
              className="group"
            >
              Explore Our Solutions
            </Button>

            <Button
              as="a"
              href={ROUTES.contact}
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white hover:text-primary"
            >
              Talk to Our Experts
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* =========================
          SLIDER CONTROLS
      ========================== */}
      <div className="absolute bottom-7 left-0 right-0 z-20">
        <div className="container-content flex items-center justify-between">
          {/* Counter */}
          <div className="flex items-center gap-3 text-white">
            <span className="text-sm font-semibold tracking-[0.15em]">
              {String(activeSlide + 1).padStart(2, "0")}
            </span>

            <span className="text-white/40">/</span>

            <span className="text-sm text-white/50">
              {String(heroSlides.length).padStart(2, "0")}
            </span>

            {/* Progress */}
            <div className="ml-3 hidden h-[2px] w-28 overflow-hidden bg-white/25 sm:block">
              <motion.div
                key={activeSlide}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 5,
                  ease: "linear",
                }}
                className="h-full bg-[#5FD1CF]"
              />
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show hero slide ${index + 1}`}
                className="flex h-7 items-center justify-center"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    activeSlide === index
                      ? "h-2 w-8 bg-[#5FD1CF]"
                      : "h-2 w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}