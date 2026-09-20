import { Navigate, Route, Routes } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import OverviewPage from "@/pages/OverviewPage";
import TeamPage from "@/pages/TeamPage";
import PartnershipsPage from "@/pages/PartnershipsPage";
import SolutionsIndexPage from "@/pages/SolutionsIndexPage";
import SolutionPage from "@/pages/SolutionPage";
import ServicesIndexPage from "@/pages/ServicesIndexPage";
import ServicePage from "@/pages/ServicePage";
import ProductsIndexPage from "@/pages/ProductsIndexPage";
import ProductPage from "@/pages/ProductPage";
import IndustriesIndexPage from "@/pages/IndustriesIndexPage";
import IndustryPage from "@/pages/IndustryPage";
import CaseStudiesPage from "@/pages/CaseStudiesPage";
import CaseStudyPage from "@/pages/CaseStudyPage";
import BlogPage from "@/pages/BlogPage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    // Phase 14 fix: the global CSS `prefers-reduced-motion` rule in
    // index.css only ever caught native CSS `@keyframes` animations —
    // Framer Motion drives transforms/opacity directly and was not
    // actually affected by it. `reducedMotion="user"` makes every
    // Framer Motion animation in the app (fadeUp/staggerChildren/
    // imageReveal, the hero motif, the interactive showcases) respect
    // the OS-level setting automatically: transform-based motion is
    // disabled while opacity fades are kept, which is Framer Motion's
    // accessible default.
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="overview" element={<OverviewPage />} />
          <Route path="our-team" element={<TeamPage />} />
          <Route path="our-partnerships" element={<PartnershipsPage />} />
          <Route path="solutions" element={<SolutionsIndexPage />} />
          <Route path="solutions/:slug" element={<SolutionPage />} />
          <Route path="services" element={<ServicesIndexPage />} />
          <Route path="services/:slug" element={<ServicePage />} />
          <Route path="products" element={<ProductsIndexPage />} />
          <Route path="products/:slug" element={<ProductPage />} />
          <Route path="industries" element={<IndustriesIndexPage />} />
          <Route path="industries/:slug" element={<IndustryPage />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="case-studies/:id" element={<CaseStudyPage />} />
          {/* Legacy path from the Phase 1 sitemap plan; Phase 7 established
              /case-studies as the canonical route. Redirect rather than break
              any links already pointing at the old path. */}
          <Route path="resources/case-studies" element={<Navigate to="/case-studies" replace />} />
          <Route path="resources/blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </MotionConfig>
  );
}
