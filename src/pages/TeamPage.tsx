import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/PageHero";
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
                <TeamCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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