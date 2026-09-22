import { ROUTES } from "@/routes/paths";

// =============================================================================
// Homepage content — mirrors the homepage brief (website.docx, "Homepage
// concept") section by section, so the copy can be reviewed and edited in one
// place. Section numbers below match the numbers in that document.
//
// Anything marked  NEEDS CONFIRMATION  is wording that comes from the brief but
// is NOT yet backed by verified facts elsewhere on the site — confirm it with
// the business before publishing (the brief itself asks for the same:
// "verify every number", "only claim regions you can substantiate").
// See docs/HOMEPAGE_ALIGNMENT.md.
// =============================================================================

// ---- 1. Hero ----------------------------------------------------------------
export const hero = {
  eyebrow: "Excelligent",
  headlineLine1: "Enterprise Transformation.",
  headlineLine2Prefix: "Powered by",
  headlineLine2Accent: "SAP, Cloud & AI.",
  subheading:
    "We modernize mission-critical enterprises with SAP S/4HANA, AI, BTP, Cloud and intelligent applications.",
  primaryCta: { label: "Explore Our Capabilities", href: "#capabilities" },
  secondaryCta: { label: "Talk to an Expert", href: ROUTES.contact },
  // Slowly moving technology ribbon along the bottom of the hero.
  ribbon: ["SAP S/4HANA", "SAP BTP", "AI", "AWS", "Cloud", "Data", "Automation"],
};

// ---- 2. Positioning statement -----------------------------------------------
export const positioning = {
  headline: "From ERP to the Intelligent Enterprise.",
  body:
    "Technology is changing how enterprises operate. We bring together SAP, AI, Cloud and Data to help organizations transform core processes, modernize applications and build intelligent operations.",
  words: [
    { word: "TRANSFORM", caption: "core processes" },
    { word: "MODERNIZE", caption: "applications" },
    { word: "INTELLIGENT", caption: "operations" },
    { word: "RUN", caption: "and keep improving" },
  ],
};

// ---- 3. Capabilities ---------------------------------------------------------
export interface Capability {
  number: string;
  title: string;
  tags: string[];
  tagline: string;
  href: string;
}

export const capabilitiesSection = {
  id: "capabilities",
  title: "Built for what's next.",
};

export const capabilities: Capability[] = [
  {
    number: "01",
    title: "SAP Transformation",
    tags: ["S/4HANA", "RISE", "Public Cloud", "Implementation"],
    tagline: "Transform your digital core with SAP.",
    href: ROUTES.service("sap-implementation"),
  },
  {
    number: "02",
    title: "SAP Modernization",
    tags: ["ECC → S/4HANA", "Upgrades", "Migration"],
    tagline: "Modernize without disrupting the enterprise.",
    href: ROUTES.service("sap-system-conversion-upgrades"),
  },
  {
    number: "03",
    title: "BTP & Integration",
    tags: ["BTP", "Fiori", "APIs", "Extensions", "Automation"],
    tagline: "Extend SAP. Connect everything.",
    href: ROUTES.solution("sap-btp"),
  },
  {
    number: "04",
    title: "AI & Data",
    tags: ["GenAI", "AI Agents", "Analytics", "Intelligent Automation"],
    tagline: "Turn enterprise data into intelligence.",
    href: ROUTES.aiAndData,
  },
  {
    number: "05",
    title: "Cloud",
    tags: ["AWS", "Migration", "Infrastructure", "Managed Cloud"],
    tagline: "Build a secure, scalable cloud foundation.",
    href: ROUTES.cloud,
  },
  {
    number: "06",
    title: "AMS",
    tags: ["SAP Support", "Enhancements", "SLA", "Optimization"],
    tagline: "Keep your enterprise running. And improving.",
    href: ROUTES.service("sap-ams"),
  },
];

