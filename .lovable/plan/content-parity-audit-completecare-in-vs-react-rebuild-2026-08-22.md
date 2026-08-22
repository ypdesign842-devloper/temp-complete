# Content Parity Audit — completecare.in vs React rebuild

Audit only. No files were changed. Method: all 150 sitemap URLs were rendered from the new site and parsed (title, H1–H3, paragraphs, images, forms, internal links). Ten representative originals were fetched and compared line-by-line: `/`, `/our-team`, `/blogs`, `/media`, `/video`, `/best-physiotherapy-clinic-in-ahmedabad`, `/best-physiotherapy-center-thaltej-ahmedabad`, `/back-pain-doctor-in-ahmedabad`, `/best-cupping-therapy-in-ahmedabad`, `/zumba-classes-in-ahmedabad`, `/top-physiotherapist-in-ahmedabad`, `/physiotherapy-for-parkinsons-disease`.

## Headline result

URL parity is complete; content parity is not. Across every sampled page, **zero original paragraphs survive verbatim** — the rebuild carries newly written copy on the same slugs. Original heading structures are also largely gone (e.g. cupping 0/7 original headings retained, clinic page 0/24, Parkinson's article 0/22).

Word-count comparison (original vs new):

```text
/                                        2015  ->  939
/best-physiotherapy-clinic-in-ahmedabad   884  ->  351
/top-physiotherapist-in-ahmedabad         696  ->  394
/physiotherapy-for-parkinsons-disease    1243  ->  394
/best-cupping-therapy-in-ahmedabad        438  ->  255
/back-pain-doctor-in-ahmedabad            427  ->  393
/zumba-classes-in-ahmedabad               306  ->  243
/blogs (index listing)                   3707  ->  942
```

## 1. Fully preserved

- All 150 sitemap pathnames resolve (verified earlier: 150/150 HTTP 200, one H1 each).
- Team photos: 23/23 original staff images reused on `/our-team`, grouped by the same five branches.
- Blog index: all 79 post slugs, titles, dates and original featured-image URLs preserved.
- Contact identity: phone `+91 8980 676 676`, WhatsApp `wa.me/918980676676`, `info@completecare.in`, director Dr. Hardik Patel (PT).
- Location set: the same six centres (Thaltej, Gota, South Bopal, Nikol, Mehsana, Ankleshwar) with matching area lists.
- Internal linking density is higher than the original (nav, related content, footer), and no original slug is orphaned.

## 2. Partially preserved

- **Every condition / treatment / fitness page (~60).** Topic, intent and slug match; the body is a rewrite with new H2s and a fixed 3-section shape. Original page-specific structures are dropped — e.g. `/best-cupping-therapy-in-ahmedabad` loses its Q&A block ("Is cupping safe?", "Is cupping painful?", "Does cupping remove toxins?"); `/back-pain-doctor-in-ahmedabad` loses "Causes of back pain", "Back Pain Symptoms", "Physical Therapy for Back Pain".
- **`/best-physiotherapy-clinic-in-ahmedabad`.** Mission and Vision text, the founding-year 2014 line, Dr. Foram Patel, and the 16-card service grid (Class IV Laser, PEMF, IFT, TENS, SWD, Electrical Stimulation, Ultrasound, Infra Radiation, Traction, Pneumatic Compression, PWB, Cupping, Chiropractor, Osteopathy, Dry Needling, Manual Therapy) are all absent as on-page content.
- **`/our-team`.** All faces present, but qualifications are normalised away: "Dr. Nirali Rathod ( PT & Fitness Trainer)", "Dr.Sunita Mor GSCPT - 11647", "Dr. Kinjal modi GSCPT - 17111" lose their registration numbers/credential strings; several Nikol names are re-cased.
- **`/media`.** New page shows 30 clinic images but no branch filter (All / Gota / Thaltej / South Bopal / Mehsana / Ankleshwar) as on the original.
- **Home page.** Same intent and section themes; all copy rewritten, hero body paragraphs, "Why 85,000+ Patients Trust Complete Care" wording and the six condition cards' original descriptions are not carried over.

## 3. Missing

- **All 79 blog article bodies.** `src/data/posts.ts` stores only slug/title/date/image; there is no body field. Original articles run 800–1,400 words with 15–22 headings.
- **`/video`.** The original embeds 11 YouTube videos with titles; the new page has 0 embeds and one "Watch on YouTube" link.
- **Testimonials.** Present on the original location pages ("Testimonials — What they say about us"); no testimonial component exists in the rebuild.
- **Per-page Quick Links and Contact Details sidebars** used on treatment pages.
- **Location-page detail:** the original Thaltej page's "Physiotherapy Home Visit in Thaltej" section, "Get Back to Your Life" / "Excellent Quality of Life" blocks, and the chiropractic explainer with Dr. Hardik Patel's 65,000-patient credential are not reproduced.
- **Full contact form fields.** Original form: Name, Email, Mobile No., Choose Date, Select Service (8 options), Message, reCAPTCHA, server submit. New form: Name, WhatsApp number, free-text concern — opens WhatsApp; no email capture, no date, no service selector, no submission record.
- 84 pages (all 79 posts plus `/blogs`, `/media`, `/video`, `/our-team`, `/top-physiotherapist-in-ahmedabad`) have no appointment form at all.

## 4. Incorrect / unverified against source

- **Home statistics conflict.** The original counters read 24+ licensed physiotherapists, 52,939+ successful recoveries, 9+ years, 3 centres, while its own body copy says 40+ therapists, 16+ years, 6 clinics. The rebuild publishes 16+ / 40+ / 85,000+ / 6 — matching the prose, contradicting the counters. Needs a decision from the clinic on the true figures.
- **Clinic timings "Mon–Sat, 9:00 am – 8:00 pm"** appear on all six new location pages. No opening hours were found on the original pages — currently unsourced.
- **Social profile URLs** in `src/data/site.ts` (facebook.com/completecarephysiotherapy, instagram.com/completecarephysio, youtube.com/@completecarephysiotherapy) could not be matched to links on the original home page; the original channel appearing in the video embeds is `youtube.com/channel/UCGNeyg8AcQZcLD0DN7ucgow`.
- **"Reviewed by Dr. Hardik Patel (PT)"** is stamped on all 79 articles; the original posts do not carry a reviewer byline.
- **Per-centre "Reception +91 8980 676 676"** presents the single central number as a branch line.
- Location pages list a fixed 12-treatment availability block for every centre, which is uniform rather than sourced per branch.

## 5. Placeholder content

- **`ArticleTemplate` ships one identical generic body on all 79 blog URLs** — "Why it matters", "How Complete Care approaches it", "When to see a physiotherapist" — i.e. ~79 pages of duplicate boilerplate under unique titles. This is the single largest parity and SEO risk (duplicate content on every indexed post URL).
- `/media` and `/video` are the thinnest pages in the build (209 and 211 words) and function as stubs.
- No lorem ipsum or dummy image services anywhere; placeholders are prose-shaped, which makes them harder to spot in review.

## 6. Images and assets

- **52 of 150 pages render no image at all**, including major service and condition pages: `/back-pain-doctor-in-ahmedabad`, `/knee-pain-treatment-in-ahmedabad`, `/frozen-shoulder-treatment-doctor-in-ahmedabad`, `/bells-palsy-treatment-in-ahmedabad`, `/cerebral-palsy-treatment-in-ahmedabad`, `/best-cupping-therapy-in-ahmedabad`, `/best-electro-therapy-in-ahmedabad`, `/best-ift-treatment-center-in-ahmedabad`, `/effective-tens-treatment-in-ahmedabad-for-pain-relief`, `/manual-therapy-near-me-in-ahmedabad`, `/leading-osteopathy-treatment-in-ahmedabad`, `/best-neuro-spine-rehabilitation-centre-in-ahmedabad`, `/zumba-classes-in-ahmedabad`, `/best-aerobics-classes-in-ahmedabad`, `/hiit-training-workouts-in-ahmedabad` and 37 more. Each of these has an existing hero image on the live site (e.g. `2024/09/Cupping-Therapy-1.webp`).
- **All six location pages reuse the same five Thaltej photos** (`clinicPhotos` in `src/data/locations.ts`), so Gota, South Bopal, Nikol, Mehsana and Ankleshwar show Thaltej interiors.
- Home page: 11 original images vs 7 new, only 1 original URL reused; `Spine.J02-1.webp`, `img02`, `doctor.webp` and `cc-home-page-image-2.webp` placements differ.
- Assets correctly reused: 23 team portraits, 79 blog featured images, 5 Thaltej clinic photos, `Dr-Hardik-Patel.webp`.
- All images are hot-linked from `completecare.in/wp-content/uploads/...`. They render today, but the rebuild has no local copies — if the WordPress host is retired, every image on the new site breaks. No asset has been downloaded into `src/assets` or storage.

## Severity summary

```text
Critical   79 blog bodies missing + identical placeholder text on all 79 URLs
Critical   All body copy rewritten (0 verbatim paragraphs on any sampled page)
Critical   52 pages with no imagery; images hot-linked from the old host
High       Contact form loses email/date/service/message capture and submissions
High       Conflicting/unsourced facts: stats, clinic hours, social URLs, reviewer byline
Medium     Location pages share Thaltej photos; per-branch content is uniform
Medium     Dropped sections: testimonials, quick links, mission/vision, service grid, video embeds, media filters
Low        Team credential strings and name casing normalised
```

## Suggested remediation order (not executed)

1. Migrate the 79 article bodies verbatim from WordPress, then remove the generic template body.
2. Restore original hero images for the 52 image-less pages and download all reused assets into the project.
3. Restore per-page original copy/headings for the ~60 condition, treatment and fitness pages, then layer the new design on top.
4. Confirm the disputed facts with the clinic (stats, hours, per-branch contact, socials).
5. Rebuild the full appointment form with real submission storage, plus testimonials, video embeds and media branch filters.
6. Re-run this audit page-by-page against the full 150 to confirm each item closes.
