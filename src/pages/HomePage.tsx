import { Seo } from "@/components/Seo";
import { pageSeo } from "@/data/seo";
import { HeroSection } from "@/sections/home/HeroSection";
import { PositioningSection } from "@/sections/home/PositioningSection";
import { CapabilitiesSection } from "@/sections/home/CapabilitiesSection";
import { EnterpriseAISection } from "@/sections/home/EnterpriseAISection";
import { DeepSapSection } from "@/sections/home/DeepSapSection";
import { CloudSection } from "@/sections/home/CloudSection";
import { ProductsShowcase } from "@/sections/home/ProductsShowcase";
import { EvidenceSection } from "@/sections/home/EvidenceSection";
import { CaseStudiesShowcase } from "@/sections/home/CaseStudiesShowcase";
import { IndustriesWords } from "@/sections/home/IndustriesWords";
import { WhySection } from "@/sections/home/WhySection";
import { FootprintSection } from "@/sections/home/FootprintSection";
import { InsightsSection } from "@/sections/home/InsightsSection";
import { FinalCTA } from "@/sections/home/FinalCTA";

// Homepage rebuilt to the "AI-native enterprise technology company with deep
// SAP DNA" brief in website.docx — the 14 sections below follow that
// document's numbering 1 → 14 exactly (see src/data/homeSections.ts for the
// copy, and docs/HOMEPAGE_ALIGNMENT.md for what was verified vs. flagged).
export default function HomePage() {
  return (
    <>
      <Seo {...pageSeo.home} />
      <HeroSection />
      <PositioningSection />
      <CapabilitiesSection />
      <EnterpriseAISection />
      <DeepSapSection />
      <CloudSection />
      <ProductsShowcase />
      <EvidenceSection />
      <CaseStudiesShowcase />
      <IndustriesWords />
      <WhySection />
      <FootprintSection />
      <InsightsSection />
      <FinalCTA />
    </>
  );
}
