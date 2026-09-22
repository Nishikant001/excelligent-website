import { ROUTES } from "@/routes/paths";

// Content for the "Ask Excelligent AI ✦" guided assistant (homepage brief,
// "One more thing I'd add: an AI interface"). It is a RULE-BASED guide, not a
// live language model: each topic maps a visitor's need to what Excelligent
// actually offers (drawn from the site's own service/solution/product pages)
// and ends in "Talk to an Expert →". Swap `answerFor()` for an API call if a
// real assistant is added later.

export interface AssistantTopic {
  id: string;
  keywords: string[];
  summary: string;
  points: string[];
  links: { label: string; href: string }[];
  interest: string; // must match an option in data/contactOptions.ts
}

export const assistantGreeting = "What are you trying to solve?";

export const suggestedQuestions: { text: string; topic: string }[] = [
  { text: "We want to migrate ECC to S/4HANA.", topic: "conversion" },
  { text: "We need SAP AMS support.", topic: "ams" },
  { text: "Can AI automate our document processing?", topic: "documents" },
  { text: "We want to move SAP workloads to AWS.", topic: "cloud" },
];

export const topics: AssistantTopic[] = [
  {
    id: "conversion",
    keywords: ["ecc", "s/4", "s4", "hana", "upgrade", "conversion", "convert", "migrate ecc", "brownfield", "bluefield"],
    summary: "Moving from ECC to S/4HANA is something we plan and run end to end.",
    points: [
      "Pre-migration assessment, data cleansing and custom-code analysis",
      "Technical migration with sandbox testing, dry runs and cutover planning",
      "Post go-live monitoring and support",
    ],
    links: [
      { label: "SAP Conversion & Upgrades", href: ROUTES.service("sap-system-conversion-upgrades") },
      { label: "RISE with SAP", href: ROUTES.solution("rise-with-sap") },
    ],
    interest: "SAP System Conversion and Upgrades",
  },
  {
    id: "ams",
    keywords: ["ams", "support", "ticket", "sla", "maintenance", "incident", "run", "helpdesk"],
    summary: "Our SAP AMS covers the whole lifecycle after go-live.",
    points: [
      "Transition, then steady-state incident, service-request and problem management",
      "Continuous improvement and enhancements",
      "Governance, SLA management and reporting on ITIL-based practices",
    ],
    links: [{ label: "SAP AMS", href: ROUTES.service("sap-ams") }],
    interest: "SAP AMS",
  },
  {
    id: "documents",
    keywords: ["document", "ocr", "ai", "automate", "automation", "vault", "invoice", "agent", "genai", "paper", "scan"],
    summary: "e-Vault is our document management product, and our AI & Data work builds on it.",
    points: [
      "OCR and intelligent search across scanned documents",
      "Configurable approval workflows and role-based access",
      "SAP and ERP integration with a full audit trail",
    ],
    links: [
      { label: "e-Vault", href: ROUTES.product("e-vault") },
      { label: "AI & Data", href: ROUTES.aiAndData },
    ],
    interest: "AI & Data",
  },
  {
    id: "cloud",
    keywords: ["aws", "cloud", "hosting", "infrastructure", "hyperscaler", "azure", "rise"],
    summary: "We help enterprises run SAP on a secure, scalable cloud foundation.",
    points: [
      "RISE with SAP private cloud, deployable on hyperscalers such as AWS",
      "Migration, infrastructure and managed-cloud support",
      "Backup, disaster recovery and security built into the design",
    ],
    links: [
      { label: "Cloud & AWS", href: ROUTES.cloud },
      { label: "RISE with SAP", href: ROUTES.solution("rise-with-sap") },
    ],
    interest: "Cloud & AWS",
  },
  {
    id: "implementation",
    keywords: ["implement", "new sap", "erp", "rollout", "go-live", "golive", "grow", "greenfield", "public cloud"],
    summary: "We implement SAP S/4HANA on-premise, private and public cloud using SAP Activate.",
    points: [
      "Discover, prepare, explore, realize, deploy and run phases",
      "GROW with SAP for fast public-cloud adoption",
      "Accelerators and templates for a quicker go-live",
    ],
    links: [
      { label: "SAP Implementation", href: ROUTES.service("sap-implementation") },
      { label: "GROW with SAP", href: ROUTES.solution("grow-with-sap") },
    ],
    interest: "SAP Implementation",
  },
  {
    id: "btp",
    keywords: ["btp", "integration", "fiori", "api", "extension", "extend", "analytics", "sac", "dashboard"],
    summary: "SAP BTP is how we extend SAP and connect it to everything else.",
    points: [
      "Integration, extensions and Fiori apps",
      "Workflow automation and data management",
      "SAP Analytics Cloud for reporting, planning and prediction",
    ],
    links: [
      { label: "SAP BTP", href: ROUTES.solution("sap-btp") },
      { label: "SAP Cloud Analytics", href: ROUTES.service("sap-cloud-analytics") },
    ],
    interest: "SAP BTP",
  },
  {
    id: "products",
    keywords: ["dealer", "portal", "asset", "qr", "barcode", "gst", "procurement", "vendor", "rfq", "issue", "product"],
    summary: "We build products on top of SAP for recurring enterprise workflows.",
    points: [
      "E-Dealer Portal for orders, inventory and reporting",
      "E-FA Tagging for QR-based fixed-asset verification",
      "e-SQuot for procurement and e-Fitn for issue tracking",
    ],
    links: [{ label: "All products", href: ROUTES.products }],
    interest: "Products / Demo Request",
  },
];

const fallback: AssistantTopic = {
  id: "general",
  keywords: [],
  summary: "That's best answered by one of our consultants.",
  points: ["Tell us a little about your landscape and goals", "We'll come back with the right people and next steps"],
  links: [
    { label: "Our capabilities", href: "/#capabilities" },
    { label: "Case studies", href: ROUTES.caseStudies },
  ],
  interest: "Other",
};

export function findTopic(id: string): AssistantTopic {
  return topics.find((t) => t.id === id) ?? fallback;
}

/** Keyword match for free-text questions; falls back to a hand-off to an expert. */
export function answerFor(text: string): AssistantTopic {
  const q = text.toLowerCase();
  let best: AssistantTopic | null = null;
  let bestScore = 0;
  for (const t of topics) {
    const score = t.keywords.reduce((n, k) => (q.includes(k) ? n + (k.length > 3 ? 2 : 1) : n), 0);
    if (score > bestScore) {
      best = t;
      bestScore = score;
    }
  }
  return best ?? fallback;
}

export function contactHref(topic: AssistantTopic, question: string): string {
  const params = new URLSearchParams({ interest: topic.interest, message: question });
  return `${ROUTES.contact}?${params.toString()}`;
}
