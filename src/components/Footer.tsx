import { Link } from "react-router-dom";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

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
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
        {title}
      </h3>

      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="text-sm text-white/75 transition-colors duration-150 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="container-content py-16 lg:py-24">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-10">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link
              to={ROUTES.home}
              className="inline-flex items-center"
              aria-label="Excelligent Home"
            >
              <img
                src="/ecs-footer.png"
                alt="Excelligent"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {company.tagline}
            </p>

            <div className="mt-6 flex gap-4">
              {contact.socialLinks.map((social) => {
                const Icon = socialIcons[social.platform];

                return social.url ? (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="text-white/70 transition-colors duration-150 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ) : (
                  <span
                    key={social.platform}
                    aria-label={`${social.platform} (link pending confirmation)`}
                    className="text-white/25"
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                );
              })}
            </div>
          </div>

          {/* Company */}
          <FooterColumn
            title="Company"
            links={[
              { label: "Overview", href: ROUTES.overview },
              { label: "Our Team", href: ROUTES.ourTeam },
              {
                label: "Our Partnerships",
                href: ROUTES.ourPartnerships,
              },
            ]}
          />

          {/* Solutions — per suggestions.docx #7, the footer's Solutions
              column now leads with the new SAP-forward architecture
              (GROW / RISE / BTP) instead of mixing it flat with the legacy
              site's OKR/HCM/Cyber Security/HostBooks items. Those legacy
              solutions are kept live and linked (see the "Other solutions"
              line below), just no longer positioned as equally prominent
              as the SAP platform work. */}
          <FooterColumn
            title="Solutions"
            links={solutions
              .filter((s) => ["grow-with-sap", "rise-with-sap", "sap-btp"].includes(s.slug))
              .map((s) => ({
                label: s.navLabel,
                href: ROUTES.solution(s.slug),
              }))}
          />

          {/* Services */}
          <FooterColumn
            title="Services"
            links={services
              .filter((s) => s.slug !== "sap-btp-development")
              .map((s) => ({
                label: s.navLabel,
                href: ROUTES.service(s.slug),
              }))}
          />

          {/* Industries */}
          <FooterColumn
            title="Industries"
            links={industries.slice(0, 6).map((i) => ({
              label: i.navLabel,
              href: ROUTES.industry(i.slug),
            }))}
          />

          {/* Products */}
          <FooterColumn
            title="Products"
            links={products.map((p) => ({
              label: p.navLabel,
              href: ROUTES.product(p.slug),
            }))}
          />
        </div>

        {/* Legacy-site solutions (OKR, HCM, Cyber Security, HostBooks ERP) —
            kept as low-key links rather than a full footer column, per
            suggestions.docx #7. */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs text-white/45">
            Other solutions:{" "}
            {solutions
              .filter((s) => !["grow-with-sap", "rise-with-sap", "sap-btp"].includes(s.slug))
              .map((s, i, arr) => (
                <span key={s.slug}>
                  <Link to={ROUTES.solution(s.slug)} className="text-white/55 hover:text-white">
                    {s.navLabel}
                  </Link>
                  {i < arr.length - 1 ? " · " : ""}
                </span>
              ))}
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-14 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
              Email
            </p>

            <a
              href={`mailto:${contact.email}`}
              className="mt-1.5 block text-sm text-white/75 hover:text-white"
            >
              {contact.email}
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
              Phone
            </p>

            <p className="mt-1.5 text-sm text-white/75">
              {contact.phones.join(" · ")}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
              Head Office
            </p>

            <p className="mt-1.5 text-sm text-white/75">
              {contact.addresses[2].addressLines.join(", ")}
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="container-content flex flex-col items-center justify-between gap-2 text-xs text-white/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Excelligent Consulting Services. All
            rights reserved.
          </p>

          <Link to={ROUTES.contact} className="hover:text-white">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}