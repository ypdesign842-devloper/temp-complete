import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronRight,
  Eye,
  Home,
  Maximize2,
  ShieldCheck,
  X,
} from "lucide-react";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications & Professional Credentials | Complete Care Physiotherapy" },
      {
        name: "description",
        content:
          "View the recognized qualifications, university degrees (MPT & BPT), Gujarat State Council for Physiotherapy (GSCPT) registration, and IAP certifications for Dr. Hardik Patel and Complete Care clinical leadership.",
      },
      { property: "og:title", content: "Certifications & Professional Credentials | Complete Care Physiotherapy" },
      {
        property: "og:description",
        content:
          "Recognised Qualifications. Professional Standards. View verified clinical registrations, degrees, and memberships.",
      },
    ],
  }),
  component: CertificationsPage,
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

const certificatesList: CertificateItem[] = [
  {
    id: "gscpt-registration",
    title: "Certificate of Registration — Gujarat State Council for Physiotherapy (GSCPT)",
    category: "Official Statutory License",
    issuer: "Gujarat State Council for Physiotherapy, Government of Gujarat",
    recipient: "Dr. Patel Hardik Pravinbhai (PT)",
    regNumber: "GSCPT Registered Practitioner",
    description:
      "Statutory Council Registration certifying official authorization to practice clinical physiotherapy, rehabilitation, and patient consultation across Gujarat State.",
    src: "/assets/Certificates/CERTIFICATE OF REGISTRATION Gujarat State Council for Physiotherapy Gujarat State.jpeg",
    badge: "Government Licensed",
  },
  {
    id: "mpt-degree",
    title: "Master of Physiotherapy (MPT) Degree",
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
    issuer: "Recognized University Faculty of Medicine & Health Sciences",
    recipient: "Patel Hardik Pravinbhai",
    description:
      "Comprehensive 4.5-year clinical Bachelor of Physiotherapy degree covering clinical anatomy, neurophysiology, electrotherapy, kinesiology, and full-body manual rehabilitation.",
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

function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <div className="bg-[#f9f7ef] min-h-screen">
      {/* Hero Section */}
      <section className="py-10 sm:py-14 lg:py-16 border-b border-border/80">
        <div className="container-cc">
          <div className="max-w-3xl space-y-4">
            {/* Clean Standard Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
              <Link to="/" className="inline-flex items-center gap-1 hover:text-accent transition-colors">
                <Home className="size-3.5" />
                <span>Home</span>
              </Link>
              <ChevronRight aria-hidden="true" className="size-3 text-muted-foreground/60" />
              <Link to="/best-physiotherapy-clinic-in-ahmedabad" className="hover:text-accent transition-colors">
                About Complete Care
              </Link>
              <ChevronRight aria-hidden="true" className="size-3 text-muted-foreground/60" />
              <span className="text-navy font-bold">Certifications &amp; Credentials</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3.5 py-1 text-[11px] font-bold tracking-wider text-teal uppercase shadow-sm">
              <ShieldCheck className="size-3.5 text-accent" />
              <span>Verified Qualifications &amp; Council Licenses</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy leading-[1.12]">
              Certifications &amp; Professional Credentials
            </h1>

            <div className="pt-1">
              <h2 className="text-xl sm:text-2xl font-bold text-accent font-display">
                Recognised Qualifications. Professional Standards.
              </h2>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-muted-foreground">
                Our clinical credentials reflect the education, professional registration and continued commitment behind the care we provide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Certificates Showcase Gallery */}
      <section className="section-y">
        <div className="container-cc space-y-10">
          <div>
            <span className="badge-clinical text-teal">Original Documents</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-navy">
              Verified Clinical Certificates &amp; Council Registrations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl">
              Click on any certificate to inspect the full document in high resolution.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {certificatesList.map((cert) => (
              <div
                key={cert.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-navy/12 bg-white p-6 shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-xl"
              >
                <div>
                  {/* Certificate Image Frame with Zoom Trigger */}
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative cursor-pointer overflow-hidden rounded-2xl border border-navy/10 bg-slate-50 aspect-[3/4] flex items-center justify-center p-2 group-hover:border-accent/30 transition-colors"
                  >
                    <img
                      src={cert.src}
                      alt={cert.title}
                      loading="lazy"
                      className="size-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover Overlay with Zoom Button */}
                    <div className="absolute inset-0 flex items-center justify-center bg-navy/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-bold text-navy shadow-lg">
                        <Maximize2 className="size-3.5 text-accent" />
                        <span>Inspect Full Document</span>
                      </span>
                    </div>

                    <span className="absolute top-3 left-3 rounded-md bg-white/95 px-2.5 py-1 text-[10px] font-bold text-accent shadow-sm uppercase tracking-wider">
                      {cert.badge}
                    </span>
                  </div>

                  {/* Text Details */}
                  <div className="mt-5 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-teal">
                      {cert.category}
                    </div>
                    <h3 className="text-base font-bold text-navy group-hover:text-accent transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Verification Footer */}
                <div className="mt-6 border-t border-navy/10 pt-4 flex items-center justify-between">
                  <div className="text-[11px] font-medium text-navy/70">
                    <span className="text-muted-foreground">Conferred to: </span>
                    <strong className="text-navy">{cert.recipient}</strong>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline"
                  >
                    <span>View</span>
                    <Eye className="size-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal for High-Resolution Certificate Viewing */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/85 p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-h-[92vh] max-w-3xl w-full overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-slate-100 text-navy hover:bg-accent hover:text-white transition-colors"
              aria-label="Close document modal"
            >
              <X className="size-5" />
            </button>

            <div className="space-y-4">
              <div>
                <span className="rounded-md bg-accent/10 px-2.5 py-0.5 text-[10px] font-bold text-accent uppercase tracking-wider">
                  {selectedCert.category}
                </span>
                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-navy pr-10">
                  {selectedCert.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Issued by: <strong className="text-navy">{selectedCert.issuer}</strong> · Conferred to: <strong className="text-navy">{selectedCert.recipient}</strong>
                </p>
              </div>

              {/* Full Image Display */}
              <div className="overflow-hidden rounded-2xl border border-navy/10 bg-slate-50 p-3 max-h-[62vh] flex items-center justify-center">
                <img
                  src={selectedCert.src}
                  alt={selectedCert.title}
                  className="max-h-[58vh] w-auto object-contain rounded-lg"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <p className="text-xs text-muted-foreground max-w-md">
                  {selectedCert.description}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="rounded-xl bg-navy px-5 py-2.5 text-xs font-bold text-white hover:bg-accent transition-colors"
                >
                  Close Viewer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