// ---- 4. Enterprise AI (showpiece) --------------------------------------------
export const enterpriseAi = {
  eyebrow: "Enterprise AI",
  headline: "AI that understands your enterprise.",
  accent: "Not another chatbot.",
  body:
    "We connect AI with enterprise processes, applications and data to create intelligence where work actually happens.",
  useCases: [
    {
      title: "AI for Finance",
      description: "Invoice intelligence · anomaly detection · financial insights",
    },
    {
      title: "AI for Procurement",
      description: "Spend intelligence · vendor insights · sourcing assistance",
    },
    {
      title: "AI for Operations",
      description: "Exceptions · predictive insights · process automation",
    },
    {
      title: "AI for AMS",
      description: "Ticket intelligence · knowledge agents · resolution copilots",
    },
  ],
  cta: { label: "Explore Enterprise AI", href: ROUTES.aiAndData },
};

// The layered architecture drawn by <EnterpriseAIDiagram />.
export const aiArchitecture = {
  top: "Enterprise AI",
  agentLayer: {
    title: "AI Agent Layer",
    agents: ["Finance", "Procurement", "Supply", "Service"],
  },
  middle: "Intelligence & Automation",
  systems: [
    { title: "SAP S/4HANA", items: ["Finance", "Supply Chain", "Manufacturing"] },
    { title: "SAP BTP", items: ["Integration", "Workflows", "Extensions"] },
    { title: "e-Vault", items: ["Documents", "Knowledge", "OCR"] },
  ],
  bottom: "Cloud / AWS",
};

// ---- 5. Deep SAP --------------------------------------------------------------
export const deepSap = {
  eyebrow: "SAP",
  headline: "Deep SAP. Built for what's next.",
  journey: ["Discover", "Implement", "Migrate", "Extend", "Operate", "Optimize"],
  blocks: [
    {
      title: "SAP S/4HANA",
      description: "Implementation · Rollout · Conversion",
      href: ROUTES.service("sap-implementation"),
    },
    {
      title: "RISE & Public Cloud",
      description: "Private Cloud · Public Cloud · GROW",
      href: ROUTES.solution("rise-with-sap"),
    },
    {
      title: "SAP BTP",
      description: "Integration · Extensions · Fiori · Automation",
      href: ROUTES.solution("sap-btp"),
    },
    {
      title: "SAP AMS",
      description: "Support · Enhancement · Optimization",
      href: ROUTES.service("sap-ams"),
    },
  ],
  cta: { label: "Explore SAP Capabilities", href: ROUTES.solutions },
};

// ---- 6. AWS + Cloud -----------------------------------------------------------
export const cloudSection = {
  eyebrow: "Cloud",
  headline: "SAP meets Cloud.",
  subheading: "Modern infrastructure for modern enterprises.",
  cta: { label: "Explore Cloud Services", href: ROUTES.cloud },
};

// The layered stack drawn by <CloudStack />.
export const cloudStack = {
  top: "Enterprise Applications",
  apps: ["SAP", "Custom Apps", "Data"],
  cloud: "AWS Cloud",
  services: ["Compute", "Storage", "Security", "Backup", "DR", "AI"],
  bottom: "Modern Enterprise",
};

// ---- 7. Products ("Built by Excelligent.") ------------------------------------
// The four cards from the brief. Product names on the site are UNCHANGED
// (E-Dealer Portal, E-FA Tagging, GST Compliance Reporting); the brief's
// working names (Dealer Connect / Asset Intelligence / GST Connect) are shown
// in docs/HOMEPAGE_ALIGNMENT.md as a possible rebrand for the business to decide.
export const productsSection = {
  eyebrow: "Products",
  headline: "Built by Excelligent.",
  subheading: "We don't just implement technology. We build it.",
  viewAll: { label: "View all products", href: ROUTES.products },
  flagship: {
    slug: "e-vault",
    name: "e-Vault",
    // NOTE: e-Vault itself does not run AI features today — AI capability
    // (e.g. AI-powered search) is still in implementation. Keep this copy
    // as "Intelligent" rather than "AI-Powered"/"AI Search" until that work
    // ships, then update both fields below.
    tag: "Intelligent Enterprise Document Management",
    tagline: "Turn enterprise documents into searchable, intelligent knowledge.",
    capabilities: ["OCR", "Intelligent Search", "SAP Integration", "Workflow", "Secure Repository"],
    primary: { label: "Explore e-Vault", href: ROUTES.product("e-vault") },
    secondary: {
      label: "Request Demo",
      href: `${ROUTES.contact}?interest=${encodeURIComponent("Products / Demo Request")}&message=${encodeURIComponent("I'd like a demo of e-Vault.")}`,
    },
  },
  others: [
    {
      slug: "gst-compliance-reporting",
      name: "GST Compliance Reporting",
      lines: "e-Invoice · e-Way Bill · SAP Integration", // NEEDS CONFIRMATION — product page is still "content pending"
      comingSoon: true,
    },
    {
      slug: "e-dealer-portal",
      name: "E-Dealer Portal",
      lines: "Orders · Inventory · Payments · SAP",
      comingSoon: false,
    },
    {
      slug: "e-fa-tagging",
      name: "E-FA Tagging",
      lines: "QR/Barcode · Verification · SAP Assets",
      comingSoon: false,
    },
  ],
};

