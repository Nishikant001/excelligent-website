import { MapPin } from "lucide-react";
import type { ContactAddress } from "@/types/content";

export function OfficeCard({ office }: { office: ContactAddress }) {
  const fullAddress = office.addressLines.join(", ");
  // A Google Maps search-query URL is used rather than fabricated
  // latitude/longitude coordinates — it reliably resolves to the address
  // text itself.
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  return (
    <div className="rounded-2xl border border-border/70 bg-surface p-7">
      <div className="flex items-start gap-3">
        <MapPin className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
        <div>
          <p className="font-semibold text-text-primary">{office.label}</p>
          {office.addressLines.map((line) => (
            <p key={line} className="text-sm text-text-secondary">
              {line}
            </p>
          ))}
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-medium text-primary hover:text-primary-dark"
          >
            Get directions
          </a>
        </div>
      </div>
    </div>
  );
}
