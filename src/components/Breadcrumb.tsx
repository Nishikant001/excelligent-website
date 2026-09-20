import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { ROUTES } from "@/routes/paths";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structuredData";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumb({ items, tone = "default" }: { items: Crumb[]; tone?: "default" | "inverted" }) {
  const all: Crumb[] = [{ label: "Home", href: ROUTES.home }, ...items];
  const isInverted = tone === "inverted";

  return (
    <nav aria-label="Breadcrumb">
      <JsonLd data={breadcrumbSchema(all)} />
      <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${isInverted ? "text-white/60" : "text-text-secondary"}`}>
        {all.map((crumb, i) => {
          const isLast = i === all.length - 1;
          return (
            <li key={crumb.label} className="flex items-center gap-1.5">
              {crumb.href && !isLast ? (
                <Link to={crumb.href} className={isInverted ? "hover:text-white" : "hover:text-primary"}>
                  {crumb.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={isLast ? `font-medium ${isInverted ? "text-white" : "text-text-primary"}` : ""}
                >
                  {crumb.label}
                </span>
              )}
              {!isLast && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
