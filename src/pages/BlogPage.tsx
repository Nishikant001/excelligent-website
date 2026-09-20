import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { pageSeo } from "@/data/seo";

export default function BlogPage() {
  return (
    <>
      <Seo {...pageSeo.blog} />
      <PageHero breadcrumb={[{ label: "Resources" }, { label: "Blog" }]} title="Blog" />
      <section className="container-content py-16">
        <p className="rounded-xl border border-dashed border-border p-8 text-center text-text-secondary">
          No blog content exists on the current site yet — this section is scaffolded and ready
          for Excelligent's future articles.
        </p>
      </section>
    </>
  );
}
