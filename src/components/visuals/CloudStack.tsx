import { cloudStack as stack } from "@/data/homeSections";
import { FlowConnector } from "@/components/visuals/FlowConnector";

// "SAP meets Cloud" stack from the brief (section 6):
//   ENTERPRISE APPLICATIONS -> SAP | Custom Apps | Data -> AWS CLOUD ->
//   Compute | Storage | Security | Backup | DR | AI -> MODERN ENTERPRISE
export function CloudStack({ className = "" }: { className?: string }) {
  return (
    <figure className={`mx-auto w-full max-w-xl ${className}`} aria-label="SAP and cloud stack">
      <div aria-hidden="true">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 sm:text-xs">
          {stack.top}
        </p>
        <FlowConnector className="h-7" />

        <ul className="grid grid-cols-3 gap-2 sm:gap-3">
          {stack.apps.map((app) => (
            <li
              key={app}
              className="rounded-xl border border-white/10 bg-white/5 py-3 text-center text-xs font-semibold text-white sm:text-sm"
            >
              {app}
            </li>
          ))}
        </ul>
        <FlowConnector className="h-7" delay={0.4} />

        {/* AWS cloud panel */}
        <div className="rounded-3xl bg-gradient-to-br from-primary-light/60 via-secondary-light/40 to-violet/50 p-px shadow-glow">
          <div className="rounded-[calc(1.5rem-1px)] bg-midnight-800/95 p-4 sm:p-6">
            <p className="text-center font-display text-lg font-bold tracking-wide text-white sm:text-xl">{stack.cloud}</p>
            <ul className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
              {stack.services.map((svc) => (
                <li
                  key={svc}
                  className="rounded-lg border border-white/10 bg-white/5 py-2 text-center text-[11px] font-medium text-white/80 sm:text-sm"
                >
                  {svc}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <FlowConnector className="h-7" delay={0.8} />

        <p className="rounded-2xl border border-secondary-light/30 bg-secondary-light/10 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-secondary-light sm:text-xs">
          {stack.bottom}
        </p>
      </div>

      <figcaption className="sr-only">
        {stack.top} — {stack.apps.join(", ")} — run on {stack.cloud}, which provides {stack.services.join(", ")} —
        resulting in a {stack.bottom.toLowerCase()}.
      </figcaption>
    </figure>
  );
}
