# Complete Care — Discovery Report (no code written yet)

Sources of truth: your two sitemaps (71 page URLs + 79 post URLs = **150 URLs**) and live inspection of `/`, `/our-team/`, `/best-physiotherapy-center-thaltej-ahmedabad/`, `/neck-pain-treatment-doctor-in-ahmedabad/`, plus the homepage screenshot. Every slug below is preserved exactly, including the trailing slash.

## 1. URL inventory + page-type classification

**A. Core / global (5)**
`/` (homepage), `/video/`, `/blogs/`, `/media/`, `/our-team/`

**B. Location pages (6)** — identical template
`/best-physiotherapy-center-thaltej-ahmedabad/`, `-gota-ahmedabad/`, `-bopal-ahmedabad/`, `-nikol-ahmedabad/`, `-mehsana/`, `-ankleshwar/`

**C. Pillar / hub pages (7)**
`/best-physiotherapist-in-ahmedabad/`, `/best-physiotherapy-clinic-in-ahmedabad/`, `/top-physiotherapy-services-center-in-ahmedabad/`, `/chiropractic-treatment-in-ahmedabad/`, `/advanced-physical-therapy-in-ahmedabad/`, `/physiotherapy-at-home-in-ahmedabad/`, `/best-neuro-spine-rehabilitation-centre-in-ahmedabad/`

**D. Condition pages — ortho/pain (13)**
neck-pain, back-pain, knee-pain, shoulder-pain, frozen-shoulder, sciatica-pain, ankle-pain, tennis-elbow, rheumatoid-arthritis, vertigo, osteoporosis, sports-physiotherapist, slipped-herniated-disc (exact existing slugs retained)

**E. Condition pages — neuro (8)**
spinal-cord-specialist, stroke-in-treatment, parkinson-disease, muscular-dystrophy, multiple-sclerosis, cerebral-palsy, bells-palsy, diabetic-neuropathy

**F. Modality / treatment pages (20)** — one shared template
class-iv-laser, pemf, ift, tens, short-wave-diathermy, electrical-stimulation, ultra-sound, infra-radiation, traction, pneumatic-compression, paraffin-wax-bath, osteopathy, dry-needling, manual-therapy, kinesio-tape, instrumented-soft-tissue-mobilization, cupping, tecar, spine-decompression, best-electro-therapy

**G. Fitness pages (12)**
aerobics, step-aerobics, hiit, strength-training, zumba, pilates, power-yoga, ball-band-training, stretching, online-fitness-classes, top-fitness-centre-courses, female-fitness-trainer

**H. Blog articles (79)** — single article template; all 79 post slugs preserved verbatim (e.g. `/how-physiotherapy-helps-in-stroke-recovery/`, `/frozen-shoulder-physio-stages-treatment/`).

Inspection unavailable so far (fetched only via sitemap, not opened): `/video/`, `/media/`, `/blogs/` — I will open these before building the gallery/media templates.

## 2. Reusable template architecture (5 templates cover all 150 URLs)

| Template | Pages | Structure observed today |
|---|---|---|
| Home | 1 | hero → stats counters → 4 service cards → home-visit CTA → 6 trust points → 6 condition cards → chiropractic band → 3 tech cards → testimonials → FAQ → latest blogs |
| Location | 6 | hero + inline appointment form → clinic intro → clinic photo pair → home-visit area list → conditions grid → chiropractic/Dr. Hardik band → branch gallery → testimonials |
| Service/Modality/Fitness | 39 | H1 + banner image → intro → types/benefits list → technique sections → internal links → CTA |
| Condition | 21 | same as service, plus symptoms/types list and "when to see a physio" |
| Article | 79 | title, hero image, date, body, related articles |
| Team / Gallery / Media | 3 | branch-grouped staff cards (24 members across 5 branches); video + press embeds |

Content is data-driven: one typed content record per URL, rendered by the matching template — no per-page UI duplication.

## 3. Existing design analysis

