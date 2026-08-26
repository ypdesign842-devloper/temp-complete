import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronRight,
  Eye,
  FileCheck,
  ShieldCheck,
  X,
} from "lucide-react";
import { PageHero } from "@/components/blocks/PageHero";
import { BlockContent } from "@/components/blocks/BlockContent";
import { AppointmentForm } from "@/components/blocks/AppointmentForm";
import { Testimonials } from "@/components/blocks/Testimonials";
import { CtaBand } from "@/components/blocks/CtaBand";
import { content } from "@/content/pages/best-physiotherapist-in-ahmedabad";
import {
  generateBreadcrumbSchema,
  SITE_URL,
  SITE_LOGO,
} from "@/lib/schema";

export const Route = createFileRoute("/best-physiotherapist-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Best Physiotherapist in Ahmedabad | Dr. Hardik Patel (PT) | Complete Care" },
      {
        name: "description",
        content:
          "Meet Dr. Hardik Patel (PT), Director of Complete Care — 16+ years clinical experience, MPT (Orthopaedics), FOMT (Australia), GSCPT registration, and 85,000+ patient recoveries across 6 Gujarat centres.",
      },
      { property: "og:title", content: "Best Physiotherapist in Ahmedabad | Dr. Hardik Patel (PT) | Complete Care" },
      {
        property: "og:description",
        content:
          "Meet Dr. Hardik Patel (PT) — Specialist in Chiropractic Adjustments, Spine Decompression, Dry Needling, and Orthopaedic Rehabilitation.",
      },
      { property: "og:image", content: "https://completecare.in/assets/treatments/Complete-Care-Doctor-Image-cc.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/treatments/Complete-Care-Doctor-Image-cc.webp" },
    ],
  }),
  component: BestPhysiotherapistPage,
});

type CertificateItem = {
  id: string;
  title: string;
  category: string;
  issuer: string;
  recipient: string;
  regNumber?: string;
  description: string;
  src: string;
  badge: string;
};

const doctorCertificates: CertificateItem[] = [
  {
    id: "gscpt-registration",
    title: "Certificate of Registration — Gujarat State Council for Physiotherapy (GSCPT)",
    category: "Official Statutory License",
    issuer: "Gujarat State Council for Physiotherapy, Government of Gujarat",
    recipient: "Dr. Patel Hardik Pravinbhai (PT)",
    regNumber: "GSCPT Registered Practitioner",
    description:
      "Statutory Council Registration certifying official authorization to practice clinical physiotherapy, physical rehabilitation, and patient consultation across Gujarat State.",
    src: "/assets/Certificates/CERTIFICATE OF REGISTRATION Gujarat State Council for Physiotherapy Gujarat State.jpeg",
    badge: "Government Licensed",
  },
  {
    id: "mpt-degree",
    title: "Master of Physiotherapy (MPT) in Orthopaedics Degree",
    category: "Postgraduate University Degree",
    issuer: "Chaudhary Charan Singh University, Meerut",
    recipient: "Patel Hardik Pravinbhai",
    description:
      "Postgraduate Master of Physiotherapy degree with specialized advanced clinical research and practice in musculoskeletal disorders, spine rehabilitation, and biomechanics.",
    src: "/assets/Certificates/Hardik Pravinbhai Patel MASTER OF PHYSIOTHERAPY.png",
    badge: "Post-Graduate MPT",
  },
  {
    id: "bpt-degree",
    title: "Bachelor of Physiotherapy (BPT) Degree",
    category: "Clinical Undergraduate Degree",
    issuer: "SBB College of Physiotherapy, V.S. Hospital",
    recipient: "Patel Hardik Pravinbhai",
    description:
      "Comprehensive 4.5 year clinical Bachelor of Physiotherapy degree covering clinical anatomy, neurophysiology, electrotherapy, kinesiology, and full body manual rehabilitation.",
    src: "/assets/Certificates/Patel Hardik Pravinbhai Bachelor of Physiotherapy.jpeg",
    badge: "Foundational BPT",
  },
  {
    id: "iap-life-membership",
    title: "Life Membership Certificate — The Indian Association of Physiotherapists (IAP)",
    category: "National Professional Fellowship",
    issuer: "The Indian Association of Physiotherapists (IAP)",
    recipient: "Dr. Patel Hardik Pravinbhai",
    description:
      "Official Life Membership in India's apex national physiotherapy association, reflecting ethical practice, continuing medical education (CME), and leadership in physiotherapy standards.",
    src: "/assets/Certificates/THE INDIAN ASSOCIATION OF PHYSIOTHERAPISTS 2.jpeg",
    badge: "IAP Life Member",
  },
  {
    id: "iap-registration",
    title: "Certificate of Membership & Registration — IAP",
    category: "National Association Registration",
    issuer: "The Indian Association of Physiotherapists (IAP)",
    recipient: "Dr. Patel Hardik Pravinbhai",
    description:
      "Verified national membership registry confirming adherence to standard operating clinical protocols, patient safety standards, and advanced treatment ethics.",
    src: "/assets/Certificates/THE INDIAN ASSOCIATION OF PHYSIOTHERAPISTS.jpeg",
    badge: "IAP Certified",
  },
];

