import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { fadeUp, viewportOnce } from "@/lib/animations";
import { Button } from "@/components/Button";
import { industriesSection } from "@/data/homeSections";

// Section 10 of the brief — "Industries: use large scrolling words rather than
// eight little icons." Hovering (or focusing / tapping) a word reveals the
// business processes we work on in that industry, which "demonstrates actual
// industry understanding".
export function IndustriesWords() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="bg-background py-24 lg:py-36" aria-labelledby="industries-heading">
      <div className="container-content">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="max-w-3xl">
            <p className="eyebrow mb-5">{industriesSection.eyebrow}</p>
            <h2 id="industries-heading" className="text-statement text-text-primary">
              {industriesSection.headline}
            </h2>
          </motion.div>
          <Button as="a" href={industriesSection.viewAll.href} variant="text" withArrow className="group shrink-0 text-base font-semibold">
            {industriesSection.viewAll.label}
          </Button>
        </div>

        <ul className="mt-14 border-t border-border lg:mt-20">
          {industriesSection.words.map((item) => {
            const isActive = active === item.word;
            return (
              <li
                key={item.word}
                className="border-b border-border"
                onMouseEnter={() => setActive(item.word)}
                onMouseLeave={() => setActive((a) => (a === item.word ? null : a))}
              >
                <Link
                  to={item.href}
                  onFocus={() => setActive(item.word)}
                  onBlur={() => setActive((a) => (a === item.word ? null : a))}
                  onClick={(e) => {
                    // On touch screens the first tap reveals the processes; a
                    // second tap follows the link.
                    if (window.matchMedia("(hover: none)").matches && !isActive) {
                      e.preventDefault();
                      setActive(item.word);
                    }
                  }}
                  className="group flex items-center justify-between gap-6 py-4 lg:py-6"
                >
                  <span
                    className={`font-display text-giant uppercase transition-all duration-500 ease-premium ${
                      isActive
                        ? "text-gradient-ai translate-x-2 sm:translate-x-4"
                        : "text-outline [--outline-color:rgba(11,18,38,0.3)]"
                    }`}
                  >
                    {item.word}
                  </span>
                  <ArrowUpRight
                    className={`h-8 w-8 shrink-0 transition-all duration-300 lg:h-10 lg:w-10 ${
                      isActive ? "-translate-y-1 translate-x-1 text-primary opacity-100" : "text-text-secondary/40 opacity-60"
                    }`}
                    aria-hidden="true"
                  />
                </Link>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="processes"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-base font-medium leading-relaxed text-text-secondary sm:text-lg lg:max-w-4xl">
                        {item.processes.join(" · ")}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
