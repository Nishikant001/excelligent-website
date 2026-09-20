import { useParams } from "react-router-dom";
import { IndustryDetailPage } from "@/components/IndustryDetailPage";
import { industries } from "@/data/industries";
import NotFoundPage from "@/pages/NotFoundPage";

export default function IndustryPage() {
  const { slug } = useParams<{ slug: string }>();
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) return <NotFoundPage />;

  return <IndustryDetailPage industry={industry} />;
}