// ---- 8. Evidence ---------------------------------------------------------------
// The brief: "I'd verify every number before publishing it."
//   50+ customers      -> already published on the site (company.ts / Overview).
//   2 delivery centres -> Gurugram + Bhubaneswar (company.ts / Overview).
//   30+ ERP professionals, 6+ industries -> from the brief; NEEDS CONFIRMATION
//   (the site lists 10 industry pages, 5 with real case-study content).
export const evidence = {
  eyebrow: "Evidence",
  headline: "Experience that delivers.",
  stats: [
    { value: 50, suffix: "+", label: "Customers", verified: true },
    { value: 30, suffix: "+", label: "ERP Professionals", verified: false },
    { value: 6, suffix: "+", label: "Industries", verified: false },
    { value: 2, suffix: "", label: "Delivery Locations", verified: true },
  ],
  mission: { value: "1", label: "Mission", statement: "Make enterprise technology simpler." },
};

// ---- 9. Case studies ------------------------------------------------------------
// The brief's three examples (Automotive S/4HANA transformation, Cement S/4HANA
// modernization, Consumer Products cloud migration) don't exist as published
// engagements on the current site, so the homepage features three REAL,
// already-published (anonymised) case studies from src/data/caseStudies.ts in
// the brief's card format. Swap these entries once the business supplies the
// facts for the cement / consumer-products projects.
export interface CaseStudyCard {
  id: string;
  industry: string;
  title: string;
  lines: string[];
  image: string;
}

export const caseStudiesSection = {
  eyebrow: "Case Studies",
  headline: "Transformation in action.",
  subheading:
    "Client names are withheld — the same way these engagements are published across the site.",
  viewAll: { label: "View all case studies", href: ROUTES.caseStudies },
  cards: [
    {
      id: "fa-tagging-automotive",
      industry: "Automotive",
      title: "E-Fixed Asset Tracking on SAP",
      lines: ["SAP ECC + Android", "QR-code handheld scanning", "7 plants across India"],
      image: "/industries/automotive.png",
    },
    {
      id: "rise-chemical-case-study",
      industry: "Chemical",
      title: "RISE with SAP S/4HANA Private Cloud",
      lines: ["Module implementations", "BASIS activities · ABAP developments", "DMS implementation on BTP"],
      image: "/industries/chemical.jpg",
    },
    {
      id: "grow-construction-case-study",
      industry: "Construction",
      title: "GROW with SAP S/4HANA Public Cloud",
      lines: ["Road construction & professional services", "Successful go-live", "SAP public cloud ERP"],
      image: "/industries/engineering-construction.png",
    },
  ] as CaseStudyCard[],
};

// ---- 10. Industries -------------------------------------------------------------
// Large-type list; hovering (or tapping) a word reveals the business processes
// Excelligent works on. Where a dedicated industry page exists the word links to
// it, otherwise to the industries index.
export interface IndustryWord {
  word: string;
  processes: string[];
  href: string;
}

