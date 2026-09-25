import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { capabilities, capabilitiesSection } from "@/data/homeSections";

// Section 3 of the brief — "Capabilities. Don't call this 'Our Services'."
// Six large interactive cards instead of many small boxes. On hover a card
// expands slightly, inverts to the midnight theme and reveals "Explore →".
export function CapabilitiesSection() {
  return (
    <section
      id={capabilitiesSection.id}
      className="scroll-mt-20 bg-background py-8 lg:py-10"
    >
      <div className="container-content">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-6xl font-bold max-w-3xl text-text-primary"
        >
          {capabilitiesSection.title}
        </motion.h2>

        <motion.ul
          variants={staggerChildren(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4"
        >
          {capabilities.map((cap) => (
            <motion.li
              key={cap.number}
              variants={fadeUp}
              className="flex"
            >
              <Link
                to={cap.href}
                className="group relative flex min-h-[12rem] w-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface p-5 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:scale-[1.025] hover:border-transparent hover:bg-midnight hover:shadow-glow focus-visible:-translate-y-1.5 focus-visible:scale-[1.025] focus-visible:border-transparent focus-visible:bg-midnight focus-visible:shadow-glow"
              >
                {/* hover glow */}
                <span
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-secondary-light/30 to-violet/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative flex items-start justify-between">
                  <span className="text-gradient-ai font-display text-lg font-bold tracking-wider">
                    {cap.number}
                  </span>

                  <ArrowUpRight
                    className="h-5 w-5 text-text-secondary/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white group-focus-visible:text-white"
                    aria-hidden="true"
                  />
                </div>

                <div className="relative mt-4">
                  <h3 className="font-display text-2xl font-bold text-text-primary transition-colors duration-300 group-hover:text-white group-focus-visible:text-white lg:text-[1.5rem]">
                    {cap.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium leading-relaxed text-text-secondary transition-colors duration-300 group-hover:text-white/60 group-focus-visible:text-white/60">
                    {cap.tags.join(" · ")}
                  </p>

                  <p className="mt-4 text-base italic text-text-primary/80 transition-colors duration-300 group-hover:text-white/90 group-focus-visible:text-white/90">
                    {cap.tagline}
                  </p>

                  <span className="mt-5 inline-flex translate-y-2 items-center gap-1.5 text-sm font-semibold text-secondary-light opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:text-primary [@media(hover:none)]:opacity-100">
                    Explore
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

      </div>
    </section>
  );
}
