import { solutions } from "@/data/solutions";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { caseStudies } from "@/data/caseStudies";

// All connections below are derived programmatically from the
// relatedIndustrySlugs / industrySlugs fields already populated in
// solutions.ts, services.ts, products.ts, and caseStudies.ts during
// Phases 5–7 — nothing is invented specifically for the Industries pages.
export function getRelatedSolutionsForIndustry(industrySlug: string) {
  return solutions
    .filter((s) => s.relatedIndustrySlugs?.includes(industrySlug))
    .map((s) => ({ label: s.navLabel, href: `/solutions/${s.slug}` }));
}

export function getRelatedServicesForIndustry(industrySlug: string) {
  return services
    .filter((s) => s.relatedIndustrySlugs?.includes(industrySlug))
    .map((s) => ({ label: s.navLabel, href: `/services/${s.slug}` }));
}

export function getRelatedProductsForIndustry(industrySlug: string) {
  return products
    .filter((p) => p.relatedIndustrySlugs?.includes(industrySlug))
    .map((p) => ({ label: p.navLabel, href: `/products/${p.slug}` }));
}

export function getRelatedCaseStudiesForIndustry(industrySlug: string) {
  return caseStudies.filter((c) => c.industrySlugs?.includes(industrySlug));
}

export function industryHasAnyRealContent(industrySlug: string): boolean {
  return (
    getRelatedSolutionsForIndustry(industrySlug).length > 0 ||
    getRelatedServicesForIndustry(industrySlug).length > 0 ||
    getRelatedProductsForIndustry(industrySlug).length > 0 ||
    getRelatedCaseStudiesForIndustry(industrySlug).length > 0
  );
}
