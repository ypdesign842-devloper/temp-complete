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
  Play,
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
import {
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateVideoSchema,
  SITE_URL,
  SITE_LOGO,
} from "@/lib/schema";

export const Route = createFileRoute("/physiotherapy-at-home-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Physiotherapy at Home in Ahmedabad | Complete Care Home Visits" },
      {
        name: "description",
        content:
          "Licensed physiotherapists visit your home in Ahmedabad, Mehsana and Ankleshwar with portable CuraLaser, TENS, IFT and ultrasound equipment for doorstep rehabilitation.",
      },
      { property: "og:title", content: "Physiotherapy at Home in Ahmedabad | Complete Care Home Visits" },
      {
        property: "og:description",
        content:
          "Licensed physiotherapists visit your home in Ahmedabad, Mehsana and Ankleshwar with portable CuraLaser, TENS, IFT and ultrasound equipment for doorstep rehabilitation.",
      },
      {
        property: "og:image",
        content: "https://completecare.in/assets/treatments/cc-home-page-image.webp",
      },
      {
        name: "twitter:image",
        content: "https://completecare.in/assets/treatments/cc-home-page-image.webp",
      },
    ],
  }),
  component: HomePhysiotherapyPage,
});

// 4 Step Home Visit Process
const homeVisitSteps = [
  {
    step: "01",
    title: "Make an Appointment",
    desc: "To request a home visit, go to our website and fill out the appointment form. Or reach us directly via official WhatsApp or phone.",
  },
  {
    step: "02",
    title: "Assessment On Call",
    desc: "Our clinical experts assess your condition, review requirements, and schedule a convenient home visit with a certified physiotherapist.",
  },
  {
    step: "03",
    title: "Physiotherapist Visit",
    desc: "On the scheduled day, our physiotherapist arrives at your doorstep with the necessary portable hospital grade equipment for targeted care.",
  },
  {
    step: "04",
    title: "Personalised Treatment",
    desc: "Our physiotherapist delivers 1 on 1 therapy, monitors your progress, provides home exercise advice, and schedules follow up sessions.",
  },
];

// Conditions We Treat at Home (With You, When You Need Us The Most)
const conditionsAtHome = [
  {
    title: "Low Back Pain",
    desc: "Lumbar strain, sciatica, disc herniation, and nerve pain relieved with gentle spinal mobilization and core stability.",
    to: "/back-pain-doctor-in-ahmedabad",
    tag: "Spine Care",
    icon: Activity,
  },
  {
    title: "Knee Pain & Replacement",
    desc: "Osteoarthritis management and post operative total knee replacement recovery without painful travel.",
    to: "/knee-pain-treatment-in-ahmedabad",
    tag: "Joint Care",
    icon: Award,
  },
  {
    title: "Spinal Cord Rehabilitation",
    desc: "Targeted neuromuscular training, balance recovery, and functional independence for spinal injury patients.",
    to: "/spinal-cord-specialist-in-ahmedabad",
    tag: "Neuro & Spine",
    icon: ShieldCheck,
  },
  {
    title: "Stroke Recovery",
    desc: "Paralysis, hemiplegia, muscle reeducation, transfer training, and bedside mobility for stroke survivors.",
    to: "/stroke-in-treatment-ahmedabad",
    tag: "Neuro Rehab",
    icon: Stethoscope,
  },
  {
    title: "Post Surgical Rehabilitation",
    desc: "Comprehensive rehabilitation after knee, hip, shoulder, or spine operations strictly following surgeon protocols.",
    to: "/post-surgical-rehabilitation-in-ahmedabad",
    tag: "Post Operative",
    icon: Award,
  },
  {
    title: "Shoulder & Neck Pain",
    desc: "Frozen shoulder, rotator cuff tendinitis, cervical spondylosis, and postural stiffness treated at home.",
    to: "/shoulder-pain-treatment-doctor-in-ahmedabad",
    tag: "Orthopaedic",
    icon: Activity,
  },
  {
    title: "Vertigo & Balance",
    desc: "Vestibular rehabilitation and positional maneuvers to eliminate dizziness, unsteadiness, and fall risk.",
    to: "/top-vertigo-specialist-in-ahmedabad",
    tag: "Vestibular",
    icon: Sparkles,
  },
  {
    title: "Sports Injuries",
    desc: "Ligament sprains, muscle tears, tendonitis, and athletic conditioning restored in your home space.",
    to: "/sports-physiotherapist-in-ahmedabad",
    tag: "Sports Rehab",
    icon: Zap,
  },
  {
    title: "Cerebral Palsy & Pediatric",
    desc: "Motor milestone development, spasticity management, and gait training in a calm, comforting home environment.",
    to: "/cerebral-palsy-treatment-in-ahmedabad",
    tag: "Pediatric Care",
    icon: HeartPulse,
  },
  {
    title: "Tennis Elbow & Forearm Pain",
    desc: "Tendinopathy relief, myofascial trigger release, and grip strength restoration for elbow strain.",
    to: "/best-doctor-for-tennis-elbow-in-ahmedabad",
    tag: "Arm & Elbow",
    icon: Award,
  },
  {
    title: "Geriatrics Rehabilitation",
    desc: "Dedicated senior mobility programs, balance training, joint preservation, and fall prevention for elderly family members.",
    to: "/best-physiotherapy-clinic-in-ahmedabad",
    tag: "Senior Health",
    icon: Users,
  },
  {
    title: "Pregnancy & Postnatal Rehab",
    desc: "Physiotherapist guided pelvic floor retraining, pregnancy back ache relief, and postpartum recovery in privacy.",
    to: "/female-fitness-trainer-in-ahmedabad",
    tag: "Women's Health",
    icon: HeartPulse,
  },
];

