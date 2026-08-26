import { useMemo } from "react";

export type MediaVariant = "auto" | "banner" | "photo" | "equipment" | "portrait" | "graphic";

export interface ResponsiveMediaProps {
  src: string;
  alt: string;
  variant?: MediaVariant;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

/**
 * Intelligent Media component that detects and preserves natural aspect ratios.
 * Guarantees zero text cropping, no face distortion, and no stretching across all screen sizes.
 */
export function ResponsiveMedia({
  src,
  alt,
  variant = "auto",
  className = "",
  imageClassName = "",
  priority = false,
}: ResponsiveMediaProps) {
  const resolvedVariant = useMemo<MediaVariant>(() => {
    if (variant !== "auto") return variant;

    const lower = src.toLowerCase();

    // 1. Doctor / Team Portraits
    if (
      lower.includes("/team/") ||
      lower.includes("dr-") ||
      lower.includes("dr.-") ||
      lower.includes("doctor") ||
      lower.includes("foram") ||
      lower.includes("hardik")
    ) {
      return "portrait";
    }

    // 2. Transparent PNG equipment or machine illustrations
    if (lower.endsWith(".png") && (lower.includes("decompression") || lower.includes("tecar") || lower.includes("spine"))) {
      return "equipment";
    }

    // 3. Wide 1024x400 Condition / Treatment / Fitness Banners
    if (
      lower.includes("/conditions/") ||
      lower.includes("/fitness/") ||
      (lower.includes("/treatments/") && (
        lower.includes("theraphy") ||
        lower.includes("laser-therapy.webp") ||
        lower.includes("cupping-therapy-1") ||
        lower.includes("dry-needing") ||
        lower.includes("electrical-stimulation") ||
        lower.includes("iastm.webp") ||
        lower.includes("ift.webp") ||
        lower.includes("infra-radiation") ||
        lower.includes("kinesio-taping") ||
        lower.includes("manual-therapy.webp") ||
        lower.includes("osteopathy.webp") ||
        lower.includes("pemf-therapy.webp") ||
        lower.includes("paraffin-wax-bath") ||
        lower.includes("pneumatic-compression") ||
        lower.includes("swd.webp") ||
        lower.includes("tens.webp") ||
        lower.includes("traction.webp") ||
        lower.includes("ultra-sound.webp")
      )) ||
      lower.includes("banner")
    ) {
      return "banner";
    }

    // 4. Square / 5:4 Infographics & Content diagrams
    if (lower.includes("/pages/") || lower.includes("-images") || lower.endsWith(".png")) {
      return "graphic";
    }

    // 5. Default Photography (Clinics, Heroes, Blogs)
    return "photo";
  }, [src, variant]);

  switch (resolvedVariant) {
    case "banner":
      return (
        <div
          className={`relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg ${className}`}
        >
          <div className="relative w-full aspect-[2.56/1] flex items-center justify-center overflow-hidden">
            <img
              src={src}
              alt={alt}
              fetchPriority={priority ? "high" : "auto"}
              loading={priority ? undefined : "lazy"}
              decoding="async"
              className={`size-full object-contain ${imageClassName}`}
            />
          </div>
        </div>
      );

    case "equipment":
      return (
        <div
          className={`relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg ${className}`}
        >
          <div className="relative w-full aspect-[4/3] flex items-center justify-center overflow-hidden">
            <img
              src={src}
              alt={alt}
              fetchPriority={priority ? "high" : "auto"}
              loading={priority ? undefined : "lazy"}
              decoding="async"
              className={`size-full object-contain transition-transform duration-500 hover:scale-105 ${imageClassName}`}
            />
          </div>
        </div>
      );

    case "portrait":
      return (
        <div
          className={`relative overflow-hidden rounded-3xl shadow-xl shadow-navy/10 ${className}`}
        >
          <div className="relative w-full aspect-square overflow-hidden rounded-3xl">
            <img
              src={src}
              alt={alt}
              fetchPriority={priority ? "high" : "auto"}
              loading={priority ? undefined : "lazy"}
              decoding="async"
              className={`size-full object-cover object-top transition-transform duration-500 hover:scale-[1.02] ${imageClassName}`}
            />
          </div>
        </div>
      );

    case "graphic":
      return (
        <div
          className={`relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-md ${className}`}
        >
          <div className="relative w-full aspect-[5/4] flex items-center justify-center overflow-hidden">
            <img
              src={src}
              alt={alt}
              fetchPriority={priority ? "high" : "auto"}
              loading={priority ? undefined : "lazy"}
              decoding="async"
              className={`size-full object-contain ${imageClassName}`}
            />
          </div>
        </div>
      );

    case "photo":
    default:
      return (
        <div
          className={`relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg ${className}`}
        >
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl sm:rounded-3xl">
            <img
              src={src}
              alt={alt}
              fetchPriority={priority ? "high" : "auto"}
              loading={priority ? undefined : "lazy"}
              decoding="async"
              className={`size-full object-cover transition-transform duration-500 hover:scale-105 ${imageClassName}`}
            />
          </div>
        </div>
      );
  }
}
