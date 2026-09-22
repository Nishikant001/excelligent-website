import { aiArchitecture as arch } from "@/data/homeSections";
import { FlowConnector } from "@/components/visuals/FlowConnector";

// The layered "Enterprise AI" architecture from the brief (section 4):
//
//            ENTERPRISE AI
//                 ↓↑
//          AI AGENT LAYER  (Finance | Procurement | Supply | Service)
//                 ↓↑
//      INTELLIGENCE & AUTOMATION
//        ↓↑          ↓↑          ↓↑
//   SAP S/4HANA    SAP BTP     e-Vault
//        ↓↑          ↓↑          ↓↑
//                CLOUD / AWS
//
// Data packets animate up and down the links between the layers.
export function EnterpriseAIDiagram({ className = "" }: { className?: string }) {
  return (
    <figure
      className={`mx-auto w-full max-w-3xl ${className}`}
      aria-label="Enterprise AI architecture"
    >
      <div aria-hidden="true">
        {/* Top label */}
        <div className="flex justify-center">
          <span className="rounded-full border border-secondary-light/40 bg-secondary-light/10 px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-secondary-light sm:text-xs">
            {arch.top}
          </span>
        </div>
        <FlowConnector className="h-8 sm:h-10" />

        {/* AI agent layer — gradient-outlined panel */}
        <div className="rounded-3xl bg-gradient-to-r from-secondary-light/70 via-primary-light/60 to-violet/70 p-px shadow-glow">
          <div className="rounded-[calc(1.5rem-1px)] bg-midnight-800/95 px-4 py-5 text-center sm:px-8 sm:py-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60 sm:text-xs">{arch.agentLayer.title}</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
              {arch.agentLayer.agents.map((agent) => (
                <li
                  key={agent}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs font-semibold text-white sm:text-sm"
                >
                  {agent}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <FlowConnector className="h-8 sm:h-10" delay={0.4} />

        {/* Intelligence & automation band with a sweeping highlight */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 py-3 text-center">
          <span className="absolute inset-y-0 -left-1/3 w-1/3 animate-sweep bg-gradient-to-r from-transparent via-secondary-light/25 to-transparent motion-reduce:hidden" />
          <p className="relative text-[11px] font-semibold uppercase tracking-[0.28em] text-white/85 sm:text-xs">{arch.middle}</p>
        </div>

        {/* Links into the three systems */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {arch.systems.map((_, i) => (
            <FlowConnector key={i} className="h-8 sm:h-10" delay={0.3 * i} />
          ))}
        </div>

        {/* Systems */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {arch.systems.map((sys) => (
            <div
              key={sys.title}
              className="rounded-2xl border border-white/10 bg-midnight-800/80 p-3 text-center sm:p-5"
            >
              <p className="text-xs font-bold text-white sm:text-base">{sys.title}</p>
              <span className="mx-auto my-2.5 block h-px w-8 bg-gradient-to-r from-secondary-light to-violet sm:my-3" />
              <ul className="space-y-1 text-[11px] text-white/65 sm:space-y-1.5 sm:text-sm">
                {sys.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Links down into the cloud layer */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {arch.systems.map((_, i) => (
            <FlowConnector key={i} className="h-8 sm:h-10" delay={0.5 + 0.3 * i} />
          ))}
        </div>

        {/* Cloud / AWS */}
        <div className="rounded-2xl border border-primary-light/30 bg-gradient-to-r from-primary/25 to-primary-light/10 py-3.5 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white sm:text-xs">{arch.bottom}</p>
        </div>
      </div>

      <figcaption className="sr-only">
        An {arch.agentLayer.title} covering {arch.agentLayer.agents.join(", ")} sits on top of {arch.middle}, which
        connects {arch.systems.map((s) => `${s.title} (${s.items.join(", ")})`).join("; ")}, all running on{" "}
        {arch.bottom}.
      </figcaption>
    </figure>
  );
}
