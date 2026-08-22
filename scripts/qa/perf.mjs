// Performance regression check: measures TTFB, LCP and CLS for a
// representative route per template using headless Chromium, and fails the run
// when a Core Web Vitals budget is exceeded.
//
// Requires Chromium once: bunx playwright@1.50.0 install chromium
import { perfRoutes, BASE, budgets } from "./paths.mjs";

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  console.log("playwright is not installed — skipping perf run.");
  console.log("Install with: bun add -d playwright && bunx playwright install chromium");
  process.exit(0);
}

const COLLECT = `
new Promise((resolve) => {
  let lcp = 0, cls = 0;
  new PerformanceObserver((l) => { for (const e of l.getEntries()) lcp = Math.max(lcp, e.startTime); })
    .observe({ type: 'largest-contentful-paint', buffered: true });
  new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) cls += e.value; })
    .observe({ type: 'layout-shift', buffered: true });
  setTimeout(() => {
    const nav = performance.getEntriesByType('navigation')[0];
    resolve({ lcp: Math.round(lcp), cls: Number(cls.toFixed(3)), ttfb: Math.round(nav ? nav.responseStart : 0) });
  }, 3500);
})`;

const browser = await chromium.launch();
const rows = [];
const failures = [];

for (const device of [
  { name: "desktop", viewport: { width: 1366, height: 900 } },
  { name: "mobile", viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true },
]) {
  const context = await browser.newContext(device);
  const page = await context.newPage();
  const consoleErrors = [];
  page.on("console", (m) => m.type() === "error" && consoleErrors.push(m.text()));

  for (const route of perfRoutes) {
    await page.goto(`${BASE}${route}`, { waitUntil: "load" });
    const m = await page.evaluate(COLLECT);
    rows.push({ device: device.name, route, ...m });
    if (m.lcp > budgets.lcpMs) failures.push(`${device.name} ${route}: LCP ${m.lcp}ms > ${budgets.lcpMs}ms`);
    if (m.cls > budgets.cls) failures.push(`${device.name} ${route}: CLS ${m.cls} > ${budgets.cls}`);
    if (m.ttfb > budgets.ttfbMs) failures.push(`${device.name} ${route}: TTFB ${m.ttfb}ms > ${budgets.ttfbMs}ms`);
  }
  await context.close();

  const real = consoleErrors.filter((e) => !/hydrat|DevTools|favicon/i.test(e));
  if (real.length) failures.push(`${device.name}: ${real.length} console error(s) — ${real[0].slice(0, 120)}`);
}

await browser.close();

console.log("device    LCP     CLS     TTFB   route");
for (const r of rows) {
  console.log(
    `${r.device.padEnd(9)} ${String(r.lcp + "ms").padEnd(7)} ${String(r.cls).padEnd(7)} ${String(r.ttfb + "ms").padEnd(6)} ${r.route}`,
  );
}

if (failures.length) {
  console.log(`\nBUDGET FAILURES (${failures.length}):`);
  for (const f of failures) console.log(`  ${f}`);
  process.exit(1);
}
console.log("\nAll routes within LCP / CLS / TTFB budgets.");