- **Logo**: "Complete Care" wordmark, blue + green human figure, tagline "Physiotherapy • Fitness • Rehabilitation". Preserve.
- **Palette**: navy utility bar (#0d2c4b-ish), medical blue, lime/leaf green accent, white sections. Green is used for both nav and buttons, so hierarchy is flat.
- **Type**: condensed slab-ish display headings, default sans body. Inconsistent sizing between pages.
- **Header**: two-tier (phone/email/socials bar + logo & nav: Home, About Us, Conditions We Treat, Services, Chiropractic Treatment, Blogs, Home Visit, Gallery) + floating WhatsApp button.
- **Hero**: full-bleed stock sunset photo with text over the middle — low contrast, weak trust signal.
- **Patterns**: Elementor cards with heavy shadows, mixed icon sets, a stray calendar widget leaking into the footer on several pages, WhatsApp/tel links used instead of a real booking form on most pages, reCAPTCHA-only form on location pages.
- **Personality today**: capable and busy, but visually "WordPress clinic template", not premium.

## 4. Proposed premium direction (evolution, not reinvention)

Deep clinical navy as the base brand colour, Complete Care green kept as a single decisive accent for actions only, warm off-white sections for reading comfort, one restrained teal for data/stat highlights. Editorial serif-adjacent display face for headings + highly legible humanist sans for body. Flat cards with hairline borders instead of drop shadows, generous 96–128px section rhythm, real clinic photography over stock, credential-forward hero (Dr. Hardik Patel, 16+ yrs, 40+ therapists, 85,000+ patients, 6 clinics), sticky single-line header with one primary "Book Consultation" action, and a persistent mobile call/WhatsApp bar. No gradients, glass, neon, or 3D.

## 5. Image / asset requirements

- **Preserve**: logo, Dr. Hardik Patel portraits, 24 team photos, the 6 branches' clinic interior photos, equipment photos (PEMF, decompression, Class IV laser, spine diagram), all blog featured images — reused from their existing URLs via asset pointers.
- **Replace**: homepage sunset stock hero, generic condition banners (e.g. `Neck-Pain.webp`), any low-res JPG team shots (`IMG_5476.JPG`) — need consistent portrait crops.
- **Improve**: re-crop clinic photos to a uniform 3:2, normalise team portraits to one background.
- **Video opportunities**: homepage 30–45s clinic tour, "how spine decompression works" explainer on the decompression/PEMF pages, Dr. Hardik Patel credibility interview on the chiropractic hub, patient recovery testimonials, existing `/video/` and `/media/` content curated into a proper gallery.

## 6. React component architecture

Layout: `SiteHeader`, `MegaNav`, `MobileNav`, `StickyContactBar`, `SiteFooter`, `Breadcrumbs`.
Blocks: `Hero`, `PageHero`, `StatStrip`, `ServiceCard`, `ConditionCard`, `ModalityCard`, `BlogCard`, `DoctorCard`, `LocationCard`, `TestimonialSlider`, `FaqAccordion`, `CtaBand`, `AppointmentForm`, `ClinicMap`, `Gallery`, `RelatedLinks`, `ProseBody`.
Templates: `HomeTemplate`, `LocationTemplate`, `ServiceTemplate`, `ConditionTemplate`, `ArticleTemplate`, `TeamTemplate`, `GalleryTemplate`.
Data: typed content modules (`services.ts`, `conditions.ts`, `modalities.ts`, `fitness.ts`, `locations.ts`, `team.ts`, `posts/*`) keyed by exact slug.

## 7. Route architecture (URL preservation)

TanStack Start file routes, one flat file per existing slug so each URL keeps its own SSR head metadata — e.g. `src/routes/chiropractic-treatment-in-ahmedabad.tsx` → `/chiropractic-treatment-in-ahmedabad`. Trailing slashes normalised at router level so `/slug/` and `/slug` both resolve. No slug renamed, no page dropped, no new page invented in this phase.

## 8. Recommended build order

1. Design tokens, typography, header/footer, home page
2. Shared templates + data layer
3. 6 location pages
4. 7 pillar hubs
5. 21 condition pages
6. 20 modality + 12 fitness pages
7. Team, gallery, media, video
8. Blog index + 79 articles
9. Metadata pass, internal-link pass, responsive/QA pass

## 9. Content staging (kept separate, as you asked)

1. **Preserve as-is**: clinic facts, addresses, phone `+91 8980 676 676`, doctor names/credentials, service lists, FAQs, blog bodies.
2. **Rewrite later**: thin condition/modality intros, duplicated boilerplate across the 6 location pages, testimonial text.
3. **Modernise (UI only)**: hero, cards, forms, spacing, nav, footer, gallery.
4. **Untouched**: all 150 slugs, internal link targets, image filenames.
5. **Recommend later (not now)**: proper booking flow, per-clinic contact pages, condition→modality cross-links, review schema.

Approve this and I'll open `/video/`, `/media/`, `/blogs/` and begin Step 1 of the build order.
