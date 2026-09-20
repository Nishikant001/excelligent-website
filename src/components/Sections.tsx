import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { Button } from "@/components/Button";
import { VisualPanel } from "@/components/Visual";
import { StatCard, TestimonialCard } from "@/components/Cards";
import type { CaseStudy, FeatureBlock, StatCounter, Testimonial } from "@/types/content";
import { ROUTES } from "@/routes/paths";
import { useState } from "react";
import {
  ChevronDown,
  ArrowUpRight,
  Quote,
  FileText,
  Workflow,
  Users,
  ShieldAlert,
  ShieldCheck,
  BarChart3,
  Zap,
  Receipt,
  FileStack,
  Bell,
  ListChecks,
  Cloud,
  Settings2,
  Smartphone,
  Search,
  UserCog,
  Layers,
  Compass,
  Puzzle,
  Target,
  Gauge,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ---------------------------------------------------------------------------
// FeatureGrid — connected feature timeline / process-flow
// ---------------------------------------------------------------------------
// Shared across product, service and solution detail pages. `features` is
// data-driven (FeatureBlock[]) and can range from 2 to ~11 items depending
// on the page, so the layout has two modes:
//  - <= 5 items: a single connected journey (numbered nodes joined by a
//    line — horizontal on tablet/desktop, vertical on mobile). This is the
//    primary "premium SaaS" presentation.
//  - > 5 items: the connector metaphor stops reading as a journey once it
//    wraps across several rows, so it falls back to a clean, still
//    card-free, icon-led feature list laid out in a wrapping grid.
// Icons aren't part of the content model (FeatureBlock has no `icon`
// field), so they're inferred here from each title's keywords, with a
// deterministic fallback pool for anything that doesn't match — no content
// files were changed to support this.

const KEYWORD_ICONS: [RegExp, LucideIcon][] = [
  [/ticket|issue\b/i, FileText],
  [/kanban|workflow|stage|pipeline|process/i, Workflow],
  [/team|collaborat|assign|comment|@mention/i, Users],
  [/sla|escalat/i, ShieldAlert],
  [/security|secure|encrypt|access control|permission|compliance/i, ShieldCheck],
  [/report|analytic|dashboard|insight/i, BarChart3],
  [/automat|integrat|sync/i, Zap],
  [/invoice|gst|tax|finance|payment|billing/i, Receipt],
  [/document|template|file/i, FileStack],
  [/notif|remind|alert/i, Bell],
  [/task|checklist|to-?do/i, ListChecks],
  [/cloud|hosting|server/i, Cloud],
  [/customiz|configur|setting/i, Settings2],
  [/mobile|app\b/i, Smartphone],
  [/search|find|lookup/i, Search],
  [/user|role|employee|hr\b/i, UserCog],
  [/deadline|schedule|time/i, Gauge],
];

const FALLBACK_ICON_POOL: LucideIcon[] = [Layers, Compass, Puzzle, Target, Gauge];

function iconForFeature(title: string, index: number): LucideIcon {
  const match = KEYWORD_ICONS.find(([pattern]) => pattern.test(title));
  return match ? match[1] : FALLBACK_ICON_POOL[index % FALLBACK_ICON_POOL.length];
}

// Restrained, brand-consistent accent rotation (navy / teal / amber — the
// site's existing primary/secondary/accent tokens). Cycled by index rather
// than introducing new colors outside the palette.
const ACCENTS = [
  { text: "text-primary", bg: "bg-primary/[0.08]", bgSolid: "bg-primary", ring: "group-hover:border-primary/30", line: "from-primary" },
  { text: "text-secondary-dark", bg: "bg-secondary/[0.1]", bgSolid: "bg-secondary", ring: "group-hover:border-secondary/30", line: "from-secondary" },
  { text: "text-accent-dark", bg: "bg-accent/[0.12]", bgSolid: "bg-accent", ring: "group-hover:border-accent/30", line: "from-accent" },
];

function FeatureNode({
  feature,
  index,
}: {
  feature: FeatureBlock;
  index: number;
}) {
  const Icon = iconForFeature(feature.title, index);
  const accent = ACCENTS[index % ACCENTS.length];

  return (
    <div className="group flex flex-1 flex-col items-start gap-4 sm:items-center sm:text-center">
      {/* Number + icon badge */}
      <div className="relative flex shrink-0 items-center gap-3 sm:flex-col sm:gap-2">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-border/70 bg-surface ${accent.text} shadow-[0_8px_24px_-12px_rgba(15,35,70,0.18)] transition-all duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:shadow-[0_16px_32px_-14px_rgba(15,35,70,0.28)] ${accent.ring}`}
        >
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white sm:absolute sm:-right-1.5 sm:-top-1.5 ${accent.bgSolid}`}
        >
          {index + 1}
        </span>
      </div>

      <div className="min-w-0">
        <h3 className="font-display text-lg font-bold text-[#10213f] sm:text-[17px]">
          {feature.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-text-secondary sm:text-[13.5px]">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

function FeatureTimeline({ features }: { features: FeatureBlock[] }) {
  const count = features.length;
  // Percentage inset so the connecting line runs exactly from the center
  // of the first node to the center of the last node, however many items
  // there are (nodes are evenly distributed across the row).
  const inset = 100 / (count * 2);

  return (
    <div className="relative">
      {/* Horizontal connecting line — desktop/tablet only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-7 hidden h-px overflow-hidden sm:block"
        style={{ left: `${inset}%`, right: `${inset}%` }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full origin-left bg-gradient-to-r from-primary/25 via-secondary/25 to-accent/40"
        />
      </div>

      <motion.ol
        variants={staggerChildren(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-4 lg:gap-6"
      >
        {features.map((feature, index) => (
          <motion.li key={feature.title} variants={fadeUp} className="relative flex sm:block">
            {/* Vertical connecting line — mobile only */}
            {index < count - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-7 top-14 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-border to-border/40 sm:hidden"
              />
            )}
            <FeatureNode feature={feature} index={index} />
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}

function FeatureList({ features }: { features: FeatureBlock[] }) {
  // Used for longer feature sets (> 5), where a single connected line no
  // longer reads as one journey once it wraps across rows. Keeps the same
  // numbered / icon-led language as the timeline, without cards.
  return (
    <motion.ul
      variants={staggerChildren(0.06)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3"
    >
      {features.map((feature, index) => {
        const Icon = iconForFeature(feature.title, index);
        const accent = ACCENTS[index % ACCENTS.length];
        return (
          <motion.li
            key={feature.title}
            variants={fadeUp}
            className={`group relative border-t-2 border-border/70 pt-5 transition-colors duration-300 ${accent.ring}`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${accent.bg} ${accent.text} transition-transform duration-300 ease-premium group-hover:scale-110`}
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <span className={`text-xs font-bold ${accent.text}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-3 font-display text-base font-bold text-[#10213f]">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-text-secondary">{feature.description}</p>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

export function FeatureGrid({
  features,
}: {
  features: FeatureBlock[];
}) {
  if (features.length === 0) return null;
  return features.length <= 5 ? (
    <FeatureTimeline features={features} />
  ) : (
    <FeatureList features={features} />
  );
}

// Process phases are inherently sequential, so they get the same
// connected-journey / icon-list treatment as FeatureGrid rather than a
// second, differently-styled numbered card grid.
export function ProcessSteps({ steps }: { steps: FeatureBlock[] }) {
  if (steps.length === 0) return null;
  return steps.length <= 5 ? (
    <FeatureTimeline features={steps} />
  ) : (
    <FeatureList features={steps} />
  );
}

export function StatsSection({ stats }: { stats: StatCounter[] }) {
  return (
    <motion.div
      variants={staggerChildren()}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="grid grid-cols-2 gap-8 sm:grid-cols-4"
    >
      {stats.map((stat) => (
        <motion.div key={stat.id} variants={fadeUp}>
          <StatCard stat={stat} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export function LogoCloud({ names }: { names: string[] }) {
  return (
    <motion.ul
      variants={staggerChildren(0.04)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="flex flex-wrap items-center justify-center gap-3"
    >
      {names.map((name) => (
        <motion.li
          key={name}
          variants={fadeUp}
          className="rounded-full border border-border/70 bg-surface px-5 py-2.5 text-sm font-medium text-text-secondary"
        >
          {name}
        </motion.li>
      ))}
    </motion.ul>
  );
}

export function CTASection({
  title,
  description,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="
  relative
  overflow-hidden
  rounded-[2.25rem]
  bg-gradient-to-br
  from-[#0b285b]
  via-[#123e83]
  to-[#1766b8]
  px-8
  py-14
  text-center
  shadow-[0_30px_90px_rgba(16,63,125,0.22)]
  sm:px-12
  lg:px-20
  lg:py-20
"
    >
      <div
  className="absolute inset-0 opacity-[0.08]"
  style={{
    backgroundImage:
      "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
    backgroundSize: "45px 45px",
  }}
  aria-hidden="true"
/>

<div
  className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl"
  aria-hidden="true"
/>

<div className="relative z-10">

  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
    Let's build what's next
  </span>

  <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
    {title}
  </h2>

  {description && (
    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
      {description}
    </p>
  )}

  <div className="mt-9">
    <Button
      as="a"
      href={ctaHref}
      size="lg"
      variant="secondary"
    >
      {ctaLabel}
    </Button>
  </div>

</div>
    </motion.div>
  );
}

export function TestimonialSection({ testimonials }: { testimonials: Testimonial[] }) {
  const verified = testimonials.filter((t) => t.isVerified);
  if (verified.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-text-secondary">
        Real client testimonials are pending verification and will appear here once supplied by Excelligent.
      </p>
    );
  }
  return (
    <motion.div
      variants={staggerChildren()}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="grid grid-cols-1 gap-6 sm:grid-cols-3"
    >
      {verified.map((t) => (
        <motion.div key={t.id} variants={fadeUp}>
          <TestimonialCard name={t.name} title={t.title} quote={t.quote} rating={t.rating} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export function ImageTextSection({
  title,
  description,
  reverse,
  imageAlt,
}: {
  title: string;
  description: string;
  reverse?: boolean;
  imageAlt: string;
}) {
  return (
    <div
      className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reverse ? "lg:[direction:rtl]" : ""}`}
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="lg:[direction:ltr]"
      >
        <h2 className="text-h2">{title}</h2>
        <p className="mt-4 text-text-secondary">{description}</p>
      </motion.div>
      <div className="lg:[direction:ltr] aspect-[4/3]">
        <VisualPanel tone="navy" label={imageAlt} animate />
      </div>
    </div>
  );
}

// A single spotlighted case study — used on product/service/solution detail
// pages, which each have at most one. A rich full-width panel reads as more
// premium here than dropping one card into a grid meant for several.
export function FeaturedCaseStudy({
  title,
  caseStudy,
}: {
  title: string;
  caseStudy: CaseStudy;
}) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
      <h2 className="text-h2 mb-6">{title}</h2>

      <Link
        to={ROUTES.caseStudy(caseStudy.id)}
        className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-border/70 bg-surface shadow-[0_10px_35px_rgba(15,35,70,0.05)] transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-primary/20 hover:shadow-panel-light lg:flex-row"
      >
        <div className="relative z-10 flex-1 p-8 sm:p-10 lg:p-12">
          {caseStudy.isThirdPartyContent && (
            <span className="mb-4 inline-block w-fit rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-text-secondary">
              Partner content
            </span>
          )}

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
            <FileText className="h-4 w-4" />
            Case Study
          </div>

          <h3 className="mt-4 max-w-xl font-display text-2xl font-bold text-[#10213f] transition-colors duration-300 group-hover:text-primary sm:text-3xl">
            {caseStudy.title}
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-7 text-text-secondary sm:text-[15px]">
            {caseStudy.summary}
          </p>

          <div className="mt-7 flex items-center gap-2 text-sm font-bold text-primary">
            Read the full story
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Decorative brand panel — hidden on mobile/tablet */}
        <div className="relative hidden w-64 shrink-0 overflow-hidden bg-primary-gradient lg:block xl:w-80">
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-secondary/20 blur-3xl"
            aria-hidden="true"
          />
          <Quote
            className="absolute bottom-6 right-6 h-20 w-20 text-white/10"
            strokeWidth={1.25}
            aria-hidden="true"
          />
        </div>
      </Link>
    </motion.div>
  );
}

export function RelatedContent({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-h2 mb-6">{title}</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
    </div>
  );
}

export function FAQSection({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="divide-y divide-border rounded-xl border border-border bg-surface">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-text-primary"
            >
              {item.question}
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && <p className="px-6 pb-4 text-sm text-text-secondary">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}