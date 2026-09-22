import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { Button } from "@/components/Button";
import { ROUTES } from "@/routes/paths";
import { caseStudiesSection } from "@/data/homeSections";

// Section 9 of the brief — "Case studies … particularly important for
// generating leads." Large photographic cards (no client logos, since customer
// names are withheld), each with an industry tag, engagement title, three short
// lines and a "View Case Study →" link.
export function CaseStudiesShowcase() {
  return (
    <section className="relative isolate overflow-hidden bg-midnight py-24 lg:py-36" aria-labelledby="case-studies-heading">
      <div className="absolute inset-0 bg-navy-mesh opacity-70" aria-hidden="true" />
      <div className="container-content relative">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="max-w-3xl">
            <p className="eyebrow eyebrow-light mb-5">{caseStudiesSection.eyebrow}</p>
            <h2 id="case-studies-heading" className="text-statement text-white">
              {caseStudiesSection.headline}
            </h2>
            <p className="mt-5 max-w-2xl text-base text-white/65 sm:text-lg">{caseStudiesSection.subheading}</p>
          </motion.div>
          <Button
            as="a"
            href={caseStudiesSection.viewAll.href}
            variant="outlineLight"
            withArrow
            className="group shrink-0"
          >
            {caseStudiesSection.viewAll.label}
          </Button>
        </div>

        <motion.ul
          variants={staggerChildren(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {caseStudiesSection.cards.map((card) => (
            <motion.li key={card.id} variants={fadeUp} className="flex">
              <Link
                to={ROUTES.caseStudy(card.id)}
                className="group relative flex min-h-[30rem] w-full flex-col justify-between overflow-hidden rounded-3xl p-7 text-white ring-1 ring-white/10 transition-transform duration-500 ease-premium hover:-translate-y-1.5 sm:p-8"
              >
                <img
                  src={card.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/70 to-midnight/30" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-violet/20 mix-blend-multiply" aria-hidden="true" />

                <span className="relative z-10 w-fit rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur-sm">
                  {card.industry}
                </span>

                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-bold leading-tight sm:text-[1.7rem]">{card.title}</h3>
                  <ul className="mt-5 space-y-1.5 text-sm text-white/75">
                    {card.lines.map((line) => (
                      <li key={line} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-secondary-light" aria-hidden="true" />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-secondary-light">
                    View Case Study
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
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
