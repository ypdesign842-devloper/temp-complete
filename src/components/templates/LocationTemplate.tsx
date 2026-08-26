import { Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowUpRight,
  Award,
  Building2,
  CalendarCheck,
  CheckCircle2,
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
import { CtaBand } from "@/components/blocks/CtaBand";
import { AppointmentForm } from "@/components/blocks/AppointmentForm";
import { Testimonials } from "@/components/blocks/Testimonials";
import { locations, type Location } from "@/data/locations";
import { teamBranches, type TeamMember } from "@/data/team";
import type { LocationContent } from "@/data/types";
import {
  generateLocationPageSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";

// Localities served for Home Visit Physiotherapy by Centre
const localityMap: Record<string, string[]> = {
  Thaltej: [
    "Thaltej",
    "Vastrapur",
    "Gurudwara Road",
    "Science City",
    "Shilaj",
    "Memnagar",
    "Naranpura",
    "Navrangpura",
    "Satellite",
    "Ambawadi",
    "Bodakdev",
    "Drive-In Road",
  ],
  Gota: [
    "Gota",
    "Vandematram",
    "Jagatpur",
    "Ghatlodiya",
    "Ranip",
    "Chandlodiya",
    "Chenpur",
    "Lapkaman",
    "S.G. Highway",
    "New Ranip",
  ],
  "South Bopal": [
    "South Bopal",
    "Bopal",
    "Ghuma",
    "Shilaj",
    "Shela",
    "Ambli",
    "Sanand Road",
    "Iscon-Ambli Road",
    "SP Ring Road",
  ],
  Nikol: [
    "Nikol",
    "Naroda",
    "Vastral",
    "Odhav",
    "Bapunagar",
    "Krishnanagar",
    "India Colony",
    "Virat Nagar",
    "Kathwada",
  ],
  Mehsana: [
    "Mehsana City",
    "Dairy Road",
    "Radhanpur Road",
    "Modhera Road",
    "Visnagar Road",
    "Umiyanagar Society",
    "Panchot",
    "Nagori Road",
  ],
  Ankleshwar: [
    "Ankleshwar GIDC",
    "Station Road",
    "Rajpipla Road",
    "Valia Road",
    "Hansot Road",
    "Old Town",
    "Bharuch City",
    "GNFC",
  ],
};

// Modalities offered at Complete Care centres
const modalities = [
  {
    title: "Chiropractic Spinal Care",
    desc: "Doctor-led spinal adjustments, cervical and lumbar alignment, and posture restoration by Dr. Hardik Patel (PT).",
    tag: "Spinal Care",
    icon: Activity,
    href: "/chiropractic-treatment-in-ahmedabad",
  },
  {
    title: "Computerised Spine Decompression",
    desc: "Non-surgical spinal decompression table for herniated discs, slipped discs, sciatica, and pinched nerves.",
    tag: "FDA Approved",
    icon: Zap,
    href: "/best-spine-decompression-therapy-in-ahmedabad",
  },
  {
    title: "Class IV Deep Tissue Laser",
    desc: "High-power therapeutic laser delivering accelerated cellular repair, reducing inflammation and acute pain.",
    tag: "Phototherapy",
    icon: Sparkles,
    href: "/effective-class-iv-laser-therapy-in-ahmedabad",
  },
  {
    title: "PEMF & TECAR Therapy",
    desc: "Electromagnetic & targeted radiofrequency therapy promoting cartilage recovery, bone healing, and pain relief.",
    tag: "Cellular Healing",
    icon: HeartPulse,
    href: "/effective-pemf-therapy-in-ahmedabad",
  },
  {
    title: "Dry Needling & Cupping",
    desc: "Evidence based myofascial trigger point release and cupping therapy to relieve stubborn muscle knots.",
    tag: "Myofascial Care",
    icon: Stethoscope,
    href: "/best-dry-needling-treatment-in-ahmedabad",
  },
  {
    title: "Stroke & Neuro Rehabilitation",
    desc: "Comprehensive neurological recovery for stroke, Parkinson's disease, Bell's palsy, and balance disorders.",
    tag: "Neuro Rehab",
    icon: ShieldCheck,
    href: "/stroke-in-treatment-ahmedabad",
  },
  {
    title: "Joint & Sports Injury Physio",
    desc: "Targeted rehabilitation for knee osteoarthritis, ACL tears, frozen shoulder, rotator cuff, and ankle sprains.",
    tag: "Orthopaedic",
    icon: Award,
    href: "/knee-pain-treatment-in-ahmedabad",
  },
  {
    title: "Medical Fitness & Core Rehab",
    desc: "Physiotherapist-guided strength training, posture conditioning, and long-term injury prevention.",
    tag: "Active Rehab",
    icon: Users,
    href: "/our-team",
  },
];

export function LocationTemplate({ data, content }: { data: Location; content: LocationContent }) {
  // Find on-site team members for this location
  const branchTeam =
    teamBranches.find((b) => {
      const cleanBranch = b.branch.toLowerCase();
      const cleanName = data.name.toLowerCase();
      return cleanBranch.includes(cleanName) || cleanBranch.startsWith(cleanName.slice(0, 4));
    })?.members ?? [];

  // Filter gallery photos to real clinic photos
  const gallery = content.gallery.filter(
    (src) => !src.includes("Spine.J02") && !src.includes("Hardik-Patel-ccc")
  );

  const others = locations.filter((l) => l.slug !== data.slug);
  const localities = localityMap[data.name] || [data.name, data.city, "Surrounding Localities"];

  const schemas = [
    generateLocationPageSchema(data),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Clinic Network", url: "/#clinic-network" },
      { name: `Complete Care ${data.name}`, url: `/${data.slug}` },
    ]),
  ];

  return (
    <>
      {/* Schema.org Structured Data (PhysiotherapyClinic, NAP, Coordinates, BreadcrumbList) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-sand/70 pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 border-b border-border/80">
        <div className="container-cc">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Hero Column */}
            <div className="space-y-5 sm:space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/90 px-3.5 py-1.5 text-xs font-bold tracking-wider text-teal uppercase shadow-sm">
                <span className="size-2 rounded-full bg-accent animate-pulse" />
                <span>COMPLETE CARE · {data.city.toUpperCase()}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-navy leading-[1.18] tracking-tight">
                {data.h1}
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl">
                {data.lead}
              </p>

              {/* Trust Metric Badges */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 pt-1">
                <div className="rounded-xl border border-navy/10 bg-white/80 p-3 text-center shadow-xs">
                  <div className="text-base sm:text-lg font-bold text-navy">15+ Years</div>
                  <div className="text-[11px] text-muted-foreground">Clinical Trust</div>
                </div>
                <div className="rounded-2xl border border-navy/10 bg-white p-4 text-center shadow-xs">
                  <div className="text-base sm:text-lg font-bold text-navy">85,000+</div>
                  <div className="text-[11px] text-muted-foreground">Patients Treated</div>
                </div>
                <div className="rounded-xl border border-navy/10 bg-white/80 p-3 text-center shadow-xs">
                  <div className="text-base sm:text-lg font-bold text-navy">GSCPT</div>
                  <div className="text-[11px] text-muted-foreground">Certified Physios</div>
                </div>
                <div className="rounded-xl border border-navy/10 bg-white/80 p-3 text-center shadow-xs">
                  <div className="text-base sm:text-lg font-bold text-navy">US FDA</div>
                  <div className="text-[11px] text-muted-foreground">Tech Modalities</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#appointment-form"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-md shadow-accent/20 transition-all hover:bg-emerald-600 hover:shadow-lg"
                >
                  <CalendarCheck className="size-4" />
                  <span>Book Appointment</span>
                  <span>&rarr;</span>
                </a>

                <a
                  href={data.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-navy/15 bg-white px-5 py-3.5 text-sm font-bold text-navy shadow-xs transition-all hover:border-navy hover:bg-navy/5"
                >
                  <Phone className="size-4 text-accent" />
                  <span>Call {data.phone}</span>
                </a>

                <a
                  href={data.whatsapp}
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
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-2xl bg-sand">
                  <img
                    src={content.hero || data.hero || "/assets/media/Complete-care-Thaltej-Ahmedabad-Clinic-photos1.webp"}
                    alt={`Complete Care Physiotherapy Centre in ${data.name}, ${data.city}`}
                    className="size-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Centre Pill */}
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/95 p-3 backdrop-blur-md border border-navy/10 shadow-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MapPin className="size-4 text-accent shrink-0" />
                        <span className="text-xs sm:text-sm font-bold text-navy truncate">
                          Complete Care {data.name} Centre
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-bold text-amber-600">
                        <Star className="size-3.5 fill-amber-400 text-amber-400" />
                        <span>4.9 / 5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLINIC QUICK DETAILS STRIP */}
      <section className="py-8 sm:py-10 bg-background border-b border-border/70">
        <div className="container-cc">
          <div className="grid gap-4 sm:grid-cols-3">
            {/* Address Card */}
            <div className="card-premium flex flex-col justify-between p-5 sm:p-6 transition-all hover:border-accent/40">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-teal uppercase">
                  <MapPin className="size-4 text-accent" />
                  <span>Clinic Address</span>
                </div>
                <p className="mt-2.5 text-sm font-semibold text-navy leading-relaxed">
                  {data.address}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border">
                <a
                  href={data.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-emerald-700"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>

            {/* Timings Card */}
            <div className="card-premium flex flex-col justify-between p-5 sm:p-6 transition-all hover:border-accent/40">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-teal uppercase">
                  <Clock className="size-4 text-accent" />
                  <span>Consultation Timings</span>
                </div>
                <p className="mt-2.5 text-sm font-semibold text-navy">
                  {data.hours || "Monday to Saturday, 8:00 AM to 8:00 PM"}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border text-xs text-muted-foreground font-medium">
                Sunday: By Prior Appointment Only
              </div>
            </div>

            {/* Direct Line Card */}
            <div className="card-premium flex flex-col justify-between p-5 sm:p-6 transition-all hover:border-accent/40">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-teal uppercase">
                  <Phone className="size-4 text-accent" />
                  <span>Direct Clinic Phone</span>
                </div>
                <p className="mt-2.5 text-base font-bold text-navy">
                  <a href={data.phoneHref} className="hover:text-accent transition-colors">
                    {data.phone}
                  </a>
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border text-xs text-muted-foreground font-medium">
                Dedicated patient coordination line
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLINICAL EXCELLENCE & PILLARS */}
      <section className="section-y bg-sand/40">
        <div className="container-cc">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="space-y-4 lg:col-span-5">
              <span className="badge-clinical text-teal">
                Why Complete Care {data.name}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy">
                Specialised Physiotherapy &amp; Rehabilitation in {data.name}
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                At Complete Care {data.name}, treatment is grounded in root-cause diagnosis, biomechanical assessment, and advanced physiotherapy technology. We combine hands-on chiropractic expertise with structured exercise rehabilitation to help you recover comfortably and sustainably.
              </p>
              <div className="pt-2">
                <a
                  href="#appointment-form"
                  className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-emerald-700"
                >
                  <span>Schedule your clinical evaluation &rarr;</span>
                </a>
              </div>
            </div>

            {/* 4 Feature Pillars */}
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              <div className="rounded-2xl border border-navy/10 bg-white p-5 shadow-xs">
                <div className="flex size-10 items-center justify-center rounded-xl bg-[#16803d]/10 text-accent">
                  <Stethoscope className="size-5" />
                </div>
                <h3 className="mt-3 text-base font-bold text-navy">Doctor-Led Assessment</h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Every patient receives a thorough evaluation by senior physiotherapists to identify root causes.
                </p>
              </div>

              <div className="rounded-2xl border border-navy/10 bg-white p-5 shadow-xs">
                <div className="flex size-10 items-center justify-center rounded-xl bg-[#16803d]/10 text-accent">
                  <ShieldCheck className="size-5" />
                </div>
                <h3 className="mt-3 text-base font-bold text-navy">Non Surgical Protocol</h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Conservative, joint-safe methods designed to relieve pain and avoid invasive surgeries.
                </p>
              </div>

              <div className="rounded-2xl border border-navy/10 bg-white p-5 shadow-xs">
                <div className="flex size-10 items-center justify-center rounded-xl bg-[#16803d]/10 text-accent">
                  <Zap className="size-5" />
                </div>
                <h3 className="mt-3 text-base font-bold text-navy">Hospital-Grade Technology</h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Class IV Laser, computerised spinal decompression, and high-frequency PEMF under one roof.
                </p>
              </div>

              <div className="rounded-2xl border border-navy/10 bg-white p-5 shadow-xs">
                <div className="flex size-10 items-center justify-center rounded-xl bg-[#16803d]/10 text-accent">
                  <Users className="size-5" />
                </div>
                <h3 className="mt-3 text-base font-bold text-navy">Dedicated 1-on-1 Guidance</h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Personalized rehabilitation plans supervised closely during every single therapy session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLINICAL TEAM AT THIS LOCATION (Above Modalities) */}
      {branchTeam.length > 0 && (
        <section className="section-y bg-background border-t border-border/70">
          <div className="container-cc">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end mb-10">
              <div className="max-w-2xl">
                <span className="badge-clinical text-teal">
                  Clinical Team
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy">
                  Physiotherapists at {data.name} Centre
                </h2>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                  Qualified physical therapists registered with the Gujarat State Council for Physiotherapy (GSCPT).
                </p>
              </div>
              <a
                href="#appointment-form"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:text-emerald-700 self-start sm:self-auto"
              >
                <span>Book with Doctor</span>
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {branchTeam.map((m: TeamMember) => (
                <div
                  key={m.name}
                  className="card-premium card-premium-hover flex flex-col justify-between overflow-hidden p-4 sm:p-5 transition-all"
                >
                  <div>
                    {m.image ? (
                      <div className="mb-3.5 overflow-hidden rounded-xl border border-navy/10 bg-sand">
                        <img
                          src={m.image}
                          alt={m.name}
                          loading="lazy"
                          className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="mb-3.5 flex aspect-[4/5] items-center justify-center rounded-xl border border-navy/10 bg-sand text-navy/40">
                        <Users className="size-12" />
                      </div>
                    )}
                    <h3 className="text-sm sm:text-base font-bold text-navy truncate">{m.name}</h3>
                    {m.qualification && (
                      <p className="mt-0.5 text-xs text-muted-foreground font-medium">
                        {m.qualification}
                      </p>
                    )}
                  </div>

                  <div className="mt-3.5 border-t border-border pt-2.5">
                    {m.credential ? (
                      <span className="badge-emerald text-[10px] truncate block">{m.credential}</span>
                    ) : (
                      <span className="text-[11px] font-semibold text-teal">
                        GSCPT Registered Clinician
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. MODALITIES & SPECIALISATIONS GRID */}
      <section className="section-y bg-sand/40 border-t border-border/70">
        <div className="container-cc">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="badge-clinical text-teal">
              Clinical Modalities
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy">
              Advanced Treatments Available at {data.name}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              Hospital grade physiotherapy equipment and certified techniques under one roof.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {modalities.map((m) => {
              const Icon = m.icon;
              return (
                <Link
                  key={m.title}
                  to={m.href as never}
                  className="group card-premium card-premium-hover flex flex-col justify-between p-5 transition-all bg-white"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-[#16803d]/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <Icon className="size-5" />
                      </div>
                      <span className="badge-emerald text-[10px]">{m.tag}</span>
                    </div>
                    <h3 className="mt-4 text-base font-bold text-navy group-hover:text-accent transition-colors">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {m.desc}
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

      {/* 6. DOORSTEP PHYSIOTHERAPY HOME VISITS */}
      <section className="section-y bg-sand/70">
        <div className="container-cc">
          <div className="relative overflow-hidden rounded-3xl border border-navy/12 bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="space-y-4 sm:space-y-5 lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-sand px-3.5 py-1 text-xs font-bold tracking-wider text-teal uppercase">
                  <Home className="size-3.5 text-accent" />
                  <span>DOORSTEP CLINICAL CARE</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy">
                  Physiotherapy Home Visits in {data.name} &amp; Surrounding Areas
                </h2>

                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Are you recovering from surgery, managing acute back or joint pain, or looking after elderly family members unable to visit the clinic? Complete Care provides professional doorstep physiotherapy across {data.name} and neighboring localities with portable modality equipment and personalized care plans.
                </p>

                {/* Locality Badges */}
                <div className="pt-2">
                  <div className="text-xs font-bold text-navy uppercase tracking-wider mb-2.5">
                    Localities Covered by {data.name} Team:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {localities.map((area) => (
                      <span
                        key={area}
                        className="rounded-lg border border-navy/10 bg-sand/70 px-3 py-1 text-xs font-medium text-navy"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <a
                    href={data.phoneHref}
                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-sm transition-all hover:bg-emerald-600"
                  >
                    <Phone className="size-4" />
                    <span>Call for Home Visit</span>
                  </a>
                  <a
                    href={data.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-emerald-600/30 bg-emerald-50 px-5 py-3 text-sm font-bold text-emerald-800 transition-all hover:bg-emerald-100"
                  >
                    <MessageSquare className="size-4 text-emerald-600" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>
              </div>

              {/* Right Image Feature */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-navy/10 bg-sand shadow-md">
                  <img
                    src="/assets/media/Complete-care-Thaltej-Ahmedabad-Clinic-photos5.webp"
                    alt={`Home physiotherapy service in ${data.name}`}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-sm font-bold">1-on-1 Personalized Care at Home</div>
                    <div className="text-xs text-white/85 mt-0.5">
                      Flexible scheduling &amp; complete clinical equipment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PHOTO GALLERY / FACILITY SHOWCASE */}
      {gallery.length > 0 && (
        <section className="section-y bg-background">
          <div className="container-cc">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end mb-8 sm:mb-10">
              <div>
                <span className="badge-clinical text-teal">
                  Facility Tour
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy">
                  Inside Complete Care {data.name}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Take a look inside our clean, modern consultation rooms and advanced therapy suites.
                </p>
              </div>
              <span className="text-xs font-semibold text-muted-foreground bg-sand px-3 py-1.5 rounded-full border border-navy/10 self-start sm:self-auto">
                {gallery.length} Clinic Photos
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
              {gallery.map((src, i) => (
                <div
                  key={src + i}
                  className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-sand shadow-xs aspect-[4/3]"
                >
                  <img
                    src={src}
                    alt={`Complete Care ${data.name} clinic facility photo ${i + 1}`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/20 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. APPOINTMENT BOOKING SECTION */}
      <section id="appointment-form" className="section-y bg-background scroll-mt-20">
        <div className="container-cc">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left Content Column */}
            <div className="space-y-6 lg:col-span-5">
              <span className="badge-clinical text-teal">
                Consultation Booking
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy">
                Book Your Consultation at {data.name}
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                Take the first step toward pain-free movement. Complete the form to schedule a detailed 45-60 minute assessment at our {data.name} centre or request a doorstep home visit.
              </p>

              {/* Consultation Perks */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-navy">Comprehensive Movement Screening</div>
                    <div className="text-xs text-muted-foreground">Root-cause identification by experienced physiotherapists</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-navy">Zero Waiting Protocol</div>
                    <div className="text-xs text-muted-foreground">Dedicated scheduled slots so you are attended immediately</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-navy">Transparent Clinic Pricing</div>
                    <div className="text-xs text-muted-foreground">Standard therapy sessions ₹500 to ₹2,000 across all centres</div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Box */}
              <div className="rounded-2xl border border-navy/10 bg-sand/70 p-5 mt-4">
                <div className="text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                  Need Immediate Assistance?
                </div>
                <div className="text-sm text-muted-foreground">
                  Call directly at{" "}
                  <a href={data.phoneHref} className="font-bold text-navy hover:text-accent">
                    {data.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Booking Form Column */}
            <div className="lg:col-span-7">
              <AppointmentForm centre={`${data.name}, ${data.city}`} />
            </div>
          </div>
        </div>
      </section>

      {/* 9. OTHER CENTRES ACROSS GUJARAT */}
      <section className="section-y bg-sand/40 border-t border-border/80">
        <div className="container-cc">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end mb-10">
            <div>
              <span className="badge-clinical text-teal">
                Clinic Network
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy">
                Our Other Centres in Gujarat
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                6 modern physiotherapy and chiropractic centres across Ahmedabad, Mehsana, and Ankleshwar.
              </p>
            </div>
            <Link
              to="/our-team"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:text-emerald-700 self-start md:self-auto"
            >
              <span>Meet all clinicians</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((l) => (
              <Link
                key={l.slug}
                to={`/${l.slug}` as never}
                className="group card-premium card-premium-hover flex flex-col justify-between p-5 sm:p-6"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="badge-emerald text-[10px]">{l.city}</span>
                    <Building2 className="size-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="mt-3 text-lg sm:text-xl font-bold text-navy group-hover:text-accent transition-colors">
                    {l.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {l.address}
                  </p>
                </div>

                <div className="mt-5 border-t border-border pt-3.5 flex items-center justify-between text-xs font-bold text-navy">
                  <span className="text-teal">{l.phone}</span>
                  <span className="text-accent group-hover:underline inline-flex items-center gap-1">
                    View Centre &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <Testimonials limit={3} />

      {/* 11. CLOSING CTA BAND */}
      <CtaBand title={`Visit Complete Care ${data.name} Centre`} />
    </>
  );
}
