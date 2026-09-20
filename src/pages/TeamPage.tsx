import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { pageSeo } from "@/data/seo";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamCard } from "@/components/Cards";
import { CTASection } from "@/components/Sections";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { teamMembers } from "@/data/team";
import { ROUTES } from "@/routes/paths";

const teamGroupPhoto = "/team/ourteam.png";

export default function TeamPage() {
  return (
    <>
      <Seo {...pageSeo.ourTeam} />

      <PageHero
        breadcrumb={[
          { label: "Company", href: ROUTES.overview },
          { label: "Our Team" },
        ]}
        eyebrow="Our People"
        title="Meet Our Team"
        description="The people driving Excelligent's SAP and digital-transformation practice."
      />

      {/* =========================
          TEAM GROUP PHOTO
      ========================== */}
      <section className="section-y container-content">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="overflow-hidden rounded-3xl border border-border/70 bg-surface shadow-panel-light"
        >
          {/* Header */}
          <div className="px-7 pt-8 text-center sm:px-10 sm:pt-10 lg:px-14 lg:pt-12">
            <p className="eyebrow mb-3">Leadership</p>

            <h2 className="text-h2">
              The Team Behind Excelligent
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-text-secondary">
              Meet the leadership and advisory team driving Excelligent's
              growth, SAP expertise, digital transformation, and strategic
              initiatives.
            </p>
          </div>

          {/* Group Photo */}
          <div className="px-5 pb-5 pt-8 sm:px-8 sm:pb-8 sm:pt-10 lg:px-10 lg:pb-10">
            <div className="relative overflow-hidden rounded-2xl bg-surface-muted">
              <img
                src={teamGroupPhoto}
                alt="Excelligent leadership and advisory team"
                className="block h-auto max-h-[620px] w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================
          INDIVIDUAL TEAM MEMBERS
      ========================== */}
      <section className="section-y bg-surface-muted">
        <div className="container-content">
          <SectionHeader
            eyebrow="Our People"
            title="Leadership &amp; advisory team"
          />

          <motion.div
            variants={staggerChildren()}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {teamMembers.map((member) => (
              <motion.div key={member.id} variants={fadeUp}>
                <TeamCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="section-y container-content">
        <CTASection
          title="Work with a team that knows SAP delivery"
          description="Explore what our team can help you achieve, or get in touch directly."
          ctaLabel="Let's Connect"
          ctaHref={ROUTES.contact}
        />
      </section>
    </>
  );
}