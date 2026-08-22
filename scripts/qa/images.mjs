// Image-regression check: crawls every route's server-rendered HTML, collects
// each <img>/og:image/twitter:image URL, and verifies it actually resolves.
// Also flags images that ship without alt text. No browser required, so this
// runs on every build in a few seconds.
import { allPaths, BASE } from "./paths.mjs";

const IMG_TAG = /<img\b[^>]*>/gi;
const ATTR = (tag, name) => tag.match(new RegExp(`${name}="([^"]*)"`, "i"))?.[1];
const META_IMG = /<meta[^>]+(?:property|name)="(?:og:image|twitter:image)"[^>]*>/gi;

const cache = new Map();

async function resolves(url) {
  if (cache.has(url)) return cache.get(url);
  const cleanUrl = url.replace(/^https?:\/\/completecare\.in/, "");
  const absolute = cleanUrl.startsWith("http") ? cleanUrl : `${BASE}${cleanUrl.startsWith("/") ? "" : "/"}${cleanUrl}`;
  let ok = false;
  try {
    let res = await fetch(absolute, { method: "HEAD", redirect: "follow" });
    if (res.status === 405 || res.status === 501) {
      res = await fetch(absolute, { method: "GET", redirect: "follow" });
    }
    ok = res.ok;
  } catch {
    ok = false;
  }
  cache.set(url, ok);
  return ok;
}

const paths = allPaths();
const broken = [];
const missingAlt = [];
let checked = 0;

for (const path of paths) {
  const res = await fetch(`${BASE}${path}`);
  if (!res.ok) {
    broken.push({ path, src: "(page)", reason: `page returned ${res.status}` });
    continue;
  }
  const html = await res.text();

  for (const tag of html.match(IMG_TAG) ?? []) {
    const src = ATTR(tag, "src");
    if (!src || src.startsWith("data:")) continue;
    checked++;
    if (!(await resolves(src))) broken.push({ path, src, reason: "image did not resolve" });
    const alt = ATTR(tag, "alt");
    if (alt === undefined) missingAlt.push({ path, src });
  }

  for (const tag of html.match(META_IMG) ?? []) {
    const src = ATTR(tag, "content");
    if (!src) continue;
    checked++;
    if (!(await resolves(src))) broken.push({ path, src, reason: "social image did not resolve" });
  }
}

console.log(`Image check — ${paths.length} routes, ${checked} image references`);
if (missingAlt.length) {
  console.log(`\nMissing alt attribute (${missingAlt.length}):`);
  for (const m of missingAlt.slice(0, 20)) console.log(`  ${m.path} → ${m.src}`);
}
if (broken.length) {
  console.log(`\nBROKEN (${broken.length}):`);
  for (const b of broken) console.log(`  ${b.path} → ${b.src} (${b.reason})`);
  process.exit(1);
}
console.log(missingAlt.length ? "\nNo broken images (alt gaps above)." : "\nNo broken images, no alt gaps.");
if (missingAlt.length) process.exit(1);
