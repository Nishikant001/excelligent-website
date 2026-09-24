import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { DesktopNavigation } from "@/components/DesktopNavigation";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Button } from "@/components/Button";
import { ROUTES } from "@/routes/paths";

// Dark "midnight" header used on every page (homepage brief, design
// language): it sits directly on top of the dark hero panels, turning into a
// slightly more opaque glass bar with a hairline once the page is scrolled.
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    function updateScrolled() {
      setScrolled(window.scrollY > 12);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateScrolled);
        ticking = true;
      }
    }

    updateScrolled();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
  ? "border-b border-white/10 bg-midnight/95 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.45)] backdrop-blur-xl"
  : "border-b border-white/10 bg-midnight/90 backdrop-blur-md"
      }`}
    >
      <div className="container-content flex h-[4.5rem] items-center justify-between gap-6 xl:h-20">
        {/* Excelligent Logo (light-on-dark variant) */}
        <Link to={ROUTES.home} className="flex shrink-0 items-center" aria-label="Excelligent Home">
          <img src="/ecs-footer.png" alt="Excelligent" className="h-10 w-auto object-contain xl:h-11" />
        </Link>

        <DesktopNavigation />

        <div className="flex items-center gap-3">
          <Button
            as="a"
            href={ROUTES.contact}
            size="sm"
            variant="gradient"
            withArrow
            className="group hidden xl:inline-flex"
          >
            Let's Talk
          </Button>

          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
