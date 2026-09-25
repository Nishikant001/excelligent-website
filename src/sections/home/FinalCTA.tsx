import { motion } from "framer-motion";
import { Play } from "lucide-react";

import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { Button } from "@/components/Button";
import { finalCta } from "@/data/homeSections";

// Section 14 — "Final CTA": kicker + two-line headline (second line in a
// blue → violet gradient), a short description, a primary CTA and a
// secondary "watch the story" action, with a dotted globe graphic on the
// right to visually match the office/world map motif used in the footer.
export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#030b18] py-24 lg:py-28">
      {/* Ambient glow, consistent with the footer's ambient background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(circle_at_78%_15%,rgba(0,140,255,0.10),transparent_35%)]
        "
      />

      <div className="container-content relative">
        <motion.div
          variants={staggerChildren()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10"
        >
          {/* ================= LEFT: copy + actions ================= */}
          <div>
            <motion.p
              variants={fadeUp}
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55"
            >
              {finalCta.kicker /* e.g. "Ready to build what's next?" */}
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-6 font-display text-[42px] font-semibold leading-[1.05] text-white sm:text-[52px] lg:text-[58px]"
            >
              Let&rsquo;s transform
              <br />
              <span className="bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">
                your enterprise.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[46ch] text-[15px] leading-7 text-white/60"
            >
              {finalCta.strap /* fall back to a plain description string, not the cursive strap */}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <Button
                as="a"
                href={finalCta.cta.href}
                size="lg"
                variant="gradient"
                withArrow
                className="group"
              >
                {finalCta.cta.label}
              </Button>

              {/* homeSections.ts's finalCta type only has kicker/headline/strap/cta
                  today — there's no videoHref field, so this points at "#" for now.
                  Add a videoHref: string to that type + data object once you have
                  a real video link, then swap the href below to finalCta.videoHref. */}
              <a
                href="#"
                className="group flex items-center gap-3 text-white/75 transition-colors hover:text-white"
              >
                <span
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full border border-white/25
                    transition-colors duration-300
                    group-hover:border-primary group-hover:text-primary
                  "
                >
                  <Play className="h-4 w-4 translate-x-[1px]" fill="currentColor" />
                </span>

                <span className="text-left">
                  <span className="block text-[14px] font-medium">Watch Our Story</span>
                  <span className="block text-[12px] text-white/45">2 min</span>
                </span>
              </a>
            </motion.div>
          </div>

          {/* ================= RIGHT: globe graphic ================= */}
          <motion.div
            variants={fadeUp}
            className="relative hidden h-[280px] lg:block"
            aria-hidden="true"
          >
            {/* Floating labels */}
            <div className="absolute right-2 top-0 space-y-2 text-right text-[10px] font-semibold uppercase tracking-[0.22em] text-white z-10">
              <p>Ideas</p>
              <p>Technology</p>
              <p>People</p>
              <p>A Brighter Tomorrow</p>
            </div>

            {/* Globe photo — swap the CSS dotted circle for the real image.
                Drop cta-globe.jpg into your public/ folder (e.g.
                public/images/cta-globe.jpg) and point src at that path;
                update it below if you place it somewhere else. The
                radial mask fades the rectangular photo's edges into the
                dark background so it still reads as a soft circle. */}
            <div className="absolute -right-10 top-1/2 h-[420px] w-[420px] -translate-y-1/2 overflow-hidden rounded-full">
              <img
                src="/cta/cta.png"
                alt=""
                className="
                  h-full w-full
                  object-cover
                  opacity-90
                  [mask-image:radial-gradient(circle,black_58%,transparent_76%)]
                "
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}