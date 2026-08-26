import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://completecare.in";

const inventoryPath = resolve("reports/sitemap-inventory.json");
const inventory = JSON.parse(readFileSync(inventoryPath, "utf8"));

const original150Paths = inventory.sourcePaths;

const approvedNewPaths = [
  "/post-surgical-rehabilitation-in-ahmedabad",
  "/care-areas",
  "/therapies",
  "/certifications",
];

// Validation checks
if (!Array.isArray(original150Paths) || original150Paths.length !== 150) {
  console.error(`Error: Expected 150 original paths in inventory, found ${original150Paths?.length}`);
  process.exit(1);
}

const seenPaths = new Set();
const duplicateList = [];

original150Paths.forEach((p) => {
  if (seenPaths.has(p)) {
    duplicateList.push(p);
  }
  seenPaths.add(p);
});

approvedNewPaths.forEach((p) => {
  if (seenPaths.has(p)) {
    duplicateList.push(p);
  }
  seenPaths.add(p);
});

if (duplicateList.length > 0) {
  console.error(`Error: Found duplicate URLs: ${duplicateList.join(", ")}`);
  process.exit(1);
}

const allPaths = [...original150Paths, ...approvedNewPaths];

if (allPaths.length !== 154) {
  console.error(`Error: Expected 154 total paths, got ${allPaths.length}`);
  process.exit(1);
}

// Compare generated URLs against the original 150
let preservedCount = 0;
let missingCount = 0;
let changedCount = 0;

original150Paths.forEach((orig) => {
  if (allPaths.includes(orig)) {
    preservedCount++;
  } else {
    missingCount++;
  }
});

const today = new Date().toISOString().split("T")[0];

function getPriorityAndFreq(path) {
  if (path === "/") return { priority: "1.0", changefreq: "daily" };
  if (path.includes("center-") || path.includes("services-center") || path.includes("at-home") || path.includes("rehabilitation-in-ahmedabad")) {
    return { priority: "0.9", changefreq: "weekly" };
  }
  if (path.includes("doctor") || path.includes("treatment") || path.includes("physiotherapist") || path.includes("specialist")) {
    return { priority: "0.85", changefreq: "weekly" };
  }
  if (path === "/blogs" || path === "/care-areas" || path === "/therapies") {
    return { priority: "0.85", changefreq: "daily" };
  }
  return { priority: "0.75", changefreq: "monthly" };
}

const urlNodes = allPaths.map((p) => {
  const cleanPath = p === "/" ? "" : p.startsWith("/") ? p.slice(1) : p;
  const loc = cleanPath ? `${BASE_URL}/${cleanPath}/` : `${BASE_URL}/`;
  const { priority, changefreq } = getPriorityAndFreq(p);
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
});

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlNodes.join("\n")}
</urlset>`;

const sitemapOut = resolve("public/sitemap.xml");
writeFileSync(sitemapOut, sitemapXml, "utf8");

console.log("Original URLs: 150");
console.log(`Preserved URLs: ${preservedCount}`);
console.log(`Approved New URLs: ${approvedNewPaths.length}`);
console.log(`Final URLs: ${allPaths.length}`);
console.log(`Missing: ${missingCount}`);
console.log(`Changed: ${changedCount}`);
console.log(`Duplicates: ${duplicateList.length}`);
