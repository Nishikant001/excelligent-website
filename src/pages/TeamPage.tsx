import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X,  ArrowUpRight } from "lucide-react";import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { pageSeo } from "@/data/seo";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamCard } from "@/components/Cards";
import { CTASection } from "@/components/Sections";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";
import { teamMembers } from "@/data/team";
import { ROUTES } from "@/routes/paths";

// Add your multiple images here
const teamImages = [
  "/team/ourteam.png",
  "/team/d1.png", // Placeholder: Replace with actual image paths
  "/team/b1.png", // Placeholder: Replace with actual image paths
  // "/team/b2.png", // Placeholder: Replace with actual image paths
 
  
  "/team/d2.png", // Placeholder: Replace with actual image paths
  "/team/d3.png", // Placeholder: Replace with actual image paths
  //  "/team/b3.png", // Placeholder: Replace with actual image paths
  "/team/d4.png", // Placeholder: Replace with actual image paths
   "/team/b4.png", // Placeholder: Replace with actual image paths
  "/team/d5.png", // Placeholder: Replace with actual image paths
  //  "/team/b5.png", // Placeholder: Replace with actual image paths
  "/team/d6.png", // Placeholder: Replace with actual image paths
   "/team/b6.png", // Placeholder: Replace with actual image paths
  "/team/d7.png", // Placeholder: Replace with actual image paths
];

export default function TeamPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState<
    (typeof teamMembers)[number] | null
  >(null);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % teamImages.length);
    }, 2000); // Slides every 4 seconds

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

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
    <TeamCard
      member={member}
      onViewProfile={setSelectedMember}
    />
  </motion.div>
))}
          </motion.div>
        </div>
      </section>

            {/* =========================
          TEAM MEMBER PROFILE MODAL
      ========================== */}
    <AnimatePresence>
  {selectedMember && (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#07111f]/75 backdrop-blur-[6px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-y-0 right-0 w-full overflow-y-auto bg-[#f8fafc] shadow-[-20px_0_80px_rgba(0,0,0,0.18)] lg:w-[92vw]"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* TOP BAR */}
        <div className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-[#dce3ea] bg-[#f8fafc]/95 px-6 backdrop-blur-md sm:px-10 lg:px-16">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-primary" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#536170]">
              Executive Profile
            </span>
          </div>

          <button
            type="button"
            onClick={() => setSelectedMember(null)}
            className="group flex items-center gap-3 text-[#263442] transition-colors hover:text-primary"
            aria-label="Close profile"
          >
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] sm:block">
              Close
            </span>

            <span className="flex h-10 w-10 items-center justify-center border border-[#cfd8e1] transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
              <X className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
            </span>
          </button>
        </div>

        {/* MAIN CONTENT */}
        <div className="mx-auto max-w-[1500px] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:grid-cols-[0.8fr_1.2fr]">

            {/* LEFT — PORTRAIT */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <div className="relative max-w-[520px]">

                {/* Small index */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#687786]">
                    Leadership
                  </span>

                  <span className="text-[10px] font-medium tracking-[0.2em] text-[#9aa6b2]">
                    {String(
                      teamMembers.findIndex(
                        (member) => member.id === selectedMember.id
                      ) + 1
                    ).padStart(2, "0")}{" "}
                    /{" "}
                    {String(teamMembers.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Portrait */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e9eef3]">
                  {selectedMember.photo ? (
                    <img
                      src={selectedMember.photo}
                      alt={selectedMember.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs uppercase tracking-widest text-[#7b8794]">
                      Photo pending
                    </div>
                  )}

                  {/* Image overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07111f]/25 via-transparent to-transparent" />
                </div>

                {/* Image caption */}
                <div className="mt-4 flex items-start justify-between border-t border-[#dce3ea] pt-4">
                  <span className="max-w-[70%] text-[10px] uppercase tracking-[0.18em] text-[#7a8794]">
                    Excelligent Consulting Services
                  </span>

                  <span className="text-[10px] text-[#9aa6b2]">
                    Executive Leadership
                  </span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — INFORMATION */}
            <motion.div
              className="flex flex-col justify-center lg:pb-10"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              {/* TITLE */}
              <div className="mb-10">
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                  {selectedMember.title}
                </p>

                <h1 className="max-w-4xl text-[clamp(2.8rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-[#07111f]">
                  {selectedMember.name}
                </h1>
              </div>

              {/* Divider */}
              <div className="mb-10 h-px w-full bg-[#d5dde5]" />

              {/* PROFILE */}
              <div className="max-w-2xl">
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#71808e]">
                  Profile
                </p>

                <p className="text-[17px] leading-[1.9] text-[#4d5b69] sm:text-[19px]">
                  {selectedMember.bio}
                </p>
              </div>

              {/* ACTIONS */}
              {(selectedMember.linkedin || selectedMember.email) && (
                <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-[#d5dde5] pt-7">
                  {selectedMember.linkedin && (
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#07111f]"
                    >
                      LinkedIn
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>
                  )}

                  {selectedMember.email && (
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="group inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#07111f]"
                    >
                      Contact
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>
                  )}
                </div>
              )}

              {/* BOTTOM STATEMENT */}
              <div className="mt-16 border-l-2 border-primary pl-5">
                <p className="max-w-xl text-sm leading-7 text-[#7a8794]">
                  Leadership focused on technology, transformation and
                  sustainable business growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      {/* =========================
          TEAM GROUP PHOTO SLIDER
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

          {/* Group Photo Slider */}
          <div className="px-5 pb-5 pt-8 sm:px-8 sm:pb-8 sm:pt-10 lg:px-10 lg:pb-10">
            {/* Aspect ratio container ensures layout doesn't collapse with absolute positioned images */}
            <div className="relative overflow-hidden rounded-2xl bg-surface-muted aspect-[4/3] md:aspect-[21/9] max-h-[620px] w-full">
              <AnimatePresence initial={false}>
                <motion.img
                  key={currentImageIndex}
                  src={teamImages[currentImageIndex]}
                  alt={`Excelligent leadership and advisory team slide ${currentImageIndex + 1}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 block h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </AnimatePresence>
            </div>
            
            {/* Slider Navigation Dots */}
            <div className="mt-6 flex justify-center gap-3">
              {teamImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                    idx === currentImageIndex ? "bg-primary" : "bg-border hover:bg-border/70"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
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