// Benefits of Physiotherapy at Home
const homeBenefits = [
  {
    title: "Enables Ultimate Convenience",
    desc: "Receive top quality physiotherapy directly in your living room, avoiding Ahmedabad traffic, waiting rooms, and travel stress.",
    icon: Home,
  },
  {
    title: "Provides 1-on-1 Personalised Care",
    desc: "A dedicated physiotherapist focuses exclusively on you for the entire 45 to 60 minute session without clinical distractions.",
    icon: Users,
  },
  {
    title: "Brings About a Faster Healing Process",
    desc: "Recovering in a relaxed, comfortable home setting reduces anxiety and accelerates neuromuscular adaptation.",
    icon: Sparkles,
  },
  {
    title: "No Mobility or Transit Issues",
    desc: "Crucial for elderly individuals, bedridden patients, and post surgery cases where travelling in a vehicle causes acute pain.",
    icon: ShieldCheck,
  },
  {
    title: "Better Time Management",
    desc: "Schedule therapy around your daily routine, work hours, and family commitments with flexible morning and evening visit slots.",
    icon: Clock,
  },
  {
    title: "Cost Effective Care",
    desc: "Save on ambulance, taxi, or fuel expenses while enjoying premium clinical physiotherapy at standard transparent rates.",
    icon: Award,
  },
  {
    title: "Family Support & Supervision",
    desc: "Family members can observe the therapy, learn assisted exercise techniques, and support home recovery regimens.",
    icon: HeartPulse,
  },
  {
    title: "Home Ergonomic Optimization",
    desc: "Our therapist analyzes your bed, chair, desk, and stair setup to provide practical ergonomics advice for daily life.",
    icon: CheckCircle2,
  },
];

// Guided Therapy at Home Videos
const homeTherapyVideos = [
  {
    id: "lh8xcnKe6dg",
    title: "Guided Home Physiotherapy & Mobility Routine",
    desc: "Doctor guided techniques and safe movement protocols for daily flexibility and joint relief at home.",
    tag: "Mobility & Relief",
  },
  {
    id: "jowameO_PUc",
    title: "Safe Strengthening & Core Exercises at Home",
    desc: "Step by step posture alignment and muscle reactivation drills you can perform under physiotherapist guidance.",
    tag: "Strengthening",
  },
  {
    id: "NKFv2kT6pbQ",
    title: "Effective Pain Relief & Posture Training",
    desc: "Clinical recommendations for managing back, neck, and joint stiffness with correct movement patterns.",
    tag: "Pain Management",
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
      "Drive In Road",
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
      "Iscon Ambli Road",
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
    a: "Physiotherapy at home involves a licensed, GSCPT registered physiotherapist visiting your residence to perform clinical assessments, hands on treatment, and guided exercises. It is ideal for patients with mobility limitations, post surgery recovery, or busy schedules.",
  },
  {
    q: "What equipment does the physiotherapist bring to my home?",
    a: "Our physiotherapists carry advanced portable modalities including the CuraLaser bio stimulation device, portable IFT and TENS electrotherapy units, therapeutic ultrasound, resistance bands, and assessment tools to deliver full clinical care in your home.",
  },
  {
    q: "How long does each home physiotherapy session last?",
    a: "Each home visit session typically lasts between 45 to 60 minutes, ensuring comprehensive hands on therapy, guided rehabilitation exercises, and progress tracking without any rush.",
  },
  {
    q: "What conditions can be treated with home physiotherapy?",
    a: "Home physiotherapy is highly effective for stroke and paralysis recovery, total knee and hip replacement rehab, severe back and sciatica pain, arthritis, Parkinson's disease, Bell's palsy, post fracture stiffness, and elderly mobility training.",
  },
  {
    q: "What is the fee for home physiotherapy visits?",
    a: "Complete Care maintains transparent, patient friendly pricing ranging from ₹500 to ₹2,000 per therapy session, depending on the required modalities, treatment duration, and clinical assessment.",
  },
  {
    q: "How do I schedule a home visit in Ahmedabad?",
    a: "You can schedule a home visit by calling our central hotline at +91 8980 676 676, messaging us on WhatsApp, or completing the appointment form on this page. Our clinical coordinator will confirm your preferred timing.",
  },
];

function HomePhysiotherapyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "@id": `${SITE_URL}/physiotherapy-at-home-in-ahmedabad/#service`,
      name: "Complete Care Doorstep Physiotherapy at Home",
      description:
        "Licensed physiotherapists visit your residence in Ahmedabad, Mehsana and Ankleshwar with portable CuraLaser, IFT, TENS and ultrasound equipment.",
      url: `${SITE_URL}/physiotherapy-at-home-in-ahmedabad`,
      telephone: "+91 8980 676 676",
      priceRange: "₹500 - ₹2,000",
      image: `${SITE_URL}/assets/treatments/cc-home-page-image.webp`,
      logo: SITE_LOGO,
      medicalSpecialty: [
        "Physiotherapy",
        "Chiropractic",
        "Neurology",
        "Orthopedics",
        "Geriatrics",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "85000",
        bestRating: "5",
        worstRating: "1",
      },
      areaServed: [
        { "@type": "City", name: "Ahmedabad" },
        { "@type": "City", name: "Mehsana" },
        { "@type": "City", name: "Ankleshwar" },
        { "@type": "AdministrativeArea", name: "Gujarat" },
      ],
      parentOrganization: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Physiotherapy at Home", url: "/physiotherapy-at-home-in-ahmedabad" },
    ]),
    generateFAQSchema(faqs),
    generateVideoSchema({
      id: "HyJLrMElJDA",
      title: "Advance Equipment for Home Physiotherapy - CuraLaser Demo",
      description: "Demonstration of portable CuraLaser light therapy and bio stimulation for deep joint and muscle pain relief at home.",
    }),
  ].filter(Boolean);

  return (
    <>
      {/* Schema.org Structured Data (MedicalBusiness, BreadcrumbList, FAQPage, VideoObject) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-sand/70 pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 border-b border-border/80">
        <div className="container-cc">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Hero Column */}
            <div className="space-y-5 sm:space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/90 px-3.5 py-1.5 text-xs font-bold tracking-wider text-teal uppercase shadow-sm">
                <span className="size-2 rounded-full bg-accent animate-pulse" />
                <span>WE ARE HERE AT YOUR DOOR STEP</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-navy leading-[1.15] tracking-tight">
                Get Professional Physiotherapy, Just a Step Away
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl">
                Hospital grade physiotherapy delivered directly at your doorstep in Ahmedabad, Mehsana, and Ankleshwar. Experienced, certified physiotherapists visit your residence with advanced portable CuraLaser, IFT, TENS, and ultrasound equipment for dedicated 1 on 1 recovery.
              </p>

              {/* Trust Metric Badges */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 pt-1">
                <div className="rounded-xl border border-navy/10 bg-white/80 p-3 text-center shadow-xs">
                  <div className="text-base sm:text-lg font-bold text-navy">1 on 1 Care</div>
                  <div className="text-[11px] text-muted-foreground">Dedicated 45-60 Min</div>
                </div>
                <div className="rounded-xl border border-navy/10 bg-white/80 p-3 text-center shadow-xs">
                  <div className="text-base sm:text-lg font-bold text-navy">85,000+</div>
                  <div className="text-[11px] text-muted-foreground">Patients Treated</div>
                </div>
                <div className="rounded-xl border border-navy/10 bg-white/80 p-3 text-center shadow-xs">
                  <div className="text-base sm:text-lg font-bold text-navy">CuraLaser</div>
                  <div className="text-[11px] text-muted-foreground">Advanced Tech</div>
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
              </div>
            </div>

            {/* Right Hero Visual - Clean, borderless, transparent display with no overlay text */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                <img
                  src="/assets/treatments/cc-home-page-image.webp"
                  alt="Complete Care Physiotherapy at Home in Ahmedabad"
                  className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                />
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
            {homeVisitSteps.map((s) => (
              <div
                key={s.step}
                className="relative card-premium flex flex-col justify-between p-6 transition-all hover:border-accent/40 bg-white"
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

      {/* 3. WITH YOU, WHEN YOU NEED US THE MOST (CONDITIONS WE TREAT AT HOME) */}
      <section className="section-y bg-sand/40 border-b border-border/70">
        <div className="container-cc">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="badge-clinical text-teal">
              Comprehensive Care
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy">
              With You, When You Need Us the Most
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              Our registered physiotherapists provide evidence based treatment directly at your home for a wide range of orthopaedic, neurological, and post surgical conditions.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {conditionsAtHome.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  to={item.to as never}
                  className="group card-premium card-premium-hover flex flex-col justify-between p-5 bg-white transition-all hover:border-accent/50"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-9 items-center justify-center rounded-xl bg-[#16803d]/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <Icon className="size-4.5" />
                      </div>
                      <span className="badge-emerald text-[10px]">{item.tag}</span>
                    </div>

                    <h3 className="mt-3 text-base font-bold text-navy group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 border-t border-border pt-3 flex items-center justify-between text-xs font-bold text-accent">
                    <span>Clinical Guide</span>
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ADVANCED EQUIPMENT FOR HOME PHYSIOTHERAPY (CURALASER & MODALITIES) */}
      <section className="section-y bg-background border-b border-border/70">
        <div className="container-cc">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="badge-clinical text-teal">
              Hospital Grade Technology
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy">
              Advance Equipment for Home Physiotherapy
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              We bring clinical hospital grade modalities to your doorstep, ensuring you experience the same high standard of deep healing and tissue regeneration as our physical clinics.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left: CuraLaser Spotlight & Details */}
            <div className="space-y-5 lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-1.5 text-xs font-bold text-accent">
                <Zap className="size-4" />
                <span>Featured Modality: CuraLaser Light Therapy</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-navy leading-snug">
                Targeted Bio Stimulation &amp; Deep Pain Relief at Home
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                The <strong className="text-navy">CuraLaser</strong> is a battery powered device with two heads that makes use of light therapy and bio stimulation to treat muscle and joint pain. It has the goal to provide long term pain relief by addressing the underlying source of the pain rather than simply treating symptoms. Its portability allows for simple, effective treatment right in your home.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 rounded-xl bg-sand/60 p-3.5">
                  <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-navy/90">
                    <strong>Dual Head Light Therapy</strong>: Accelerates cellular ATP synthesis and reduces deep joint inflammation.
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-sand/60 p-3.5">
                  <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-navy/90">
                    <strong>Portable Electrotherapy Suite</strong>: Combined with portable IFT, TENS, and therapeutic ultrasound.
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-sand/60 p-3.5">
                  <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-navy/90">
                    <strong>Root Cause Resolution</strong>: Targets tissue repair rather than temporary symptom suppression.
                  </div>
                </div>
              </div>

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

            {/* Right: Embedded YouTube Video for CuraLaser */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-navy/15 bg-navy shadow-xl">
                <div className="relative aspect-video w-full bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/HyJLrMElJDA?rel=0"
                    title="Advance Equipment for Home Physiotherapy - Complete Care"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 size-full border-0"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 sm:p-5 bg-white flex items-center justify-between border-t border-navy/10">
                  <div>
                    <div className="text-xs font-bold text-teal uppercase tracking-wider">Clinical Video</div>
                    <div className="text-sm sm:text-base font-bold text-navy">Portable CuraLaser &amp; Home Modalities</div>
                  </div>
                  <span className="badge-emerald text-xs">Watch Demo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW YOU CAN DO THERAPY AT HOME - EXPERT GUIDED VIDEO SERIES */}
      <section className="section-y bg-sand/50 border-b border-border/70">
        <div className="container-cc">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="badge-clinical text-teal">
              Patient Guidance &amp; Education
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy">
              How You Can Do Therapy at Home
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              Watch our expert physiotherapists demonstrate safe, guided exercises and movement routines you can practice at home to maintain your recovery.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {homeTherapyVideos.map((vid) => (
              <div
                key={vid.id}
                className="overflow-hidden rounded-2xl border border-navy/15 bg-white shadow-sm flex flex-col justify-between transition-all hover:shadow-md hover:border-accent/40"
              >
                <div className="relative aspect-video w-full bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${vid.id}?rel=0`}
                    title={vid.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 size-full border-0"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="badge-clinical text-[10px] text-teal">{vid.tag}</span>
                      <span className="text-[11px] font-semibold text-muted-foreground">Complete Care</span>
                    </div>
                    <h3 className="text-base font-bold text-navy leading-snug">
                      {vid.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {vid.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-semibold text-accent">
                    <span>Expert Supervised</span>
                    <Play className="size-3.5 fill-current" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BENEFITS OF PHYSIOTHERAPY AT HOME */}
      <section className="section-y bg-background border-b border-border/70">
        <div className="container-cc">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="badge-clinical text-teal">
              Patient First Experience
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy">
              Benefits of Physiotherapy at Home
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Physiotherapy has over the years proved its effectiveness in helping patients in restoring their health and enhancing their physical strength, function, and mobility. To further enhance your experience, our physiotherapists personally visit you and perform physiotherapy at home.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {homeBenefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="card-premium p-5 bg-sand/30 flex flex-col justify-between transition-all hover:bg-white hover:border-accent/40"
                >
                  <div>
                    <div className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent mb-3">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-base font-bold text-navy">{b.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reassurance Banner */}
          <div className="mt-10 rounded-3xl border border-accent/30 bg-emerald-950/5 p-6 sm:p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-navy">
              Say Goodbye to All Your Worries and Hassles of Travel
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
              With our affordable, accountable, and doctor supervised home services, you receive the highest standard of physical rehabilitation in the sanctuary of your home.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#appointment-form"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-sm transition-all hover:bg-emerald-600"
              >
                <CalendarCheck className="size-4" />
                <span>Book Home Visit</span>
              </a>
              <a
                href="tel:918980676676"
                className="inline-flex items-center gap-2 rounded-xl border border-navy/20 bg-white px-5 py-3 text-sm font-bold text-navy hover:bg-navy/5"
              >
                <Phone className="size-4 text-accent" />
                <span>+91 8980 676 676</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRANSPARENT PRICING SECTION */}
      <section className="section-y bg-sand/40 border-b border-border/70">
        <div className="container-cc max-w-4xl">
          <div className="text-center mb-8">
            <span className="badge-clinical text-teal">
              Transparent &amp; Fair
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy">
              Affordable Home Visit Pricing
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Clear clinical pricing with zero hidden charges.
            </p>
          </div>

          <div className="rounded-3xl border border-navy/15 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6 border-b border-navy/10">
              <div>
                <span className="badge-emerald text-xs">Standard Doorstep Care</span>
                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-navy">
                  Home Physiotherapy Session
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Includes registered physiotherapist visit, clinical assessment, portable modalities, and guided exercise.
                </p>
              </div>
              <div className="text-left md:text-right shrink-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-navy font-mono">
                  ₹500 to ₹2,000
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">per home visit session</div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4.5 text-accent shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-navy">Detailed 45 to 60 minute clinical evaluation and treatment</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4.5 text-accent shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-navy">Portable CuraLaser, IFT, TENS, or therapeutic ultrasound</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4.5 text-accent shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-navy">Hands on joint mobilization, stretching, and neural flossing</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4.5 text-accent shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-navy">Home ergonomics, posture guidance, and progress tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. LOCALITY COVERAGE ACROSS GUJARAT */}
      <section className="section-y bg-background border-b border-border/70">
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

      {/* 9. APPOINTMENT BOOKING SECTION */}
      <section id="appointment-form" className="section-y bg-sand/40 scroll-mt-20 border-b border-border/70">
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
                Take the stress out of clinical travel. Submit your details below to schedule a certified physiotherapist visit at your residence at a convenient time slot.
              </p>

              {/* Consultation Perks */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-navy">Dedicated 1 on 1 Attention</div>
                    <div className="text-xs text-muted-foreground">Full 45 to 60 minute personalized therapy session</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-navy">Portable Hospital Grade Equipment</div>
                    <div className="text-xs text-muted-foreground">CuraLaser, IFT, TENS and ultrasound brought to your home</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-navy">Transparent Pricing (₹500 to ₹2,000)</div>
                    <div className="text-xs text-muted-foreground">Affordable per session rates with zero hidden charges</div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Box */}
              <div className="rounded-2xl border border-navy/10 bg-white p-5 mt-4 shadow-xs">
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

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <section className="section-y bg-background border-b border-border/80">
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

      {/* 11. TESTIMONIALS */}
      <Testimonials limit={3} />

      {/* 12. CLOSING CTA */}
      <CtaBand title="Schedule Your Doorstep Physiotherapy in Ahmedabad Today" />
    </>
  );
}
