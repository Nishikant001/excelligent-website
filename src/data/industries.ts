import type { IndustryContent } from "@/types/content";

// All 10 industry pages on the live site resolve to the same blank
// "Comming Soon" placeholder — no dedicated per-industry body content
// exists yet. Routes/components are scaffolded now; content is
// intentionally left pending rather than invented. See
// docs/CONTENT_REVIEW_REQUIRED.md item 14.
//
// Five of these (chemical, electronics, automotive, dairy,
// engineering-construction) do have real, verified cross-linked content —
// case studies, solutions, or services that genuinely reference them (see
// lib/industryConnections.ts) — so those five stay indexable. The other
// five have zero real content anywhere on the site and are marked
// noindex to avoid presenting thin/placeholder pages to search engines
// until Excelligent supplies real content.
export const industries: IndustryContent[] = [
  {
    slug: "chemical",
    navLabel: "Chemical",
    title: "Chemical",
    contentPending: false,
    seo: {
      title: "Chemical Industry Solutions | Excelligent",
      description: "Excelligent has delivered SAP RISE, BTP, and implementation engagements for chemical manufacturing companies — explore our chemical industry case studies.",
      canonical: "https://excelligent.co.in/industries/chemical",
    },
  },
  {
    slug: "brewery",
    navLabel: "Brewery",
    title: "Brewery",
    contentPending: true,
    seo: { title: "Brewery Industry | Excelligent", canonical: "https://excelligent.co.in/industries/brewery", robots: "noindex, follow" },
  },
  {
    slug: "pharma",
    navLabel: "Pharma",
    title: "Pharma",
    contentPending: true,
    seo: { title: "Pharma Industry | Excelligent", canonical: "https://excelligent.co.in/industries/pharma", robots: "noindex, follow" },
  },
  {
    slug: "dairy",
    navLabel: "Dairy",
    title: "Dairy",
    contentPending: false,
    seo: {
      title: "Dairy Industry Solutions | Excelligent",
      description: "Excelligent has delivered SAP implementation and E-Dealer Portal engagements for dairy products manufacturers — explore our dairy industry case studies.",
      canonical: "https://excelligent.co.in/industries/dairy",
    },
  },
  {
    slug: "consumer-goods",
    navLabel: "Consumer Goods",
    title: "Consumer Goods",
    contentPending: true,
    seo: { title: "Consumer Goods Industry | Excelligent", canonical: "https://excelligent.co.in/industries/consumer-goods", robots: "noindex, follow" },
  },
  {
    slug: "logistics",
    navLabel: "Logistics",
    title: "Logistics",
    contentPending: true,
    seo: { title: "Logistics Industry | Excelligent", canonical: "https://excelligent.co.in/industries/logistics", robots: "noindex, follow" },
  },
  {
    slug: "electronics",
    navLabel: "Electronics",
    title: "Electronics",
    contentPending: false,
    seo: {
      title: "Electronics Industry Solutions | Excelligent",
      description: "Excelligent has delivered SAP implementation engagements for electronics manufacturing companies — explore our electronics industry work.",
      canonical: "https://excelligent.co.in/industries/electronics",
    },
  },
  {
    slug: "automotive",
    navLabel: "Automotive",
    title: "Automotive",
    contentPending: false,
    seo: {
      title: "Automotive Industry Solutions | Excelligent",
      description: "Excelligent has delivered SAP implementation, Cloud Analytics, and Fixed Asset Tagging engagements for automotive companies — explore our case studies.",
      canonical: "https://excelligent.co.in/industries/automotive",
    },
  },
  {
    slug: "distribution",
    navLabel: "Distribution",
    title: "Distribution",
    contentPending: true,
    seo: { title: "Distribution Industry | Excelligent", canonical: "https://excelligent.co.in/industries/distribution", robots: "noindex, follow" },
  },
  {
    slug: "engineering-construction",
    navLabel: "Engineering and Construction",
    title: "Engineering and Construction",
    contentPending: false,
    seo: {
      title: "Engineering & Construction Industry Solutions | Excelligent",
      description: "Excelligent has delivered GROW with SAP and implementation engagements for construction and professional service companies.",
      canonical: "https://excelligent.co.in/industries/engineering-construction",
    },
  },
];
