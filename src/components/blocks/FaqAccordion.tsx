import { useState } from "react";
import { Calendar, ChevronDown, HelpCircle, MessageSquare, Phone, Sparkles } from "lucide-react";
import { site } from "@/data/site";

export type Faq = { q: string; a: string };

export function FaqAccordion({
  faqs,
  title = "Frequently asked questions",
}: {
  faqs: Faq[];
  title?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  // Generate valid FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section className="section-y bg-[#f9f7ef] border-t border-border/80">
      {/* Dynamic FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-cc grid gap-10 lg:gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        {/* Left Column: Heading, Supporting Info & Sticky Help Card */}
        <div className="space-y-6 lg:sticky lg:top-28">
          <div className="space-y-3.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/12 bg-white/90 px-3.5 py-1 text-[11px] font-bold tracking-wider text-teal uppercase shadow-sm">
              <Sparkles className="size-3 text-accent" />
              <span>Patient FAQs</span>
            </div>

            <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-navy sm:text-4xl">
              {title}
            </h2>

            <p className="text-base leading-relaxed text-muted-foreground">
              Clear answers to common questions regarding clinical assessment protocols, treatment plans, insurance, home visits, and rehabilitation timelines across our Gujarat centres.
            </p>
          </div>

          {/* Clinical Support Micro-Card */}
          <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-sm">
                <HelpCircle className="size-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-navy">Have a specific medical question?</h3>
                <p className="text-xs text-muted-foreground">Speak directly with our clinical coordinators</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-muted-foreground">
              Schedule a personalized phone evaluation or visit any of our modern facilities in Ahmedabad, Mehsana, and Ankleshwar.
            </p>

            <div className="space-y-2 pt-1">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3 text-xs font-bold text-accent-foreground shadow-sm transition-all hover:bg-emerald-600 hover:shadow-md"
              >
                <Calendar className="size-3.5" />
                <span>Ask on WhatsApp</span>
              </a>

              <a
                href={site.phoneHref}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-navy/20 bg-white py-2.5 text-xs font-bold text-navy shadow-sm transition-all hover:border-navy hover:bg-navy hover:text-white"
              >
                <Phone className="size-3.5 text-teal" />
                <span>Call {site.phone}</span>
              </a>
            </div>

            <div className="pt-2 border-t border-border/60 text-[11px] text-muted-foreground text-center font-medium">
              6 Centres across Ahmedabad, Mehsana &amp; Ankleshwar
            </div>
          </div>
        </div>

        {/* Right Column: FAQ Accordion Items */}
        <div className="space-y-3.5">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-accent/40 bg-white shadow-md shadow-navy/5"
                    : "border-navy/10 bg-white hover:border-navy/20 hover:shadow-sm"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    onClick={() => setOpen((v) => (v === i ? null : i))}
                    className="flex min-h-[52px] w-full items-center justify-between gap-4 p-5 text-left transition-colors sm:p-6"
                  >
                    <span className="text-[1.02rem] sm:text-lg font-semibold leading-snug text-navy">
                      {f.q}
                    </span>
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 border-accent bg-accent text-accent-foreground shadow-sm"
                          : "border-border/80 bg-sand text-navy/70"
                      }`}
                    >
                      <ChevronDown className="size-4" />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                    className="px-5 pb-6 pt-0 sm:px-6 animate-cc-fade"
                  >
                    <div className="border-t border-border/60 pt-4">
                      <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
