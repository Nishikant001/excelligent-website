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
  const hasDescriptions = item.columns.some((c) => c.links.some((l) => l.description));
  const widthClass =
    item.columns.length >= 3
      ? "w-[min(90vw,720px)]"
      : item.columns.length === 2
      ? hasDescriptions
        ? "w-[min(90vw,620px)]"
        : "w-[min(85vw,460px)]"
      : hasDescriptions
      ? "w-[min(80vw,340px)]"
      : "w-[min(80vw,300px)]";

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute top-full z-40 mt-3 ${widthClass} ${positionClass} rounded-2xl border border-white/10 bg-midnight-800/95 p-5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl`}
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
              <p className="mb-2.5 px-3 text-xs font-semibold uppercase tracking-[0.12em] text-secondary-light">
                {column.heading}
              </p>
            )}
            <ul className="space-y-0.5">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    role="menuitem"
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-colors duration-150 hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                    {link.description && (
                      <span className="mt-0.5 block text-xs font-normal text-white/50">{link.description}</span>
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
