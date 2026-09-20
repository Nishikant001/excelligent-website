import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Linkedin, Mail, Star, Layers, Wrench, Boxes, Building2, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cardHover } from "@/lib/animations";
import type {
  CaseStudy,
  IndustryContent,
  Partner,
  ProductContent,
  ServiceContent,
  SolutionContent,
  StatCounter,
  TeamMember,
} from "@/types/content";

const cardBase =
  "group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-surface p-7 h-full transition-colors duration-300 hover:border-primary/30";

// Small circular arrow affordance shared by every content card — fills
// solid on hover and nudges toward the corner to reinforce "this opens
// something".
function ArrowBadge() {
  return (
    <span
      aria-hidden="true"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/70 text-text-secondary transition-all duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-primary group-hover:bg-primary group-hover:text-white"
    >
      <ArrowUpRight className="h-4 w-4" />
    </span>
  );
}

function CardShell({
  children,
  to,
  icon: Icon,
}: {
  children: React.ReactNode;
  to?: string;
  icon?: LucideIcon;
}) {
  const content = (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={cardBase}
    >
      {/* Gradient hairline that sweeps in from the left on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-primary via-secondary to-accent transition-transform duration-500 ease-premium group-hover:scale-x-100"
      />
      {/* Soft glow that fades in behind the icon on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/[0.07] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />
      {Icon && (
        <div className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/[0.08] text-primary transition-all duration-300 ease-premium group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
          <Icon className="h-5 w-5" />
        </div>
      )}
      <div className="relative flex flex-1 flex-col">{children}</div>
    </motion.div>
  );
  return to ? (
    <Link to={to} className="block h-full">
      {content}
    </Link>
  ) : (
    content
  );
}

export function SolutionCard({ solution }: { solution: SolutionContent }) {
  return (
    <CardShell to={`/solutions/${solution.slug}`} icon={Layers}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-h3">{solution.navLabel}</h3>
        <ArrowBadge />
      </div>
      <p className="mt-3 text-sm text-text-secondary line-clamp-3">
        {solution.contentPending ? "Content coming soon." : solution.intro}
      </p>
    </CardShell>
  );
}

export function ServiceCard({ service }: { service: ServiceContent }) {
  return (
    <CardShell to={`/services/${service.slug}`} icon={Wrench}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-h3">{service.navLabel}</h3>
        <ArrowBadge />
      </div>
      <p className="mt-3 text-sm text-text-secondary line-clamp-3">{service.intro}</p>
    </CardShell>
  );
}

export function ProductCard({ product }: { product: ProductContent }) {
  return (
    <CardShell to={`/products/${product.slug}`} icon={Boxes}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-h3">{product.navLabel}</h3>
        <ArrowBadge />
      </div>
      <p className="mt-3 text-sm text-text-secondary line-clamp-3">
        {product.contentPending ? "Content coming soon." : product.intro}
      </p>
    </CardShell>
  );
}

export function IndustryCard({ industry }: { industry: IndustryContent }) {
  return (
    <CardShell to={`/industries/${industry.slug}`} icon={Building2}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-h3">{industry.navLabel}</h3>
        <ArrowBadge />
      </div>
      {industry.contentPending && (
        <p className="mt-3 text-sm text-text-secondary">Content coming soon.</p>
      )}
    </CardShell>
  );
}

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className={cardBase}>
      <div className="h-16 w-16 rounded-full bg-surface-muted flex items-center justify-center text-[11px] text-text-secondary mb-4 overflow-hidden">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          "Photo pending"
        )}
      </div>
      <h3 className="text-h3">{member.name}</h3>
      <p className="text-sm text-primary font-medium mb-2">{member.title}</p>
      <p className="text-sm text-text-secondary line-clamp-4">{member.bio}</p>
      <div className="mt-4 flex gap-3">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="text-text-secondary hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        )}
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            aria-label={`Email ${member.name}`}
            className="text-text-secondary hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}

export function PartnerCard({
  partner,
}: {
  partner: Partner;
}) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-[1.35rem]
        border
        border-border/70
        bg-surface
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-panel
      "
    >
      <div
        className="
          relative
          aspect-[404/261]
          w-full
          overflow-hidden
          bg-surface-muted
        "
      >
        <img
          src={partner.logo} 
          alt={partner.name ?? "Partner ecosystem"}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.03]
          "
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <CardShell to={`/case-studies/${caseStudy.id}`} icon={FileText}>
      {caseStudy.isThirdPartyContent && (
        <span className="mb-3 inline-block w-fit rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-text-secondary">
          Partner content
        </span>
      )}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-h3">{caseStudy.title}</h3>
        <ArrowBadge />
      </div>
      <p className="mt-2 text-sm text-text-secondary line-clamp-3">{caseStudy.summary}</p>
    </CardShell>
  );
}

export function StatCard({ stat }: { stat: StatCounter }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-display font-bold text-primary">
        {stat.value === null ? "—" : `${stat.value}${stat.suffix ?? ""}`}
      </div>
      <div className="mt-1 text-sm text-text-secondary">{stat.label}</div>
      {stat.value === null && (
        <div className="mt-1 text-xs text-accent-dark">Verified figure pending</div>
      )}
    </div>
  );
}

export function TestimonialCard({
  name,
  title,
  quote,
  rating,
}: {
  name: string;
  title: string;
  quote: string;
  rating: number;
}) {
  return (
    <div className={cardBase}>
      <div className="flex gap-0.5 text-accent mb-3" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4" fill={i < rating ? "currentColor" : "none"} />
        ))}
      </div>
      <p className="text-sm text-text-secondary">{quote}</p>
      <p className="mt-4 font-semibold text-text-primary">{name}</p>
      <p className="text-xs text-text-secondary">{title}</p>
    </div>
  );
}
