import { Boxes, Cloud, ShieldCheck, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Purely visual pairings — grounded in the real category groupings added to
// solutions.ts, not new factual claims about the company.
export const categoryIcon: Record<string, LucideIcon> = {
  "SAP Enterprise Platform": Cloud,
  "People & Performance": Users,
  Security: ShieldCheck,
  "Enterprise Applications": Boxes,
};

export const categoryGradient: Record<string, string> = {
  "SAP Enterprise Platform": "bg-primary-gradient",
  "People & Performance": "bg-gradient-to-br from-secondary to-secondary-dark",
  Security: "bg-gradient-to-br from-brand-navy to-primary",
  "Enterprise Applications": "bg-gradient-to-br from-accent-dark to-primary-dark",
};

// Purely visual pairings for the Services section, keyed by service slug
// since services (unlike solutions) don't have a shared category grouping
// on the live site.
import { Boxes as BoxesIcon, Cog, Database, RefreshCw, Server, Wrench } from "lucide-react";

export const serviceIcon: Record<string, LucideIcon> = {
  "sap-implementation": Server,
  "sap-ams": Wrench,
  "sap-btp-development": Cog,
  "sap-system-conversion-upgrades": RefreshCw,
  "sap-cloud-analytics": Database,
  "sap-value-added-services": BoxesIcon,
};

export const serviceGradient: Record<string, string> = {
  "sap-implementation": "bg-primary-gradient",
  "sap-ams": "bg-gradient-to-br from-secondary to-secondary-dark",
  "sap-btp-development": "bg-gradient-to-br from-brand-navy to-primary",
  "sap-system-conversion-upgrades": "bg-gradient-to-br from-primary-dark to-brand-navy",
  "sap-cloud-analytics": "bg-gradient-to-br from-accent-dark to-primary-dark",
  "sap-value-added-services": "bg-gradient-to-br from-secondary-dark to-primary",
};
