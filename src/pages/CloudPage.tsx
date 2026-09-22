import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/PageHero";
import { pageSeo } from "@/data/seo";
import { ROUTES } from "@/routes/paths";
import { CloudSection } from "@/sections/home/CloudSection";
import { WhySection } from "@/sections/home/WhySection";
import { FinalCTA } from "@/sections/home/FinalCTA";

// New top-level "Cloud" page (homepage brief section 6: "SAP meets Cloud").
export default function CloudPage() {
  return (
    <>
      <Seo {...pageSeo.cloud} />
      <PageHero
        breadcrumb={[{ label: "Home", href: ROUTES.home }, { label: "Cloud" }]}
        eyebrow="Cloud"
        title="SAP meets Cloud."
        description="Modern infrastructure for modern enterprises — migration, managed cloud and a secure, scalable foundation for SAP and enterprise applications on AWS."
      />
      <CloudSection />
      <WhySection />
      <FinalCTA />
    </>
  );
}
