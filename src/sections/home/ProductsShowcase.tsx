import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, FileText, Search, ShieldCheck } from "lucide-react";

import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { Button } from "@/components/Button";
import { productsSection } from "@/data/homeSections";

// Decorative product illustration for e-Vault — an abstract document vault
// with an OCR scan line. No real data is shown; it is aria-hidden.
function EVaultMock() {
  const rows = [
    { name: "Vendor invoice", status: "OCR complete", tone: "text-secondary-light bg-secondary-light/10" },
    { name: "Purchase order", status: "Indexed", tone: "text-primary-light bg-primary-light/10" },
    { name: "Contract", status: "In approval", tone: "text-violet-light bg-violet-light/10" },
  ];
  return (
    <div
      className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-midnight-900/80 shadow-glow backdrop-blur-sm"
      aria-hidden="true"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="ml-3 flex items-center gap-1.5 text-[11px] font-medium text-white/50">
          <ShieldCheck className="h-3.5 w-3.5" /> Secure repository
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white/60">
          <Search className="h-4 w-4 text-secondary-light" />
          Ask your documents…
        </div>
        <div className="relative mt-3">
        <ul className="space-y-2">
          {rows.map((r) => (
            <li key={r.name} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3">
              <FileText className="h-4 w-4 shrink-0 text-white/50" />
              <span className="flex-1 text-xs font-medium text-white/85">{r.name}</span>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${r.tone}`}>{r.status}</span>
            </li>
          ))}
        </ul>
        <span className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="absolute inset-x-0 h-8 -translate-y-1/2 animate-scan bg-gradient-to-b from-transparent via-secondary-light/25 to-transparent motion-reduce:hidden" />
        </span>
        </div>
      </div>
    </div>
  );
}

// Section 7 of the brief — "Your products: Built by Excelligent." e-Vault is
// the first and biggest card; three smaller product cards sit beneath it.
export function ProductsShowcase() {
  const { flagship, others } = productsSection;

  return (
    <section className="bg-background py-24 lg:py-36" aria-labelledby="products-heading">
      <div className="container-content">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="max-w-3xl">
            <p className="eyebrow mb-5">{productsSection.eyebrow}</p>
            <h2 id="products-heading" className="text-statement text-text-primary">
              {productsSection.headline}
            </h2>
            <p className="mt-5 text-xl text-text-secondary lg:text-2xl">{productsSection.subheading}</p>
          </motion.div>
          <Button as="a" href={productsSection.viewAll.href} variant="text" withArrow className="group shrink-0 text-base font-semibold">
            {productsSection.viewAll.label}
          </Button>
        </div>

        {/* Flagship */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative isolate mt-14 overflow-hidden rounded-[2rem] bg-midnight p-8 sm:p-12 lg:p-14"
        >
          <div className="absolute inset-0 bg-navy-mesh" aria-hidden="true" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <span className="inline-flex rounded-full border border-secondary-light/40 bg-secondary-light/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary-light">
                Flagship product
              </span>
              <h3 className="mt-6 font-display text-[clamp(2.5rem,1.6rem+3.5vw,4.5rem)] font-extrabold leading-none tracking-tight text-white">
                {flagship.name}
              </h3>
              <p className="mt-4 text-lg font-semibold text-white sm:text-xl">{flagship.tag}</p>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">{flagship.tagline}</p>
              <p className="mt-6 text-sm font-medium leading-relaxed text-secondary-light">
                {flagship.capabilities.join(" · ")}
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button as="a" href={flagship.primary.href} variant="gradient" size="lg" withArrow className="group">
                  {flagship.primary.label}
                </Button>
                <Button as="a" href={flagship.secondary.href} variant="outlineLight" size="lg" withArrow className="group">
                  {flagship.secondary.label}
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <EVaultMock />
            </div>
          </div>
        </motion.div>

        {/* Smaller products */}
        <motion.ul
          variants={staggerChildren(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {others.map((p) => (
            <motion.li key={p.slug} variants={fadeUp} className="flex">
              <Link
                to={`/products/${p.slug}`}
                className="group flex min-h-[11rem] w-full flex-col justify-between rounded-3xl border border-border bg-surface p-7 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-primary/40 hover:shadow-panel-light"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-bold text-text-primary">{p.name}</h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-text-secondary/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-text-secondary">{p.lines}</p>
                  {p.comingSoon && (
                    <span className="mt-3 inline-block rounded-full bg-surface-muted px-2.5 py-0.5 text-[11px] font-semibold text-text-secondary">
                      Details coming soon
                    </span>
                  )}
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
