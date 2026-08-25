import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Award,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock,
  ExternalLink,
  HeartPulse,
  Home,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Users,
  Zap,
} from "lucide-react";
import { AppointmentForm } from "@/components/blocks/AppointmentForm";
import { Testimonials } from "@/components/blocks/Testimonials";
import { CtaBand } from "@/components/blocks/CtaBand";
import { site } from "@/data/site";

export const Route = createFileRoute("/physiotherapy-at-home-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Physiotherapy at Home in Ahmedabad | Complete Care Home Visits" },
      {
        name: "description",
        content:
          "Licensed physiotherapists visit your home in Ahmedabad, Mehsana and Ankleshwar with portable TENS, IFT and ultrasound equipment for doorstep rehabilitation.",
      },
      { property: "og:title", content: "Physiotherapy at Home in Ahmedabad | Complete Care Home Visits" },
      {
        property: "og:description",
        content:
          "Licensed physiotherapists visit your home in Ahmedabad, Mehsana and Ankleshwar with portable TENS, IFT and ultrasound equipment for doorstep rehabilitation.",
      },
      {
        property: "og:image",
        content: "https://completecare.in/assets/media/Complete-care-Thaltej-Ahmedabad-Clinic-photos4.webp",
      },
      {
        name: "twitter:image",
        content: "https://completecare.in/assets/media/Complete-care-Thaltej-Ahmedabad-Clinic-photos4.webp",
      },
    ],
  }),
  component: HomePhysiotherapyPage,
});

// 4 Simple steps to doorstep physiotherapy
const steps = [
  {
    step: "01",
    title: "Request a Consultation",
    desc: "Call our coordinator at +91 8980 676 676, message on WhatsApp, or submit the booking form with your pain details.",
  },
  {
    step: "02",
    title: "Clinical Evaluation",
    desc: "A senior physiotherapist reviews your medical history, symptoms, and assigns a qualified therapist suited to your specific condition.",
  },
  {
    step: "03",
    title: "Doorstep Physio Visit",
    desc: "Our licensed physiotherapist arrives at your home at the scheduled time with portable electrotherapy and exercise equipment.",
  },
  {
    step: "04",
    title: "Structured Recovery",
    desc: "Receive customized hands-on therapy, guided functional exercises, home ergonomics advice, and continuous progress monitoring.",
  },
];

// Target Clinical Groups for Home Visits
const patientGroups = [
  {
    title: "Post Surgical Rehabilitation",
    desc: "Total knee replacement (TKR), total hip replacement (THR), spine surgery, and fracture rehabilitation when traveling is painful.",
    tag: "Orthopaedic",
    icon: Award,
    href: "/knee-pain-treatment-in-ahmedabad",
  },
  {
    title: "Elderly & Geriatric Mobility",
    desc: "Gentle balance training, joint mobility, fall prevention, and strength conditioning for seniors in the comfort of home.",
    tag: "Geriatric Care",
    icon: Users,
    href: "/best-physiotherapy-clinic-in-ahmedabad",
  },
  {
    title: "Stroke & Neurological Rehab",
    desc: "Paralysis recovery, hemiplegia, Parkinson's disease, Bell's palsy, spinal cord injury, and bedridden patient rehabilitation.",
    tag: "Neuro Rehab",
    icon: ShieldCheck,
    href: "/stroke-in-treatment-ahmedabad",
  },
  {
    title: "Acute Back, Disc & Sciatica",
    desc: "Severe lumbar disc herniation, pinched nerve, acute muscle spasms, and neck pain when traveling to a clinic is intolerable.",
    tag: "Spine Care",
    icon: Activity,
    href: "/sciatica-pain-treatment-in-ahmedabad",
  },
  {
    title: "Prenatal & Postnatal Care",
    desc: "Physiotherapist-guided pelvic floor training, back pain relief, posture correction, and postpartum recovery in privacy.",
    tag: "Women's Health",
    icon: HeartPulse,
    href: "/our-team",
  },
  {
    title: "Pediatric & Developmental",
    desc: "Cerebral palsy, muscular dystrophy, delayed motor milestones, and gait retraining in a calm, stress-free home environment.",
    tag: "Pediatric Care",
    icon: Stethoscope,
    href: "/muscular-dystrophy-doctor-ahmedabad",
  },
];

