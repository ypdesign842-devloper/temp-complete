// Route-level bundle-size check: inspects the built client assets and fails
// when a route chunk, the shared entry, or the total client payload grows past
// budget. Run after `bun run build`.
import { readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
import { budgets } from "./paths.mjs";

const CANDIDATES = [".output/public/_build/assets", "dist/client/_build/assets", ".output/public/assets"];
const dir = CANDIDATES.find((d) => existsSync(d));

if (!dir) {
  console.log("No built client assets found. Run `bun run build` first.");
  process.exit(1);
}

const files = readdirSync(dir)
  .filter((f) => f.endsWith(".js"))
  .map((f) => ({ file: f, kb: +(statSync(join(dir, f)).size / 1024).toFixed(1) }))
  .sort((a, b) => b.kb - a.kb);

const total = +files.reduce((s, f) => s + f.kb, 0).toFixed(1);
const isEntry = (f) => /^(client|entry|index|main)[-.]/.test(f.file) || /vendor|chunk-common/.test(f.file);

const failures = [];
for (const f of files) {
  const limit = isEntry(f) ? budgets.entryChunkKb : budgets.routeChunkKb;
  if (f.kb > limit) failures.push(`${f.file}: ${f.kb}kB > ${limit}kB budget`);
}
if (total > budgets.totalClientKb) failures.push(`total client JS ${total}kB > ${budgets.totalClientKb}kB budget`);

console.log(`Client JS — ${files.length} chunks, ${total}kB total`);
console.log("\nLargest 15 chunks:");
for (const f of files.slice(0, 15)) console.log(`  ${String(f.kb).padStart(7)}kB  ${f.file}`);

if (failures.length) {
  console.log(`\nBUDGET FAILURES (${failures.length}):`);
  for (const f of failures) console.log(`  ${f}`);
  process.exit(1);
}
console.log("\nAll chunks within budget.");
