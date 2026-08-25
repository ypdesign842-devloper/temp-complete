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

export function ContentTemplate({ data, content }: { data: ContentPage; content: PageContent }) {
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
          name: site.name,
          url: "https://completecare.in",
          logo: "https://completecare.in/assets/logo.png",
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
            name: "Care Areas",
            item: "https://completecare.in/care-areas",
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
          highPrice: pricingBlock.highPrice ? String(pricingBlock.highPrice) : "1500",
          offerCount: "1",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: pricingBlock.currency || "INR",
            minPrice: pricingBlock.lowPrice ? String(pricingBlock.lowPrice) : "500",
            maxPrice: pricingBlock.highPrice ? String(pricingBlock.highPrice) : "1500",
            unitText: "SESSION",
          },
          description: pricingBlock.context,
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
            text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, ""),
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
        eyebrow={eyebrow[data.group]}
        h1={content.h1 || data.h1}
        lead={content.lead || data.lead}
        image={content.hero ?? undefined}
        slug={data.slug}
        group={data.group}
      />

      {/* Main Editorial & Booking Section */}
      <section className="section-y bg-background">
        <div className="container-cc grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          {/* Main Clinical Content */}
          <div className="space-y-10">
            <BlockContent blocks={content.blocks} />

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

      {/* Related Care Cards Grid */}
      {related.length > 0 && (
        <section className="section-y bg-sand">
          <div className="container-cc">
            <div className="max-w-2xl">
              <span className="badge-clinical text-teal">
                Complementary Protocols
              </span>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
                Related care at Complete Care
              </h2>
              <p className="mt-2 text-base text-muted-foreground">
                Our clinical teams coordinate cross-specialty treatments to achieve lasting recovery.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <LinkCard key={p.slug} page={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <Testimonials limit={3} />

      {/* Closing CTA */}
      <CtaBand />
    </>
  );
}
