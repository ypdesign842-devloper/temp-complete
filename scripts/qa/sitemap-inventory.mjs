import { readFileSync, writeFileSync } from "node:fs";

async function fetchSitemap(url) {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/xml,application/xml,text/html,*/*"
      }
    });
    if (!res.ok) {
      console.error(`Failed to fetch sitemap ${url}: ${res.status}`);
      return [];
    }
    const text = await res.text();
    const locs = [...text.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim());
    return locs;
  } catch (err) {
    console.error(`Error fetching ${url}:`, err.message);
    return [];
  }
}

function getReactRoutes() {
  const src = readFileSync(new URL("../../src/routeTree.gen.ts", import.meta.url), "utf8");
  const block = src.match(/interface FileRoutesByTo \{([\s\S]*?)\n\}/);
  if (!block) throw new Error("Could not read FileRoutesByTo");

  const paths = [...block[1].matchAll(/^\s*'([^']+)':/gm)]
    .map((m) => m[1])
    .filter((p) => !p.includes("$") && !p.includes("*"))
    .filter((p) => !p.startsWith("/api/") && !p.startsWith("/lovable"))
    .filter((p) => p !== "/not-found");

  return [...new Set(paths)].sort();
}

async function main() {
  console.log("Downloading sitemaps from completecare.in...");
  const pageUrls = await fetchSitemap("https://completecare.in/page-sitemap.xml");
  const postUrls = await fetchSitemap("https://completecare.in/post-sitemap.xml");

  console.log(`Found ${pageUrls.length} in page-sitemap.xml`);
  console.log(`Found ${postUrls.length} in post-sitemap.xml`);

  const allSourceUrls = [...new Set([...pageUrls, ...postUrls])];
  console.log(`Total unique source URLs: ${allSourceUrls.length}`);

  const sourcePaths = allSourceUrls.map(u => {
    try {
      const parsed = new URL(u);
      let path = parsed.pathname;
      if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
      return path || "/";
    } catch {
      return u;
    }
  });

  const reactRoutes = getReactRoutes();
  console.log(`Total React routes: ${reactRoutes.length}`);

  const sourceSet = new Set(sourcePaths);
  const reactSet = new Set(reactRoutes);
 
  const matched = sourcePaths.filter(p => reactSet.has(p));
  const missingFromReact = sourcePaths.filter(p => !reactSet.has(p));
  const extraReact = reactRoutes.filter(p => !sourceSet.has(p));

  const report = {
    sourceSitemapUrlCount: allSourceUrls.length,
    pageSitemapCount: pageUrls.length,
    postSitemapCount: postUrls.length,
    reactRouteCount: reactRoutes.length,
    matchedCount: matched.length,
    missingFromReact,
    extraReact,
    sourcePaths: sourcePaths.sort(),
    reactRoutes: reactRoutes.sort(),
  };

  writeFileSync("reports/sitemap-inventory.json", JSON.stringify(report, null, 2));
  console.log("\n=== SITEMAP INVENTORY SUMMARY ===");
  console.log(`SOURCE SITEMAP URL COUNT: ${allSourceUrls.length}`);
  console.log(`REACT ROUTE COUNT: ${reactRoutes.length}`);
  console.log(`MATCHED: ${matched.length}`);
  console.log(`MISSING FROM REACT (${missingFromReact.length}):`, missingFromReact);
  console.log(`EXTRA REACT ROUTES (${extraReact.length}):`, extraReact);
}

main().catch(console.error);
