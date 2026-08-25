import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/blocks/CtaBand";
import { teamBranches } from "@/data/team";
import { site } from "@/data/site";
import {
  Award,
  Calendar,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  HeartPulse,
  Home,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/our-team")({
  head: () => ({
    meta: [
      { title: "Our Clinical Team | Complete Care Physiotherapy, Gujarat" },
      {
        name: "description",
        content:
          "Meet the Complete Care clinical team across Gota, Thaltej, Nikol, Mehsana and Ankleshwar — licensed physiotherapists with GSCPT registration led by Dr. Hardik Patel (PT).",
      },
      { property: "og:title", content: "Our Clinical Team | Complete Care Physiotherapy, Gujarat" },
      {
        property: "og:description",
        content: "Qualified physiotherapists and fitness trainers across all Complete Care centres in Gujarat.",
      },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="bg-[#f9f7ef] min-h-screen">
      {/* Clean Modern 2-Column Hero Section */}
      <section className="py-10 sm:py-14 lg:py-16 border-b border-border/80">
        <div className="container-cc">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-center">
            {/* LEFT SIDE: Breadcrumbs, Badge, H1, Lead, CTAs */}
            <div className="space-y-4">
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
                <span className="text-navy font-bold">Our Clinical Team</span>
              </nav>

              <div className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3.5 py-1 text-[11px] font-bold tracking-wider text-teal uppercase shadow-sm">
                <Sparkles className="size-3.5 text-accent" />
                <span>Clinical Leadership &amp; 40+ Licensed Therapists</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy leading-[1.15]">
                Meet Our Clinical Team
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground pt-1">
                Directed by <strong className="text-navy">Dr. Hardik Patel (PT)</strong> and <strong className="text-navy">Dr. Foram Patel (PT)</strong>, Complete Care brings together over 40+ licensed physical therapists, certified chiropractors, and clinical rehabilitation specialists across Gujarat.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#166534] via-[#15803d] to-[#16a34a] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#166534]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#166534]/35 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Calendar className="size-4 text-emerald-200" />
                  <span>Book Consultation</span>
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2.5 rounded-full border border-navy/15 bg-white/90 px-6 py-3.5 text-sm font-bold text-navy shadow-sm transition-all duration-300 hover:border-[#16803d]/40 hover:bg-white hover:text-[#16803d] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Phone className="size-4 text-[#16803d]" />
                  <span>{site.phone}</span>
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: Editorial Highlight Area */}
            <div className="rounded-3xl border border-navy/12 bg-white/80 p-6 sm:p-8 backdrop-blur-sm shadow-sm space-y-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-navy">
                  A Multidisciplinary Team
                </h2>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Experienced professionals working together to deliver personalized physiotherapy, chiropractic care, rehabilitation, and fitness solutions.
                </p>
              </div>

              <ul className="space-y-2.5 pt-2 border-t border-navy/10">
                <li className="flex items-center gap-2.5 text-sm font-semibold text-navy">
                  <CheckCircle2 className="size-4 text-accent shrink-0" />
                  <span>Licensed Physiotherapists</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm font-semibold text-navy">
                  <CheckCircle2 className="size-4 text-accent shrink-0" />
                  <span>Certified Chiropractors</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm font-semibold text-navy">
                  <CheckCircle2 className="size-4 text-accent shrink-0" />
                  <span>Neuro &amp; Sports Rehabilitation Specialists</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm font-semibold text-navy">
                  <CheckCircle2 className="size-4 text-accent shrink-0" />
                  <span>Fitness &amp; Rehabilitation Professionals</span>
                </li>
              </ul>

              <div className="pt-2 border-t border-navy/10 text-xs font-semibold text-teal tracking-wide">
                40+ Clinical Professionals · 6 Centres Across Gujarat
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director Spotlight Section */}
      <section className="section-y bg-background border-b border-border">
        <div className="container-cc space-y-10">
          {/* 1. Dr. Hardik Patel */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-sand via-background to-sand/50 p-8 shadow-xl sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.8fr] lg:items-center">
              <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border-4 border-white shadow-xl">
                <img
                  src="/assets/treatments/Complete-Care-Doctor-Image-cc.webp"
                  alt="Dr. Hardik Patel (PT), Director, Complete Care"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/90 p-3 text-center backdrop-blur-md">
                  <div className="text-xs font-bold text-navy">Dr. Hardik Patel (PT)</div>
                  <div className="text-[11px] font-semibold text-accent">Director &amp; Chief Physiotherapist</div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3.5 py-1 text-xs font-bold tracking-wider text-teal uppercase">
                  <Award className="size-3.5 text-accent" />
                  <span>16+ Years Clinical Excellence</span>
                </div>

                <h2 className="text-3xl font-semibold leading-tight text-navy sm:text-4xl">
                  Dr. Hardik Patel (PT)
                </h2>

                <p className="text-sm font-bold tracking-wider text-accent uppercase">
                  Director · Certified Chiropractor · Senior Physical Therapist (FOMT Australia)
                </p>

                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Dr. Hardik Patel is a pioneering clinical director in non surgical  spinal care in Gujarat. With over
                  16 years of expertise, he has guided thousands of patients away from invasive spine and joint surgeries
                  through evidence based decompression, precision manual chiropractic adjustments, and personalized
                  neuro-muscular rehabilitation.
                </p>

                <div className="grid gap-3 sm:grid-cols-2 pt-2">
                  {[
                    "Certified Chiropractic Alignment",
                    "US-FDA Spinal Decompression Protocol",
                    "Sports Injury & ACL Rehabilitation",
                    "Stroke & Neurological Recovery",
                  ].map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-sm font-semibold text-navy">
                      <CheckCircle2 className="size-4 text-accent shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-md transition-all hover:bg-emerald-600"
                  >
                    <span>Consult with Dr. Hardik Patel</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Dr. Foram Patel */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-sand via-background to-sand/50 p-8 shadow-xl sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.8fr] lg:items-center">
              <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border-4 border-white shadow-xl">
                <img
                  src="/assets/fitness/dr.-foram-patel-cc.webp"
                  alt="Dr. Foram Patel (PT), Founder & Fitness Director"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/90 p-3 text-center backdrop-blur-md">
                  <div className="text-xs font-bold text-navy">Dr. Foram Patel (PT)</div>
                  <div className="text-[11px] font-semibold text-accent">Founder &amp; Fitness Director</div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3.5 py-1 text-xs font-bold tracking-wider text-teal uppercase">
                  <Award className="size-3.5 text-accent" />
                  <span>7+ Years Clinical &amp; Fitness Leadership</span>
                </div>

                <h2 className="text-3xl font-semibold leading-tight text-navy sm:text-4xl">
                  Dr. Foram Patel (PT)
                </h2>

                <p className="text-sm font-bold tracking-wider text-accent uppercase">
                  Founder &amp; Director · Master Fitness Trainer (YOS Certified) · Women's Health Specialist
                </p>

                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Dr. Foram Patel combines clinical physical therapy with certified fitness training. Holding a BPT from SNDT University, a Fellowship in Manual Therapy, and Master's in Fitness Training, she pioneers women's rehabilitation, prenatal/postnatal fitness, clinical Pilates, and weight management across Complete Care.
                </p>

                <div className="grid gap-3 sm:grid-cols-2 pt-2">
                  {[
                    "Pre- & Postnatal Fitness Protocols",
                    "Clinical Pilates & Core Rehabilitation",
                    "Manual Joint Mobilization & Dry Needling",
                    "Advanced Female Fitness & Nutrition",
                  ].map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-sm font-semibold text-navy">
                      <CheckCircle2 className="size-4 text-accent shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-md transition-all hover:bg-emerald-600"
                  >
                    <span>Consult with Dr. Foram Patel</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Clinical Teams */}
      {teamBranches.map((branch, idx) => (
        <section
          key={branch.branch}
          className={`section-y ${idx % 2 === 0 ? "bg-sand" : "bg-background"}`}
        >
          <div className="container-cc">
            <div className="flex items-center justify-between">
              <div>
                <span className="badge-clinical text-teal">
                  Branch Team
                </span>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
                  {branch.branch}
                </h2>
              </div>
              <span className="badge-emerald text-xs hidden sm:inline-flex">
                {branch.members.length} Practitioners
              </span>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {branch.members.map((m) => (
                <div
                  key={m.name + branch.branch}
                  className="card-premium card-premium-hover flex flex-col justify-between overflow-hidden p-5"
                >
                  <div>
                    {m.image ? (
                      <div className="mb-4 overflow-hidden rounded-xl border border-border bg-sand">
                        <img
                          src={m.image}
                          alt={m.name}
                          loading="lazy"
                          className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="mb-4 flex aspect-[4/5] w-full items-center justify-center rounded-xl bg-sand text-teal/40">
                        <UserCheck className="size-12" />
                      </div>
                    )}
                    <h3 className="text-base font-bold text-navy">{m.name}</h3>
                    {m.qualification && (
                      <p className="mt-1 text-xs font-semibold text-muted-foreground">{m.qualification}</p>
                    )}
                  </div>

                  <div className="mt-4 border-t border-border pt-3 flex items-center justify-between">
                    {m.credential ? (
                      <span className="badge-emerald text-[10px]">{m.credential}</span>
                    ) : (
                      <span className="text-[11px] font-semibold text-teal">Licensed PT</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand />
    </div>
  );
}
