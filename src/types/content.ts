// Shared content types for the Excelligent site.
// These model the REAL content structure found on the existing site.
// The site is a static, content-driven React build (see
// docs/ARCHITECTURE_CORRECTION.md) — these types back the static data
// files in client/src/data/, not a database schema.

export interface SeoMetadata {
  title: string;
  description?: string;
  canonical?: string;
  robots?: "index, follow" | "noindex, follow";
}

export interface CompanyInfo {
  name: string;
  legalDescription: string;
  founded: string;
  tagline: string;
  aboutParagraphs: string[];
  mission: string;
  vision: string;
  guidingPrinciples: string[];
}

export interface ContactAddress {
  label: string;
  addressLines: string[];
}

export interface ContactInfo {
  email: string;
  phones: string[];
  addresses: ContactAddress[];
  socialLinks: {
    platform: "facebook" | "twitter" | "instagram" | "linkedin";
    url: string | null; // null = not yet confirmed by client
  }[];
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo: string | null; // null = real photo not yet supplied (see CONTENT_REVIEW_REQUIRED.md)
  linkedin?: string;
  email?: string;
}

export interface Partner {
  id: string;
  name: string | null; // null = unattributed on old site, needs confirmation
  description: string;
  logo: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  relatedSlug: string; // slug of the solution/service/product it belongs to
  clientNamed: boolean; // all current case studies are unnamed/anonymized
  isThirdPartyContent?: boolean; // true for the OKR + Cyber Security case studies (see review doc)
  sourceType?: "solution" | "service" | "product";
  industrySlugs?: string[]; // only populated where the case study text itself names/implies the industry
}

export interface FeatureBlock {
  title: string;
  description: string;
}

export interface SolutionContent {
  slug: string;
  navLabel: string;
  title: string;
  intro: string;
  category?: string;
  featureBlocks: FeatureBlock[];
  relatedServiceSlugs?: string[];
  relatedIndustrySlugs?: string[];
  relatedSolutionSlugs?: string[];
  caseStudy?: CaseStudy;
  seo: SeoMetadata;
  contentPending?: boolean; // true for stub pages (HostBooks ERP, industries)
}

export interface ServiceContent {
  slug: string;
  navLabel: string;
  title: string;
  intro: string;
  whyChooseUs: FeatureBlock[];
  methodologyPhases: FeatureBlock[];
  caseStudy?: CaseStudy;
  seo: SeoMetadata;
  knownContentBug?: string; // documents copy-paste bugs found on the live site
  relatedSolutionSlugs?: string[];
  relatedIndustrySlugs?: string[];
  // "SAP Value Added Services" is a nav umbrella on the live site that
  // groups the 3 product accelerators rather than being its own content
  // page — see docs/EXISTING_FUNCTIONALITY.md. When true, this entry is
  // rendered as a product hub instead of the standard service layout.
  isProductHub?: boolean;
  productSlugs?: string[];
}

export interface ProductContent {
  slug: string;
  navLabel: string;
  title: string;
  intro: string;
  featureBlocks: FeatureBlock[];
  caseStudy?: CaseStudy;
  seo: SeoMetadata;
  contentPending?: boolean; // true for GST Compliance Reporting (stub)
  relatedIndustrySlugs?: string[];
  relatedServiceSlugs?: string[];
}

export interface IndustryContent {
  slug: string;
  navLabel: string;
  title: string;
  contentPending: boolean; // true for all 10 industries today
  seo?: SeoMetadata;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  rating: number;
  photo: string | null;
  isVerified: boolean; // false for the 3 "John Doe" placeholder testimonials
}

export interface StatCounter {
  id: string;
  label: string;
  value: number | null; // null = unverified, see CONTENT_REVIEW_REQUIRED.md
  suffix?: string;
}
