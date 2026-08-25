import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Award,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  HeartPulse,
  HelpCircle,
  Info,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  Zap,
  IndianRupee,
} from "lucide-react";
import type { Block } from "@/data/types";
import { site } from "@/data/site";

/** Renders markdown-ish inline emphasis and links captured from the source content. */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
        if (link) {
          const href = link[2]!.replace("https://completecare.in", "");
          const isExternal = href.startsWith("http");
          if (isExternal) {
            return (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#16803d] underline decoration-[#16803d]/40 underline-offset-4 transition-colors hover:text-navy hover:decoration-navy"
              >
                {link[1]!.replace(/\*\*/g, "")}
              </a>
            );
          }
          return (
            <Link
              key={i}
              to={href as never}
              className="font-bold text-[#16803d] underline decoration-[#16803d]/40 underline-offset-4 transition-colors hover:text-navy hover:decoration-navy"
            >
              {link[1]!.replace(/\*\*/g, "")}
            </Link>
          );
        }
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-bold text-navy">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

/** FAQ Accordion Item Component */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-navy/10 bg-white transition-all duration-200 hover:border-[#16803d]/30 hover:shadow-sm">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors"
      >
        <span className="text-base font-bold text-navy leading-snug">{q}</span>
        <div
          className={`flex size-7 shrink-0 items-center justify-center rounded-full bg-sand transition-transform duration-200 ${
            isOpen ? "rotate-180 bg-[#16803d]/10 text-[#16803d]" : "text-muted-foreground"
          }`}
        >
          <ChevronDown className="size-4" />
        </div>
      </button>
      {isOpen && (
        <div className="border-t border-navy/5 px-5 pb-5 pt-3 text-sm leading-relaxed text-muted-foreground">
          <Inline text={a} />
        </div>
      )}
    </div>
  );
}

