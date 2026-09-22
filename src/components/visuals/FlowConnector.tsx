// A short vertical link with data "packets" travelling both ways — one cyan
// packet flowing down and one violet packet flowing up — used by the
// Enterprise AI and Cloud diagrams ("animate the data flowing upward and
// downward through this stack"). Purely decorative; hidden from assistive tech
// and static for users who prefer reduced motion.
export function FlowConnector({
  className = "h-10",
  delay = 0,
}: {
  className?: string;
  /** Seconds to offset the animation so neighbouring links don't pulse in lockstep. */
  delay?: number;
}) {
  return (
    <div
      className={`relative mx-auto w-px bg-gradient-to-b from-secondary-light/50 to-violet-light/50 ${className}`}
      aria-hidden="true"
    >
      <span
        className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 animate-flow-down rounded-full bg-secondary-light shadow-[0_0_10px_2px_rgba(34,211,238,0.75)] motion-reduce:hidden"
        style={{ animationDelay: `${delay}s` }}
      />
      <span
        className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 animate-flow-up rounded-full bg-violet-light shadow-[0_0_10px_2px_rgba(139,123,255,0.75)] motion-reduce:hidden"
        style={{ animationDelay: `${delay + 1.2}s` }}
      />
    </div>
  );
}
