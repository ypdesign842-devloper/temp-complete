// Single source of truth for the QA route list: every public pathname the
// site ships, derived from the generated route tree so new routes are picked
// up automatically.
import { readFileSync } from "node:fs";

export function allPaths() {
  const src = readFileSync(new URL("../../src/routeTree.gen.ts", import.meta.url), "utf8");
  const block = src.match(/interface FileRoutesByTo \{([\s\S]*?)\n\}/);
  if (!block) throw new Error("Could not read FileRoutesByTo from src/routeTree.gen.ts");

  const paths = [...block[1].matchAll(/^\s*'([^']+)':/gm)]
    .map((m) => m[1])
    .filter((p) => !p.includes("$") && !p.includes("*"))
    .filter((p) => !p.startsWith("/api/") && !p.startsWith("/lovable"))
    .filter((p) => p !== "/not-found");

  return [...new Set(paths)].sort();
}

// Routes worth measuring performance on: one per template, plus the highest
// traffic pages. Perf runs are slow, so we keep this list small and stable.
export const perfRoutes = [
  "/",
  "/our-team",
  "/blogs",
  "/media",
  "/video",
  "/best-physiotherapy-center-thaltej-ahmedabad",
  "/back-pain-doctor-in-ahmedabad",
  "/spine-decompression-therapy-treatment-in-ahmedabad",
  "/how-physiotherapy-helps-in-stroke-recovery",
];

export const BASE = process.env.QA_BASE_URL ?? "http://localhost:8080";

export const budgets = {
  lcpMs: 2500, // Core Web Vitals "good"
  cls: 0.1,
  ttfbMs: 800,
  routeChunkKb: 120, // per-route client chunk (gzip-ish raw size)
  entryChunkKb: 400, // shared entry/vendor chunk
  totalClientKb: 2600,
};
