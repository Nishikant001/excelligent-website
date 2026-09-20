import { useParams } from "react-router-dom";
import { SolutionDetailPage } from "@/components/SolutionDetailPage";
import { solutions } from "@/data/solutions";
import NotFoundPage from "@/pages/NotFoundPage";

// Single reusable route component powering all seven solution pages
// (/solutions/:slug) — see SolutionDetailPage for the shared structure.
export default function SolutionPage() {
  const { slug } = useParams<{ slug: string }>(); 
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) return <NotFoundPage />;

  return <SolutionDetailPage solution={solution} />;
}
