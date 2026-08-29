import { readFileSync } from "fs";

const report = JSON.parse(readFileSync("./reports/lighthouse-mobile-audit.json", "utf8"));
const cats = report.categories;
const audits = report.audits;

console.log("=== LIGHTHOUSE MOBILE AUDIT RESULTS ===");
console.log("Performance Score:", cats.performance ? Math.round(cats.performance.score * 100) : "N/A");
console.log("Accessibility Score:", cats.accessibility ? Math.round(cats.accessibility.score * 100) : "N/A");
console.log("Best Practices Score:", cats["best-practices"] ? Math.round(cats["best-practices"].score * 100) : "N/A");
console.log("SEO Score:", cats.seo ? Math.round(cats.seo.score * 100) : "N/A");

console.log("\n=== CORE WEB VITALS & METRICS ===");
console.log("FCP (First Contentful Paint):", audits["first-contentful-paint"]?.displayValue, `(${audits["first-contentful-paint"]?.numericValue?.toFixed(0)} ms)`);
console.log("LCP (Largest Contentful Paint):", audits["largest-contentful-paint"]?.displayValue, `(${audits["largest-contentful-paint"]?.numericValue?.toFixed(0)} ms)`);
console.log("Speed Index:", audits["speed-index"]?.displayValue, `(${audits["speed-index"]?.numericValue?.toFixed(0)} ms)`);
console.log("TBT (Total Blocking Time):", audits["total-blocking-time"]?.displayValue, `(${audits["total-blocking-time"]?.numericValue?.toFixed(0)} ms)`);
console.log("CLS (Cumulative Layout Shift):", audits["cumulative-layout-shift"]?.displayValue, `(${audits["cumulative-layout-shift"]?.numericValue?.toFixed(4)})`);

console.log("\n=== LCP ELEMENT AUDIT ===");
if (audits["largest-contentful-paint-element"]?.details?.items) {
  console.log(JSON.stringify(audits["largest-contentful-paint-element"].details.items, null, 2));
}

console.log("\n=== RENDER-BLOCKING REQUESTS AUDIT ===");
console.log("Savings:", audits["render-blocking-resources"]?.displayValue || "None");
if (audits["render-blocking-resources"]?.details?.items) {
  console.log(JSON.stringify(audits["render-blocking-resources"].details.items, null, 2));
}
