// Central route definitions matching docs/EXISTING_WEBSITE_AUDIT.md's
// proposed sitemap. Keep this as the single source of truth for paths so
// nav components, sitemap generation (Phase 9), and page routing all agree.
export const ROUTES = {
  home: "/",
  overview: "/overview",
  ourTeam: "/our-team",
  ourPartnerships: "/our-partnerships",
  solutions: "/solutions",
  solution: (slug: string) => `/solutions/${slug}`,
  services: "/services",
  service: (slug: string) => `/services/${slug}`,
  products: "/products",
  product: (slug: string) => `/products/${slug}`,
  industries: "/industries",
  industry: (slug: string) => `/industries/${slug}`,
  resources: "/resources",
  caseStudies: "/case-studies",
  caseStudy: (id: string) => `/case-studies/${id}`,
  legacyCaseStudies: "/resources/case-studies", // redirected to caseStudies, kept for old links
  blog: "/resources/blog",
  contact: "/contact",
} as const;
