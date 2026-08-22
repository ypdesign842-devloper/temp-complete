import { Link } from "@tanstack/react-router";
import { Calendar, ChevronRight, Home, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { ResponsiveMedia, type MediaVariant } from "@/components/ui/ResponsiveMedia";

export function PageHero({
  eyebrow,
  h1,
  lead,
  image,
  variant = "auto",
}: {
  eyebrow?: string | undefined;
  h1: string;
  lead: string;
  image?: string | undefined;
  variant?: MediaVariant;
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

  // If wide landscape banner: Render full-width landscape composition
  if (isLandscapeBanner && image) {
    return (
      <section className="relative overflow-hidden border-b border-border/80 bg-gradient-to-b from-sand via-background to-sand/40 py-10 sm:py-14 lg:py-16">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-teal/10 blur-3xl"
        />

        <div className="container-cc relative space-y-8 sm:space-y-10">
          {/* Header Info Area */}
          <div className="max-w-4xl space-y-4">
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
            <h1 className="text-3xl font-semibold leading-[1.12] tracking-tight text-navy sm:text-4xl lg:text-[2.9rem]">
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

  // Two-column layout for Clinic Photography, Transparent PNG Equipment, or Stats fallback
  return (
    <section className="relative overflow-hidden border-b border-border/80 bg-gradient-to-b from-sand via-background to-sand/40 py-12 lg:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-teal/10 blur-3xl"
      />

      <div className="container-cc relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
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
          <h1 className="text-3xl font-semibold leading-[1.12] tracking-tight text-navy sm:text-4xl lg:text-[2.9rem]">
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

        {/* Media Container or Trust Stats */}
        {image ? (
          <ResponsiveMedia src={image} alt={h1} variant={variant} priority />
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {site.stats.map((s) => (
              <div
                key={s.label}
                className="card-premium flex flex-col justify-between p-5"
              >
                <div className="font-display text-3xl font-bold text-teal">{s.value}</div>
                <div className="mt-2 text-xs font-bold tracking-wider text-muted-foreground uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
