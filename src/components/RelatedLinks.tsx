import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";

export interface RelatedGroup { 
  heading: string;
  links: { label: string; href: string }[];
}

export function RelatedLinks({ groups }: { groups: RelatedGroup[] }) {
  const visibleGroups = groups.filter((g) => g.links.length > 0);
  if (visibleGroups.length === 0) return null;

  const colsClass =
    visibleGroups.length >= 3
      ? "grid grid-cols-1 gap-8 sm:grid-cols-3"
      : visibleGroups.length === 2
      ? "grid grid-cols-1 gap-8 sm:grid-cols-2"
      : "grid grid-cols-1 gap-8";

 return (
  <motion.div
    variants={staggerChildren(0.08)}
    initial="hidden"
    whileInView="show"
    viewport={viewportOnce}
    className={colsClass.replace("gap-8", "gap-6")}
  >

    {visibleGroups.map((group) => (
      <motion.div
        key={group.heading}
        variants={fadeUp}
        className="
          group
          rounded-[1.5rem]
          border
          border-slate-200
          bg-[#f8fbff]
          p-7
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-200
          hover:bg-white
          hover:shadow-[0_20px_50px_rgba(20,70,130,0.09)]
        "
      >

        {/* Heading */}
        <div className="mb-6 flex items-center justify-between gap-4">

          <h3 className="font-display text-lg font-bold text-[#10213f]">
            {group.heading}
          </h3>

          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-white
              text-primary
              shadow-sm
            "
          >
            <ArrowUpRight className="h-4 w-4" />
          </div>

        </div>

        {/* Links */}
        <ul className="space-y-3">

          {group.links.map((link) => (
            <li key={link.href}>

              <Link
                to={link.href}
                className="
                  group/link
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-slate-200/70
                  bg-white
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-text-primary
                  transition-all
                  duration-200
                  hover:border-primary/30
                  hover:text-primary
                "
              >

                <span>
                  {link.label}
                </span>

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    opacity-50
                    transition-all
                    duration-200
                    group-hover/link:translate-x-0.5
                    group-hover/link:-translate-y-0.5
                    group-hover/link:opacity-100
                  "
                />

              </Link>

            </li>
          ))}

        </ul>

      </motion.div>
    ))}

  </motion.div>
);
}