export const industriesSection = {
  eyebrow: "Industries",
  headline: "We speak your industry's language.",
  viewAll: { label: "Explore all industries", href: ROUTES.industries },
  words: [
    {
      word: "Automotive",
      processes: ["Procure-to-Pay", "Production Planning", "Quality", "Plant Maintenance", "Dispatch", "Fixed Assets", "Finance"],
      href: ROUTES.industry("automotive"),
    },
    {
      word: "Manufacturing",
      processes: ["Procure-to-Pay", "Production", "Quality", "Plant Maintenance", "Inventory", "Finance"],
      href: ROUTES.industries,
    },
    {
      word: "Cement",
      processes: ["Procure-to-Pay", "Plant Maintenance", "Production", "Quality", "Dispatch", "Dealer Management", "Finance"],
      href: ROUTES.industries,
    },
    {
      word: "Consumer Products",
      processes: ["Order-to-Cash", "Distributor & Dealer Management", "Inventory", "Pricing", "Finance"],
      href: ROUTES.industry("consumer-goods"),
    },
    {
      word: "Pharma",
      processes: ["Procure-to-Pay", "Batch & Quality", "Supply Chain", "Document Control", "Distribution", "Finance"],
      href: ROUTES.industry("pharma"),
    },
    {
      word: "Food & Beverage",
      processes: ["Procure-to-Pay", "Production", "Distribution", "Dealer Management", "Finance"],
      href: ROUTES.industries,
    },
    {
      word: "Logistics",
      processes: ["Transportation", "Warehousing", "Order Fulfilment", "Billing", "Finance"],
      href: ROUTES.industry("logistics"),
    },
    {
      word: "Engineering",
      processes: ["Project Systems", "Procure-to-Pay", "Plant Maintenance", "Sales", "Finance"],
      href: ROUTES.industry("engineering-construction"),
    },
  ] as IndustryWord[],
};

// ---- 11. Why Excelligent -----------------------------------------------------------
export const whySection = {
  eyebrow: "Why Excelligent",
  headlineLine1: "Enterprise expertise.",
  headlineLine2: "Built for speed.",
  statements: [
    { title: "Enterprise Experience", description: "Deep experience across complex SAP landscapes." },
    { title: "Senior-Led Delivery", description: "Experienced consultants close to the engagement." },
    { title: "Agility", description: "Less bureaucracy. Faster decisions." },
    { title: "Innovation", description: "SAP + AI + Cloud + proprietary enterprise solutions." },
  ],
};

// ---- 12. Geographic footprint -------------------------------------------------------
export const footprint = {
  eyebrow: "Footprint",
  headlineLine1: "India built.",
  headlineLine2: "Globally ready.",
  locations: [
    { name: "Delhi NCR", role: "Customer Engagement", lon: 77.1, lat: 28.5 },
    { name: "Bhubaneswar", role: "Delivery & Innovation", lon: 85.82, lat: 20.3 },
  ],
  // NEEDS CONFIRMATION — the brief cautions to "only claim specific operating
  // regions where you are comfortable substantiating delivery capability".
  // Nothing else on the site currently substantiates Middle East / APAC.
  serving: "Serving customers across India, Middle East & APAC",
};

// ---- 13. Insights -------------------------------------------------------------------
export const insights = {
  eyebrow: "Insights",
  headline: "Ideas for the Intelligent Enterprise.",
  cta: { label: "Explore Insights", href: ROUTES.blog },
  cards: [
    { category: "SAP", title: "Preparing for an S/4HANA 2025 Upgrade" },
    { category: "AI", title: "Where AI Agents Fit Inside SAP" },
    { category: "Cloud", title: "Moving Enterprise SAP Workloads to AWS" },
  ],
};

// ---- 14. Final CTA --------------------------------------------------------------------
export const finalCta = {
  kicker: "Have a transformation in mind?",
  headline: "Let's build what's next.",
  strap: "SAP. AI. Cloud. Enterprise Applications.",
  cta: { label: "Talk to Excelligent", href: ROUTES.contact },
};
