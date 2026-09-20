import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { NavItem } from "@/data/navConfig";

export function MegaMenu({
  item,
  id,
  align = "center",
}: {
  item: NavItem;
  id?: string;
  /** "center" pins the panel under the middle of the trigger (the old,
   *  default behaviour). "end" pins the panel's right edge to the
   *  trigger's right edge instead — used for menus near the right side
   *  of the navbar so the panel can't spill off the viewport. */
  align?: "center" | "end";
}) {
  if (!item.columns) return null;

  const positionClass = align === "end" ? "right-0" : "left-1/2 -translate-x-1/2";

  // Keep single- and two-column menus noticeably narrower than a full
  // 3-column mega menu instead of always reserving the same wide panel.
  const widthClass =
    item.columns.length >= 3
      ? "w-[min(90vw,620px)]"
      : item.columns.length === 2
      ? "w-[min(85vw,440px)]"
      : "w-[min(80vw,300px)]";

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute top-full z-40 mt-3 ${widthClass} ${positionClass} rounded-2xl border border-border/70 bg-surface p-6 shadow-panel-light`}
      role="menu"
    >
      <div
        className={
          item.columns.length >= 3
            ? "grid gap-x-8 gap-y-2.5 grid-cols-3"
            : item.columns.length === 2
            ? "grid gap-x-8 gap-y-2.5 grid-cols-2"
            : "grid gap-x-8 gap-y-2.5 grid-cols-1"
        }
      >
        {item.columns.map((column, i) => (
          <div key={i}>
            {column.heading && (
              <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-secondary-dark">
                {column.heading}
              </p>
            )}
            <ul className="space-y-0.5">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    role="menuitem"
                    className="block rounded-lg px-3 py-1.5 text-sm text-text-primary transition-colors duration-150 hover:bg-surface-muted hover:text-primary"
                  >
                    {link.label}
                    {link.description && (
                      <span className="block text-xs text-text-secondary">{link.description}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
