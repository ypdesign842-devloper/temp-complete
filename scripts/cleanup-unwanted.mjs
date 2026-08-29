import { existsSync, rmSync, statSync } from "fs";
import { resolve } from "path";

// Exact confirmed list of unwanted / temporary files for production cleanup
const UNWANTED_TARGETS = [
  // 1. Temporary audit & migration scripts
  "scripts/read-lh-prod.mjs",
  "scripts/read-lh.mjs",
  "scripts/serve-prod.mjs",
  "scripts/check_final_hygiene.js",
  "scripts/apply_pricing.js",
  "scripts/package-deploy.mjs",

  // 2. Heavy historical reports & raw audit JSON dumps
  "reports/lighthouse-mobile-audit.json",
  "reports/lighthouse-prod-mobile.json",
  "reports/deep-parity-results.json",
  "reports/complete-care-final-source-parity-report.md",
  "reports/wordpress-react-parity-report.md",
  "reports/final-premium-ui-ux-qa.md",

  // 3. Duplicate sitemap split files
  "public/page-sitemap.xml",
  "public/post-sitemap.xml",

  // 4. Local deployment archive & build folder
  "cpanel_deploy.zip",
  "dist_cpanel",
];

const isDryRun = !process.argv.includes("--execute");

console.log("=================================================");
console.log("🧹 COMPLETE CARE PRODUCTION CLEANUP PLAN");
console.log("=================================================");
console.log(isDryRun ? "MODE: PREVIEW / AUDIT (Run with --execute to delete)" : "MODE: EXECUTE DELETION");
console.log("-------------------------------------------------");

let totalFoundBytes = 0;
let foundCount = 0;
let missingCount = 0;

UNWANTED_TARGETS.forEach((targetRelPath, idx) => {
  const fullPath = resolve(targetRelPath);
  const exists = existsSync(fullPath);

  if (exists) {
    foundCount++;
    try {
      const stats = statSync(fullPath);
      const isDir = stats.isDirectory();
      const sizeStr = isDir ? "[Directory]" : `${(stats.size / 1024).toFixed(1)} KB`;
      if (!isDir) totalFoundBytes += stats.size;

      console.log(`[${idx + 1}/${UNWANTED_TARGETS.length}] ✅ FOUND: ${targetRelPath} (${sizeStr})`);

      if (!isDryRun) {
        rmSync(fullPath, { recursive: true, force: true });
        console.log(`   └─ DELETED: ${targetRelPath}`);
      }
    } catch (e) {
      console.log(`[${idx + 1}/${UNWANTED_TARGETS.length}] ⚠️ ERROR reading: ${targetRelPath} (${e.message})`);
    }
  } else {
    missingCount++;
    console.log(`[${idx + 1}/${UNWANTED_TARGETS.length}] ⚪ ALREADY REMOVED: ${targetRelPath}`);
  }
});

console.log("-------------------------------------------------");
console.log(`Summary: ${foundCount} found to delete, ${missingCount} already removed.`);
console.log(`Total reclaimable space: ~${(totalFoundBytes / (1024 * 1024)).toFixed(2)} MB`);
console.log("-------------------------------------------------");

if (isDryRun) {
  console.log("👉 To delete these files, run: node scripts/cleanup-unwanted.mjs --execute");
} else {
  console.log("🎉 Cleanup successfully completed! All unwanted files removed.");
}
console.log("=================================================");
