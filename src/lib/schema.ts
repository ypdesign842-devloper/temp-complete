import type { Location } from "@/data/locations";
import type { Post } from "@/data/posts";
import type { ContentPage, PostContent, PricingBlock, FAQItem } from "@/data/types";
import { site } from "@/data/site";
import { locations } from "@/data/locations";

export const SITE_URL = "https://completecare.in";
export const SITE_LOGO = `${SITE_URL}/assets/brand/completecare-logo.webp`;
export const SITE_IMAGE = `${SITE_URL}/assets/treatments/cc-home-page-image.webp`;

// Clinic coordinates and postal codes for exact Local SEO matching
export const locationGeo: Record<string, { lat: number; lng: number; postalCode: string; street: string }> = {
  Thaltej: {
    lat: 23.0538,
    lng: 72.5186,
    postalCode: "380059",
    street: "22, Ground Floor, Ayana Complex, Zydus Hospital Road, near Zydus Cancer Centre",
  },
  Gota: {
    lat: 23.0934,
    lng: 72.5358,
    postalCode: "382481",
    street: "318, 3rd Floor, Athena Avenue, Behind Jaguar Showroom",
  },
  "South Bopal": {
    lat: 23.0315,
    lng: 72.4632,
    postalCode: "380058",
    street: "A-218, 2nd Floor, Aarohi Galleria, Near Gala Aura",
  },
  Nikol: {
    lat: 23.0422,
    lng: 72.6685,
    postalCode: "382350",
    street: "Shop No. 4, Raspan Arcade, Near Rajhans Cinema",
  },
  Mehsana: {
    lat: 23.588,
    lng: 72.3693,
    postalCode: "384002",
    street: "11, Umiyanagar Society, Dairy Road",
  },
  Ankleshwar: {
    lat: 21.6264,
    lng: 73.0152,
    postalCode: "393002",
    street: "GF-15, Parashmani Complex, Near Parashmani Chokdi, GIDC",
  },
};

/**
 * Clean text for Schema.org json string (remove markdown links and bold)
 */
export function cleanSchemaText(str: string): string {
  return str.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "").trim();
}

/**
 * 1. Generate Organization + MedicalOrganization Schema (Sitewide / Homepage)
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: "Complete Care Physiotherapy",
    alternateName: ["Complete Care", "Complete Care Physiotherapy Clinic", "Complete Care Gujarat"],
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: SITE_LOGO,
      caption: "Complete Care Physiotherapy Logo",
    },
    image: SITE_IMAGE,
    telephone: "+91 8980 676 676",
    email: "info@completecare.in",
    foundingDate: "2010",
    founder: {
      "@type": "Person",
      name: "Dr. Hardik Patel (PT)",
      jobTitle: "Director & Senior Physical Therapist",
      url: `${SITE_URL}/best-physiotherapist-in-ahmedabad`,
    },
    medicalSpecialty: [
      "Physiotherapy",
      "Chiropractic",
      "Neurology",
      "Orthopedics",
      "SportsMedicine",
      "Pediatrics",
      "Geriatrics",
    ],
    priceRange: "₹500 - ₹2,000",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "85000",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: site.socials.map((s) => s.href),
    department: locations.map((loc) => generateLocalBranchSchema(loc)),
  };
}

/**
 * 2. Generate Local Branch Schema (Department / SubOrganization)
 */
