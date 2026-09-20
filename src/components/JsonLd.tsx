// Renders a single JSON-LD <script> tag. Multiple JsonLd instances can
// appear on one page (e.g. Organization + BreadcrumbList) — each gets its
// own script tag, which is valid per schema.org/Google guidance.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
