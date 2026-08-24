import { Link } from "@tanstack/react-router";
import {
  Calendar,
  ChevronRight,
  Home,
  Phone,
  ShieldCheck,
  Sparkles,
  Clock,
  TrendingUp,
  Zap,
  Activity,
  HeartPulse,
  Dumbbell,
} from "lucide-react";
import { site } from "@/data/site";
import { ResponsiveMedia, type MediaVariant } from "@/components/ui/ResponsiveMedia";
import { getHeroClinicalFacts, type HeroFact } from "@/data/clinicalFacts";

const iconMap = {
  Clock,
  Calendar,
  TrendingUp,
  ShieldCheck,
  Zap,
  Activity,
  HeartPulse,
  Dumbbell,
};

export function PageHero({
  eyebrow,
  h1,
  lead,
  image,
  slug,
  group,
  variant = "auto",
  facts: customFacts,
}: {
  eyebrow?: string | undefined;
  h1: string;
  lead: string;
  image?: string | undefined;
  slug?: string | undefined;
  group?: string | undefined;
  variant?: MediaVariant;
  facts?: [HeroFact, HeroFact, HeroFact, HeroFact] | undefined;
}) {
  // Determine if this is a wide 1024x400 landscape banner
  const isLandscapeBanner = Boolean(image) && (
    variant === "banner" ||
    (variant === "auto" && (
      image!.toLowerCase().includes("/conditions/") ||
      image!.toLowerCase().includes("/fitness/") ||
      (image!.toLowerCase().includes("/treatments/") && (
        image!.toLowerCase().includes("theraphy") ||
        image!.toLowerCase().includes("laser-therapy.webp") ||
        image!.toLowerCase().includes("cupping-therapy-1") ||
        image!.toLowerCase().includes("dry-needing") ||
        image!.toLowerCase().includes("electrical-stimulation") ||
        image!.toLowerCase().includes("iastm.webp") ||
        image!.toLowerCase().includes("ift.webp") ||
        image!.toLowerCase().includes("infra-radiation") ||
        image!.toLowerCase().includes("kinesio-taping") ||
        image!.toLowerCase().includes("manual-therapy.webp") ||
        image!.toLowerCase().includes("osteopathy.webp") ||
        image!.toLowerCase().includes("pemf-therapy.webp") ||
        image!.toLowerCase().includes("paraffin-wax-bath") ||
        image!.toLowerCase().includes("pneumatic-compression") ||
        image!.toLowerCase().includes("swd.webp") ||
        image!.toLowerCase().includes("tens.webp") ||
        image!.toLowerCase().includes("traction.webp") ||
        image!.toLowerCase().includes("ultra-sound.webp")
      )) ||
      image!.toLowerCase().includes("banner")
    ))
  );

  // Generate four patient-focused clinical facts tailored to this condition/treatment
  const clinicalFacts = customFacts ?? getHeroClinicalFacts({ slug: slug ?? "", group, h1, lead });

  // If wide landscape banner: Render 2-column header with 4 clinical cards on the right, and full-bleed banner below
  if (isLandscapeBanner && image) {
    return (
      <section className="relative overflow-hidden border-b border-border/80 bg-gradient-to-b from-sand via-background to-sand/40 py-10 sm:py-14 lg:py-16">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-teal/10 blur-3xl"
        />

        <div className="container-cc relative space-y-8 sm:space-y-10">
          {/* Header Info Area: 2 Columns on Desktop */}
          <div className="grid gap-8 lg:grid-cols-[1.22fr_1fr] lg:items-center">
            {/* Left Column: Breadcrumb, Badge, H1, Lead, CTAs */}
            <div className="space-y-4">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                <Link to="/" className="inline-flex items-center gap-1 hover:text-accent transition-colors">
                  <Home className="size-3.5" />
                  <span>Home</span>
                </Link>
                <ChevronRight aria-hidden="true" className="size-3 text-muted-foreground/60" />
                <span className="text-navy font-bold">{eyebrow ?? "Clinical Care"}</span>
              </nav>

              {/* Eyebrow badge */}
              {eyebrow && (
                <div className="inline-flex items-center gap-2 rounded-full border border-navy/12 bg-white/90 px-3.5 py-1 text-[11px] font-bold tracking-wider text-teal uppercase shadow-sm backdrop-blur-sm">
                  <Sparkles className="size-3 text-accent" />
                  <span>{eyebrow}</span>
                </div>
              )}

              {/* Title */}
              <h1 className="text-3xl font-semibold leading-[1.14] tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
                {h1}
              </h1>

              {/* Lead */}
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {lead}
              </p>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-md shadow-accent/20 transition-all hover:bg-emerald-600 hover:shadow-lg"
                >
                  <Calendar className="size-4" />
                  <span>Book Consultation</span>
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-xl border border-navy/20 bg-white/90 px-6 py-3.5 text-sm font-bold text-navy shadow-sm transition-all hover:border-navy hover:bg-navy hover:text-white"
                >
                  <Phone className="size-4 text-teal" />
                  <span>{site.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: 2x2 Grid of Four Compact Clinical Information Cards */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
              {clinicalFacts.map((f, idx) => {
                const IconComponent = iconMap[f.icon] || ShieldCheck;
                return (
                  <div
                    key={`${f.label}-${idx}`}
                    className="group relative flex flex-col justify-between rounded-2xl border border-navy/10 bg-white/95 p-3.5 sm:p-4.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-teal/40 hover:bg-white hover:shadow-md"
                  >
                    <div>
                      <div className="flex items-center gap-1.5 text-teal">
                        <IconComponent className="size-3.5 shrink-0 text-accent" />
                        <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase truncate">
                          {f.label}
                        </span>
                      </div>
                      <div className="mt-1.5 text-xs sm:text-[14px] font-bold text-navy leading-tight sm:leading-snug">
                        {f.value}
                      </div>
                    </div>
                    {f.subtext && (
                      <div className="mt-1.5 text-[10px] sm:text-[11px] text-muted-foreground leading-tight">
                        {f.subtext}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Full Landscape Banner Container - Complete 1024x400 artwork preserved with ZERO cropping */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-navy/8">
            <div className="relative w-full aspect-[2.56/1] bg-sand/40 flex items-center justify-center overflow-hidden">
              <img
                src={image}
                alt={h1}
                fetchPriority="high"
                decoding="async"
                className="size-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 border-t border-border/60 bg-white/90 px-4 py-3 text-xs sm:flex-row sm:items-center sm:justify-between">
              <span className="flex items-center gap-1.5 font-bold text-teal">
                <ShieldCheck className="size-4 text-accent" />
                Complete Care Protocol · Evidence-Based Rehabilitation
              </span>
              <span className="font-semibold text-navy">6 Centres Across Gujarat · Direct WhatsApp Booking</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Standard Two-column layout for other pages or fallback
  return (
    <section className="relative overflow-hidden border-b border-border/80 bg-gradient-to-b from-sand via-background to-sand/40 py-12 lg:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-teal/10 blur-3xl"
      />

      <div className="container-cc relative grid gap-10 lg:grid-cols-[1.22fr_1fr] lg:items-center">
        <div className="space-y-5">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-accent transition-colors">
              <Home className="size-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight aria-hidden="true" className="size-3 text-muted-foreground/60" />
            <span className="text-navy font-bold">{eyebrow ?? "Clinical Care"}</span>
          </nav>

          {/* Eyebrow badge */}
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/12 bg-white/80 px-3.5 py-1 text-[11px] font-bold tracking-wider text-teal uppercase backdrop-blur-sm">
              <Sparkles className="size-3 text-accent" />
              <span>{eyebrow}</span>
            </div>
          )}

          {/* Title & Lead */}
          <h1 className="text-3xl font-semibold leading-[1.12] tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            {h1}
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {lead}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-sm transition-all hover:bg-emerald-600 hover:shadow-md"
            >
              <Calendar className="size-4" />
              <span>Book Consultation</span>
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl border border-navy/20 bg-white/80 px-6 py-3.5 text-sm font-bold text-navy transition-all hover:border-navy hover:bg-navy hover:text-white"
            >
              <Phone className="size-4 text-teal" />
              <span>{site.phone}</span>
            </a>
          </div>
        </div>

        {/* Media Container or Four Clinical Information Cards */}
        {image && variant !== "stats" ? (
          <ResponsiveMedia src={image} alt={h1} variant={variant} priority />
        ) : (
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
            {clinicalFacts.map((f, idx) => {
              const IconComponent = iconMap[f.icon] || ShieldCheck;
              return (
                <div
                  key={`${f.label}-${idx}`}
                  className="group relative flex flex-col justify-between rounded-2xl border border-navy/10 bg-white/95 p-3.5 sm:p-4.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-teal/40 hover:bg-white hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center gap-1.5 text-teal">
                      <IconComponent className="size-3.5 shrink-0 text-accent" />
                      <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase truncate">
                        {f.label}
                      </span>
                    </div>
                    <div className="mt-1.5 text-xs sm:text-[14px] font-bold text-navy leading-tight sm:leading-snug">
                      {f.value}
                    </div>
                  </div>
                  {f.subtext && (
                    <div className="mt-1.5 text-[10px] sm:text-[11px] text-muted-foreground leading-tight">
                      {f.subtext}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
