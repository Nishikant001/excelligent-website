import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { pageSeo } from "@/data/seo";
import { SectionHeader } from "@/components/SectionHeader";
import { PartnerCard } from "@/components/Cards";
import { CTASection } from "@/components/Sections";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { partners, partnershipValues } from "@/data/partners";
import { ROUTES } from "@/routes/paths";

// Maps each named partner to the Excelligent solution their partnership
// actually supports, per the real content on the live site (Profit.co →
// OKR page; Resecurity → Cyber Security page; HostBooks → the HostBooks
// ERP nav entry, currently a stub). "Open Ecosystem" has no identified
// related solution and is intentionally left unmapped.
const relatedSolutionByPartnerId: Record<string, { label: string; slug: string }> = {
 
  resecurity: { label: "Cyber Security", slug: "cyber-security" },
  hostbooks: { label: "HostBooks ERP", slug: "hostbooks-erp" },
};

const detailedPartners = partners.filter((p) => relatedSolutionByPartnerId[p.id]);

// Technology ecosystem nodes — only categories actually supported by
// verified Phase 1 content (SAP is the core of Excelligent's own
// services/solutions; Cloud reflects the SAP BTP solution; Cyber Security
// and Business Applications reflect the Resecurity and Profit.co/HostBooks
// partnerships respectively).
// const ecosystemNodes = [
//   { label: "SAP", description: "Core ERP solutions and services" },
//   { label: "Cloud (SAP BTP)", description: "Platform, integration, and analytics" },
//   { label: "Cyber Security", description: "via our Resecurity partnership" },
//   { label: "Business Applications", description: "via our Profit.co and HostBooks partnerships" },
// ];

