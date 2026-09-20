import { useParams } from "react-router-dom";
import { CaseStudyDetailPage } from "@/components/CaseStudyDetailPage";
import { getCaseStudyById } from "@/data/caseStudies";
import NotFoundPage from "@/pages/NotFoundPage";

export default function CaseStudyPage() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? getCaseStudyById(id) : undefined;

  if (!caseStudy) return <NotFoundPage />;

  return <CaseStudyDetailPage caseStudy={caseStudy} />;
}
