import { useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/blocks/PageHero";
import { CtaBand } from "@/components/blocks/CtaBand";
import { AppointmentForm } from "@/components/blocks/AppointmentForm";
import { BlockContent } from "@/components/blocks/BlockContent";
import { LinkCard } from "@/components/blocks/Cards";
import { Testimonials } from "@/components/blocks/Testimonials";
import { contentBySlug } from "@/data";
import { site } from "@/data/site";
import type { ContentPage, PageContent } from "@/data/types";

const eyebrow: Record<ContentPage["group"], string> = {
  pillar: "About Complete Care",
  "condition-ortho": "Orthopaedic Care Pathway",
  "condition-neuro": "Spine & Neuro Rehabilitation",
  modality: "Advanced Clinical Modality",
  fitness: "Medical Fitness & Recovery",
};

function getEyebrowH1Keyword(slug: string, label?: string, defaultGroup?: ContentPage["group"]): string {
  const s = slug.toLowerCase();
  if (s.includes("neck-pain")) return "Neck Pain Physiotherapy Treatment in Ahmedabad";
  if (s.includes("back-pain")) return "Back Pain Physiotherapy Treatment in Ahmedabad";
  if (s.includes("knee-pain")) return "Knee Pain Physiotherapy Treatment in Ahmedabad";
  if (s.includes("shoulder-pain")) return "Shoulder Pain Physiotherapy Treatment in Ahmedabad";
  if (s.includes("frozen-shoulder")) return "Frozen Shoulder Physiotherapy Treatment in Ahmedabad";
  if (s.includes("slip-disc") || s.includes("slipped") || s.includes("herniated")) return "Slip Disc Physiotherapy Treatment in Ahmedabad";
  if (s.includes("sciatica")) return "Sciatica Pain Physiotherapy Treatment in Ahmedabad";
  if (s.includes("ankle-pain")) return "Ankle Pain Physiotherapy Treatment in Ahmedabad";
  if (s.includes("rheumatoid")) return "Rheumatoid Arthritis Physiotherapy Treatment in Ahmedabad";
  if (s.includes("sports-physio")) return "Sports Injury Physiotherapy Treatment in Ahmedabad";
  if (s.includes("tennis-elbow")) return "Tennis Elbow Physiotherapy Treatment in Ahmedabad";
  if (s.includes("vertigo")) return "Vertigo Physiotherapy Treatment in Ahmedabad";
  if (s.includes("osteoporosis")) return "Osteoporosis Physiotherapy Treatment in Ahmedabad";
  if (s.includes("post-surgical")) return "Post Surgical Physiotherapy Treatment in Ahmedabad";
  if (s.includes("spinal-cord")) return "Spinal Cord Injury Physiotherapy Treatment in Ahmedabad";
  if (s.includes("stroke")) return "Stroke Rehabilitation Physiotherapy Treatment in Ahmedabad";
  if (s.includes("parkinson")) return "Parkinson's Disease Physiotherapy Treatment in Ahmedabad";
  if (s.includes("muscular-dystrophy")) return "Muscular Dystrophy Physiotherapy Treatment in Ahmedabad";
  if (s.includes("multiple-sclerosis")) return "Multiple Sclerosis Physiotherapy Treatment in Ahmedabad";
  if (s.includes("cerebral-palsy")) return "Cerebral Palsy Physiotherapy Treatment in Ahmedabad";
  if (s.includes("bells-palsy")) return "Bell's Palsy Physiotherapy Treatment in Ahmedabad";
  if (s.includes("diabetic-neuropathy")) return "Diabetic Neuropathy Physiotherapy Treatment in Ahmedabad";
  if (s.includes("chiropractic")) return "Chiropractic Physiotherapy Treatment in Ahmedabad";
  if (s.includes("class-iv-laser") || s.includes("laser-therapy")) return "Class IV Laser Physiotherapy Treatment in Ahmedabad";
  if (s.includes("pemf")) return "PEMF Physiotherapy Treatment in Ahmedabad";
  if (s.includes("spine-decompression")) return "Spine Decompression Physiotherapy Treatment in Ahmedabad";
  if (s.includes("dry-needling")) return "Dry Needling Physiotherapy Treatment in Ahmedabad";
  if (s.includes("cupping")) return "Cupping Physiotherapy Treatment in Ahmedabad";
  if (s.includes("manual-therapy")) return "Manual Therapy Physiotherapy Treatment in Ahmedabad";
  if (s.includes("osteopathy")) return "Osteopathy Physiotherapy Treatment in Ahmedabad";
  if (s.includes("kinesio-tape")) return "Kinesio Taping Physiotherapy Treatment in Ahmedabad";
  if (s.includes("soft-tissue-mobilization") || s.includes("iastm")) return "IASTM Soft Tissue Physiotherapy Treatment in Ahmedabad";
  if (s.includes("ift-treatment") || s.includes("best-ift")) return "IFT Physiotherapy Treatment in Ahmedabad";
  if (s.includes("tens-treatment")) return "TENS Physiotherapy Treatment in Ahmedabad";
  if (s.includes("traction")) return "Traction Physiotherapy Treatment in Ahmedabad";
  if (s.includes("tecar")) return "TECAR Physiotherapy Treatment in Ahmedabad";
  if (s.includes("pneumatic-compression")) return "Pneumatic Compression Physiotherapy Treatment in Ahmedabad";
  if (s.includes("paraffin-wax")) return "Paraffin Wax Bath Physiotherapy Treatment in Ahmedabad";
  if (s.includes("short-wave-diathermy") || s.includes("swd")) return "Shortwave Diathermy (SWD) Physiotherapy Treatment in Ahmedabad";
  if (s.includes("ultra-sound")) return "Ultrasound Physiotherapy Treatment in Ahmedabad";
  if (s.includes("infra-radiation")) return "Infrared Radiation Physiotherapy Treatment in Ahmedabad";
  if (s.includes("electrical-stimulation")) return "Electrical Stimulation Physiotherapy Treatment in Ahmedabad";
  if (label) return `${label} Physiotherapy Treatment in Ahmedabad`;
  return "Physiotherapy Treatment in Ahmedabad";
}

function getDoctorSpecialistBadge(slug: string, label?: string): string {
  return "Expert Physiotherapist in Ahmedabad";
}

export function ContentTemplate({
  data,
  content,
  customEyebrow,
  eyebrowAsH1,
}: {
  data: ContentPage;
  content: PageContent;
  customEyebrow?: string;
  eyebrowAsH1?: boolean;
}) {
  const related = (data.related ?? [])
    .map((slug) => contentBySlug.get(slug))
    .filter((p): p is ContentPage => Boolean(p));

  // Extract FAQs from blocks for JSON-LD structured data
  const faqs = useMemo(() => {
    const faqBlock = content.blocks.find((b) => b.t === "faq");
    if (faqBlock && faqBlock.t === "faq") {
      return faqBlock.faqs;
    }
    return [];
  }, [content.blocks]);

  // Extract Pricing from blocks for JSON-LD structured data
  const pricingBlock = useMemo(() => {
    const p = content.blocks.find((b) => b.t === "pricing");
    if (p && p.t === "pricing") {
      return p;
    }
    return null;
  }, [content.blocks]);

  // Construct valid medical JSON-LD schema
  const jsonLd = useMemo(() => {
    const schemas: Record<string, unknown>[] = [
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: data.title || content.h1 || data.h1,
        description: data.description || content.lead || data.lead,
        url: `https://completecare.in/${data.slug}`,
        about: {
          "@type": "MedicalCondition",
          name: data.label || data.h1,
        },
        author: {
          "@type": "Person",
          name: site.director,
          jobTitle: "Chief Physiotherapist & Clinical Director",
        },
        publisher: {
          "@type": "MedicalOrganization",
          name: "Complete Care Physiotherapy",
          url: "https://completecare.in/",
          logo: "https://completecare.in/assets/brand/completecare-logo.webp",
          telephone: site.phone,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://completecare.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Therapy",
            item: data.group === "modality" ? "https://completecare.in/therapies" : "https://completecare.in/care-areas",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: data.label || data.h1,
            item: `https://completecare.in/${data.slug}`,
          },
        ],
      },
    ];

    if (pricingBlock) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        name: data.label || content.h1 || data.h1,
        procedureType: "NoninvasiveProcedure",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: pricingBlock.currency || "INR",
          lowPrice: pricingBlock.lowPrice ? String(pricingBlock.lowPrice) : "500",
          highPrice: pricingBlock.highPrice ? String(pricingBlock.highPrice) : "2000",
          offerCount: "1",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: pricingBlock.currency || "INR",
            minPrice: pricingBlock.lowPrice ? String(pricingBlock.lowPrice) : "500",
            maxPrice: pricingBlock.highPrice ? String(pricingBlock.highPrice) : "2000",
            unitText: "SESSION",
          },
          description: pricingBlock.context || "At Complete Care, pricing for physical therapy sessions ranges from ₹500 to ₹2,000 per session depending on clinical assessment and modalities.",
        },
      });
    }

    if (faqs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "").trim(),
          },
        })),
      });
    }

    return JSON.stringify(schemas);
  }, [data, content, faqs, pricingBlock]);

  return (
    <>
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      {/* Page Hero */}
      <PageHero
        eyebrow={customEyebrow ?? getEyebrowH1Keyword(data.slug, data.label || data.h1, data.group)}
        breadcrumb="Therapy"
        breadcrumbHref={data.group === "modality" ? "/therapies" : "/care-areas"}
        h1={content.h1 || data.h1}
        lead={content.lead || data.lead}
        image={content.hero ?? undefined}
        slug={data.slug}
        group={data.group}
        eyebrowAsH1={eyebrowAsH1 ?? true}
      />

      {/* Main Editorial & Booking Section */}
      <section className="section-y bg-background">
        <div className="container-cc grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          {/* Main Clinical Content */}
          <div className="space-y-10">
            <BlockContent blocks={content.blocks} />

            {/* Doctor Profile Card for Clinical Trust & Direct Authority */}
            {data.slug !== "best-physiotherapist-in-ahmedabad" && (
              <div className="overflow-hidden rounded-3xl border border-navy/12 bg-white p-6 sm:p-7 shadow-sm transition-all hover:shadow-md">
                <div className="inline-flex items-center gap-2 rounded-full border border-navy/12 bg-sand/70 px-3.5 py-1 text-[11px] font-bold tracking-wider text-teal uppercase mb-4 shadow-xs">
                  <Sparkles className="size-3.5 text-accent shrink-0" />
                  <h3 className="text-[11px] font-bold tracking-wider text-teal uppercase inline m-0 p-0">
                    {getDoctorSpecialistBadge(data.slug, data.label || data.h1)}
                  </h3>
                </div>
                <div className="grid gap-6 sm:grid-cols-[140px_1fr] sm:items-center">
                  <div className="overflow-hidden rounded-2xl border border-navy/10 bg-slate-50 aspect-[3/4] max-w-[140px]">
                    <img
                      src="/assets/treatments/Complete-Care-Doctor-Image-cc.webp"
                      alt="Dr. Hardik Patel (PT), Clinical Director, Complete Care"
                      className="size-full object-cover object-top"
                      loading="lazy"
                      width={140}
                      height={187}
                    />
                  </div>
                  <div className="space-y-2.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="text-xl sm:text-2xl font-bold text-navy">
                        Dr. Hardik Patel <span className="text-sm font-semibold text-muted-foreground">(PT)</span>
                      </div>
                      <span className="badge-emerald text-[10px] px-2 py-0.5">Founder &amp; Director</span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      MPT in Orthopaedics (CCS University) · Certified Manual Therapist (FOMT Australia) · 16+ Years Experience · 85,000+ patient recoveries across 6 Gujarat centres.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-semibold">
                      <Link
                        to="/best-physiotherapist-in-ahmedabad"
                        className="inline-flex items-center gap-1 text-[#16803d] hover:underline font-bold"
                      >
                        <span>View Full Doctor Profile</span>
                        <ArrowUpRight className="size-3.5" />
                      </Link>
                      <span className="text-muted-foreground/40">·</span>
                      <Link
                        to="/certifications"
                        className="inline-flex items-center gap-1 text-teal hover:underline"
                      >
                        <ShieldCheck className="size-3.5 text-accent" />
                        <span>GSCPT Registered</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Links Tag Cloud */}
            {content.quickLinks && content.quickLinks.length > 0 && (
              <div className="rounded-3xl border border-navy/10 bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-teal uppercase">
                  <Compass className="size-4 text-accent" />
                  <span>Explore Related Treatments &amp; Clinical Protocols</span>
                </div>
                <h2 className="mt-2 text-xl font-bold text-navy">Related Care Pathways</h2>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {content.quickLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to as never}
                      className="inline-flex items-center gap-1.5 rounded-full border border-navy/12 bg-white px-4 py-2 text-xs font-semibold text-navy shadow-sm transition-all hover:border-[#16803d]/45 hover:text-[#16803d]"
                    >
                      <span>{l.label}</span>
                      <ArrowUpRight className="size-3 text-muted-foreground" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Booking Form Sidebar */}
          <div className="lg:sticky lg:top-28">
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials limit={3} />

      {/* Closing CTA */}
      <CtaBand />
    </>
  );
}