export default function PartnershipsPage() {
  return (
    <>
      <Seo {...pageSeo.ourPartnerships} />
      <PageHero
        breadcrumb={[{ label: "Company", href: ROUTES.overview }, { label: "Our Partnerships" }]}
        eyebrow="Partner Ecosystem"
        title="Our Partnerships"
        description="We continuously grow our partner ecosystem so Excelligent can serve as a single point of contact for your enterprise technology needs."
      />

      {/* Partner showcase */}
      <section className="section-y container-content">
        <SectionHeader eyebrow="Partner Ecosystem" title="Who we work with" />
        <motion.div
          variants={staggerChildren()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {partners.map((partner) => (
            <motion.div key={partner.id} variants={fadeUp}>
              <PartnerCard partner={partner} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Partnership detail sections */}
      <section className="section-y bg-surface-muted">
        <div className="container-content space-y-6">
          <SectionHeader eyebrow="Partnership Detail" title="How each partnership supports our solutions" />
          <div className="mt-4 space-y-6">
            {detailedPartners.map((partner) => {
              const related = relatedSolutionByPartnerId[partner.id];
              return (
                <motion.div
                  key={partner.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  className="grid grid-cols-1 items-center gap-6 rounded-3xl border border-border/70 bg-surface p-8 sm:grid-cols-[auto_1fr_auto]"
                >
                  <div className="text-h3 sm:w-48">{partner.name}</div>
                  <p className="text-sm text-text-secondary">{partner.description}</p>
                  <Link
                    to={ROUTES.solution(related.slug)}
                    className="group inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium text-primary hover:text-primary-dark"
                  >
                    {related.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology ecosystem */}
     {/* Technology ecosystem */}
<section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] via-white to-[#f4f8ff] py-20 lg:py-28">

  {/* Background decoration */}
  <div
    className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl"
    aria-hidden="true"
  />

  <div
    className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl"
    aria-hidden="true"
  />

  {/* Dot pattern */}
  <div
    className="pointer-events-none absolute right-10 top-10 hidden h-40 w-40 opacity-30 lg:block"
    aria-hidden="true"
  >
    <div
      className="h-full w-full"
      style={{
        backgroundImage:
          "radial-gradient(#8bb7e8 1.5px, transparent 1.5px)",
        backgroundSize: "18px 18px",
      }}
    />
  </div>

  <div className="container-content relative z-10">

    {/* Excelligent badge */}
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-10 w-fit rounded-full bg-gradient-to-r from-[#15549a] to-[#2468b8] px-10 py-4 text-center text-xl font-display font-bold text-white shadow-[0_18px_45px_rgba(30,91,160,0.22)]"
    >
      Excelligent
    </motion.div>

    {/* Section heading */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-4xl text-center"
    >
      <div className="mb-5 flex items-center justify-center gap-5">
        <span className="hidden h-px w-20 bg-[#9ab6d7] sm:block" />

        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8198b7]">
          Our Capabilities
        </span>

        <span className="hidden h-px w-20 bg-[#9ab6d7] sm:block" />
      </div>

      <h2 className="font-display text-4xl font-bold tracking-tight text-[#10213f] sm:text-5xl lg:text-[3.4rem]">
        Technology. Expertise. Real Impact.
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#6b7f9f] sm:text-lg">
        End-to-end solutions to help businesses modernize, secure and grow.
      </p>
    </motion.div>

    {/* Technology cards */}
    <motion.div
      variants={staggerChildren(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >

      {/* SAP */}
      <motion.div
        variants={fadeUp}
        className="group relative min-h-[310px] overflow-hidden rounded-[1.7rem] border border-blue-100 bg-white p-8 shadow-[0_18px_50px_rgba(35,91,150,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_65px_rgba(35,91,150,0.16)]"
      >
        <div className="relative z-10">

          <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
            <div className="flex h-14 w-14 items-center justify-center bg-[#0874c9] text-xl font-bold text-white [clip-path:polygon(0_0,100%_0,82%_100%,0_100%)]">
              SAP
            </div>
          </div>

          <h3 className="font-display text-2xl font-bold text-[#10213f]">
            SAP
          </h3>

          <p className="mt-3 max-w-[220px] text-sm leading-6 text-[#607594]">
            Core ERP solutions and services
          </p>

          <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#0874c9]">
            Learn More
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>

        </div>

        {/* Blue waves */}
        <div className="absolute -bottom-12 -right-10 h-28 w-64 rotate-[-8deg] rounded-[50%] bg-blue-200/60" />

        <div className="absolute -bottom-16 right-[-30px] h-28 w-64 rotate-[-12deg] rounded-[50%] bg-blue-500/80" />

        <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0874c9] shadow-lg">
          <ArrowUpRight className="h-5 w-5" />
        </div>

      </motion.div>


      {/* Cloud SAP BTP */}
      <motion.div
        variants={fadeUp}
        className="group relative min-h-[310px] overflow-hidden rounded-[1.7rem] border border-indigo-100 bg-white p-8 shadow-[0_18px_50px_rgba(35,91,150,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_65px_rgba(35,91,150,0.16)]"
      >
        <div className="relative z-10">

          <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50">

            <div className="relative h-10 w-14">
              <div className="absolute bottom-0 left-1 h-7 w-12 rounded-full bg-gradient-to-r from-[#25a8ff] to-[#5574ff]" />

              <div className="absolute left-3 top-1 h-8 w-8 rounded-full bg-[#3b91ff]" />

              <div className="absolute right-1 top-3 h-7 w-7 rounded-full bg-[#438cff]" />
            </div>

          </div>

          <h3 className="font-display text-2xl font-bold text-[#10213f]">
            Cloud (SAP BTP)
          </h3>

          <p className="mt-3 max-w-[220px] text-sm leading-6 text-[#607594]">
            Platform, integration, and analytics
          </p>

          <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#416cff]">
            Learn More
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>

        </div>

        {/* Indigo waves */}
        <div className="absolute -bottom-12 -right-10 h-28 w-64 rotate-[-8deg] rounded-[50%] bg-indigo-200/60" />

        <div className="absolute -bottom-16 right-[-30px] h-28 w-64 rotate-[-12deg] rounded-[50%] bg-indigo-500/75" />

        <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-indigo-600 shadow-lg">
          <ArrowUpRight className="h-5 w-5" />
        </div>

      </motion.div>


      {/* Cyber Security */}
      <motion.div
        variants={fadeUp}
        className="group relative min-h-[310px] overflow-hidden rounded-[1.7rem] border border-emerald-100 bg-white p-8 shadow-[0_18px_50px_rgba(35,91,150,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_65px_rgba(35,91,150,0.16)]"
      >
        <div className="relative z-10">

          <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">

            <div className="flex h-14 w-12 items-center justify-center [clip-path:polygon(50%_0,95%_15%,88%_65%,50%_100%,12%_65%,5%_15%)] bg-gradient-to-b from-emerald-400 to-emerald-600">

              <div className="h-5 w-5 rounded-md border-2 border-white" />

            </div>

          </div>

          <h3 className="font-display text-2xl font-bold text-[#10213f]">
            Cyber Security
          </h3>

          <p className="mt-3 max-w-[220px] text-sm leading-6 text-[#607594]">
            via our Resecurity partnership
          </p>

          <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-emerald-600">
            Learn More
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>

        </div>

        {/* Green waves */}
        <div className="absolute -bottom-12 -right-10 h-28 w-64 rotate-[-8deg] rounded-[50%] bg-emerald-200/60" />

        <div className="absolute -bottom-16 right-[-30px] h-28 w-64 rotate-[-12deg] rounded-[50%] bg-emerald-500/75" />

        <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-600 shadow-lg">
          <ArrowUpRight className="h-5 w-5" />
        </div>

      </motion.div>


      {/* Business Applications */}
      <motion.div
        variants={fadeUp}
        className="group relative min-h-[310px] overflow-hidden rounded-[1.7rem] border border-violet-100 bg-white p-8 shadow-[0_18px_50px_rgba(35,91,150,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_65px_rgba(35,91,150,0.16)]"
      >
        <div className="relative z-10">

          <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-violet-50">

            <div className="grid grid-cols-2 gap-1.5">
              <span className="h-5 w-5 rounded-md bg-violet-600" />
              <span className="h-5 w-5 rounded-md bg-violet-600" />
              <span className="h-5 w-5 rounded-md bg-violet-600" />
              <span className="h-5 w-5 rounded-md bg-violet-600" />
            </div>

          </div>

          <h3 className="font-display text-2xl font-bold leading-tight text-[#10213f]">
            Business
            <br />
            Applications
          </h3>

          <p className="mt-3 max-w-[235px] text-sm leading-6 text-[#607594]">
            via our Profit.co and HostBooks partnerships
          </p>

          <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-violet-600">
            Learn More
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>

        </div>

        {/* Violet waves */}
        <div className="absolute -bottom-12 -right-10 h-28 w-64 rotate-[-8deg] rounded-[50%] bg-violet-200/60" />

        <div className="absolute -bottom-16 right-[-30px] h-28 w-64 rotate-[-12deg] rounded-[50%] bg-violet-500/75" />

        <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-violet-600 shadow-lg">
          <ArrowUpRight className="h-5 w-5" />
        </div>

      </motion.div>

    </motion.div>
  </div>
</section>

      {/* Partnership values */}
      <section className="section-y bg-surface-muted">
        <div className="container-content">
          <SectionHeader eyebrow="How We Partner" title="Our partnership values" />
          <motion.ul
            variants={staggerChildren(0.04)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {partnershipValues.map((value) => (
              <motion.li
                key={value}
                variants={fadeUp}
                className="rounded-2xl border border-border/70 bg-surface p-5 text-sm font-medium text-text-primary"
              >
                {value}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="section-y container-content">
        <CTASection
          title="Explore what our partnerships can do for you"
          description="See the solutions and services these partnerships support, or talk to our team directly."
          ctaLabel="Let's Connect"
          ctaHref={ROUTES.contact}
        />
      </section>
    </>
  );
}
