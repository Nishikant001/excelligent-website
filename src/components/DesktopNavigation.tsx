import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { navItems } from "@/data/navConfig";
import { MegaMenu } from "@/components/MegaMenu";

function slugifyLabel(label: string) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

// The last few menu items sit close to the right edge of the viewport, so
// centering their panel under the trigger (the old behaviour) pushed it
// past the edge of the screen. Right-align those instead of centering.
const RIGHT_ALIGNED_MENUS = new Set(["Industries", "Insights", "Company"]);

export function DesktopNavigation() {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (!openLabel) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenLabel(null);
        // Return focus to the trigger button for the menu that was open.
        const trigger = navRef.current?.querySelector<HTMLButtonElement>(
          `[aria-controls="menu-${slugifyLabel(openLabel ?? "")}"]`
        );
        trigger?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openLabel]);

  return (
    <nav ref={navRef} className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
      {navItems.map((item) => {
        const hasMenu = Boolean(item.columns);
        const isOpen = openLabel === item.label;
        const menuId = `menu-${slugifyLabel(item.label)}`;
        const isActive = item.href ? location.pathname === item.href : false;
        const align = RIGHT_ALIGNED_MENUS.has(item.label) ? "end" : "center";

        return (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => hasMenu && setOpenLabel(item.label)}
            onMouseLeave={() => hasMenu && setOpenLabel(null)}
          >
            {item.href ? (
              <Link
                to={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-white" : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-ai-gradient transition-transform duration-200 ease-premium group-hover:scale-x-100 ${
                    isActive ? "scale-x-100" : ""
                  }`}
                  aria-hidden="true"
                />
              </Link>
            ) : (
              <button
                type="button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-controls={menuId}
                onFocus={() => setOpenLabel(item.label)}
                onClick={() => setOpenLabel(isOpen ? null : item.label)}
                className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-white ${
                  isOpen ? "text-white" : "text-white/75"
                }`}
              >
                {item.label}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            )}

            <AnimatePresence>{isOpen && <MegaMenu item={item} id={menuId} align={align} />}</AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}
