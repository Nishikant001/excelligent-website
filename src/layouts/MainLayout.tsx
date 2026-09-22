import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { AskExcelligentAI } from "@/components/AskExcelligentAI";
import { organizationSchema, websiteSchema } from "@/lib/structuredData";

// Client-side navigation keeps the previous scroll offset unless told
// otherwise, so a link clicked in the footer used to open the next page at the
// bottom. Scroll to the top on route change (or to the #hash target).
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Organization + WebSite structured data apply site-wide, so they're
          rendered once here rather than duplicated on every page. */}
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <AskExcelligentAI />
    </div>
  );
}
