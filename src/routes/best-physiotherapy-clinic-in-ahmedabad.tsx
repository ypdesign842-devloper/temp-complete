import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Award,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Compass,
  GraduationCap,
  HeartPulse,
  Home,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { site } from "@/data/site";

export const Route = createFileRoute("/best-physiotherapy-clinic-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Best Physiotherapy Clinic in Ahmedabad | Complete Care" },
      {
        name: "description",
        content:
          "Complete Care is Ahmedabad's premier doctor-led physiotherapy, chiropractic, and spine-neuro rehabilitation clinic network across Thaltej, Gota, South Bopal, Nikol, Mehsana, and Ankleshwar.",
      },
      { property: "og:title", content: "Best Physiotherapy Clinic in Ahmedabad | Complete Care" },
      {
        property: "og:description",
        content:
          "Doctor-led physiotherapy, chiropractic adjustment, and specialized rehabilitation across 6 Gujarat centres.",
      },
      { property: "og:image", content: "https://completecare.in/assets/treatments/cc-home-page-image.webp" },
    ],
  }),
  component: AboutClinicPage,
});

// Comprehensive list of Complete Care therapies & modalities for the compact internal-linking grid
const servicesList = [
  { name: "Class IV Laser Therapy", slug: "class-iv-laser-therapy-clinic-in-ahmedabad", category: "Advanced Modality" },
  { name: "PEMF Therapy", slug: "effective-pemf-therapy-in-ahmedabad", category: "Advanced Modality" },
  { name: "Spine Decompression", slug: "spine-decompression-therapy-treatment-in-ahmedabad", category: "Spine Care" },
  { name: "TECAR Therapy", slug: "tecar-physiotherapy-treatment-in-ahmedabad", category: "Electro-Thermal" },
  { name: "IFT (Interferential Therapy)", slug: "best-ift-treatment-center-in-ahmedabad", category: "Electrotherapy" },
  { name: "TENS Pain Relief", slug: "effective-tens-treatment-in-ahmedabad-for-pain-relief", category: "Electrotherapy" },
  { name: "Short Wave Diathermy (SWD)", slug: "top-short-wave-diathermy-treatment-in-ahmedabad", category: "Deep Heat" },
  { name: "Electrical Stimulation", slug: "best-electrical-stimulation-therapy-in-ahmedabad", category: "Muscle Re-education" },
  { name: "Therapeutic Ultrasound", slug: "ultra-sound-treatment-in-ahmedabad", category: "Deep Heat" },
  { name: "Infra-Red Radiation", slug: "infra-radiation-treatment-in-ahmedabad", category: "Thermal Therapy" },
  { name: "Mechanical Traction", slug: "effective-traction-treatment-in-ahmedabad", category: "Spine & Joint" },
  { name: "Pneumatic Compression (IPC)", slug: "best-pneumatic-compression-therapy-in-ahmedabad", category: "Circulation & Lymph" },
  { name: "Paraffin Wax Bath (PWB)", slug: "paraffin-wax-bath-therapy-in-ahmedabad", category: "Joint Mobility" },
  { name: "Cupping Therapy", slug: "best-cupping-therapy-in-ahmedabad", category: "Myofascial" },
  { name: "Chiropractic Treatment", slug: "chiropractic-treatment-in-ahmedabad", category: "Spinal Alignment" },
  { name: "Osteopathy Treatment", slug: "leading-osteopathy-treatment-in-ahmedabad", category: "Holistic Manual" },
  { name: "Dry Needling", slug: "top-dry-needling-therapy-services-in-ahmedabad", category: "Trigger Point" },
  { name: "Manual Therapy", slug: "manual-therapy-near-me-in-ahmedabad", category: "Joint Mobilization" },
  { name: "Kinesio Taping", slug: "expert-kinesio-tape-therapy-in-ahmedabad", category: "Sports Rehab" },
  { name: "IASTM Therapy", slug: "top-instrumented-soft-tissue-mobilization-in-ahmedabad", category: "Soft Tissue" },
];

