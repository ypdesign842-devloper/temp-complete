import { useEffect, useState } from "react";
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

export function HomeTemplate() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      src: "/assets/media/Complete-care-Thaltej-Ahmedabad-Clinic-photos1.webp",
      alt: "Complete Care Premier Physiotherapy & Rehabilitation Centre Thaltej Ahmedabad",
    },
    {
      src: "/assets/media/Complete-care-Gota-Ahmedabad-Clinic-photos1.webp",
      alt: "Complete Care Advanced Physiotherapy & Spine Clinic Gota Ahmedabad",
    },
    {
      src: "/assets/media/Complete-care-South-Bopal-Ahmedabad-Clinic-photos1.webp",
      alt: "Complete Care Modern Rehabilitation Clinic South Bopal Ahmedabad",
    },
    {
      src: "/assets/media/Complete-care-Thaltej-Ahmedabad-Clinic-photos2.webp",
      alt: "Complete Care Therapy and Rehabilitation Floor Ahmedabad",
    },
    {
      src: "/assets/media/Complete-care-Gota-Ahmedabad-Clinic-photos4.webp",
      alt: "Complete Care Rehabilitation Centre Gota Ahmedabad",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [heroSlides.length]);
  return (
    <>
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
              <span className="text-xs font-bold tracking-wider text-navy uppercase">
                Directed by {site.director} · 16+ Years Clinical Excellence
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.6rem]">
              Physiotherapy that gets you <span className="italic text-accent">out of pain</span> — and keeps you there.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Directed by <strong className="font-semibold text-navy">{site.director}</strong> and a dedicated team
              of 40+ licensed physical therapists (BPT/MPT), we integrate precision chiropractic adjustments, US-FDA approved
              spinal decompression, PEMF cellular therapy, Class IV laser, and neuro-rehabilitation to restore pain-free mobility
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
                  <div className="font-display text-2xl font-bold text-teal sm:text-3xl">{s.value}</div>
                  <div className="mt-1 text-[11px] font-semibold leading-tight text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Full-Bleed Auto-Swiping Clinic Photo Showcase (Full Height, Pristine, Fully Visible) */}
          <div className="relative">
            <div className="relative w-full h-[440px] sm:h-[500px] lg:h-[540px] xl:h-[580px] overflow-hidden rounded-2xl bg-white shadow-2xl shadow-navy/15">
              {heroSlides.map((slide, index) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  fetchPriority={index === 0 ? "high" : "low"}
                  decoding="async"
                  className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-1000 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-105 z-0 pointer-events-none"
                  }`}
                />
              ))}

              {/* Subtle Pagination Indicators */}
              <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-navy/50 px-3.5 py-1.5 backdrop-blur-md shadow-md">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to clinic photo ${index + 1}`}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "w-6 bg-white shadow-sm"
                        : "w-2 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>
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
                A specialized clinical team — not a massage counter
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Every patient at Complete Care undergoes an evidence-informed assessment by a licensed physiotherapist
                before any intervention begins. Your recovery plan is engineered around your specific anatomy and diagnosis,
                re-evaluated at each milestone, and transitioned into supervised fitness so your results endure.
              </p>
            </div>

            {/* Checklist Grid */}
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Detailed physiotherapist-led clinical assessment",
                "Advanced modalities: Laser, PEMF, TECAR & Decompression",
                "Certified Chiropractic & manual joint mobilization",
                "Comprehensive neuro and post-surgical rehabilitation",
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
                        <h3 className="text-xl sm:text-2xl font-bold text-navy">Dr. Hardik Patel (PT)</h3>
                        <span className="badge-emerald text-xs px-2.5 py-0.5 font-bold">Director</span>
                      </div>
                      <p className="text-xs font-bold tracking-wider text-teal uppercase">
                        Certified Chiropractor &amp; Senior Physical Therapist (FOMT Australia)
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        With over 16+ years of clinical practice across Gujarat, Dr. Hardik Patel directs a dedicated team of 40+ licensed physiotherapists specializing in non-surgical spinal decompression, joint realignment, and evidence-based neuro-rehabilitation.
                      </p>
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f9f7ef] px-3 py-1 text-xs font-semibold text-navy">
                          <Award className="size-3.5 text-accent" />
                          <span>Spine &amp; Neuro Rehab Lead</span>
                        </span>
                        <Link
                          to="/our-team"
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
                        <h3 className="text-xl sm:text-2xl font-bold text-navy">Dr. Foram Patel (PT)</h3>
                        <span className="badge-emerald text-xs px-2.5 py-0.5 font-bold">Founder &amp; Director</span>
                      </div>
                      <p className="text-xs font-bold tracking-wider text-teal uppercase">
                        Master Fitness Trainer (YOS Certified) &amp; Women's Health Specialist
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Holding a Fellowship in Manual Therapy and Master's in Fitness Training, Dr. Foram Patel pioneers women's rehabilitation, prenatal and postnatal fitness protocols, clinical Pilates, and weight management across Complete Care.
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
                Hospital-grade physiotherapy technology under one roof
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
            {modalities.slice(0, 9).map((m) => (
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
              Targeted clinical pathways designed for fast relief, root-cause resolution, and long-term functional recovery.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[...orthoConditions.slice(0, 6), ...neuroConditions.slice(0, 3)].map((c) => (
              <LinkCard
                key={c.slug}
                page={c}
                kicker={c.group === "condition-neuro" ? "Spine & Neuro Rehab" : "Orthopaedic Care"}
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
