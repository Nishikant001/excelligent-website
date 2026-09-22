import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { WorldMap } from "@/components/visuals/WorldMap";
import { footprint } from "@/data/homeSections";

// Section 12 — "Geographic footprint": a very subtle dark world map with
// glowing locations, "India built. Globally ready."
export function FootprintSection() {
  return (
    <section className="relative isolate overflow-hidden bg-midnight py-24 lg:py-36" aria-labelledby="footprint-heading">
      {/* map: on small screens it is wider than the viewport and centred on India */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-70" >
        <WorldMap
          markers={footprint.locations}
          className="absolute left-1/2 top-1/2 w-[1100px] max-w-none -translate-x-[72%] -translate-y-1/2 md:left-0 md:w-full md:translate-x-0"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-midnight/20 md:via-midnight/60" aria-hidden="true" />

      <div className="container-content relative">
        <motion.div variants={staggerChildren()} initial="hidden" whileInView="show" viewport={viewportOnce} className="max-w-xl">
          <motion.p variants={fadeUp} className="eyebrow eyebrow-light mb-5">{footprint.eyebrow}</motion.p>
          <motion.h2 id="footprint-heading" variants={fadeUp} className="text-statement text-white">
            {footprint.headlineLine1}
            <br />
            <span className="text-gradient-ai">{footprint.headlineLine2}</span>
          </motion.h2>

          <motion.ul variants={fadeUp} className="mt-12 space-y-6">
            {footprint.locations.map((loc) => (
              <li key={loc.name} className="flex items-start gap-4">
                <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-secondary-light/15 text-secondary-light ring-1 ring-secondary-light/40">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-2xl font-bold text-white">{loc.name}</p>
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/60">{loc.role}</p>
                </div>
              </li>
            ))}
          </motion.ul>

          <motion.p variants={fadeUp} className="mt-12 max-w-md text-lg text-white/75">{footprint.serving}</motion.p>
        </motion.div>
      </div>
    </section>
  );
}
