import { solutions } from "@/data/solutions";
import { services } from "@/data/services";

// Every label below is pulled directly from navLabel values already defined
// in solutions.ts / services.ts — nothing here is invented. "Other" is the
// only addition, as a catch-all for enquiries that don't map to a listed
// offering.
const solutionSlugsForContact = ["grow-with-sap", "rise-with-sap", "sap-btp", "okr", "hcm", "cyber-security", "hostbooks-erp"];
const serviceSlugsForContact = [
  "sap-implementation",
  "sap-ams",
  "sap-system-conversion-upgrades",
  "sap-value-added-services",
  "sap-cloud-analytics",
];

export const contactInterestOptions: string[] = [
  ...serviceSlugsForContact
    .map((slug) => services.find((s) => s.slug === slug)?.navLabel)
    .filter((label): label is string => Boolean(label)),
  ...solutionSlugsForContact
    .map((slug) => solutions.find((s) => s.slug === slug)?.navLabel)
    .filter((label): label is string => Boolean(label)),
  "AI & Data",
  "Cloud & AWS",
  "Products / Demo Request",
  "Other",
];