function BestPhysiotherapistPage() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": `${SITE_URL}/best-physiotherapist-in-ahmedabad/#doctor`,
      name: "Dr. Hardik Patel (PT)",
      jobTitle: "Founder, Senior Physiotherapist & Clinical Director",
      description:
        "Senior Physiotherapist and Director of Complete Care with 16+ years of clinical experience specializing in Chiropractic Adjustments, Spine Decompression, and Orthopaedic Rehabilitation.",
      url: `${SITE_URL}/best-physiotherapist-in-ahmedabad`,
      image: `${SITE_URL}/assets/treatments/Complete-Care-Doctor-Image-cc.webp`,
      medicalSpecialty: [
        "Physiotherapy",
        "Chiropractic",
        "Orthopedics",
        "Neurology",
        "SportsMedicine",
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "SBB College of Physiotherapy, V.S. Hospital",
        },
        {
          "@type": "EducationalOrganization",
          name: "Chaudhary Charan Singh University",
        },
      ],
      worksFor: {
        "@type": "MedicalOrganization",
        name: "Complete Care Physiotherapy",
        url: `${SITE_URL}/`,
        logo: SITE_LOGO,
      },
      telephone: "+91 8980 676 676",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "85000",
        bestRating: "5",
        worstRating: "1",
      },
    },
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "About Us", url: "/best-physiotherapy-clinic-in-ahmedabad" },
      { name: "Dr. Hardik Patel (PT)", url: "/best-physiotherapist-in-ahmedabad" },
    ]),
  ];

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      {/* 1. HERO SECTION */}
      <PageHero
        eyebrow="FOUNDER & CLINICAL DIRECTOR · COMPLETE CARE"
        h1={content.h1}
        lead={content.lead}
        image={content.hero}
        slug="best-physiotherapist-in-ahmedabad"
      />

      {/* 2. MAIN 2-COLUMN SECTION (Biography & Form) */}
      <section className="section-y bg-background">
        <div className="container-cc grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          {/* Left Column: Biography & Details */}
          <div className="space-y-10">
            <BlockContent blocks={content.blocks} />
          </div>

          {/* Right Column: Clean Sticky Appointment Form */}
          <div className="lg:sticky lg:top-28">
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* 3. VERIFIED CERTIFICATES & UNIVERSITY DEGREES SECTION (Directly above Google Reviews) */}
      <section id="certificates" className="py-14 sm:py-18 bg-[#f9f7ef] border-y border-border/80">
        <div className="container-cc space-y-8">
          <div className="max-w-3xl space-y-2.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/5 px-3.5 py-1.5 text-xs font-bold tracking-wider text-teal uppercase">
              <FileCheck className="size-3.5" />
              <span>STATUTORY LICENSES & QUALIFICATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight">
              Verified Certificates & University Degrees
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Dr. Hardik Patel holds recognized statutory council registration, postgraduate university degrees, and apex national associations memberships. Click any certificate to inspect full resolution credentials.
            </p>
          </div>

          {/* Certificate Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctorCertificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/90 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-teal/50 hover:shadow-xl hover:shadow-navy/10 cursor-pointer"
              >
                <div>
                  {/* Thumbnail with Zoom Hover */}
                  <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl bg-sand/60 border border-border/60">
                    <img
                      src={cert.src}
                      alt={cert.title}
                      className="size-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-navy/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-navy shadow-lg">
                        <Eye className="size-3.5 text-accent" />
                        <span>Click to Preview</span>
                      </span>
                    </div>
                  </div>

                  {/* Badge & Category */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 rounded-md bg-teal/10 px-2.5 py-1 text-[11px] font-bold text-teal">
                      <ShieldCheck className="size-3" />
                      <span>{cert.badge}</span>
                    </span>
                    <span className="text-[11px] font-medium text-muted-foreground">{cert.category}</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-navy group-hover:text-accent transition-colors leading-snug line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Authority */}
                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-semibold text-navy/90 truncate max-w-[200px]">{cert.issuer}</span>
                  <span className="inline-flex items-center gap-1 text-teal font-bold group-hover:underline">
                    <span>Inspect</span>
                    <ChevronRight className="size-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-teal/20 bg-white p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-sm font-bold text-navy">Looking for complete organizational certifications?</p>
              <p className="text-xs text-muted-foreground">Explore all clinic registration documents, facility credentials, and therapist affiliations.</p>
            </div>
            <Link
              to="/certifications"
              className="inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-teal/90 transition-colors whitespace-nowrap"
            >
              <span>View All Certifications</span>
              <ChevronRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. GOOGLE REVIEWS / PATIENT STORIES */}
      <Testimonials />

      {/* 5. CTA BAND */}
      <CtaBand />

      {/* 6. FULLSCREEN CERTIFICATE LIGHTBOX MODAL */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 p-4 sm:p-6 backdrop-blur-md animate-cc-fade"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl animate-cc-scale flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border/80 bg-sand/60 px-5 py-4">
              <div className="space-y-0.5">
                <span className="inline-block rounded-md bg-teal/10 px-2 py-0.5 text-[10px] font-bold text-teal">
                  {selectedCert.badge}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-navy line-clamp-1">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate preview"
                className="flex size-9 items-center justify-center rounded-full bg-white text-navy hover:bg-sand transition-colors border border-border shadow-xs"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Certificate Image */}
            <div className="flex-1 overflow-auto bg-[#faf8f5] p-4 sm:p-8 flex items-center justify-center">
              <img
                src={selectedCert.src}
                alt={selectedCert.title}
                className="max-h-[60vh] w-auto rounded-lg shadow-lg border border-border/60 object-contain"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="border-t border-border/80 bg-white p-4 sm:p-5 space-y-2">
              <div className="flex flex-wrap items-center justify-between text-xs text-muted-foreground gap-2">
                <span>
                  <strong>Recipient:</strong> {selectedCert.recipient}
                </span>
                <span>
                  <strong>Authority:</strong> {selectedCert.issuer}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {selectedCert.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
