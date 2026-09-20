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

export const navItems: NavItem[] = [
  {
    label: "Company",
    columns: [
      {
        links: [
          { label: "Overview", href: ROUTES.overview, description: "Who we are and our guiding principles" },
          { label: "Our Team", href: ROUTES.ourTeam, description: "Meet the people behind Excelligent" },
          { label: "Our Partnerships", href: ROUTES.ourPartnerships, description: "Our technology partner ecosystem" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    columns: [
      {
        links: solutions.map((s) => ({
          label: s.navLabel,
          href: ROUTES.solution(s.slug),
        })),
      },
    ],
  },
  {
    label: "Services",
    columns: [
      {
        links: services
          .filter((s) => s.slug !== "sap-btp-development")
          .map((s) => ({ label: s.navLabel, href: ROUTES.service(s.slug) })),
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
    label: "Resources",
    columns: [
      {
        links: [
          { label: "Case Studies", href: ROUTES.caseStudies },
          { label: "Blog", href: ROUTES.blog },
        ],
      },
    ],
  },
  { label: "Contact", href: ROUTES.contact },
];
