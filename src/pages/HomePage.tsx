import { HeroSection } from "@/sections/home/HeroSection";
import { Seo } from "@/components/Seo";
import { pageSeo } from "@/data/seo";
import { TrustSection } from "@/sections/home/TrustSection";
import { ApproachSection } from "@/sections/home/ApproachSection";
import { SolutionsSection } from "@/sections/home/SolutionsSection";
import { IndustriesSection } from "@/sections/home/IndustriesSection";
import { ExploreSection } from "@/sections/home/ExploreSection";
import { WhyExcelligentSection } from "@/sections/home/WhyExcelligentSection";
import { TestimonialsSection } from "@/sections/home/TestimonialsSection";
import { FinalCTA } from "@/sections/home/FinalCTA";

// Phase 13 homepage: consolidated from 14 stacked sections down to 8,
// following the Phase 13 design reference's large-panel, editorial
// composition. TestimonialsSection stays wired but renders nothing until
// Excelligent supplies real testimonials (see the component itself).
export default function HomePage() {
  return (
    <>
      <Seo {...pageSeo.home} />
      <HeroSection />
      <TrustSection />
      <ApproachSection />
      <SolutionsSection />
      <IndustriesSection />
      <ExploreSection />
      <WhyExcelligentSection />
      <TestimonialsSection />
      <FinalCTA />
    </>
  );
}
