import { solutions } from "@/data/solutions";
import { services } from "@/data/services";
import { products } from "@/data/products";
import type { CaseStudy } from "@/types/content";

// Industry tags below are not new claims — each one is drawn directly from
// wording already present in the case study's own summary (e.g. "Chemical
// Manufacturing Company", "Automotive company"), captured during the
// Phase 1 audit. Case studies with no identifiable single industry (the
// SAP Implementation multi-company case study) or that reference no
// industry at all are left untagged rather than guessed.
const industryTagsByCaseStudyId: Record<string, string[]> = {
  "grow-construction-case-study": ["engineering-construction"],
  "rise-chemical-case-study": ["chemical"],
  "btp-chemical-case-study": ["chemical"],
  "sap-implementation-multi-company": ["electronics", "automotive", "chemical", "dairy", "engineering-construction"],
  "cloud-analytics-automotive": ["automotive"],
  "fa-tagging-automotive": ["automotive"],
  "dealer-portal-dairy": ["dairy"],
};

function withIndustryTags(caseStudy: CaseStudy, sourceType: CaseStudy["sourceType"]): CaseStudy {
  return {
    ...caseStudy,
    sourceType,
    industrySlugs: industryTagsByCaseStudyId[caseStudy.id],
  };
}

export const caseStudies: CaseStudy[] = [
  ...solutions
    .map((s) => (s.caseStudy ? withIndustryTags(s.caseStudy, "solution") : null))
    .filter((c): c is CaseStudy => Boolean(c)),
  ...services
    .map((s) => (s.caseStudy ? withIndustryTags(s.caseStudy, "service") : null))
    .filter((c): c is CaseStudy => Boolean(c)),
  ...products
    .map((p) => (p.caseStudy ? withIndustryTags(p.caseStudy, "product") : null))
    .filter((c): c is CaseStudy => Boolean(c)),
];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.id === id);
}

export function getSourceLink(caseStudy: CaseStudy): { label: string; href: string } | null {
  if (caseStudy.sourceType === "solution") {
    const source = solutions.find((s) => s.slug === caseStudy.relatedSlug);
    return source ? { label: source.navLabel, href: `/solutions/${source.slug}` } : null;
  }
  if (caseStudy.sourceType === "service") {
    const source = services.find((s) => s.slug === caseStudy.relatedSlug);
    return source ? { label: source.navLabel, href: `/services/${source.slug}` } : null;
  }
  if (caseStudy.sourceType === "product") {
    const source = products.find((p) => p.slug === caseStudy.relatedSlug);
    return source ? { label: source.navLabel, href: `/products/${source.slug}` } : null;
  }
  return null;
}
