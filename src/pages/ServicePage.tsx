import { useParams } from "react-router-dom";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { services } from "@/data/services";
import NotFoundPage from "@/pages/NotFoundPage";

// Single reusable route component powering all service pages
// (/services/:slug) — see ServiceDetailPage for the shared structure.
export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <NotFoundPage />;

  return <ServiceDetailPage service={service} />;
}
