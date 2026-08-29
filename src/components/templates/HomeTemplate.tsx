import { Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Award,
  Calendar,
  CheckCircle2,
  ChevronRight,
  HeartPulse,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { CtaBand } from "@/components/blocks/CtaBand";
import { AppointmentForm } from "@/components/blocks/AppointmentForm";
import { BlogCard, LinkCard } from "@/components/blocks/Cards";
import { FaqAccordion } from "@/components/blocks/FaqAccordion";
import { locations } from "@/data/locations";
import { Testimonials } from "@/components/blocks/Testimonials";
import { homeFaqs } from "@/data/faqs";
import { posts } from "@/data/posts";
import { site } from "@/data/site";
import { modalities, neuroConditions, orthoConditions } from "@/data";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateFAQSchema,
} from "@/lib/schema";

export function HomeTemplate() {
  const schemas = [
    generateWebSiteSchema(),
    generateOrganizationSchema(),
    generateFAQSchema(homeFaqs),
  ].filter(Boolean);

  return (
    <>
      {/* Schema.org Structured Data (WebSite, MedicalOrganization, 6 Branches, FAQs) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      {/* Cinematic Hero Section */}
      <section className="relative overflow-hidden border-b border-border/80 bg-[#f9f7ef] py-12 sm:py-16 lg:py-20">
        {/* Subtle decorative background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-teal/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-0 h-80 w-80 rounded-full bg-leaf/10 blur-3xl"
        />

        <div className="container-cc relative grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* Left Column: Hero Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white/90 px-3.5 py-1.5 shadow-sm backdrop-blur-sm">
              <Sparkles className="size-3.5 text-accent" />
              <h1 className="text-xs font-bold tracking-wider text-navy uppercase">
                Best Physiotherapy Centre in Ahmedabad
              </h1>
            </div>

            <p className="text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.6rem]">
              Expert Physiotherapy for <span className="text-accent">Better Movement</span> and Lasting Recovery.
            </p>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Directed by <strong className="font-semibold text-navy">{site.director}</strong> and a dedicated team
              of 40+ licensed physical therapists (BPT/MPT), we integrate precision chiropractic adjustments, US FDA approved
              spinal decompression, PEMF cellular therapy, Class IV laser, and neuro rehabilitation to restore pain free mobility
              without surgery.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-4 text-sm font-bold text-accent-foreground shadow-md shadow-accent/20 transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-accent/30"
              >
                <Calendar className="size-4" />
                <span>Book Consultation</span>
              </a>
              <Link
                to="/top-physiotherapy-services-center-in-ahmedabad"
                className="inline-flex items-center gap-2 rounded-xl border border-navy/20 bg-white px-7 py-4 text-sm font-bold text-navy shadow-sm transition-all hover:border-navy hover:bg-navy hover:text-white"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-6 sm:grid-cols-4 border-t border-border/80">
              {site.stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-border/60 bg-white p-3.5 shadow-sm">
                  <div className="text-2xl font-bold text-teal sm:text-3xl tracking-tight">{s.value}</div>
                  <div className="mt-1 text-[11px] font-semibold leading-tight text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Showcase with cc-home-page-image (Transparent Background, Fully Visible) */}
          <div className="relative flex items-center justify-center py-4 lg:py-0">
            <img
              src="/assets/treatments/cc-home-page-image.webp"
              srcSet="/assets/treatments/cc-home-page-image-500w.webp 500w, /assets/treatments/cc-home-page-image.webp 1000w"
              sizes="(max-width: 640px) 420px, (max-width: 1024px) 500px, 580px"
              alt="Complete Care Physiotherapy Centres across Gujarat"
              width={580}
              height={580}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[540px] xl:max-w-[580px] h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* Why Complete Care Section */}
      <section className="section-y bg-[#f9f7ef]">
        <div className="container-cc grid gap-12 lg:grid-cols-[1.38fr_1fr] lg:items-start">
          <div className="space-y-8">
            <div>
              <span className="badge-clinical text-teal">
                Why Complete Care
              </span>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
                Clinical Expertise. Personalised Care. Better Recovery.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Every patient at Complete Care begins with a detailed clinical assessment by an experienced physiotherapist. Your care plan is tailored to your condition, movement, goals, and recovery needs bringing together evidence informed physiotherapy, rehabilitation, and guided exercise for a structured path toward better function and long term wellbeing.
              </p>
            </div>

            {/* Checklist Grid */}
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Detailed physiotherapist led clinical assessment",
                "Advanced modalities: Laser, PEMF, TECAR & Decompression",
                "Certified Chiropractic & manual joint mobilization",
                "Comprehensive neuro and post surgical rehabilitation",
                "Doorstep home physiotherapy across Ahmedabad",
                "Supervised medical fitness to prevent recurrence",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border/80 bg-white p-3.5 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Clinical Leadership & Directors Spotlight — 2 Large Executive Profile Cards */}
            <div className="space-y-6 pt-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-3">
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-teal uppercase">
                  <ShieldCheck className="size-4 text-accent" />
                  <span>Clinical Directors &amp; Fitness Leadership</span>
                </div>
                <Link
                  to="/our-team"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent transition-colors hover:text-navy"
                >
                  <span>Meet All 40+ Specialists</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>

              <div className="space-y-5">
                {/* 1. Dr. Hardik Patel (PT) — Executive Leadership Card */}
                <div className="group relative overflow-hidden rounded-3xl border border-navy/12 bg-white p-6 shadow-xl shadow-navy/6 transition-all duration-300 hover:border-accent/40 hover:shadow-2xl sm:p-7">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                    <div className="relative h-48 w-36 shrink-0 overflow-hidden rounded-2xl border-2 border-border/80 bg-[#f9f7ef] shadow-md sm:w-40 sm:h-52">
                      <img
                        src="/assets/treatments/Complete-Care-Doctor-Image-cc.webp"
                        alt="Dr. Hardik Patel (PT), Director & Chief Physiotherapist at Complete Care"
                        loading="lazy"
                        className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-2 left-2 right-2 rounded-lg bg-navy/90 py-1 text-center backdrop-blur-sm">
                        <span className="text-[10px] font-bold text-white tracking-wider">16+ Yrs Exp</span>
                      </div>
                    </div>
                    <div className="space-y-2.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <Link to="/best-physiotherapist-in-ahmedabad" className="text-xl sm:text-2xl font-bold text-navy hover:text-accent transition-colors">
                          Dr. Hardik Patel (PT)
                        </Link>
                        <span className="badge-emerald text-xs px-2.5 py-0.5 font-bold">Director</span>
                      </div>
                      <p className="text-xs font-bold tracking-wider text-teal uppercase">
                        Certified Chiropractor &amp; Senior Physical Therapist (FOMT Australia)
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        With 16+ years of clinical experience across Gujarat, Dr. Hardik Patel leads a team of 40+ licensed physiotherapists. His clinical expertise includes spinal care, joint rehabilitation, chiropractic care, and neuro rehabilitation.
                      </p>
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f9f7ef] px-3 py-1 text-xs font-semibold text-navy">
                          <Award className="size-3.5 text-accent" />
                          <span>Spine &amp; Neuro Rehab Lead</span>
                        </span>
                        <Link
                          to="/best-physiotherapist-in-ahmedabad"
                          className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-xs font-bold text-accent-foreground shadow-sm transition-all hover:bg-emerald-600"
                        >
                          <span>View Clinical Profile</span>
                          <ArrowUpRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Dr. Foram Patel (PT) — Executive Leadership Card */}
                <div className="group relative overflow-hidden rounded-3xl border border-navy/12 bg-white p-6 shadow-xl shadow-navy/6 transition-all duration-300 hover:border-accent/40 hover:shadow-2xl sm:p-7">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                    <div className="relative h-48 w-36 shrink-0 overflow-hidden rounded-2xl border-2 border-border/80 bg-[#f9f7ef] shadow-md sm:w-40 sm:h-52">
                      <img
                        src="/assets/fitness/dr.-foram-patel-cc.webp"
                        alt="Dr. Foram Patel (PT), Founder & Fitness Director at Complete Care"
                        loading="lazy"
                        className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-2 left-2 right-2 rounded-lg bg-navy/90 py-1 text-center backdrop-blur-sm">
                        <span className="text-[10px] font-bold text-white tracking-wider">7+ Yrs Exp</span>
                      </div>
                    </div>
                    <div className="space-y-2.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <Link to="/female-fitness-trainer-in-ahmedabad" className="text-xl sm:text-2xl font-bold text-navy hover:text-accent transition-colors">
                          Dr. Foram Patel (PT)
                        </Link>
                        <span className="badge-emerald text-xs px-2.5 py-0.5 font-bold">Founder &amp; Director</span>
                      </div>
                      <p className="text-xs font-bold tracking-wider text-teal uppercase">
                        Master Fitness Trainer (YOS Certified) &amp; Women's Health Specialist
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Dr. Foram Patel specialises in women’s rehabilitation, prenatal and postnatal fitness, clinical Pilates, manual therapy, and personalised fitness programs. She brings a focused approach to women’s health and long term physical wellbeing.
                      </p>
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f9f7ef] px-3 py-1 text-xs font-semibold text-navy">
                          <Sparkles className="size-3.5 text-accent" />
                          <span>Fitness &amp; Women's Rehab Lead</span>
                        </span>
                        <Link
                          to="/female-fitness-trainer-in-ahmedabad"
                          className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-xs font-bold text-accent-foreground shadow-sm transition-all hover:bg-emerald-600"
                        >
                          <span>View Profile &amp; Classes</span>
                          <ArrowUpRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Booking Form */}
          <div className="lg:sticky lg:top-28">
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Advanced Treatments & Modalities Showcase — Clean Light Layout on #f9f7ef */}
      <section className="section-y bg-[#f9f7ef] border-t border-border/80">
        <div className="container-cc">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="badge-clinical text-teal">
                Advanced Modalities
              </span>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-navy sm:text-4xl">
                Hospital grade physiotherapy technology under one roof
              </h2>
            </div>
            <Link
              to="/top-physiotherapy-services-center-in-ahmedabad"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-sm transition-all hover:bg-emerald-600 hover:shadow-md"
            >
              <span>View All Services</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* Modality Grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modalities.slice(0, 12).map((m) => (
              <Link
                key={m.slug}
                to={`/${m.slug}` as never}
                className="group relative flex flex-col justify-between rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold tracking-wider text-teal uppercase">
                      Clinical Modality
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-navy group-hover:text-accent transition-colors">
                    {m.label}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {m.lead}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-accent">
                  <span>Learn more</span>
                  <span>&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Specialised Chiropractic & Spinal Health Section */}
      <section className="section-y bg-[#f9f7ef] border-t border-border/80 overflow-hidden">
        <div className="container-cc">
          {/* Main Showcase Panel */}
          <div className="relative overflow-hidden rounded-3xl border border-navy/12 bg-white p-4 sm:p-8 lg:p-12 shadow-sm">
            {/* Subtle background decorative glows */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 size-96 rounded-full bg-teal/5 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/3 top-1/4 size-72 rounded-full bg-[#16803d]/5 blur-2xl"
            />

            <div className="relative grid gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Column (Zone 1) - Typography & CTA */}
              <div className="space-y-4 sm:space-y-5 lg:col-span-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-[#f9f7ef] px-3 sm:px-3.5 py-1 text-[11px] sm:text-xs font-bold tracking-wider text-teal uppercase">
                  <ShieldCheck className="size-3.5 text-accent" />
                  <span>SPECIALISED CHIROPRACTIC CARE</span>
                </div>

                <h2 className="text-2xl sm:text-4xl lg:text-[2.4rem] font-semibold leading-tight text-navy">
                  Expert Chiropractic Care for Better Spinal Health
                </h2>

                <div className="space-y-3 sm:space-y-3.5 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  <p>
                    Dr. Hardik Patel (PT) brings a specialised clinical approach to chiropractic care, combining spinal expertise with a strong focus on posture, mobility, alignment, and functional recovery.
                  </p>
                  <p>
                    Complete Care delivers personalised care through detailed assessment, precise chiropractic techniques, and structured rehabilitation for neck pain, back pain, sciatica, and other spinal conditions.
                  </p>
                </div>

                <div className="pt-2 hidden lg:block">
                  <Link
                    to="/chiropractic-treatment-in-ahmedabad"
                    className="inline-flex items-center gap-2.5 rounded-xl bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-md shadow-accent/20 transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-accent/30"
                  >
                    <span>Book a Chiropractic Consultation</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>

              {/* Right Stage (Zone 2 & Zone 3) - Unified Connected Spine & Doctor Visual */}
              <div className="relative lg:col-span-7 flex items-center justify-center lg:justify-center py-1 sm:py-2 lg:-translate-x-4 xl:-translate-x-8">
                <div className="relative flex items-center justify-center max-w-full">
                  {/* Spine & Connected Callouts Wrapper */}
                  <div className="relative w-[130px] xs:w-[150px] sm:w-[320px] md:w-[360px] lg:w-[390px] h-[280px] xs:h-[310px] sm:h-[390px] lg:h-[430px] flex items-center justify-center shrink-0">
                    {/* Spine Image */}
                    <img
                      src="/assets/heroes/Floating%20spine.webp"
                      alt="Anatomical spinal column"
                      loading="lazy"
                      className="relative z-0 h-full w-auto object-contain drop-shadow-xl"
                    />

                    {/* SVG Connection Lines overlay connecting markers directly to spine vertebrae (Desktop/Tablet only) */}
                    <svg
                      className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none z-10"
                      viewBox="0 0 390 430"
                      fill="none"
                    >
                      {/* Line 1: Neck Pain to Upper Cervical Spine */}
                      <path
                        d="M 115 50 L 160 50 L 195 55"
                        stroke="#16803d"
                        strokeWidth="2"
                        strokeDasharray="4 3"
                        strokeOpacity="0.85"
                      />
                      <circle cx="195" cy="55" r="5" fill="#16803d" />
                      <circle cx="195" cy="55" r="9" fill="#16803d" fillOpacity="0.25" />

                      {/* Line 2: Back Pain to Mid Thoracic/Lumbar Spine */}
                      <path
                        d="M 115 195 L 165 195 L 210 195"
                        stroke="#16803d"
                        strokeWidth="2"
                        strokeDasharray="4 3"
                        strokeOpacity="0.85"
                      />
                      <circle cx="210" cy="195" r="5" fill="#16803d" />
                      <circle cx="210" cy="195" r="9" fill="#16803d" fillOpacity="0.25" />

                      {/* Line 3: Sciatica to Lower Lumbar/Sacral Spine */}
                      <path
                        d="M 115 340 L 160 340 L 195 345"
                        stroke="#16803d"
                        strokeWidth="2"
                        strokeDasharray="4 3"
                        strokeOpacity="0.85"
                      />
                      <circle cx="195" cy="345" r="5" fill="#16803d" />
                      <circle cx="195" cy="345" r="9" fill="#16803d" fillOpacity="0.25" />
                    </svg>

                    {/* 3 Interactive Markers positioned on the left of the lines (Desktop/Tablet only) */}
                    {/* Marker 1: Neck Pain */}
                    <div className="hidden sm:block absolute left-1 sm:left-2 top-[12%] -translate-y-1/2 z-20">
                      <div className="flex items-center gap-1.5 sm:gap-2 rounded-full border-2 border-[#16803d]/40 bg-white px-3 sm:px-3.5 py-1.5 shadow-md shadow-navy/10 backdrop-blur-sm transition-all hover:border-[#16803d] hover:scale-105">
                        <div className="flex size-5 sm:size-6 shrink-0 items-center justify-center rounded-full bg-[#16803d]/10 text-[#16803d]">
                          <Activity className="size-3 sm:size-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-navy whitespace-nowrap">Neck Pain</span>
                      </div>
                    </div>

                    {/* Marker 2: Back Pain */}
                    <div className="hidden sm:block absolute left-1 sm:left-2 top-[45%] -translate-y-1/2 z-20">
                      <div className="flex items-center gap-1.5 sm:gap-2 rounded-full border-2 border-[#16803d]/40 bg-white px-3 sm:px-3.5 py-1.5 shadow-md shadow-navy/10 backdrop-blur-sm transition-all hover:border-[#16803d] hover:scale-105">
                        <div className="flex size-5 sm:size-6 shrink-0 items-center justify-center rounded-full bg-[#16803d]/10 text-[#16803d]">
                          <HeartPulse className="size-3 sm:size-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-navy whitespace-nowrap">Back Pain</span>
                      </div>
                    </div>

                    {/* Marker 3: Sciatica */}
                    <div className="hidden sm:block absolute left-1 sm:left-2 top-[79%] -translate-y-1/2 z-20">
                      <div className="flex items-center gap-1.5 sm:gap-2 rounded-full border-2 border-[#16803d]/40 bg-white px-3 sm:px-3.5 py-1.5 shadow-md shadow-navy/10 backdrop-blur-sm transition-all hover:border-[#16803d] hover:scale-105">
                        <div className="flex size-5 sm:size-6 shrink-0 items-center justify-center rounded-full bg-[#16803d]/10 text-[#16803d]">
                          <Target className="size-3 sm:size-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-navy whitespace-nowrap">Sciatica</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Dr. Hardik Patel Image & Credential Badge */}
                  <div className="relative flex flex-col items-center justify-end shrink-0 -ml-4 xs:-ml-6 sm:-ml-24 md:-ml-32 lg:-ml-40 xl:-ml-48 z-20">
                    <div className="relative w-full max-w-[150px] xs:max-w-[175px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[310px] xl:max-w-[330px]">
                      <img
                        src="/assets/heroes/Dr-Hardik-Patel.webp"
                        alt="Dr. Hardik Patel (PT), Director and Senior Physical Therapist"
                        loading="lazy"
                        className="w-full h-auto object-contain drop-shadow-2xl"
                      />

                      {/* Credential Badge anchored over the bottom cut edge */}
                      <div className="-mt-7 sm:-mt-9 relative z-30 mx-auto w-full rounded-xl sm:rounded-2xl border border-navy/10 bg-[#f9f7ef]/95 p-2 sm:p-2.5 shadow-md backdrop-blur-md text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold text-navy">
                          <ShieldCheck className="size-3 sm:size-3.5 text-accent shrink-0" />
                          <span>Dr. Hardik Patel (PT)</span>
                        </div>
                        <div className="text-[8px] sm:text-[11px] text-muted-foreground mt-0.5 leading-tight">
                          Director &amp; Senior Physical Therapist
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-2 text-center lg:hidden col-span-full">
                <Link
                  to="/chiropractic-treatment-in-ahmedabad"
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-accent px-5 py-3.5 text-sm font-bold text-accent-foreground shadow-md shadow-accent/20 transition-all hover:bg-emerald-600"
                >
                  <span>Book a Chiropractic Consultation</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Bottom Row: 3 Compact Clinical Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {/* Highlight 1 */}
              <div className="rounded-2xl border border-navy/10 bg-[#f9f7ef]/60 p-5 transition-colors hover:border-accent/30 hover:bg-[#f9f7ef]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex size-7 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <ShieldCheck className="size-4" />
                  </div>
                  <h3 className="text-sm font-bold font-sans text-navy">Clinical Assessment</h3>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Care begins with an evaluation of your movement, symptoms, posture, and functional needs.
                </p>
              </div>

              {/* Highlight 2 */}
              <div className="rounded-2xl border border-navy/10 bg-[#f9f7ef]/60 p-5 transition-colors hover:border-accent/30 hover:bg-[#f9f7ef]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex size-7 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Sparkles className="size-4" />
                  </div>
                  <h3 className="text-sm font-bold font-sans text-navy">Personalised Chiropractic Care</h3>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Treatment is planned around your condition, mobility, comfort, and recovery goals.
                </p>
              </div>

              {/* Highlight 3 */}
              <div className="rounded-2xl border border-navy/10 bg-[#f9f7ef]/60 p-5 transition-colors hover:border-accent/30 hover:bg-[#f9f7ef]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex size-7 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Activity className="size-4" />
                  </div>
                  <h3 className="text-sm font-bold font-sans text-navy">Rehabilitation Support</h3>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Chiropractic care can be combined with physiotherapy and guided exercise when clinically appropriate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="section-y bg-[#f9f7ef] border-t border-border/80">
        <div className="container-cc">
          <div className="max-w-2xl">
            <span className="badge-clinical text-teal">
              Care Areas
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              From everyday joint pain to complex spine &amp; neuro rehabilitation
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Targeted clinical pathways designed for fast relief, root cause resolution, and long term functional recovery.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ...orthoConditions.slice(0, 7),
              {
                slug: "post-surgical-rehabilitation-in-ahmedabad",
                group: "condition-ortho",
                label: "Post Surgical Rehabilitation",
                h1: "Post Surgical Rehabilitation in Ahmedabad",
                title: "Post Surgical Rehabilitation in Ahmedabad",
                description: "Structured postoperative physiotherapy for knee and hip replacement, spine surgery, ACL reconstruction, and fracture recovery.",
                lead: "Structured postoperative physiotherapy for knee and hip replacement, spine surgery, ACL reconstruction, and fracture recovery.",
                image: "/assets/blogs/Knee-Surgery.png",
                related: []
              },
              neuroConditions[0], // Spinal Cord Injury
              {
                slug: "top-physiotherapy-services-center-in-ahmedabad",
                group: "pillar",
                label: "Physiotherapy",
                h1: "Physiotherapy Services in Ahmedabad",
                title: "Physiotherapy Services in Ahmedabad",
                description: "Comprehensive clinical physiotherapy for neck, back, knee, joint pain, sports injuries, and post surgical recovery.",
                lead: "Evidence based physiotherapy for neck, back, knee, joint pain, sports injuries, and post surgical orthopaedic recovery.",
                image: "/assets/blogs/Physiotherapy-Treatment.png",
                related: []
              },
              {
                slug: "best-neuro-spine-rehabilitation-centre-in-ahmedabad",
                group: "pillar",
                label: "Spine-Neuro Rehab",
                h1: "Spine & Neuro Rehabilitation in Ahmedabad",
                title: "Spine & Neuro Rehabilitation in Ahmedabad",
                description: "Specialised neuro physical therapy for stroke recovery, spinal cord injury, Parkinson's disease, and nerve disorders.",
                lead: "Specialised neuro physical therapy for stroke recovery, spinal cord injury, Parkinson's disease, and nerve disorders.",
                image: "/assets/treatments/Spinal-cord-injury-images.webp",
                related: []
              },
              {
                slug: "top-fitness-centre-courses-in-ahmedabad",
                group: "fitness",
                label: "Fitness",
                h1: "Medical Fitness & Studio in Ahmedabad",
                title: "Medical Fitness & Studio in Ahmedabad",
                description: "Doctor supervised exercise studio offering clinical Pilates, HIIT workouts, strength training, power yoga, and Zumba.",
                lead: "Doctor supervised exercise studio offering clinical Pilates, HIIT workouts, strength training, power yoga, and Zumba.",
                image: "/assets/fitness/Aerobics-images.webp",
                related: []
              }
            ]
              .filter((c): c is NonNullable<typeof c> => Boolean(c))
              .map((c) => (
                <LinkCard
                  key={c.slug}
                  page={c as never}
                  kicker={
                    c.slug === "top-physiotherapy-services-center-in-ahmedabad"
                      ? "Physiotherapy"
                      : c.slug === "best-neuro-spine-rehabilitation-centre-in-ahmedabad"
                      ? "Spine & Neuro Rehab"
                      : c.slug === "top-fitness-centre-courses-in-ahmedabad"
                      ? "Fitness"
                      : c.slug === "post-surgical-rehabilitation-in-ahmedabad"
                      ? "Orthopaedic Care"
                      : c.group === "condition-neuro"
                      ? "Spine & Neuro Rehab"
                      : "Orthopaedic Care"
                  }
                />
              ))}

          </div>
        </div>
      </section>

      {/* Six Centres Across Gujarat */}
      <section id="clinic-network" className="py-10 sm:py-16 lg:py-20 bg-[#f9f7ef] border-t border-border/80">
        <div className="container-cc">
          <div className="flex flex-col justify-between gap-3 sm:gap-4 md:flex-row md:items-end">
            <div>
              <span className="badge-clinical text-teal">
                Our Clinic Network
              </span>
              <h2 className="mt-2.5 sm:mt-4 text-2xl font-semibold leading-tight text-navy sm:text-3xl lg:text-4xl">
                Six modern centres across Gujarat
              </h2>
              <p className="mt-1.5 sm:mt-2 text-sm text-muted-foreground sm:text-base">
                Equipped with the same clinical standard, advanced modalities, and certified physiotherapists.
              </p>
            </div>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-navy hover:text-accent"
            >
              <Phone className="size-3.5 sm:size-4 text-accent shrink-0" />
              <span>Central Helpline: {site.phone}</span>
            </a>
          </div>

          {/* Single Large Bordered Container with 3x2 Grid Dividers */}
          <div className="mt-6 sm:mt-8 lg:mt-10 overflow-hidden rounded-3xl border border-navy/15 bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {locations.map((l, index) => (
                <Link
                  key={l.slug}
                  to={`/${l.slug}` as never}
                  className={`group relative flex flex-col justify-between p-6 sm:p-7 lg:p-8 transition-colors duration-300 hover:bg-[#96C12D]/[0.03] ${
                    index > 0 ? "border-t border-navy/10 md:border-t-0" : ""
                  } ${
                    index >= 2 ? "md:border-t md:border-navy/10" : ""
                  } ${
                    index >= 3 ? "lg:border-t lg:border-navy/10" : "lg:border-t-0"
                  } ${
                    index % 2 === 0 ? "md:border-r md:border-navy/10" : ""
                  } ${
                    index % 3 !== 2 ? "lg:border-r lg:border-navy/10" : "lg:border-r-0"
                  }`}
                >
                  {/* Subtle Inner Accent Highlight Sweep (#96C12D) */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-[2.5px] bg-[#96C12D] scale-x-0 opacity-0 transition-all duration-300 ease-out origin-left group-hover:scale-x-100 group-hover:opacity-100 motion-reduce:transition-none"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-300 ease-out group-hover:border-[#96C12D]/30 pointer-events-none"
                  />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="badge-emerald text-[10px] sm:text-[11px] px-2.5 py-0.5 transition-colors duration-300 group-hover:border-[#96C12D]/40 group-hover:bg-[#96C12D]/15">
                        {l.city}
                      </span>
                      <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#96C12D]" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-navy group-hover:text-navy transition-colors">
                      {l.name}
                    </h3>

                    <div className="flex items-start gap-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-teal/80 transition-colors duration-300 group-hover:text-[#96C12D]" />
                      <span className="line-clamp-2">{l.address}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-navy/10 pt-4 text-xs font-semibold text-navy">
                    <span className="flex items-center gap-1.5 text-teal">
                      <Phone className="size-3.5 shrink-0" />
                      <span>{l.phone}</span>
                    </span>
                    <span className="text-[#7ea81e] group-hover:underline inline-flex items-center gap-1 font-bold transition-colors duration-300">
                      <span>Visit Centre</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials — 18 Rotating Reviews */}
      <Testimonials />

      {/* FAQ Section */}
      <FaqAccordion faqs={homeFaqs} />

      {/* Latest Articles */}
      <section className="section-y bg-[#f9f7ef] border-t border-border/80">
        <div className="container-cc">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="badge-clinical text-teal">
                Clinical Insights
              </span>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
                Latest articles from our physiotherapists
              </h2>
            </div>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-accent transition-colors hover:text-emerald-700"
            >
              <span>Explore all 79+ articles</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CtaBand />
    </>
  );
}