function AboutClinicPage() {
  return (
    <div className="bg-[#f9f7ef] min-h-screen">
      {/* Hero Section with Hexagon Collage */}
      <section className="py-10 sm:py-14 lg:py-16 border-b border-border/80">
        <div className="container-cc">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            {/* Left Intro Text */}
            <div className="space-y-4">
              {/* Clean Standard Breadcrumb */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                <Link to="/" className="inline-flex items-center gap-1 hover:text-accent transition-colors">
                  <Home className="size-3.5" />
                  <span>Home</span>
                </Link>
                <ChevronRight aria-hidden="true" className="size-3 text-muted-foreground/60" />
                <span className="text-navy font-bold">About Complete Care</span>
              </nav>

              <div className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3.5 py-1 text-[11px] font-bold tracking-wider text-teal uppercase shadow-sm">
                <Sparkles className="size-3.5 text-accent" />
                <span>Established 2014 · Doctor-Led Physiotherapy</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy leading-[1.15]">
                Best Physiotherapy Clinic in Ahmedabad — Complete Care
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                Welcome to <strong>Complete Care</strong>, founded in 2014 as a one-stop clinical centre for evidence-based physiotherapy, medical fitness, precision chiropractic alignment, and specialized spine &amp; neuro rehabilitation.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                Serving patients across <strong>Ahmedabad (Thaltej, Gota, South Bopal, Nikol), Mehsana, and Ankleshwar</strong>. Directed by <strong className="text-navy">Dr. Hardik Patel (PT)</strong> and <strong className="text-navy">Dr. Foram Patel (PT)</strong>, our multi-disciplinary team delivers tailored non-surgical recovery pathways for chronic pain and complex joint injuries.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold shadow-md shadow-accent/20"
                >
                  <Calendar className="size-4" />
                  <span>Book Consultation</span>
                </a>
                <a
                  href={site.phoneHref}
                  className="btn-outline-navy inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold bg-white"
                >
                  <Phone className="size-4 text-accent" />
                  <span>{site.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Frame */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border-2 border-navy/12 bg-white p-3 shadow-xl">
                <img
                  src="/assets/treatments/cc-home-page-image.webp"
                  alt="Complete Care Physiotherapy Clinics Ahmedabad"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-navy/15 bg-white p-4 shadow-lg hidden sm:flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-accent/15 text-accent font-bold">
                  16+
                </div>
                <div>
                  <div className="text-xs font-bold text-navy">Years Experience</div>
                  <div className="text-[11px] text-muted-foreground">85,000+ Recoveries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 border-b border-border/80">
        <div className="container-cc">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Mission */}
            <div className="rounded-3xl border border-navy/12 bg-white p-7 shadow-sm space-y-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Target className="size-5" />
              </div>
              <h2 className="text-xl font-bold text-navy">Our Mission</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                To provide high-quality, patient-centered physiotherapy and chiropractic care using advanced evidence-based methodologies and modern electro-physical technology.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-3xl border border-navy/12 bg-white p-7 shadow-sm space-y-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Compass className="size-5" />
              </div>
              <h2 className="text-xl font-bold text-navy">Our Vision</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                To be among the finest providers of physiotherapy and spine rehabilitation across Gujarat and India, recognized for innovation, patient empathy, and lasting recovery outcomes.
              </p>
            </div>

            {/* Core Philosophy */}
            <div className="rounded-3xl border border-accent/30 bg-gradient-to-br from-white to-[#f9f7ef] p-7 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex size-11 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                  <HeartPulse className="size-5" />
                </div>
                <h2 className="mt-3 text-xl font-bold text-navy">Our Motto</h2>
                <blockquote className="mt-2 text-base font-bold text-accent font-display italic">
                  “Transforming Pain into Progress”
                </blockquote>
              </div>
              <p className="text-xs text-muted-foreground">
                Every patient protocol is structured to eliminate the root cause of pain and build lifelong biomechanical strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services — Clean Names Grid with Internal Linking */}
      <section className="section-y border-b border-border/80">
        <div className="container-cc space-y-8">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <span className="badge-clinical text-teal">Clinical Modalities</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-navy">
                Our Services &amp; Advanced Treatments
              </h2>
              <p className="mt-1.5 text-sm sm:text-base text-muted-foreground max-w-2xl">
                Explore our comprehensive range of specialized rehabilitation therapies. Click any service to view full clinical details.
              </p>
            </div>
            <Link
              to="/class-iv-laser-therapy-clinic-in-ahmedabad"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-accent hover:underline"
            >
              <span>Explore All Modalities</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* Clean 4-Column Grid with Internal Links */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {servicesList.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}` as never}
                className="group relative flex items-center justify-between rounded-2xl border border-navy/12 bg-white p-4 shadow-sm transition-all duration-200 hover:border-accent hover:bg-[#96C12D]/[0.04] hover:shadow-md"
              >
                <div className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-teal">
                    {s.category}
                  </div>
                  <div className="text-sm font-bold text-navy group-hover:text-accent transition-colors">
                    {s.name}
                  </div>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent shrink-0 ml-2" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Leadership Team — Prominent Director Cards */}
      <section className="section-y border-b border-border/80">
        <div className="container-cc space-y-10">
          <div>
            <span className="badge-clinical text-teal">Our Team</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-navy">
              Meet the Dedicated Team Behind Your Recovery
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-muted-foreground max-w-2xl">
              Led by veteran physical therapists with over 16+ years of clinical excellence in orthopaedics, sports rehabilitation, and medical fitness.
            </p>
          </div>

          {/* 2 Large Doctor Profile Cards */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* 1. Dr. Hardik Patel */}
            <div className="overflow-hidden rounded-3xl border border-navy/15 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md">
              <div className="grid gap-6 sm:grid-cols-[180px_1fr] sm:items-center">
                <div className="overflow-hidden rounded-2xl border-2 border-navy/10 bg-slate-50 aspect-[3/4]">
                  <img
                    src="/assets/treatments/Complete-Care-Doctor-Image-cc.webp"
                    alt="Dr. Hardik Patel (PT), Director, Complete Care"
                    className="size-full object-cover object-top"
                  />
                </div>

                <div className="space-y-3">
                  <span className="badge-emerald text-[10px] px-2.5 py-0.5">
                    Chief Physiotherapist &amp; Founder
                  </span>
                  <h3 className="text-2xl font-bold text-navy">
                    Dr. Hardik Patel <span className="text-sm font-semibold text-muted-foreground">(PT)</span>
                  </h3>
                  <div className="text-xs font-semibold text-accent">
                    Founder &amp; Director at Complete Care
                  </div>

                  <ul className="space-y-1.5 text-xs text-muted-foreground pt-1">
                    <li className="flex items-center gap-2">
                      <GraduationCap className="size-3.5 text-teal shrink-0" />
                      <span><strong>M.PT Ortho</strong> (Master of Physiotherapy)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="size-3.5 text-teal shrink-0" />
                      <span><strong>FOMT (Australia)</strong> — Certified Manual Therapist</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="size-3.5 text-teal shrink-0" />
                      <span><strong>16+ Years</strong> Clinical Experience</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-teal shrink-0" />
                      <span>GSCPT &amp; IAP Registered Life Member</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. Dr. Foram Patel */}
            <div className="overflow-hidden rounded-3xl border border-navy/15 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md">
              <div className="grid gap-6 sm:grid-cols-[180px_1fr] sm:items-center">
                <div className="overflow-hidden rounded-2xl border-2 border-navy/10 bg-slate-50 aspect-[3/4]">
                  <img
                    src="/assets/fitness/dr.-foram-patel-cc.webp"
                    alt="Dr. Foram Patel (PT), Master Fitness Trainer"
                    className="size-full object-cover object-top"
                  />
                </div>

                <div className="space-y-3">
                  <span className="badge-emerald text-[10px] px-2.5 py-0.5">
                    Clinical Director &amp; Fitness Lead
                  </span>
                  <h3 className="text-2xl font-bold text-navy">
                    Dr. Foram Patel <span className="text-sm font-semibold text-muted-foreground">(PT)</span>
                  </h3>
                  <div className="text-xs font-semibold text-accent">
                    Physiotherapist &amp; Master Fitness Trainer
                  </div>

                  <ul className="space-y-1.5 text-xs text-muted-foreground pt-1">
                    <li className="flex items-center gap-2">
                      <GraduationCap className="size-3.5 text-teal shrink-0" />
                      <span><strong>B.PT</strong> (Bachelor of Physiotherapy)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Activity className="size-3.5 text-teal shrink-0" />
                      <span><strong>Master Fitness Trainer</strong> &amp; Posture Specialist</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="size-3.5 text-teal shrink-0" />
                      <span><strong>8+ Years</strong> Clinical Practice</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-teal shrink-0" />
                      <span>Prenatal, Postnatal &amp; Women's Rehab Expert</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doorstep Home Visit Physiotherapy Section */}
      <section className="section-y border-b border-border/80">
        <div className="container-cc">
          <div className="overflow-hidden rounded-3xl border border-navy/15 bg-white p-8 sm:p-10 lg:p-12 shadow-sm">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-5">
                <span className="badge-clinical text-teal">Doorstep Healthcare</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy">
                  Physiotherapy at Home in Ahmedabad
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Are you suffering from severe back pain, post-surgical stiffness, sports injury, or are your elderly parents unable to travel to the clinic? Complete Care provides certified physiotherapists who visit your home with portable therapy equipment.
                </p>

                {/* 4 Steps */}
                <div className="grid gap-3 sm:grid-cols-2 pt-2">
                  <div className="flex items-start gap-2.5 rounded-xl border border-navy/10 bg-[#f9f7ef]/50 p-3">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-accent text-white font-bold text-xs">
                      1
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy">Make an Appointment</div>
                      <div className="text-[11px] text-muted-foreground">Call or WhatsApp us</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl border border-navy/10 bg-[#f9f7ef]/50 p-3">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-accent text-white font-bold text-xs">
                      2
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy">Assessment on Call</div>
                      <div className="text-[11px] text-muted-foreground">Doctor reviews your case</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl border border-navy/10 bg-[#f9f7ef]/50 p-3">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-accent text-white font-bold text-xs">
                      3
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy">Physiotherapist Visit</div>
                      <div className="text-[11px] text-muted-foreground">Qualified physio arrives</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl border border-navy/10 bg-[#f9f7ef]/50 p-3">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-accent text-white font-bold text-xs">
                      4
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy">Personalised Treatment</div>
                      <div className="text-[11px] text-muted-foreground">Targeted recovery sessions</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/physiotherapy-at-home-in-ahmedabad"
                    className="btn-accent inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold"
                  >
                    <span>Book Home Visit Session</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-navy/10 bg-slate-50 shadow-md">
                <img
                  src="/assets/pages/Cc-Home-Visit.webp"
                  alt="Complete Care Home Visit Physiotherapist"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
