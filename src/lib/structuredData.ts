import { company, contact } from "@/data/company";
import type { CaseStudy, ProductContent, ServiceContent } from "@/types/content";

const SITE_URL = "https://excelligent.co.in";

// Organization schema — uses only verified fields (name, url, email, phone,
// and the 3 real office addresses). No founding date, employee count,
// revenue, awards, ratings, or reviews are included since none of these
// are confidently verified (see docs/CONTENT_REVIEW_REQUIRED.md).
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: `${SITE_URL}/`,
    email: contact.email,
    telephone: contact.phones[0],
    address: contact.addresses.map((addr) => ({
      "@type": "PostalAddress",
      name: addr.label,
      streetAddress: addr.addressLines.join(", "),
      addressCountry: "IN",
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Excelligent",
    url: `${SITE_URL}/`,
  };
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// Builds BreadcrumbList schema from the exact same items rendered by the
// visual Breadcrumb component, so structured data can never drift from
// what's actually displayed or from real routes. The final (current-page)
// crumb often has no href in this codebase's usage — that entry's `item`
// URL is simply omitted rather than guessed, which is valid per
// schema.org's BreadcrumbList examples for the current page.
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };
}

// Service schema for genuine service pages. Describes only what the page
// actually offers — no pricing, guarantees, or invented coverage area.
export function serviceSchema(service: ServiceContent) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seo.description ?? service.intro,
    provider: {
      "@type": "Organization",
      name: company.name,
      url: `${SITE_URL}/`,
    },
    url: service.seo.canonical,
  };
}

// Product schema for real, content-complete products only. No price,
// rating, review, SKU, or availability fields are included since none are
// verified — see docs/CONTENT_REVIEW_REQUIRED.md.
export function productSchema(product: ProductContent) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.seo.description ?? product.intro,
    brand: {
      "@type": "Organization",
      name: company.name,
    },
    url: product.seo.canonical,
  };
}

// Case studies use CreativeWork rather than Article/BlogPosting, since no
// verified publication date exists for any of them (see Phase 7 audit) and
// Article schema conventionally expects datePublished.
export function caseStudySchema(caseStudy: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: caseStudy.title,
    description: caseStudy.summary,
    url: `${SITE_URL}/case-studies/${caseStudy.id}`,
    publisher: {
      "@type": "Organization",
      name: company.name,
    },
  };
}