export function generateLocalBranchSchema(loc: Location) {
  const geo = locationGeo[loc.name] || {
    lat: 23.0225,
    lng: 72.5714,
    postalCode: "380001",
    street: loc.address,
  };

  return {
    "@type": "PhysiotherapyClinic",
    "@id": `${SITE_URL}/${loc.slug}/#clinic`,
    name: `Complete Care Physiotherapy - ${loc.name} Centre`,
    url: `${SITE_URL}/${loc.slug}`,
    telephone: loc.phone,
    priceRange: "₹500 - ₹2,000",
    image: loc.hero ? `${SITE_URL}${loc.hero}` : SITE_IMAGE,
    address: {
      "@type": "PostalAddress",
      streetAddress: geo.street || loc.address,
      addressLocality: loc.city,
      addressRegion: "Gujarat",
      postalCode: geo.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.lat,
      longitude: geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    hasMap: loc.mapUrl,
    medicalSpecialty: [
      "Physiotherapy",
      "Chiropractic",
      "Neurology",
      "Orthopedics",
      "SportsMedicine",
    ],
    parentOrganization: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

/**
 * 3. Generate Standalone LocalBusiness Schema for Location Pages
 */
export function generateLocationPageSchema(loc: Location) {
  const geo = locationGeo[loc.name] || {
    lat: 23.0225,
    lng: 72.5714,
    postalCode: "380001",
    street: loc.address,
  };

  return {
    "@context": "https://schema.org",
    "@type": "PhysiotherapyClinic",
    "@id": `${SITE_URL}/${loc.slug}/#location-page`,
    name: `Complete Care Physiotherapy Center ${loc.name}, ${loc.city}`,
    description: loc.description || loc.lead,
    url: `${SITE_URL}/${loc.slug}`,
    telephone: loc.phone,
    priceRange: "₹500 - ₹2,000",
    image: loc.hero ? `${SITE_URL}${loc.hero}` : SITE_IMAGE,
    logo: SITE_LOGO,
    address: {
      "@type": "PostalAddress",
      streetAddress: geo.street || loc.address,
      addressLocality: loc.city,
      addressRegion: "Gujarat",
      postalCode: geo.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.lat,
      longitude: geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    hasMap: loc.mapUrl,
    medicalSpecialty: [
      "Physiotherapy",
      "Chiropractic",
      "Neurology",
      "Orthopedics",
      "SportsMedicine",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "85000",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      {
        "@type": "City",
        name: loc.city,
      },
      {
        "@type": "AdministrativeArea",
        name: "Gujarat",
      },
    ],
  };
}

/**
 * 4. Generate WebSite Schema
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: "Complete Care Physiotherapy",
    description: "Doctor led physiotherapy, chiropractic care, spine decompression and medical fitness in Ahmedabad, Gujarat.",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-IN",
  };
}

/**
 * 5. Generate BreadcrumbList Schema
 */
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * 6. Generate FAQPage Schema strictly when real visible FAQs are provided
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  if (!faqs || faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: cleanSchemaText(f.q),
      acceptedAnswer: {
        "@type": "Answer",
        text: cleanSchemaText(f.a),
      },
    })),
  };
}

/**
 * 7. Generate MedicalProcedure / MedicalWebPage Schema for Condition & Therapy Pages
 */
export function generateMedicalPageSchema(
  data: ContentPage,
  pricing?: PricingBlock | null
) {
  const pageUrl = `${SITE_URL}/${data.slug}`;
  const procedureName = cleanSchemaText(data.label || data.h1);

  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: data.title,
      headline: data.h1,
      description: data.description,
      inLanguage: "en-IN",
      image: data.image ? (data.image.startsWith("http") ? data.image : `${SITE_URL}${data.image}`) : SITE_IMAGE,
      about: {
        "@type": "MedicalSpecialty",
        name: data.group === "condition-neuro" ? "Neurology" : "Physiotherapy",
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "@id": `${pageUrl}/#procedure`,
      name: procedureName,
      procedureType: "NoninvasiveProcedure",
      bodyLocation: procedureName,
      followup: "Progressive physical rehabilitation and doctor supervised follow up",
      howPerformed: cleanSchemaText(data.lead),
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: pricing?.currency || "INR",
        lowPrice: pricing?.lowPrice ? String(pricing.lowPrice) : "500",
        highPrice: pricing?.highPrice ? String(pricing.highPrice) : "2000",
        offerCount: "1",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: pricing?.currency || "INR",
          minPrice: pricing?.lowPrice ? String(pricing.lowPrice) : "500",
          maxPrice: pricing?.highPrice ? String(pricing.highPrice) : "2000",
          unitText: "SESSION",
        },
        description: pricing?.context || "Session pricing ranges from ₹500 to ₹2,000 based on clinical assessment and modalities required.",
      },
    },
  ];

  return schemas;
}

/**
 * 8. Generate BlogPosting / Article Schema for Blog Posts
 */
export function generateArticleSchema(post: Post, content: PostContent) {
  const postUrl = `${SITE_URL}/${post.slug}`;
  const imageUrl = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `${SITE_URL}${post.image}`
    : SITE_IMAGE;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}/#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    headline: post.title,
    description: post.excerpt || content.lead || post.title,
    image: [imageUrl],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: content.author || "Dr. Hardik Patel (PT)",
      jobTitle: "Senior Physiotherapist & Clinical Director",
      url: `${SITE_URL}/best-physiotherapist-in-ahmedabad`,
    },
    publisher: {
      "@type": "Organization",
      name: "Complete Care Physiotherapy",
      logo: {
        "@type": "ImageObject",
        url: SITE_LOGO,
      },
      url: `${SITE_URL}/`,
    },
    inLanguage: "en-IN",
    articleSection: content.category || "Physiotherapy & Rehabilitation",
  };
}

/**
 * 9. Generate VideoObject Schema
 */
export function generateVideoSchema(video: {
  id: string;
  title: string;
  description: string;
  uploadDate?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    uploadDate: video.uploadDate || "2024-01-01T08:00:00+05:30",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}
