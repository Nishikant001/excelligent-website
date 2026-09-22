import type { SeoMetadata } from "@/types/content";

const BASE = "https://excelligent.co.in";

// Centralized SEO config for every static (non data-driven) route. Solution,
// Service, Product, Industry, and Case Study detail pages instead carry
// their own `seo` field directly on their data entries (see
// data/solutions.ts, data/services.ts, data/products.ts, data/industries.ts,
// data/caseStudies.ts) since their metadata is inherently per-item.
export const pageSeo: Record<string, SeoMetadata> = {
  home: {
    title: "Excelligent | SAP & Digital Transformation Consulting",
    description:
      "Excelligent modernizes mission-critical enterprises with SAP S/4HANA, BTP, AI and cloud — plus proprietary enterprise products such as e-Vault. Enterprise transformation, powered by SAP, Cloud & AI.",
    canonical: `${BASE}/`,
  },
  aiAndData: {
    title: "AI & Data | Enterprise AI on SAP | Excelligent",
    description:
      "AI that understands your enterprise: AI agents, analytics and intelligent automation connected to SAP S/4HANA, SAP BTP and e-Vault — for finance, procurement, operations and AMS.",
    canonical: `${BASE}/ai-and-data`,
  },
  cloud: {
    title: "SAP on Cloud & AWS | Excelligent",
    description:
      "SAP meets cloud: migration, infrastructure and managed cloud for SAP and enterprise applications, with security, backup and disaster recovery built in.",
    canonical: `${BASE}/cloud`,
  },
  overview: {
    title: "About Excelligent | SAP Consulting Company Overview",
    description:
      "Excelligent Consulting Services is a Delhi-based SAP consulting company founded in 2019, serving 50+ customers from delivery centers in Gurugram and Bhubaneswar.",
    canonical: `${BASE}/overview`,
  },
  ourTeam: {
    title: "Our Team | Excelligent",
    description:
      "Meet the leadership and advisory team behind Excelligent's SAP and digital-transformation practice.",
    canonical: `${BASE}/our-team`,
  },
  ourPartnerships: {
    title: "Our Partnerships | Excelligent",
    description:
      "Excelligent partners with Profit.co, Resecurity, and HostBooks to extend our SAP consulting practice into OKR, cyber security, and ERP.",
    canonical: `${BASE}/our-partnerships`,
  },
  solutionsIndex: {
    title: "Solutions | Excelligent",
    description:
      "Explore Excelligent's enterprise solutions: GROW and RISE with SAP, SAP BTP, OKR, HCM, cyber security, and HostBooks ERP.",
    canonical: `${BASE}/solutions`,
  },
  servicesIndex: {
    title: "Services | Excelligent",
    description:
      "Excelligent's SAP services span implementation, application management, BTP development, system conversion, value-added products, and cloud analytics.",
    canonical: `${BASE}/services`,
  },
  productsIndex: {
    title: "Products | Excelligent",
    description:
      "Excelligent's product accelerators — E-FA Tagging, E-Dealer Portal, and GST Compliance Reporting — solve specific operational challenges on top of SAP.",
    canonical: `${BASE}/products`,
  },
  industriesIndex: {
    title: "Industries | Excelligent",
    description:
      "Excelligent works across chemical, dairy, electronics, automotive, engineering & construction, and other sectors on SAP delivery engagements.",
    canonical: `${BASE}/industries`,
  },
  caseStudiesIndex: {
    title: "Case Studies | Excelligent",
    description:
      "Real SAP delivery engagements from Excelligent across chemical, dairy, automotive, and other industries, filterable by industry.",
    canonical: `${BASE}/case-studies`,
  },
  contact: {
    title: "Contact Excelligent | SAP & Digital Transformation Consulting",
    description:
      "Get in touch with Excelligent about SAP implementation, SAP AMS, SAP BTP, GROW or RISE with SAP, OKR, HCM, cyber security, and our other solutions.",
    canonical: `${BASE}/contact`,
  },
  blog: {
    title: "Insights | Excelligent",
    canonical: `${BASE}/resources/blog`,
    robots: "noindex, follow",
  },
  notFound: {
    title: "Page Not Found | Excelligent",
    canonical: `${BASE}/404`,
    robots: "noindex, follow",
  },
};
