import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { pageSeo } from "@/data/seo";
import { CaseStudyCard } from "@/components/Cards";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { caseStudies } from "@/data/caseStudies";
import { industries } from "@/data/industries";

const industriesWithCaseStudies = industries.filter((i) =>
  caseStudies.some((c) => c.industrySlugs?.includes(i.slug))
);

export default function CaseStudiesPage() {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!activeIndustry) return caseStudies;
    return caseStudies.filter((c) => c.industrySlugs?.includes(activeIndustry));
  }, [activeIndustry]);

  return (
    <>
      <Seo {...pageSeo.caseStudiesIndex} />
      <PageHero
        breadcrumb={[{ label: "Case Studies" }]}
        eyebrow="Proof In Delivery"
        title="Case Studies"
        description="Real engagements from across our Solutions, Services, and Products — client names are withheld consistent with how these were published on the existing site."
      />

      <section className="section-y-tight container-content">
        {/* Industry filter — client-side only, no backend involved */}
        {industriesWithCaseStudies.length > 1 && (
          <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter case studies by industry">
            <button
              type="button"
              onClick={() => setActiveIndustry(null)}
              aria-pressed={activeIndustry === null}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                activeIndustry === null
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-surface text-text-secondary hover:border-primary hover:text-primary"
              }`}
            >
              All Industries
            </button>
            {industriesWithCaseStudies.map((industry) => (
              <button
                key={industry.slug}
                type="button"
                onClick={() => setActiveIndustry(industry.slug)}
                aria-pressed={activeIndustry === industry.slug}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                  activeIndustry === industry.slug
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-surface text-text-secondary hover:border-primary hover:text-primary"
                }`}
              >
                {industry.navLabel}
              </button>
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry ?? "all"}
            variants={staggerChildren()}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((c) => (
              <motion.div key={c.id} variants={fadeUp}>
                <CaseStudyCard caseStudy={c} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="rounded-xl border border-dashed border-border p-8 text-center text-text-secondary">
            No case studies found for this industry yet.
          </p>
        )}
      </section>
    </>
  );
}