// Portable Clinical Modalities brought to home
const portableEquipment = [
  {
    title: "Portable Laser & Light Therapy",
    desc: "Advanced handheld therapeutic laser delivering deep bio-stimulation to accelerate cellular repair and rapidly reduce joint inflammation.",
    badge: "Phototherapy",
  },
  {
    title: "Portable IFT & TENS Devices",
    desc: "Multi-channel interferential current and transcutaneous nerve stimulation for non-medicinal, deep-seated pain relief.",
    badge: "Electrotherapy",
  },
  {
    title: "Therapeutic Ultrasound",
    desc: "High-frequency micro-vibrations providing deep heating to relax tight muscle fibers, break scar tissue, and improve blood flow.",
    badge: "Deep Heat",
  },
  {
    title: "Manual Therapy & Mobilisation",
    desc: "Evidence based hands-on joint mobilization, neural flossing, trigger point release, and assisted stretching protocols.",
    badge: "Hands-On Care",
  },
];

// Locality Coverage Across Gujarat
const coverageZones = [
  {
    region: "West Ahmedabad",
    areas: [
      "Thaltej",
      "Vastrapur",
      "Bodakdev",
      "Satellite",
      "Science City",
      "Shilaj",
      "S.G. Highway",
      "Ambawadi",
      "Navrangpura",
      "Naranpura",
      "Memnagar",
      "Drive-In Road",
    ],
  },
  {
    region: "North & East Ahmedabad",
    areas: [
      "Gota",
      "Vandematram",
      "Jagatpur",
      "Chandlodiya",
      "Ranip",
      "Nikol",
      "Naroda",
      "Vastral",
      "Odhav",
      "Bapunagar",
      "Krishnanagar",
      "India Colony",
    ],
  },
  {
    region: "South & Extension Ahmedabad",
    areas: [
      "South Bopal",
      "Bopal",
      "Ghuma",
      "Shela",
      "Ambli",
      "Sanand Road",
      "Prahlad Nagar",
      "Makarba",
      "Iscon-Ambli Road",
      "S.P. Ring Road",
    ],
  },
  {
    region: "Mehsana & Ankleshwar Centres",
    areas: [
      "Mehsana City",
      "Dairy Road",
      "Radhanpur Road",
      "Modhera Road",
      "Visnagar Road",
      "Ankleshwar GIDC",
      "Station Road",
      "Rajpipla Road",
      "Bharuch City",
    ],
  },
];

// FAQs for Home Physiotherapy
const faqs = [
  {
    q: "What is physiotherapy at home?",
    a: "Physiotherapy at home involves a licensed, GSCPT registered physiotherapist visiting your residence to perform clinical assessments, hands-on treatment, and guided exercises. It is ideal for patients with mobility limitations, post-surgery recovery, or busy schedules.",
  },
  {
    q: "What equipment does the physiotherapist bring to my home?",
    a: "Our physiotherapists carry portable electrotherapy units (IFT, TENS), therapeutic ultrasound, portable laser devices, resistance bands, and assessment tools necessary to deliver full clinical care in your home.",
  },
  {
    q: "How long does each home physiotherapy session last?",
    a: "Each home visit session typically lasts between 45 to 60 minutes, ensuring comprehensive hands-on therapy, guided rehabilitation exercises, and progress tracking without any rush.",
  },
  {
    q: "What conditions can be treated with home physiotherapy?",
    a: "Home physiotherapy is highly effective for stroke and paralysis recovery, total knee/hip replacement rehab, severe back and sciatica pain, arthritis, Parkinson's disease, Bell's palsy, post-fracture stiffness, and elderly mobility training.",
  },
  {
    q: "What is the fee for home physiotherapy visits?",
    a: "Complete Care maintains transparent, patient friendly pricing ranging from ₹500 to ₹2,000 per therapy session, depending on the required modalities and treatment duration.",
  },
  {
    q: "How do I schedule a home visit in Ahmedabad?",
    a: "You can schedule a home visit by calling our central hotline at +91 8980 676 676, messaging us on WhatsApp, or completing the appointment form on this page. Our clinical coordinator will confirm your preferred timing.",
  },
];

function HomePhysiotherapyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-sand/70 pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 border-b border-border/80">
        <div className="container-cc">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Hero Column */}
            <div className="space-y-5 sm:space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/90 px-3.5 py-1.5 text-xs font-bold tracking-wider text-teal uppercase shadow-sm">
                <span className="size-2 rounded-full bg-accent animate-pulse" />
                <span>DOORSTEP CLINICAL CARE · AHMEDABAD &amp; GUJARAT</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-navy leading-[1.18] tracking-tight">
                Physiotherapy at Home in Ahmedabad
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl">
                Hospital grade physiotherapy delivered directly at your doorstep. Experienced, GSCPT registered physiotherapists visit your home with portable electrotherapy, laser, and exercise equipment for personalized 1-on-1 recovery.
              </p>

              {/* Trust Metric Badges */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 pt-1">
                <div className="rounded-xl border border-navy/10 bg-white/80 p-3 text-center shadow-xs">
                  <div className="text-base sm:text-lg font-bold text-navy">1-on-1 Care</div>
                  <div className="text-[11px] text-muted-foreground">Dedicated 45-60 Min</div>
                </div>
                <div className="rounded-xl border border-navy/10 bg-white/80 p-3 text-center shadow-xs">
                  <div className="text-base sm:text-lg font-bold text-navy">65,000+</div>
                  <div className="text-[11px] text-muted-foreground">Patients Treated</div>
                </div>
                <div className="rounded-xl border border-navy/10 bg-white/80 p-3 text-center shadow-xs">
                  <div className="text-base sm:text-lg font-bold text-navy">Portable Tech</div>
                  <div className="text-[11px] text-muted-foreground">Laser, IFT &amp; TENS</div>
                </div>
                <div className="rounded-xl border border-navy/10 bg-white/80 p-3 text-center shadow-xs">
                  <div className="text-base sm:text-lg font-bold text-navy">Zero Travel</div>
                  <div className="text-[11px] text-muted-foreground">Doorstep Comfort</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#appointment-form"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-md shadow-accent/20 transition-all hover:bg-emerald-600 hover:shadow-lg"
                >
                  <CalendarCheck className="size-4" />
                  <span>Book Home Visit Now</span>
                  <span>&rarr;</span>
                </a>

                <a
                  href="tel:918980676676"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-navy/15 bg-white px-5 py-3.5 text-sm font-bold text-navy shadow-xs transition-all hover:border-navy hover:bg-navy/5"
                >
                  <Phone className="size-4 text-accent" />
                  <span>Call +91 8980 676 676</span>
                </a>

                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-600/30 bg-emerald-50 px-4 py-3.5 text-sm font-bold text-emerald-800 transition-all hover:bg-emerald-100"
                >
                  <MessageSquare className="size-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-navy/12 bg-white p-2 shadow-xl shadow-navy/8">
                <div className="relative aspect-[4/3] sm:aspect-[16/12] overflow-hidden rounded-2xl bg-sand">
                  <img
                    src="/assets/media/Complete-care-Thaltej-Ahmedabad-Clinic-photos4.webp"
                    alt="Doorstep Physiotherapy Care at Home in Ahmedabad"
                    className="size-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Centre Pill */}
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/95 p-3.5 backdrop-blur-md border border-navy/10 shadow-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Home className="size-4 text-accent shrink-0" />
                        <span className="text-xs sm:text-sm font-bold text-navy">
                          Complete Care Doorstep Service
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-bold text-amber-600">
                        <Star className="size-3.5 fill-amber-400 text-amber-400" />
                        <span>4.9 / 5</span>
                      </div>
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-1">
                      Serving all localities across Ahmedabad, Mehsana &amp; Ankleshwar
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW HOME PHYSIOTHERAPY WORKS (4-STEP FLOW) */}
      <section className="section-y bg-background border-b border-border/70">
        <div className="container-cc">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="badge-clinical text-teal">
              Easy 4-Step Process
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy">
              How Doorstep Physiotherapy Works
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              Getting expert clinical physiotherapy at your home is seamless, comfortable, and structured.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.step}
                className="relative card-premium flex flex-col justify-between p-6 transition-all hover:border-accent/40"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#16803d]/30 font-mono">
                      {s.step}
                    </span>
                    <span className="size-2.5 rounded-full bg-accent" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHO BENEFITS FROM HOME PHYSIOTHERAPY */}
      <section className="section-y bg-sand/40 border-b border-border/70">
        <div className="container-cc">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="badge-clinical text-teal">
              Clinical Specialisations
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy">
              Who Needs Physiotherapy at Home?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              Specialised care adapted to patients unable to travel to our clinic centres.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {patientGroups.map((group) => {
              const Icon = group.icon;
              return (
                <Link
                  key={group.title}
                  to={group.href as never}
                  className="group card-premium card-premium-hover flex flex-col justify-between p-6 bg-white transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-[#16803d]/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <Icon className="size-5" />
                      </div>
                      <span className="badge-emerald text-[10px]">{group.tag}</span>
                    </div>
                    <h3 className="mt-4 text-base sm:text-lg font-bold text-navy group-hover:text-accent transition-colors">
                      {group.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {group.desc}
                    </p>
                  </div>

                  <div className="mt-4 border-t border-border pt-3 flex items-center justify-between text-xs font-bold text-accent">
                    <span>Learn more</span>
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ADVANCED PORTABLE MODALITIES */}
      <section className="section-y bg-background border-b border-border/70">
        <div className="container-cc">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="space-y-4 lg:col-span-5">
              <span className="badge-clinical text-teal">
                Portable Clinical Modalities
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy">
                Hospital-Grade Technology Brought Directly to Your Home
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                Unlike basic home exercises, Complete Care physiotherapists carry specialized portable modality equipment to your residence, ensuring you receive the same high standard of electrotherapy and deep tissue healing as our physical clinics.
              </p>
              <div className="pt-2">
                <a
                  href="#appointment-form"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-sm transition-all hover:bg-emerald-600"
                >
                  <CalendarCheck className="size-4" />
                  <span>Book Equipment Supported Visit</span>
                </a>
              </div>
            </div>

            {/* 4 Modality Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {portableEquipment.map((eq) => (
                <div key={eq.title} className="card-premium p-5 transition-all hover:border-accent/40">
                  <div className="flex items-center justify-between">
                    <span className="badge-emerald text-[10px]">{eq.badge}</span>
                    <Zap className="size-4 text-accent" />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-navy">{eq.title}</h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {eq.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOCALITY COVERAGE ACROSS GUJARAT */}
      <section className="section-y bg-sand/60 border-b border-border/70">
        <div className="container-cc">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="badge-clinical text-teal">
              Wide Geographical Reach
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy">
              Localities Covered for Home Physiotherapy
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              Our clinical teams operate across all major neighborhoods in Ahmedabad, Mehsana, and Ankleshwar.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coverageZones.map((zone) => (
              <div
                key={zone.region}
                className="rounded-2xl border border-navy/12 bg-white p-5 sm:p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-teal uppercase tracking-wider">
                    <MapPin className="size-3.5 text-accent" />
                    <span>{zone.region}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {zone.areas.map((area) => (
                      <span
                        key={area}
                        className="rounded-md border border-navy/10 bg-sand/60 px-2.5 py-1 text-[11px] font-medium text-navy"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-border text-[11px] font-semibold text-accent">
                  Daily morning &amp; evening slots available
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. APPOINTMENT BOOKING SECTION */}
      <section id="appointment-form" className="section-y bg-background scroll-mt-20">
        <div className="container-cc">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left Content Column */}
            <div className="space-y-6 lg:col-span-5">
              <span className="badge-clinical text-teal">
                Doorstep Consultation
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy">
                Schedule Your Physiotherapy Home Visit
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                Take the stress out of clinical travel. Submit your details below to schedule a senior physiotherapist visit at your residence at a convenient time slot.
              </p>

              {/* Consultation Perks */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-navy">Dedicated 1-on-1 Attention</div>
                    <div className="text-xs text-muted-foreground">Full 45-60 minute personalized therapy session</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-navy">Portable Hospital-Grade Equipment</div>
                    <div className="text-xs text-muted-foreground">Laser, IFT, TENS and ultrasound brought to your home</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-navy">Transparent Pricing (₹500 to ₹2,000)</div>
                    <div className="text-xs text-muted-foreground">Affordable per-session rates with zero hidden charges</div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Box */}
              <div className="rounded-2xl border border-navy/10 bg-sand/70 p-5 mt-4">
                <div className="text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                  Need Immediate Booking?
                </div>
                <div className="text-sm text-muted-foreground">
                  Call our central coordinator at{" "}
                  <a href="tel:918980676676" className="font-bold text-navy hover:text-accent">
                    +91 8980 676 676
                  </a>
                </div>
              </div>
            </div>

            {/* Right Booking Form Column */}
            <div className="lg:col-span-7">
              <AppointmentForm centre="Doorstep Home Physiotherapy, Ahmedabad" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="section-y bg-sand/40 border-t border-border/80">
        <div className="container-cc max-w-4xl">
          <div className="text-center mb-10">
            <span className="badge-clinical text-teal">
              Patient FAQs
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy">
              Frequently Asked Questions About Home Physiotherapy
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-2xl border border-navy/10 bg-white transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between p-5 text-left text-base font-bold text-navy transition-colors hover:text-accent"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-accent" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-border px-5 pb-5 pt-3 text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <Testimonials limit={3} />

      {/* 9. CLOSING CTA */}
      <CtaBand title="Schedule Your Doorstep Physiotherapy in Ahmedabad Today" />
    </>
  );
}
