import { readFileSync, writeFileSync, existsSync } from "node:fs";

const BASE_LIVE = "https://completecare.in";
const BASE_LOCAL = "http://localhost:8080";

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function extractMetadata(html) {
  const title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim() ?? "";
  const metaDesc = html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i)?.[1]?.trim() ??
                   html.match(/<meta[^>]+content="([^"]*)"[^>]+name="description"/i)?.[1]?.trim() ?? "";
  const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i)?.[1]?.trim() ?? "";
  const ogTitle = html.match(/<meta[^>]+property="og:title"[^>]+content="([^"]*)"/i)?.[1]?.trim() ?? "";
  const ogDesc = html.match(/<meta[^>]+property="og:description"[^>]+content="([^"]*)"/i)?.[1]?.trim() ?? "";
  const ogImage = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]*)"/i)?.[1]?.trim() ?? "";
  
  // Headings
  const h1Matches = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => stripHtml(m[1]));
  const h2Matches = [...html.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => stripHtml(m[1])).filter(Boolean);
  const h3Matches = [...html.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => stripHtml(m[1])).filter(Boolean);

  // Paragraphs
  const paragraphs = [...html.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map(m => stripHtml(m[1])).filter(p => p.length > 20);

  // Lists
  const listItems = [...html.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)].map(m => stripHtml(m[1])).filter(Boolean);

  // Images
  const imgTags = [...html.matchAll(/<img\b([^>]+)>/gi)].map(m => {
    const src = m[1].match(/src="([^"]*)"/i)?.[1] ?? "";
    const alt = m[1].match(/alt="([^"]*)"/i)?.[1] ?? "";
    return { src, alt };
  }).filter(img => img.src && !img.src.startsWith("data:"));

  // Links
  const internalLinks = [...html.matchAll(/href="(\/[^"#?]*|https:\/\/completecare\.in\/[^"#?]*)"/gi)]
    .map(m => m[1].replace("https://completecare.in", ""))
    .filter(l => !l.startsWith("/_build") && !l.startsWith("/@") && !/\.(css|js|webp|png|jpg|svg)$/i.test(l));

  // Forms
  const hasForm = html.includes("<form") || html.includes("Book an Appointment") || html.includes("AppointmentForm");

  // Schema
  const schemas = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map(m => {
    try {
      return JSON.parse(m[1]);
    } catch {
      return null;
    }
  }).filter(Boolean);

  return {
    title,
    metaDesc,
    canonical,
    ogTitle,
    ogDesc,
    ogImage,
    h1s: h1Matches,
    h1: h1Matches[0] ?? "",
    h2s: h2Matches,
    h3s: h3Matches,
    paragraphCount: paragraphs.length,
    totalTextLength: paragraphs.join(" ").length,
    listItemsCount: listItems.length,
    images: imgTags,
    internalLinksCount: [...new Set(internalLinks)].length,
    hasForm,
    schemasCount: schemas.length,
  };
}

async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        },
        signal: AbortSignal.timeout(15000)
      });
      return { status: res.status, ok: res.ok, html: await res.text() };
    } catch (err) {
      if (i === retries - 1) return { status: 0, ok: false, error: err.message, html: "" };
      await new Promise(r => setTimeout(r, 1000));
    }
  }
}

async function main() {
  const inventory = JSON.parse(readFileSync("reports/sitemap-inventory.json", "utf8"));
  const paths = inventory.sourcePaths;
  console.log(`Starting deep parity audit for ${paths.length} routes...`);

  const results = [];
  let completed = 0;

  // Process in batches of 5 to not hammer completecare.in
  for (let i = 0; i < paths.length; i += 5) {
    const batch = paths.slice(i, i + 5);
    const batchPromises = batch.map(async (path) => {
      const liveUrl = `${BASE_LIVE}${path}`;
      const localUrl = `${BASE_LOCAL}${path}`;

      const [liveRes, localRes] = await Promise.all([
        fetchWithRetry(liveUrl),
        fetchWithRetry(localUrl),
      ]);

      const liveMeta = liveRes.ok ? extractMetadata(liveRes.html) : null;
      const localMeta = localRes.ok ? extractMetadata(localRes.html) : null;

      // Evaluation
      let status = "PASS";
      const issues = [];

      if (!localRes.ok) {
        status = "MISSING";
        issues.push(`Local page returned ${localRes.status}`);
      } else if (localMeta) {
        if (!localMeta.h1) {
          status = "PARTIAL";
          issues.push("Missing H1 heading");
        }
        if (localMeta.h1s.length > 1) {
          issues.push(`Multiple H1s found (${localMeta.h1s.length})`);
        }
        if (!localMeta.title) {
          status = "PARTIAL";
          issues.push("Missing <title>");
        }
        if (!localMeta.metaDesc) {
          issues.push("Missing meta description");
        }
        if (localMeta.paragraphCount === 0 && localMeta.listItemsCount === 0) {
          status = "PARTIAL";
          issues.push("Thin content (0 paragraphs / lists)");
        }
        if (localMeta.images.length === 0) {
          issues.push("No images rendered");
        }
      }

      completed++;
      if (completed % 25 === 0 || completed === paths.length) {
        console.log(`Audited ${completed}/${paths.length} routes...`);
      }

      return {
        path,
        liveStatus: liveRes.status,
        localStatus: localRes.status,
        liveMeta,
        localMeta,
        status,
        issues,
      };
    });

    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);
  }

  writeFileSync("reports/deep-parity-results.json", JSON.stringify(results, null, 2));
  console.log("Deep parity audit completed. Results saved to reports/deep-parity-results.json");

  // Summary calculation
  const passCount = results.filter(r => r.status === "PASS").length;
  const partialCount = results.filter(r => r.status === "PARTIAL").length;
  const missingCount = results.filter(r => r.status === "MISSING").length;

  console.log("\n=== AUDIT SUMMARY ===");
  console.log(`Total Routes: ${results.length}`);
  console.log(`PASS: ${passCount}`);
  console.log(`PARTIAL: ${partialCount}`);
  console.log(`MISSING: ${missingCount}`);
}

main().catch(console.error);
