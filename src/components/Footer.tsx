import { Link } from "react-router-dom";
import {
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Twitter,
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
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="relative mb-7 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75">
        {title}

        <span className="absolute -bottom-3 left-0 h-px w-10 bg-primary" />
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

        <p className="mt-1.5 text-[13px] font-medium text-white/80">
          {type}
        </p>

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
    <footer
      className="
        relative
        overflow-hidden
        bg-[#030b18]
        text-white
      "
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(circle_at_82%_18%,rgba(0,140,255,0.08),transparent_28%),radial-gradient(circle_at_10%_90%,rgba(0,110,255,0.05),transparent_30%)]
        "
      />

      {/* Top blue line */}
      <div className="absolute inset-x-0 top-0 h-px bg-primary/40" />

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}
      <div className="relative">
        <div className="container-content py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1fr_1fr] lg:gap-10">
            {/* =====================================================
                BRAND
            ===================================================== */}
            <div>
              <Link
                to={ROUTES.home}
                className="inline-flex items-center"
                aria-label="Excelligent Home"
              >
                {/* EXISTING EXCILLIGENT IMAGE — KEPT SAME */}
                <img
                  src="/ecs-footer.png"
                  alt="Excelligent"
                  className="h-12 w-auto object-contain"
                />
              </Link>

              <p className="mt-6 max-w-[310px] text-[15px] leading-7 text-white/65">
                {company.tagline}
              </p>

              {/* Social icons */}
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
                        flex h-10 w-10
                        items-center justify-center
                        rounded-full
                        border border-white/20
                        text-white/65
                        transition-all
                        duration-300
                        hover:border-primary
                        hover:bg-primary/10
                        hover:text-primary
                      "
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ) : (
                    <span
                      key={social.platform}
                      aria-label={`${social.platform} (link pending confirmation)`}
                      className="
                        flex h-10 w-10
                        items-center justify-center
                        rounded-full
                        border border-white/10
                        text-white/20
                      "
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                  );
                })}
              </div>

              {/* Signature tagline */}
              <div className="mt-8">
                <p
                  className="
                    text-[22px]
                    italic
                    tracking-[-0.03em]
                    text-white/75
                  "
                  style={{
                    fontFamily: "cursive",
                  }}
                >
                  Make Enterprise Technology Simpler.
                </p>

                <div className="ml-1 mt-1 h-px w-28 bg-primary" />
              </div>
            </div>

            {/* =====================================================
                COMPANY
            ===================================================== */}
            <FooterColumn
              title="Company"
              links={[
                {
                  label: "Overview",
                  href: ROUTES.overview,
                },
                {
                  label: "Our Team",
                  href: ROUTES.ourTeam,
                },
                {
                  label: "Our Partnerships",
                  href: ROUTES.ourPartnerships,
                },
              ]}
            />

            {/* =====================================================
                SOLUTIONS
            ===================================================== */}
            <FooterColumn
              title="Solutions"
              links={solutions
                .filter((s) =>
                  [
                    "grow-with-sap",
                    "rise-with-sap",
                    "sap-btp",
                  ].includes(s.slug),
                )
                .map((s) => ({
                  label: s.navLabel,
                  href: ROUTES.solution(s.slug),
                }))}
            />

            {/* =====================================================
                SERVICES
            ===================================================== */}
            <FooterColumn
              title="Services"
              links={services
                .filter((s) => s.slug !== "sap-btp-development")
                .map((s) => ({
                  label: s.navLabel,
                  href: ROUTES.service(s.slug),
                }))}
            />

            {/* =====================================================
                INDUSTRIES
            ===================================================== */}
            <FooterColumn
              title="Industries"
              links={industries.slice(0, 6).map((i) => ({
                label: i.navLabel,
                href: ROUTES.industry(i.slug),
              }))}
            />

            {/* =====================================================
                PRODUCTS
            ===================================================== */}
            <FooterColumn
              title="Products"
              links={products.map((p) => ({
                label: p.navLabel,
                href: ROUTES.product(p.slug),
              }))}
            />
          </div>

          {/* =======================================================
              OTHER SOLUTIONS
          ======================================================= */}
          <div className="mt-14 border-t border-white/[0.08] pt-6">
            <p className="text-[12px] leading-6 text-white/40">
              <span className="text-white/55">Other solutions:</span>{" "}
              {solutions
                .filter(
                  (s) =>
                    ![
                      "grow-with-sap",
                      "rise-with-sap",
                      "sap-btp",
                    ].includes(s.slug),
                )
                .map((s, i, arr) => (
                  <span key={s.slug}>
                    <Link
                      to={ROUTES.solution(s.slug)}
                      className="
                        transition-colors
                        hover:text-primary
                      "
                    >
                      {s.navLabel}
                    </Link>

                    {i < arr.length - 1 ? "  ·  " : ""}
                  </span>
                ))}
            </p>
          </div>
        </div>

        {/* =========================================================
            OFFICE / GLOBAL PRESENCE
        ========================================================= */}
        <div className="border-y border-white/[0.08]">
          <div className="container-content py-9">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr_1.25fr_0.9fr] lg:gap-0">
              {/* New Delhi */}
              <div className="lg:border-r lg:border-white/15 lg:pr-10">
                <OfficeBlock
                  city="New Delhi"
                  type="Corporate Office"
                  address={newDelhiAddress}
                />
              </div>

              {/* Bhubaneswar */}
              <div className="lg:px-3 lg:border-r lg:border-white/15">
                <OfficeBlock
                  city="Bhubaneswar"
                  type="Delivery & Innovation Centre"
                  address={bhubaneswarAddress}
                />
              </div>

              {/* =================================================
                  WORLD / NETWORK VISUAL
              ================================================= */}
              <div
                className="
                  relative
                  hidden
                  h-[120px]
                  overflow-hidden
                  lg:block
                  lg:px-10
                "
              >
                {/* Map-like dotted field */}
                <div
                  aria-hidden="true"
                  className="
                    absolute inset-0
                    opacity-50
                    [background-image:radial-gradient(circle,rgba(48,161,255,0.35)_1px,transparent_1px)]
                    [background-size:6px_6px]
                    [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]
                  "
                />

                {/* World glow points */}
                <div className="absolute left-[46%] top-[42%] h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_6px_rgba(37,164,255,0.35)]" />

                <div className="absolute left-[55%] top-[58%] h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_15px_5px_rgba(37,164,255,0.3)]" />

                <div className="absolute left-[66%] top-[45%] h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_15px_5px_rgba(37,164,255,0.3)]" />

                {/* Connection line */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    left-[46%]
                    top-[43%]
                    h-px
                    w-[25%]
                    origin-left
                    rotate-[12deg]
                    bg-gradient-to-r
                    from-primary/60
                    to-transparent
                  "
                />
              </div>

              {/* Global coverage */}
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
              {/* Copyright + legal */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-white/40">
                <span>
                  © {new Date().getFullYear()} Excelligent Consulting
                  Services Pvt. Ltd.
                </span>

                <span className="hidden h-3 w-px bg-white/20 sm:block" />

                <Link
                  to="#"
                  className="transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>

                <span className="hidden h-3 w-px bg-white/20 sm:block" />

                <Link
                  to="#"
                  className="transition-colors hover:text-white"
                >
                  Terms of Use
                </Link>

                <span className="hidden h-3 w-px bg-white/20 sm:block" />

                <Link
                  to="#"
                  className="transition-colors hover:text-white"
                >
                  Cookie Policy
                </Link>
              </div>

              {/* Technology tags + back to top */}
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
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-[11px]
                    text-white/45
                    transition-colors
                    hover:text-white
                  "
                >
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      transition-all
                      duration-300
                      group-hover:border-primary
                      group-hover:text-primary
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