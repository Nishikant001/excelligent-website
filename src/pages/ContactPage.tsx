import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Seo } from "@/components/Seo";
import { pageSeo } from "@/data/seo";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoCard } from "@/components/contact/ContactInfoCard";
import { OfficeCard } from "@/components/contact/OfficeCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/Sections";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { contact } from "@/data/company";
import { ROUTES } from "@/routes/paths";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

// The same recurring, real "Why Choose Excelligent" strengths used
// elsewhere on the site (see docs/EXISTING_WEBSITE_AUDIT.md items 12, 13,
// 15) — reused here rather than invented for this page.
const whyConnect = [
  { title: "Focused SAP Expertise", description: "We focus exclusively on SAP-related services for deeper engagement and faster completion." },
  { title: "Experienced Delivery Teams", description: "Business-domain and hands-on SAP delivery experience across implementation, AMS, and migration projects." },
  { title: "Best-Practice Methodology", description: "SAP Activate and ITIL-based support models applied consistently across engagements." },
];

const exploreLinks = [
  { label: "Explore our Solutions", href: ROUTES.solutions },
  { label: "Explore our Services", href: ROUTES.services },
  { label: "Explore Industries we work in", href: ROUTES.industries },
  { label: "Read our Case Studies", href: ROUTES.caseStudies },
  { label: "Learn more About Excelligent", href: ROUTES.overview },
];

export default function ContactPage() {
  return (
    <>
      <Seo {...pageSeo.contact} />

      <ContactHero />

      {/* Contact information cards */}
      <section className="section-y-tight container-content">
        <motion.div
          variants={staggerChildren()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          <motion.div variants={fadeUp}>
            <ContactInfoCard icon={Mail} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
          </motion.div>
          <motion.div variants={fadeUp}>
            <ContactInfoCard
              icon={Phone}
              label="Phone"
              value={contact.phones.join(" · ")}
              href={`tel:${contact.phones[0]}`}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Office locations */}
      <section className="section-y bg-surface-muted">
        <div className="container-content">
          <SectionHeader eyebrow="Our Offices" title="Where to find us" />
          <motion.div
            variants={staggerChildren()}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {contact.addresses.map((office) => (
              <motion.div key={office.label} variants={fadeUp}>
                <OfficeCard office={office} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact form + why connect */}
      <section className="section-y container-content">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader eyebrow="Send an Enquiry" title="Tell us about your project" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div>
            <SectionHeader eyebrow="Why Connect With Excelligent" title="What working with us looks like" />
            <motion.div
              variants={staggerChildren()}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-8 space-y-4"
            >
              {whyConnect.map((item) => (
                <motion.div key={item.title} variants={fadeUp} className="rounded-2xl border border-border/70 bg-surface p-6">
                  <h3 className="text-h3">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={staggerChildren()}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-8 space-y-2"
            >
              {exploreLinks.map((link) => (
                <motion.div key={link.href} variants={fadeUp}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28 container-content">
        <CTASection
          title="Prefer to talk directly?"
          description={`Reach us anytime at ${contact.email} or ${contact.phones[0]}.`}
          ctaLabel="Explore Solutions"
          ctaHref={ROUTES.solutions}
        />
      </section>
    </>
  );
}
