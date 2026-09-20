import { SectionHeader } from "@/components/SectionHeader";
import { ProcessSteps } from "@/components/Sections";
import { services } from "@/data/services";

// The live Home page's own "How It Works" section is Lorem Ipsum
// placeholder copy (see docs/CONTENT_REVIEW_REQUIRED.md item 3) and is not
// used here. Instead, this section reuses Excelligent's real, published
// SAP Activate delivery methodology from the SAP Implementation page —
// the actual existing process behind how Excelligent works with clients.
export function ProcessSection() {
  const implementation = services.find((s) => s.slug === "sap-implementation");
  if (!implementation) return null;

  return (
    <section className="container-content py-16 lg:py-24">
      <SectionHeader
        eyebrow="How We Work"
        title="A proven, phased delivery methodology"
        description="Every engagement follows SAP Activate's structured phases, from discovery through to running the solution."
      />
      <div className="mt-10">
        <ProcessSteps steps={implementation.methodologyPhases} />
      </div>
    </section>
  );
}
