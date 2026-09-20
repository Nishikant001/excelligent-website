import { testimonials } from "@/data/homeContent";
import { TestimonialSection as TestimonialGrid } from "@/components/Sections";
import { SectionHeader } from "@/components/SectionHeader";

// The 3 testimonials on the live site are all attributed to "John Doe,
// Sony CEO" with identical Lorem-ipsum copy — confirmed placeholder/demo
// content (see docs/CONTENT_REVIEW_REQUIRED.md item 1). Per the Phase 3
// requirement, this section stays wired and ready but renders nothing
// publicly until Excelligent supplies real, verified testimonials.
export function TestimonialsSection() {
  const hasVerified = testimonials.some((t) => t.isVerified);
  if (!hasVerified) return null;

  return (
    <section className="bg-surface-muted py-16 lg:py-24">
      <div className="container-content">
        <SectionHeader title="What People Think About Us" align="center" />
        <div className="mt-10">
          <TestimonialGrid testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
