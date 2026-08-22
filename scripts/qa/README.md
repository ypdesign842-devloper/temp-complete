# QA checks

Automated guards for future builds. Run against the dev server (default
`http://localhost:8080`, override with `QA_BASE_URL`).

| Command | What it catches | Browser needed |
| --- | --- | --- |
| `bun run qa:links` | Any of the 150 routes not returning 200, plus dead internal links after a slug change | no |
| `bun run qa:images` | Broken/missing image URLs (page images, CDN assets, og:image, twitter:image) and `<img>` without `alt` | no |
| `bun run qa:a11y` | WCAG 2.1 A/AA violations via axe-core, desktop + mobile | yes |
| `bun run qa:perf` | LCP / CLS / TTFB budget breaches and console errors on one route per template | yes |
| `bun run qa:bundle` | Route chunk, entry chunk and total client JS budgets (run after `bun run build`) | no |
| `bun run qa` | links → images → a11y → perf in sequence | yes (a11y/perf skip if absent) |

Budgets live in `scripts/qa/paths.mjs` (`budgets`): LCP 2500 ms, CLS 0.1,
TTFB 800 ms, route chunk 120 kB, entry chunk 400 kB, total client JS 2600 kB.

The route list is derived from `src/routeTree.gen.ts`, so new pages are covered
automatically — no list to maintain.

Browser-based checks need Chromium once:

```bash
bun add -d playwright && bunx playwright install chromium
```

Each script exits non-zero on failure, so they can be wired into CI as-is.
