import { existsSync, mkdirSync, cpSync, writeFileSync } from "fs";
import { resolve } from "path";

const deployDir = resolve("dist_cpanel");
if (!existsSync(deployDir)) {
  mkdirSync(deployDir, { recursive: true });
}

// 1. Copy .output/public files
if (existsSync(resolve(".output/public"))) {
  cpSync(resolve(".output/public"), deployDir, { recursive: true });
}

// 2. Copy public assets if any were missed
if (existsSync(resolve("public/assets"))) {
  cpSync(resolve("public/assets"), resolve(deployDir, "assets"), { recursive: true });
}

// 3. Copy sitemap and robots
if (existsSync(resolve("public/sitemap.xml"))) {
  cpSync(resolve("public/sitemap.xml"), resolve(deployDir, "sitemap.xml"));
}
if (existsSync(resolve("public/robots.txt"))) {
  cpSync(resolve("public/robots.txt"), resolve(deployDir, "robots.txt"));
}

// 4. Create Production .htaccess
const htaccessContent = `# Complete Care Production Apache Configuration
RewriteEngine On
RewriteBase /

# 1. Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# 2. Prevent Trailing Slash Duplicate Issues for Files
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# 3. Allow direct access to CMS API & Admin
RewriteRule ^api/(.*)$ api/$1 [L,QSA]
RewriteRule ^admin/?$ admin/index.html [L]

# 4. Gzip / Deflate Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json image/svg+xml
</IfModule>

# 5. Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
`;

writeFileSync(resolve(deployDir, ".htaccess"), htaccessContent, "utf8");

console.log("dist_cpanel prepared successfully!");
