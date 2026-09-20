import type { LucideIcon } from "lucide-react";

export function ContactInfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border/70 bg-surface p-7">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-muted">
        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
      </span>
      <div>
        <p className="text-sm font-semibold text-text-primary">{label}</p>
        {href ? (
          <a href={href} className="text-sm text-text-secondary hover:text-primary">
            {value}
          </a>
        ) : (
          <p className="text-sm text-text-secondary">{value}</p>
        )}
      </div>
    </div>
  );
}
