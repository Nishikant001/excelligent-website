import { Link } from "react-router-dom";
import {
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Twitter,
  Youtube,
} from "lucide-react";

import { company, contact } from "@/data/company";
import { solutions } from "@/data/solutions";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { industries } from "@/data/industries";
import { ROUTES } from "@/routes/paths";

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; hint?: string }[];
}) {
  return (
    <div>
      <h3 className="relative mb-6 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75">
        {title}
        <span className="absolute -bottom-3 left-0 h-px w-8 bg-primary" />
      </h3>

      <ul className="space-y-3.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="
                text-[14px]
                leading-relaxed
                text-white/65
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-white
              "
            >
              {link.label}
              {link.hint ? (
                <span className="mt-0.5 block text-[11px] font-normal text-primary/70">
                  {link.hint}
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OfficeBlock({
  city,
  type,
  address,
}: {
  city: string;
  type: string;
  address: string;
}) {
  return (
    <div className="flex min-w-0 items-start gap-4">
      <div
        className="
          flex h-11 w-11 shrink-0 items-center justify-center
          rounded-full
          border border-primary/20
          bg-primary/[0.10]
          text-primary
          shadow-[0_0_30px_rgba(37,164,255,0.10)]
        "
      >
        <MapPin className="h-5 w-5" strokeWidth={1.7} />
      </div>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
          {city}
        </p>
        <p className="mt-1.5 text-[13px] font-medium text-white/80">{type}</p>
        <p className="mt-2 max-w-[280px] text-[13px] leading-6 text-white/50">
          {address}
        </p>
      </div>
    </div>
  );
}

export function Footer() {
  const newDelhiAddress =
    contact.addresses?.[2]?.addressLines?.join(", ") ?? "";
  const bhubaneswarAddress =
    contact.addresses?.[1]?.addressLines?.join(", ") ?? "";

  return (
    <footer className="relative overflow-hidden bg-[#030b18] text-white">
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(circle_at_82%_18%,rgba(0,140,255,0.08),transparent_28%),radial-gradient(circle_at_10%_90%,rgba(0,110,255,0.05),transparent_30%)]
        "
      />
      <div className="absolute inset-x-0 top-0 h-px bg-primary/40" />

      <div className="relative">
        <div className="container-content py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1fr_1fr] lg:gap-10">
            {/* =====================================================
                BRAND — bigger wordmark lockup, description paragraph,
                circular social icons, cursive signature
            ===================================================== */}
            <div>
              <Link
                to={ROUTES.home}
                className="inline-flex items-center"
                aria-label="Excelligent Home"
              >
                {/* Logo image kept exactly as-is, just rendered larger */}
                <img
                  src="/ecs-footer.png"
                  alt="Excelligent"
                  className="h-9 w-auto object-contain"
                />
              </Link>

              <p className="mt-5 text-[15px] font-semibold text-white/85">
                Enterprise Transformation.
                <br />
                Powered by SAP, Cloud &amp; AI.
              </p>

              <p className="mt-4 max-w-[320px] text-[13px] leading-6 text-white/50">
                {company.legalDescription}
              </p>

              <div className="mt-7 flex items-center gap-3">
                {contact.socialLinks.map((social) => {
                  const Icon = socialIcons[social.platform];
                  return social.url ? (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.platform}
                      className="
                        flex h-9 w-9 items-center justify-center
                        rounded-full border border-white/20 text-white/65
                        transition-all duration-300
                        hover:border-primary hover:bg-primary/10 hover:text-primary
                      "
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ) : (
                    // company.ts has every social url set to null right now (no
                    // resolvable profile links found on the live site) — show a
                    // muted, non-clickable placeholder rather than nothing, so
                    // the row still reads correctly until real links land.
                    <span
                      key={social.platform}
                      aria-label={`${social.platform} (link pending confirmation)`}
                      className="
                        flex h-9 w-9 items-center justify-center
                        rounded-full border border-white/10 text-white/20
                      "
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                  );
                })}
              </div>

              <div className="mt-8">
                <p
                  className="text-[20px] italic tracking-[-0.03em] text-white/75"
                  style={{ fontFamily: "cursive" }}
                >
                  Make Enterprise Technology Simpler.
                </p>
                <div className="ml-1 mt-1 h-px w-28 bg-primary" />
              </div>
            </div>

            {/* =====================================================
                CAPABILITIES
                Reuses real "services" data (same source the original
                footer used for its "Services" column), minus
                sap-btp-development — that entry's own knownContentBug
                field says it just duplicates the SAP BTP solution page.
                Real labels are SAP Implementation / SAP AMS / SAP System
                Conversion and Upgrades / SAP Cloud Analytics / SAP Value
                Added Services — not the shorter "AI & Data" / "Cloud &
                AWS" style wording in the reference screenshot, since
                that copy doesn't exist in services.ts yet.
            ===================================================== */}
            <FooterColumn
              title="Capabilities"
              links={services
                .filter((s) => s.slug !== "sap-btp-development")
                .map((s) => ({
                  label: s.navLabel,
                  href: ROUTES.service(s.slug),
                }))}
            />

            {/* =====================================================
                SAP
                solutions.ts holds 6 entries total, but only 3 are
                actually SAP platform offerings (category: "SAP
                Enterprise Platform") — the rest are SuccessFactors,
                Cyber Security and HostBooks ERP, which don't belong
                under a "SAP" heading. Filtering by category keeps this
                column honest even though it's shorter than the
                reference's 6 rows; add more SAP-category solutions to
                solutions.ts if you want it to fill out to 6.
            ===================================================== */}
            <FooterColumn
              title="SAP"
              links={solutions
                .filter((s) => s.category === "SAP Enterprise Platform")
                .map((s) => ({
                  label: s.navLabel,
                  href: ROUTES.solution(s.slug),
                }))}
            />

            {/* =====================================================
                PRODUCTS
                e-Vault is pulled to the top and gets a highlighted hint
                line ("Enterprise Document Intelligence"), matching the
                reference. ProductContent has no tagline/description
                field to read that hint from, so it's written here by
                hand — move it into products.ts as a real field if you'd
                rather keep copy in the data file.
            ===================================================== */}
            <FooterColumn
              title="Products"
              links={(() => {
                const eVault = products.find((p) => p.slug === "e-vault");
                const rest = products.filter((p) => p.slug !== "e-vault");
                const ordered = eVault ? [eVault, ...rest] : products;
                return ordered.map((p) => ({
                  label: p.navLabel,
                  href: ROUTES.product(p.slug),
                  hint: p.slug === "e-vault" ? "Enterprise Document Intelligence" : undefined,
                }));
              })()}
            />

            {/* =====================================================
                INDUSTRIES
                First 7 entries in industries.ts, in file order (Chemical,
                Brewery, Pharma, Dairy, Consumer Goods, Logistics,
                Electronics). The reference screenshot's exact wording —
                Manufacturing, Cement, Food & Beverage, Logistics &
                Engineering — isn't in industries.ts as written; reorder
                or edit that file's navLabel values if you want an exact
                match instead of the current real content.
            ===================================================== */}
            <FooterColumn
              title="Industries"
              links={industries.slice(0, 7).map((i) => ({
                label: i.navLabel,
                href: ROUTES.industry(i.slug),
              }))}
            />

            {/* =====================================================
                COMPANY
                Only "Overview" and "Our Team" exist on ROUTES today
                (see the import list at the top of this file / your
                routes/paths.ts). "Case Studies", "Insights", "Careers"
                and "Contact Us" match the reference design but don't
                have routes yet, so they point at "#" for now — add
                them to routes/paths.ts and swap the href in once the
                pages exist, the same way ROUTES.overview is used below.
            ===================================================== */}
            <FooterColumn
              title="Company"
              links={[
                { label: "About Excelligent", href: ROUTES.overview },
                { label: "Our Team", href: ROUTES.ourTeam },
                { label: "Case Studies", href: "#" },
                { label: "Insights", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact Us", href: "#" },
              ]}
            />
          </div>
        </div>

        {/* =========================================================
            OFFICE / GLOBAL PRESENCE — unchanged structurally, already
            matches the reference
        ========================================================= */}
        <div className="border-y border-white/[0.08]">
          <div className="container-content py-9">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr_1.25fr_0.9fr] lg:gap-0">
              <div className="lg:border-r lg:border-white/15 lg:pr-10">
                <OfficeBlock
                  city="New Delhi"
                  type="Corporate Office"
                  address={newDelhiAddress}
                />
              </div>

              <div className="lg:px-3 lg:border-r lg:border-white/15">
                <OfficeBlock
                  city="Bhubaneswar"
                  type="Delivery & Innovation Centre"
                  address={bhubaneswarAddress}
                />
              </div>

              <div className="relative hidden h-[120px] overflow-hidden lg:block lg:px-10">
                <div
                  aria-hidden="true"
                  className="
                    absolute inset-0 opacity-50
                    [background-image:radial-gradient(circle,rgba(48,161,255,0.35)_1px,transparent_1px)]
                    [background-size:6px_6px]
                    [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]
                  "
                />
                <div className="absolute left-[46%] top-[42%] h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_6px_rgba(37,164,255,0.35)]" />
                <div className="absolute left-[55%] top-[58%] h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_15px_5px_rgba(37,164,255,0.3)]" />
                <div className="absolute left-[66%] top-[45%] h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_15px_5px_rgba(37,164,255,0.3)]" />
                <div
                  aria-hidden="true"
                  className="
                    absolute left-[46%] top-[43%] h-px w-[25%] origin-left rotate-[12deg]
                    bg-gradient-to-r from-primary/60 to-transparent
                  "
                />
              </div>

              <div className="lg:border-l lg:border-white/15 lg:pl-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
                  Serving customers across
                </p>
                <p className="mt-3 text-[13px] font-medium uppercase leading-6 tracking-[0.18em] text-white/80">
                  India, Middle East &amp; APAC
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM BAR
        ========================================================= */}
        <div className="border-b border-white/[0.08]">
          <div className="container-content py-5">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-white/40">
                <span>
                  © {new Date().getFullYear()} Excelligent Consulting Services Pvt. Ltd.
                </span>
                <span className="hidden h-3 w-px bg-white/20 sm:block" />
                <Link to="#" className="transition-colors hover:text-white">
                  Privacy Policy
                </Link>
                <span className="hidden h-3 w-px bg-white/20 sm:block" />
                <Link to="#" className="transition-colors hover:text-white">
                  Terms of Use
                </Link>
                <span className="hidden h-3 w-px bg-white/20 sm:block" />
                <Link to="#" className="transition-colors hover:text-white">
                  Cookie Policy
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex flex-wrap items-center gap-3 text-[10px] font-medium uppercase tracking-[0.16em] text-primary/80">
                  <span>SAP</span>
                  <span>•</span>
                  <span>AI</span>
                  <span>•</span>
                  <span>Cloud</span>
                  <span>•</span>
                  <span>Data</span>
                  <span>•</span>
                  <span>Enterprise Applications</span>
                </div>

                <span className="hidden h-5 w-px bg-white/15 lg:block" />

                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="group flex items-center gap-2 text-[11px] text-white/45 transition-colors hover:text-white"
                >
                  <span
                    className="
                      flex h-8 w-8 items-center justify-center rounded-full
                      border border-white/15 transition-all duration-300
                      group-hover:border-primary group-hover:text-primary
                    "
                  >
                    <ArrowUp className="h-3.5 w-3.5" />
                  </span>
                  <span>Back to top</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}