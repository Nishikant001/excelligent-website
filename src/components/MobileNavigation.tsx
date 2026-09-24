import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems } from "@/data/navConfig";
import { Button } from "@/components/Button";
import { ROUTES } from "@/routes/paths";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  function close() {
    setOpen(false);
    setExpanded(null);
  }

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Lock background scroll while the drawer is open, and reliably restore
  // it on close/unmount — a real Phase 14 QA fix: without this, touch-
  // scrolling the semi-transparent backdrop scrolled the page behind the
  // open mobile menu.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        onClick={() => setOpen((v) => !v)}
        className="rounded-md p-2 text-white hover:bg-white/10"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={close}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              id="mobile-nav-drawer"
              className="absolute right-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto border-l border-white/10 bg-midnight-900 p-6 text-white shadow-card-hover"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between mb-6">
                <img src="/ecs-footer.png" alt="Excelligent" className="h-9 w-auto object-contain" />
                <button aria-label="Close menu" onClick={close} className="rounded-md p-2 hover:bg-white/10">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="space-y-1">
                {navItems.map((item) => {
                  const isExpanded = expanded === item.label;
                  if (item.href) {
                    return (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={close}
                        className="block rounded-md px-2 py-3 text-base font-medium text-white hover:bg-white/5"
                      >
                        {item.label}
                      </Link>
                    );
                  }
                  return (
                    <div key={item.label} className="border-b border-white/10 last:border-b-0">
                      <button
                        type="button"
                        onClick={() => setExpanded(isExpanded ? null : item.label)}
                        aria-expanded={isExpanded}
                        className="flex w-full items-center justify-between rounded-md px-2 py-3 text-base font-medium text-white"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-2 pb-2"
                          >
                            {item.columns?.flatMap((c) => c.links).map((link) => (
                              <Link
                                key={link.href}
                                to={link.href}
                                onClick={close}
                                className="block rounded-md px-2 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>

              <Button
                as="a"
                href={ROUTES.contact}
                onClick={close}
                variant="gradient"
                withArrow
                className="group mt-6 w-full"
              >
                Let's Talk
              </Button>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
