import { existsSync, mkdirSync, cpSync, writeFileSync, readFileSync, readdirSync } from "fs";
import { resolve } from "path";

const BASE_LOCAL = "http://localhost:8080";
const deployDir = resolve("dist_cpanel");

if (!existsSync(deployDir)) {
  mkdirSync(deployDir, { recursive: true });
}

// 1. Find the compiled production CSS in .output/public/assets
const outputAssetsDir = resolve(".output/public/assets");
const assetFiles = readdirSync(outputAssetsDir);
const prodCssFile = assetFiles.find((f) => f.startsWith("styles-") && f.endsWith(".css"));

console.log(`Found Production CSS: /assets/${prodCssFile}`);

// 2. Load 150 original paths + 4 approved new paths
const inventoryPath = resolve("reports/sitemap-inventory.json");
const inventory = JSON.parse(readFileSync(inventoryPath, "utf8"));

const allPaths = [
  ...inventory.sourcePaths,
  "/post-surgical-rehabilitation-in-ahmedabad",
  "/care-areas",
  "/therapies",
  "/certifications",
];

console.log(`Starting static prerender for ${allPaths.length} routes from ${BASE_LOCAL}...`);

async function prerenderAll() {
  let successCount = 0;
  let failCount = 0;

  for (const path of allPaths) {
    const cleanSlug = path === "/" ? "" : path.startsWith("/") ? path.slice(1) : path;
    const url = cleanSlug ? `${BASE_LOCAL}/${cleanSlug}` : `${BASE_LOCAL}/`;

    try {
      const res = await fetch(url, { headers: { "User-Agent": "PrerenderEngine/1.0" } });
      if (!res.ok) {
        console.error(`Failed ${url}: HTTP ${res.status}`);
        failCount++;
        continue;
      }

      let html = await res.text();

      // Replace dev stylesheet links with production compiled stylesheet
      html = html.replace(/<link[^>]+href="\/@tanstack-start\/styles\.css[^"]*"[^>]*>/g, `<link rel="stylesheet" href="/assets/${prodCssFile}">`);
      
      // Ensure production CSS is in head
      if (!html.includes(`/assets/${prodCssFile}`)) {
        html = html.replace("</head>", `  <link rel="stylesheet" href="/assets/${prodCssFile}">\n</head>`);
      }

      // Remove dev scripts and SSR hydration scripts that cause blank screen on static hosts
      html = html.replace(/<script[^>]+src="\/@id\/virtual:[^"]*"[^>]*><\/script>/g, "");
      html = html.replace(/<script[^>]+src="\/@vite\/client"[^>]*><\/script>/g, "");
      html = html.replace(/<script class="\$tsr" id="\$tsr-stream-barrier">[\s\S]*?<\/script>/g, "");

      // Add our standalone client script for interactive elements (modals, accordions, mobile menu)
      if (!html.includes("/assets/cc-client.js")) {
        html = html.replace("</body>", `  <script src="/assets/cc-client.js" defer></script>\n</body>`);
      }

      if (!cleanSlug) {
        // Root index.html
        writeFileSync(resolve(deployDir, "index.html"), html, "utf8");
      } else {
        const routeDir = resolve(deployDir, cleanSlug);
        if (!existsSync(routeDir)) {
          mkdirSync(routeDir, { recursive: true });
        }
        writeFileSync(resolve(routeDir, "index.html"), html, "utf8");
      }

      successCount++;
      if (successCount % 25 === 0 || successCount === allPaths.length) {
        console.log(`Prerendered ${successCount}/${allPaths.length} pages...`);
      }
    } catch (err) {
      console.error(`Error prerendering ${url}:`, err.message);
      failCount++;
    }
  }

  // Copy assets, sitemap, robots, and public directory
  if (existsSync(resolve(".output/public"))) {
    cpSync(resolve(".output/public"), deployDir, { recursive: true });
  }
  if (existsSync(resolve("public/assets"))) {
    cpSync(resolve("public/assets"), resolve(deployDir, "assets"), { recursive: true });
  }
  if (existsSync(resolve("public/sitemap.xml"))) {
    cpSync(resolve("public/sitemap.xml"), resolve(deployDir, "sitemap.xml"));
  }
  if (existsSync(resolve("public/robots.txt"))) {
    cpSync(resolve("public/robots.txt"), resolve(deployDir, "robots.txt"));
  }
  if (existsSync(resolve("public/favicon.png"))) {
    cpSync(resolve("public/favicon.png"), resolve(deployDir, "favicon.png"));
  }

  // Copy cc-client.js directly to dist_cpanel/assets/
  if (existsSync(resolve("public/assets/cc-client.js"))) {
    cpSync(resolve("public/assets/cc-client.js"), resolve(deployDir, "assets/cc-client.js"));
  }

  // Create Production .htaccess
  const htaccessContent = `# Complete Care Production Apache Configuration
RewriteEngine On
RewriteBase /

# 1. Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# 2. Allow direct file and directory access
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# 3. Direct HTML file fallback for clean URLs
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

# 4. Fallback directory index
RewriteCond %{REQUEST_FILENAME}/index.html -f
RewriteRule ^(.*)$ $1/index.html [L]

# 5. Gzip / Deflate Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json image/svg+xml
</IfModule>

# 6. Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
`;

  writeFileSync(resolve(deployDir, ".htaccess"), htaccessContent, "utf8");

  console.log(`Prerender complete! Successfully generated ${successCount} pages (${failCount} failures).`);
}

prerenderAll();
