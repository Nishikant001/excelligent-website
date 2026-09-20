import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { DesktopNavigation } from "@/components/DesktopNavigation";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Button } from "@/components/Button";
import { ROUTES } from "@/routes/paths";

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
          ? "bg-surface/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-surface/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container-content flex h-[4.5rem] items-center justify-between lg:h-20">
        
        {/* Excelligent Logo */}
        <Link
          to={ROUTES.home}
          className="flex items-center shrink-0"
          aria-label="Excelligent Home"
        >
          <img
            src="/ecs.png"
            alt="Excelligent"
            className="h-11 w-auto object-contain lg:h-12"
          />
        </Link>

        <DesktopNavigation />

        <div className="flex items-center gap-3">
          <Button
            as="a"
            href={ROUTES.contact}
            size="sm"
            className="hidden lg:inline-flex"
          >
            Let's Talk
          </Button>

          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}