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
  breadcrumb = "Therapy",
  breadcrumbHref,
  h1,
  lead,
  image,
  slug,
  group,
  variant = "auto",
  facts: customFacts,
  eyebrowAsH1 = false,
}: {
  eyebrow?: string | undefined;
  breadcrumb?: string | undefined;
  breadcrumbHref?: string | undefined;
  h1: string;
  lead: string;
  image?: string | undefined;
  slug?: string | undefined;
  group?: string | undefined;
  variant?: MediaVariant;
  facts?: [HeroFact, HeroFact, HeroFact, HeroFact] | undefined;
  eyebrowAsH1?: boolean;
}) {
  // Check if image is a doctor portrait or team profile
  const isDoctorPortrait = Boolean(image) && (
    image!.toLowerCase().includes("doctor") ||
    image!.toLowerCase().includes("dr-") ||
    image!.toLowerCase().includes("dr.-") ||
    image!.toLowerCase().includes("foram") ||
    image!.toLowerCase().includes("hardik") ||
    image!.toLowerCase().includes("/team/") ||
    slug === "female-fitness-trainer-in-ahmedabad" ||
    slug === "best-physiotherapist-in-ahmedabad" ||
    slug === "chiropractic-treatment-in-ahmedabad"
  );

  // Determine if this is a wide 1024x400 landscape banner
  const isLandscapeBanner = Boolean(image) && !isDoctorPortrait && (
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
  const clinicalFacts = customFacts ?? getHeroClinicalFacts({ slug: slug ?? "", group: group ?? undefined, h1, lead });


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
                {breadcrumbHref ? (
                  <Link to={breadcrumbHref as never} className="hover:text-accent transition-colors text-navy font-bold">
                    <span>{breadcrumb}</span>
                  </Link>
                ) : (
                  <span className="text-navy font-bold">{breadcrumb}</span>
                )}
              </nav>

              {/* Eyebrow badge */}
              {eyebrow && (
                <div className="inline-flex items-center gap-2 rounded-full border border-navy/12 bg-white/90 px-3.5 py-1 text-[11px] font-bold tracking-wider text-teal uppercase shadow-sm backdrop-blur-sm">
                  <Sparkles className="size-3 text-accent" />
                  {eyebrowAsH1 ? (
                    <h1 className="text-[11px] font-bold tracking-wider text-teal uppercase inline m-0 p-0">
                      {eyebrow}
                    </h1>
                  ) : (
                    <span>{eyebrow}</span>
                  )}
                </div>
              )}

              {/* Title */}
              {eyebrowAsH1 ? (
                <p className="text-3xl font-semibold leading-[1.14] tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
                  {h1}
                </p>
              ) : (
                <h1 className="text-3xl font-semibold leading-[1.14] tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
                  {h1}
                </h1>
              )}

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
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#166534] via-[#15803d] to-[#16a34a] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#166534]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#166534]/35 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Calendar className="size-4 text-emerald-200" />
                  <span>Book Consultation</span>
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2.5 rounded-full border border-navy/15 bg-white/90 px-7 py-3.5 text-sm font-bold text-navy shadow-sm transition-all duration-300 hover:border-[#16803d]/40 hover:bg-white hover:text-[#16803d] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Phone className="size-4 text-[#16803d]" />
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

          {/* Full-Bleed 1024x400 Clean Image Banner Below */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl shadow-navy/5">
            <ResponsiveMedia
              src={image}
              alt={h1}
              variant="banner"
              priority
              className="border-0 shadow-none rounded-none"
            />
            {/* Banner trust footer */}
            <div className="border-t border-border/70 bg-gradient-to-r from-sand/90 via-background to-sand/90 px-4 py-2.5 sm:px-6 sm:py-3 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 font-semibold text-teal">
                <ShieldCheck className="size-3.5 text-accent" />
                <span>Complete Care Protocol · Evidence Based Rehabilitation</span>
              </span>
              <span className="hidden sm:inline font-medium text-navy/70">
                6 Centres Across Gujarat · Direct WhatsApp Booking
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Standard Two-column layout for other pages or doctor profiles
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
            {breadcrumbHref ? (
              <Link to={breadcrumbHref as never} className="hover:text-accent transition-colors text-navy font-bold">
                <span>{breadcrumb}</span>
              </Link>
            ) : (
              <span className="text-navy font-bold">{breadcrumb}</span>
            )}
          </nav>

          {/* Eyebrow badge */}
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/12 bg-white/80 px-3.5 py-1 text-[11px] font-bold tracking-wider text-teal uppercase backdrop-blur-sm shadow-sm">
              <Sparkles className="size-3 text-accent" />
              {eyebrowAsH1 ? (
                <h1 className="text-[11px] font-bold tracking-wider text-teal uppercase inline m-0 p-0">
                  {eyebrow}
                </h1>
              ) : (
                <span>{eyebrow}</span>
              )}
            </div>
          )}

          {/* Title & Lead */}
          {eyebrowAsH1 ? (
            <p className="text-3xl font-semibold leading-[1.12] tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
              {h1}
            </p>
          ) : (
            <h1 className="text-3xl font-semibold leading-[1.12] tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
              {h1}
            </h1>
          )}

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {lead}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#166534] via-[#15803d] to-[#16a34a] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#166534]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#166534]/35 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="size-4 text-emerald-200" />
              <span>Book Consultation</span>
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2.5 rounded-full border border-navy/15 bg-white/90 px-7 py-3.5 text-sm font-bold text-navy shadow-sm transition-all duration-300 hover:border-[#16803d]/40 hover:bg-white hover:text-[#16803d] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="size-4 text-[#16803d]" />
              <span>{site.phone}</span>
            </a>
          </div>
        </div>

        {/* Media Container or Four Clinical Information Cards */}
        {image ? (
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
