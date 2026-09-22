import { solutions } from "@/data/solutions";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { industries } from "@/data/industries";
import { ROUTES } from "@/routes/paths";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  columns?: { heading?: string; links: NavLink[] }[];
}

function solutionLink(slug: string, label?: string, description?: string): NavLink {
  const s = solutions.find((x) => x.slug === slug);
  return { label: label ?? s?.navLabel ?? slug, href: ROUTES.solution(slug), description };
}

function serviceLink(slug: string, label?: string, description?: string): NavLink {
  const s = services.find((x) => x.slug === slug);
  return { label: label ?? s?.navLabel ?? slug, href: ROUTES.service(slug), description };
}

// Top-level navigation follows the homepage brief (website.docx,
// "Navigation"): a clean, short first level with mega menus behind it —
//   What We Do | SAP | AI & Data | Cloud | Products | Industries | Insights |
//   Company | Let's Talk ->
// ("Let's Talk" is the CTA button rendered by Navbar / MobileNavigation.)
export const navItems: NavItem[] = [
  {
    label: "What We Do",
    columns: [
      {
        heading: "Capabilities",
        links: [
          serviceLink("sap-implementation", "SAP Transformation", "S/4HANA, RISE, Public Cloud, implementation"),
          serviceLink("sap-system-conversion-upgrades", "SAP Modernization", "ECC → S/4HANA, upgrades, migration"),
          solutionLink("sap-btp", "BTP & Integration", "BTP, Fiori, APIs, extensions, automation"),
          { label: "AI & Data", href: ROUTES.aiAndData, description: "GenAI, AI agents, analytics, intelligent automation" },
          { label: "Cloud", href: ROUTES.cloud, description: "AWS, migration, infrastructure, managed cloud" },
          serviceLink("sap-ams", "AMS", "SAP support, enhancements, SLA, optimization"),
        ],
      },
      {
        heading: "More solutions",
        links: [
          solutionLink("okr", undefined, "Strategy execution with Profit.co"),
          solutionLink("hcm"),
          solutionLink("cyber-security"),
          solutionLink("hostbooks-erp"),
          { label: "All solutions", href: ROUTES.solutions },
        ],
      },
    ],
  },
  {
    label: "SAP",
    columns: [
      {
        heading: "Solutions",
        links: [
          solutionLink("grow-with-sap"),
          solutionLink("rise-with-sap"),
          solutionLink("sap-btp"),
        ],
      },
      {
        heading: "Services",
        links: services
          .filter((s) => s.slug !== "sap-btp-development" && s.slug !== "sap-cloud-analytics")
          .map((s) => ({ label: s.navLabel, href: ROUTES.service(s.slug) })),
      },
    ],
  },
  {
    label: "AI & Data",
    columns: [
      {
        links: [
          { label: "Enterprise AI", href: ROUTES.aiAndData, description: "AI that understands your enterprise" },
          serviceLink("sap-cloud-analytics", undefined, "Analytics, planning and predictive insight"),
          { label: "e-Vault", href: ROUTES.product("e-vault"), description: "AI-powered enterprise document management" },
        ],
      },
    ],
  },
  {
    label: "Cloud",
    columns: [
      {
        links: [
          { label: "SAP meets Cloud", href: ROUTES.cloud, description: "AWS, migration, managed cloud" },
          solutionLink("rise-with-sap", "RISE with SAP Private Cloud"),
          solutionLink("grow-with-sap", "GROW with SAP Public Cloud"),
        ],
      },
    ],
  },
  {
    label: "Products",
    columns: [
      { links: products.map((p) => ({ label: p.navLabel, href: ROUTES.product(p.slug) })) },
    ],
  },
  {
    label: "Industries",
    columns: [
      {
        links: industries.slice(0, 5).map((i) => ({ label: i.navLabel, href: ROUTES.industry(i.slug) })),
      },
      {
        links: industries.slice(5).map((i) => ({ label: i.navLabel, href: ROUTES.industry(i.slug) })),
      },
    ],
  },
  {
    label: "Insights",
    columns: [
      {
        links: [
          { label: "Articles", href: ROUTES.blog, description: "Ideas for the Intelligent Enterprise" },
          { label: "Case Studies", href: ROUTES.caseStudies, description: "Transformation in action" },
        ],
      },
    ],
  },
  {
    label: "Company",
    columns: [
      {
        links: [
          { label: "Overview", href: ROUTES.overview, description: "Who we are and our guiding principles" },
          { label: "Our Team", href: ROUTES.ourTeam, description: "Meet the people behind Excelligent" },
          { label: "Our Partnerships", href: ROUTES.ourPartnerships, description: "Our technology partner ecosystem" },
          { label: "Contact", href: ROUTES.contact, description: "Talk to an expert" },
        ],
      },
    ],
  },
];
