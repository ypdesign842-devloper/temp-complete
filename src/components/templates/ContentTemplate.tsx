import { PageHero } from "@/components/blocks/PageHero";
import { CtaBand } from "@/components/blocks/CtaBand";
import { AppointmentForm } from "@/components/blocks/AppointmentForm";
import { BlockContent } from "@/components/blocks/BlockContent";
import { LinkCard } from "@/components/blocks/Cards";
import { Testimonials } from "@/components/blocks/Testimonials";
import { Link } from "@tanstack/react-router";
import { contentBySlug } from "@/data";
import type { ContentPage, PageContent } from "@/data/types";
import { ArrowUpRight, Compass, ShieldCheck } from "lucide-react";

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

  return (
    <>
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
              <div className="rounded-2xl border border-border/80 bg-sand/60 p-6 sm:p-7">
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
                      className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-xs font-semibold text-navy shadow-sm transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
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