export function BlockContent({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-8 text-foreground">
      {blocks.map((block, i) => {
        switch (block.t) {
          case "h2":
            return (
              <div key={i} className="pt-6 first:pt-0">
                <h2 className="relative flex items-center gap-3 text-2xl font-bold leading-snug text-navy sm:text-3xl">
                  <span className="h-7 w-1.5 rounded-full bg-gradient-to-b from-[#16803d] to-teal" aria-hidden="true" />
                  <span>
                    <Inline text={block.text} />
                  </span>
                </h2>
              </div>
            );

          case "h3":
            return (
              <h3 key={i} className="pt-2 text-xl font-bold leading-snug text-navy">
                <Inline text={block.text} />
              </h3>
            );

          case "p":
            return (
              <p key={i} className="text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
                <Inline text={block.text} />
              </p>
            );

          case "ul":
            return (
              <ul key={i} className="space-y-3 rounded-2xl border border-navy/10 bg-[#fbf9f3] p-5 sm:p-6 shadow-sm">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-foreground sm:text-base">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#16803d]" />
                    <span>
                      <Inline text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            );

          case "snapshot":
            return (
              <div
                key={i}
                className="overflow-hidden rounded-3xl border-2 border-[#16803d]/20 bg-gradient-to-br from-white via-[#fbf9f3] to-white p-6 sm:p-7 shadow-lg shadow-navy/5"
              >
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-teal uppercase">
                  <Sparkles className="size-4 text-accent" />
                  <span>{block.title ?? "Clinical Snapshot & Quick Facts"}</span>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {block.items.map((item, j) => (
                    <div
                      key={j}
                      className="rounded-2xl border border-navy/10 bg-white/90 p-4 shadow-sm backdrop-blur-sm"
                    >
                      <div className="text-xs font-bold text-[#16803d] uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-navy leading-snug">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );

          case "grid":
            return (
              <div key={i} className="space-y-4 pt-2">
                {block.title && (
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-navy">{block.title}</h3>
                    {block.subtitle && (
                      <p className="text-sm text-muted-foreground">{block.subtitle}</p>
                    )}
                  </div>
                )}
                <div
                  className={`grid gap-4 ${
                    block.columns === 3
                      ? "sm:grid-cols-2 lg:grid-cols-3"
                      : "sm:grid-cols-2"
                  }`}
                >
                  {block.items.map((item, j) => (
                    <div
                      key={j}
                      className="group relative flex flex-col justify-between rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#16803d]/40 hover:shadow-md"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-[#16803d]">
                            <Activity className="size-4" />
                          </div>
                          {item.badge && (
                            <span className="rounded-full bg-sand px-2.5 py-0.5 text-[10px] font-bold text-teal uppercase">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <h4 className="text-base font-bold text-navy group-hover:text-[#16803d] transition-colors">
                          <Inline text={item.title} />
                        </h4>
                        <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                          <Inline text={item.desc} />
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );

          case "steps":
            return (
              <div key={i} className="space-y-4 pt-2">
                {block.title && (
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-navy">{block.title}</h3>
                    {block.subtitle && (
                      <p className="text-sm text-muted-foreground">{block.subtitle}</p>
                    )}
                  </div>
                )}
                <div className="space-y-3.5">
                  {block.steps.map((st, j) => (
                    <div
                      key={j}
                      className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#16803d]/30"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#166534] to-[#15803d] text-sm font-bold text-white shadow-md shadow-[#166534]/20">
                        {st.step}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-navy">
                          <Inline text={st.title} />
                        </h4>
                        <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                          <Inline text={st.desc} />
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );

          case "callout": {
            const isWarning = block.variant === "warning";
            const isTip = block.variant === "tip";
            return (
              <div
                key={i}
                className={`my-6 rounded-2xl border p-5 sm:p-6 shadow-sm ${
                  isWarning
                    ? "border-amber-500/30 bg-amber-50/70 text-amber-950"
                    : isTip
                    ? "border-emerald-500/30 bg-emerald-50/70 text-emerald-950"
                    : "border-teal/30 bg-teal/5 text-navy"
                }`}
              >
                <div className="flex items-start gap-3.5">
                  {isWarning ? (
                    <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-600" />
                  ) : isTip ? (
                    <Zap className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                  ) : (
                    <Info className="mt-0.5 size-5 shrink-0 text-teal" />
                  )}
                  <div className="space-y-1">
                    <h4 className="text-base font-bold leading-tight">
                      <Inline text={block.title} />
                    </h4>
                    <div className="text-xs sm:text-sm leading-relaxed opacity-90">
                      <Inline text={block.text} />
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          case "doctor": {
            const docName = block.name ?? site.director;
            const docRole = block.role ?? "Founder & Clinical Director | Complete Care";
            const docBio =
              block.bio ??
              "16+ years of clinical experience specializing in non surgical  musculoskeletal rehabilitation, advanced chiropractic adjustment, manual therapy, and neuro-rehabilitation across Gujarat.";
            const docImage = block.image ?? "/assets/treatments/Complete-Care-Doctor-Image-cc.webp";
            const docTo = block.to ?? "/best-physiotherapist-in-ahmedabad";
            return (
              <div
                key={i}
                className="my-8 overflow-hidden rounded-3xl border-2 border-navy/10 bg-white p-6 sm:p-7 shadow-xl shadow-navy/6"
              >
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="relative size-28 sm:size-32 shrink-0 overflow-hidden rounded-2xl border-2 border-navy/12 bg-sand shadow-md">
                    <img
                      src={docImage}
                      alt={docName}
                      loading="lazy"
                      className="size-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1 space-y-2 text-center sm:text-left">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-navy/10 bg-sand px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal">
                      <ShieldCheck className="size-3 text-accent" />
                      <span>Clinical Leadership</span>
                    </div>
                    <h4 className="text-xl font-bold text-navy">{docName}</h4>
                    <p className="text-xs font-semibold text-[#16803d]">{docRole}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {docBio}
                    </p>
                    <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                      <Link
                        to={docTo as never}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-[#16803d] transition-colors"
                      >
                        <span>View Clinical Profile</span>
                        <ArrowUpRight className="size-3.5" />
                      </Link>
                      <span className="text-muted-foreground/40">•</span>
                      <a
                        href={site.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#16803d] px-4 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-[#15803d] transition-colors"
                      >
                        <Calendar className="size-3.5" />
                        <span>{block.ctaText ?? "Consult Doctor"}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          case "faq":
            return (
              <div key={i} className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-teal uppercase">
                  <HelpCircle className="size-4 text-accent" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h3 className="text-2xl font-bold text-navy">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3 pt-2">
                  {block.faqs.map((faq, j) => (
                    <FaqItem key={j} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </div>
            );

          case "img":
            return (
              <figure key={i} className="my-6 overflow-hidden rounded-3xl border border-navy/10 bg-white p-2.5 shadow-md">
                <div className="overflow-hidden rounded-2xl bg-sand">
                  <img
                    src={block.src}
                    alt={block.alt ?? "Complete Care clinical illustration"}
                    loading="lazy"
                    className="w-full object-contain max-h-[500px]"
                  />
                </div>
                {block.alt ? (
                  <figcaption className="px-3 py-2 text-center text-xs text-muted-foreground">
                    {block.alt}
                  </figcaption>
                ) : null}
              </figure>
            );

          case "pricing": {
            const title = block.title ?? "Estimated Consultation & Treatment Range";
            return (
              <div
                key={i}
                className="my-8 overflow-hidden rounded-3xl border-2 border-[#16803d]/20 bg-gradient-to-br from-white via-[#fbf9f3] to-white p-6 sm:p-7 shadow-lg shadow-navy/5"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-navy/10 pb-5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-teal uppercase">
                      <Sparkles className="size-4 text-accent" />
                      <span>Transparent Patient Pricing</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-navy">
                      {title}
                    </h3>
                  </div>
                  <div className="inline-flex items-baseline gap-1.5 rounded-2xl border border-[#16803d]/25 bg-white px-5 py-3 shadow-sm">
                    <span className="text-2xl sm:text-3xl font-bold text-[#16803d] tracking-tight">
                      {block.range}
                    </span>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    <Inline text={block.context} />
                  </p>

                  {(block.consultationFee || block.treatmentRange) && (
                    <div className="grid gap-3 sm:grid-cols-2 pt-1">
                      {block.consultationFee && (
                        <div className="rounded-xl border border-navy/10 bg-white/90 p-3.5 shadow-sm">
                          <div className="text-[11px] font-bold text-teal uppercase tracking-wider">
                            Initial Clinical Assessment
                          </div>
                          <div className="mt-1 text-sm sm:text-base font-bold text-navy">
                            {block.consultationFee}
                          </div>
                        </div>
                      )}
                      {block.treatmentRange && (
                        <div className="rounded-xl border border-navy/10 bg-white/90 p-3.5 shadow-sm">
                          <div className="text-[11px] font-bold text-teal uppercase tracking-wider">
                            Treatment / Modality Session
                          </div>
                          <div className="mt-1 text-sm sm:text-base font-bold text-navy">
                            {block.treatmentRange}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {block.inclusions && block.inclusions.length > 0 && (
                    <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground border-t border-navy/5 pt-3">
                      {block.inclusions.map((inc, k) => (
                        <div key={k} className="flex items-center gap-1.5">
                          <CheckCircle2 className="size-3.5 text-[#16803d] shrink-0" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}
