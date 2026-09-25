import type { StatCounter, Testimonial } from "@/types/content";

// The 3 testimonials on the live Home page are all attributed to
// "John Doe, Sony CEO" with identical Lorem-ipsum body copy — confirmed
// placeholder/demo content (see docs/CONTENT_REVIEW_REQUIRED.md item 1).
// They are intentionally marked isVerified: false and should NOT be
// rendered as real testimonials by the TestimonialCard component until
// real, client-supplied testimonials replace them.
export const testimonials: Testimonial[] = [
  {
    id: "placeholder-1",
    name: "John Doe",
    title: "Sony CEO",
    quote: "Placeholder Lorem Ipsum content from the live site template — not a real testimonial.",
    rating: 5,
    photo: null,
    isVerified: false,
  },
  {
    id: "placeholder-2",
    name: "John Doe",
    title: "Sony CEO",
    quote: "Placeholder Lorem Ipsum content from the live site template — not a real testimonial.",
    rating: 5,
    photo: null,
    isVerified: false,
  },
  {
    id: "placeholder-3",
    name: "John Doe",
    title: "Sony CEO",
    quote: "Placeholder Lorem Ipsum content from the live site template — not a real testimonial.",
    rating: 5,
    photo: null,
    isVerified: false,
  },
];

// The Home page stat counters all display 0 on the live site — no real
// figures have been published yet (see docs/CONTENT_REVIEW_REQUIRED.md
// item 2). `value: null` signals "verified data required," and the
// StatCard component should render a pending state rather than "0" or an
// invented number.
export const statCounters: StatCounter[] = [
  { id: "projects-by-team", label: "Projects by Team", value: null, suffix: "+" },
  { id: "sap-ams-users", label: "SAP AMS Users", value: null, suffix: "K+" },
  { id: "consultants", label: "Talented Pool of Consultants", value: null, suffix: "+" },
  { id: "custom-developments", label: "Custom Developments", value: null, suffix: "+" },
];

// Brand logos shown under "Brands We have Served" on the live Home page.
// These are real client/brand names as published on the live site.
//
// `logo` currently points to a DEMO/PLACEHOLDER wordmark generated for
// layout purposes only (public/customers/*.svg) — it is NOT the client's
// real logo artwork. Swap each file in public/customers/ for the actual
// brand logo when it's available; the filenames below can stay the same.
export interface BrandServed {
  name: string;
  logo: string;
}

export const brandsServed: BrandServed[] = [
  { name: "KIA Motors", logo: "/customers/kia-motors.webp" },
  { name: "Napino Auto", logo: "/customers/napino-auto.png" },
  { name: "Oasis Group", logo: "/customers/oasis-group.png" },
  { name: "BBC Cellpack", logo: "/customers/bbc-cellpack.jpg" },
  { name: "Hyundai Kefico", logo: "/customers/hyundai-kefico.png" },
  { name: "Psychotropic", logo: "/customers/psychotropic.svg" },
  { name: "Supreme Agro", logo: "/customers/supreme-agro.jpg" },
  { name: "Willowood", logo: "/customers/willowood.png" },
  { name: "Safex", logo: "/customers/safex.avif" },
  { name: "Konark", logo: "/customers/konark.png" },
  { name: "Golyan", logo: "/customers/golyan.png" },
  { name: "Minimalist", logo: "/customers/mini.jpg" },
  { name: "VLCC", logo: "/customers/vlcc.png" },
  { name: "Jashn FOODS", logo: "/customers/jshon.jpg" },
  { name: "MYND..", logo: "/customers/mynd.png" },
  { name: "CELLPACK Electricals Products", logo: "/customers/cellpack.png" },
  { name: "KLJ", logo: "/customers/klj.webp" },

  
];

// The "Your digital transformation partner" intro strip on the live Home
// page presents three labeled pillars with no body copy in the crawlable
// markup (icon + label only). Short generic descriptors are added here to
// explain each term for site visitors — these describe the concept itself,
// not a claim about Excelligent's results, clients, or statistics.
export const transformationPillars: { title: string; description: string }[] = [
  {
    title: "Process Centric",
    description: "Delivery anchored in clearly defined, repeatable business processes rather than ad-hoc customization.",
  },
  {
    title: "Automation Driven",
    description: "Reducing manual effort by automating routine transactions, approvals, and reporting wherever it makes sense.",
  },
  {
    title: "Intelligent Insights",
    description: "Turning operational data into insight that supports faster, better-informed business decisions.",
  },
];
