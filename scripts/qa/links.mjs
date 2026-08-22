// Route + internal-link check: every route must return 200, and every internal
// href rendered on the site must point at a real route (no 404s, no drift when
// slugs change).
import { allPaths, BASE } from "./paths.mjs";

const paths = allPaths();
const known = new Set(paths);
const badStatus = [];
const deadLinks = new Map();

for (const path of paths) {
  const res = await fetch(`${BASE}${path}`);
  if (res.status !== 200) {
    badStatus.push(`${path} → ${res.status}`);
    continue;
  }
  const html = await res.text();
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const href = m[1].length > 1 ? m[1].replace(/\/$/, "") : m[1];
    if (href.startsWith("/_build") || href.startsWith("/@") || href.startsWith("/api/") || /\.[a-z0-9]+$/i.test(href)) continue;
    if (!known.has(href)) {
      if (!deadLinks.has(href)) deadLinks.set(href, new Set());
      deadLinks.get(href).add(path);
    }
  }
}

console.log(`Route check — ${paths.length} routes crawled`);
if (badStatus.length) {
  console.log(`\nNON-200 ROUTES (${badStatus.length}):`);
  for (const b of badStatus) console.log(`  ${b}`);
}
if (deadLinks.size) {
  console.log(`\nDEAD INTERNAL LINKS (${deadLinks.size}):`);
  for (const [href, from] of deadLinks) console.log(`  ${href} ← ${[...from].slice(0, 3).join(", ")}`);
}
if (badStatus.length || deadLinks.size) process.exit(1);
console.log("\nAll routes 200, all internal links resolve.");
