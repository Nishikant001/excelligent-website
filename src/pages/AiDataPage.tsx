import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/PageHero";
import { pageSeo } from "@/data/seo";
import { ROUTES } from "@/routes/paths";
import { EnterpriseAISection } from "@/sections/home/EnterpriseAISection";
import { CaseStudiesShowcase } from "@/sections/home/CaseStudiesShowcase";
import { FinalCTA } from "@/sections/home/FinalCTA";

// New top-level "AI & Data" page (homepage brief: AI gets its own nav item,
// not just a homepage section). Reuses the homepage's Enterprise AI showpiece
// as the page body, since that is the fullest description of the offering
// currently written; expand with dedicated AI & Data content when available.
export default function AiDataPage() {
  return (
    <>
      <Seo {...pageSeo.aiAndData} />
      <PageHero
        breadcrumb={[{ label: "Home", href: ROUTES.home }, { label: "AI & Data" }]}
        eyebrow="AI & Data"
        title="AI that understands your enterprise."
        description="We connect AI with enterprise processes, applications and data to create intelligence where work actually happens — not another chatbot bolted onto the side."
      />
      <EnterpriseAISection withCta={false} />
      <CaseStudiesShowcase />
      <FinalCTA />
    </>
  );
}
