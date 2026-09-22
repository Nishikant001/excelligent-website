// One-off generator for src/data/worldMap.ts (the dotted world map used in
// the homepage "India built. Globally ready." section).
//
// It is NOT part of the normal build and needs three packages that are
// deliberately not project dependencies:
//   npm i --no-save d3-geo topojson-client world-atlas
//   node scripts/gen-world-map.mjs   (then move the emitted worldMap.ts to src/data/)
import { readFileSync, writeFileSync } from "node:fs";
import { geoContains } from "d3-geo";
import { feature } from "topojson-client";

const topo = JSON.parse(readFileSync("node_modules/world-atlas/land-110m.json", "utf8"));
const land = feature(topo, topo.objects.land);

const STEP = 2;            // degrees between dots
const LAT_TOP = 84, LAT_BOTTOM = -58;
const LON_LEFT = -180;
const cols = Math.round(360 / STEP);
const rows = Math.round((LAT_TOP - LAT_BOTTOM) / STEP) + 1;

const runs = []; // [row, startCol, endCol]
let dots = 0;
for (let r = 0; r < rows; r++) {
  const lat = LAT_TOP - r * STEP;
  let start = -1;
  for (let c = 0; c <= cols; c++) {
    const lon = LON_LEFT + c * STEP;
    const inside = c < cols && geoContains(land, [lon, lat]);
    if (inside) { dots++; if (start < 0) start = c; }
    else if (start >= 0) { runs.push([r, start, c - 1]); start = -1; }
  }
}
console.log({ cols, rows, dots, runs: runs.length });

const U = 8; // svg units per grid step
const path = runs.map(([r, a, b]) => `M${a * U} ${r * U}H${b * U}`).join("");
const project = (lon, lat) => [((lon - LON_LEFT) / STEP) * U, ((LAT_TOP - lat) / STEP) * U];

const out = `// GENERATED FILE — dotted world map (Natural Earth 110m land, 2° grid).
// Each run in \`WORLD_DOT_PATH\` is a horizontal line that the WorldMap
// component renders with a round-cap dashed stroke (dash 0, gap ${U}) so every
// grid step becomes one dot. Regenerate with scripts/gen-world-map.mjs if the
// resolution or crop needs to change.
export const WORLD_MAP = {
  width: ${cols * U},
  height: ${(rows - 1) * U},
  step: ${U},
  path: ${JSON.stringify(path)},
} as const;

/** Project a longitude/latitude onto WORLD_MAP's SVG coordinate space. */
export function projectLonLat(lon: number, lat: number): { x: number; y: number } {
  const x = ((lon - (${LON_LEFT})) / ${STEP}) * ${U};
  const y = ((${LAT_TOP} - lat) / ${STEP}) * ${U};
  return { x, y };
}
`;
writeFileSync("worldMap.ts", out);
console.log("path bytes", path.length, "India", project(77.2, 28.6), "Bhubaneswar", project(85.82, 20.3));
