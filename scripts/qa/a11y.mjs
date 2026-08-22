// Accessibility regression check: runs axe-core (WCAG 2.1 A + AA) against every
// route on desktop and mobile viewports and fails on any violation.
//
// Requires Chromium once: bunx playwright@1.50.0 install chromium
import { allPaths, BASE } from "./paths.mjs";

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  console.log("playwright is not installed — skipping a11y run.");
  console.log("Install with: bun add -d playwright && bunx playwright install chromium");
  process.exit(0);
}

const AXE = "https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.2/axe.min.js";
const paths = process.argv.slice(2).length ? process.argv.slice(2) : allPaths();

const browser = await chromium.launch();
const violations = [];

for (const device of [
  { name: "desktop", viewport: { width: 1366, height: 1600 } },
  { name: "mobile", viewport: { width: 390, height: 844 } },
]) {
  const context = await browser.newContext(device);
  const page = await context.newPage();
  for (const path of paths) {
    await page.goto(`${BASE}${path}`, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(400);
    await page.addScriptTag({ url: AXE });
    const found = await page.evaluate(async () => {
      const { violations } = await axe.run(document, {
        runOnly: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"],
      });
      return violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.length,
        example: v.nodes[0]?.html.slice(0, 140),
      }));
    });
    for (const v of found) violations.push({ device: device.name, path, ...v });
  }
  await context.close();
}
await browser.close();

console.log(`Accessibility check — ${paths.length} routes x 2 viewports`);
if (violations.length) {
  console.log(`\nVIOLATIONS (${violations.length}):`);
  for (const v of violations) {
    console.log(`  [${v.impact}] ${v.id} — ${v.device} ${v.path} (${v.nodes} node(s))\n      ${v.example}`);
  }
  process.exit(1);
}
console.log("\nNo WCAG 2.1 A/AA violations found.");
