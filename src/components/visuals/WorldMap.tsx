import { WORLD_MAP, projectLonLat } from "@/data/worldMap";

// Subtle dark dotted world map with glowing location markers. The land is one
// dashed, round-capped path (see data/worldMap.ts), so it stays tiny.
export function WorldMap({
  markers,
  className = "",
}: {
  markers: { name: string; lon: number; lat: number }[];
  className?: string;
}) {
  return (
    <svg
      viewBox={`-10 -10 ${WORLD_MAP.width + 20} ${WORLD_MAP.height + 20}`}
      className={className}
      role="img"
      aria-label={`World map showing ${markers.map((m) => m.name).join(" and ")}`}
    >
      <defs>
        <radialGradient id="wm-glow">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path
        d={WORLD_MAP.path}
        fill="none"
        stroke="rgba(148,170,220,0.32)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeDasharray={`0 ${WORLD_MAP.step}`}
      />
      {markers.map((m) => {
        const { x, y } = projectLonLat(m.lon, m.lat);
        return (
          <g key={m.name} transform={`translate(${x} ${y})`}>
            <circle r="34" fill="url(#wm-glow)" opacity="0.55" />
            <circle r="9" fill="none" stroke="#22D3EE" strokeWidth="1.5" className="origin-center animate-pulse-ring motion-reduce:hidden" style={{ transformBox: "fill-box", transformOrigin: "center" }} />
            <circle r="5" fill="#67E8F9" />
            <circle r="2" fill="#fff" />
          </g>
        );
      })}
    </svg>
  );
}
