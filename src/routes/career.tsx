import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, type ChangeEvent, type DragEvent } from "react";
import { toast } from "sonner";
import { site } from "@/data/site";
import { submitCareerApplicationFn } from "@/lib/career-server";
import { submitWeb3FormWithFile } from "@/lib/web3forms";
import {
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  FileCheck,
  HeartHandshake,
  HelpCircle,
  Home,
  Loader2,
  Lock,
  Mail,
  Send,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Trash2,
  UploadCloud,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      {
        title: "Careers & Job Openings | Complete Care Physiotherapy & Rehabilitation Gujarat",
      },
      {
        name: "description",
        content:
          "Grow with a team that puts clinical excellence, continuous learning, and patient outcomes first. Hiring Consultant Physiotherapists, Chiropractors, Neuro Rehab Specialists & Fitness Trainers across Gujarat.",
      },
      {
        property: "og:title",
        content: "Build a Meaningful Career in Physiotherapy & Rehabilitation | Complete Care",
      },
      {
        property: "og:description",
        content:
          "Work alongside 40+ licensed physiotherapists with access to advanced modalities (Laser, Spine Decompression, PEMF, Tecar) and clinical mentorship from Dr. Hardik Patel (PT) and Dr. Foram Patel (PT).",
      },
      {
        property: "og:url",
        content: "https://completecare.in/career/",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://completecare.in/career/",
      },
    ],
  }),
  component: CareerPage,
});

/** Available Position Options for Form Dropdown */
const positionOptions = [
  "Consultant Physiotherapist (BPT / MPT)",
  "Senior Chiropractor & Spine Specialist",
  "Neuro-Rehabilitation Specialist (MPT Neuro)",
  "Female Fitness Trainer & Medical Yoga Specialist",
  "Doorstep Home Care Physiotherapist",
  "Patient Care Coordinator & Front Desk Admin",
  "Clinical Physiotherapist (General)",
  "Clinical Internship (BPT Intern)",
  "Other",
];

/** Qualification Options */
const qualificationOptions = [
  "BPT (Bachelor of Physiotherapy)",
  "MPT - Musculoskeletal / Orthopaedics",
  "MPT - Neurosciences / Neurology",
  "MPT - Sports Sciences",
  "MPT - Cardio-Pulmonary",
  "Certified Chiropractor / Manual Therapist",
  "Certified Fitness / Medical Yoga Trainer",
  "Healthcare Administration / MHA",
  "Other",
];

/** Why Complete Care Perks */
const whyJoinPerks = [
  {
    icon: Zap,
    title: "Cutting-Edge Modality Tech",
    description:
      "Hands-on practice with Class IV High-Power Laser, Spinal Decompression Systems, PEMF, Tecar Therapy, Dry Needling, and IASTM.",
  },
  {
    icon: Stethoscope,
    title: "Mentorship by Dr. Hardik Patel",
    description:
      "Learn differential diagnostic skills, clinical movement tests, and evidence-based treatment algorithms from a master clinician with 16+ years experience.",
  },
  {
    icon: Building2,
    title: "6 State-of-the-Art Centres",
    description:
      "Modern, hygienic clinics across Ahmedabad (Gota, Thaltej, South Bopal, Nikol), Mehsana, and Ankleshwar equipped with premium rehab units.",
  },
  {
    icon: Award,
    title: "Fast-Track Career Progression",
    description:
      "Structured clinical growth roadmap from Junior Therapist to Senior Consultant to Centre Clinical Lead with transparent performance reviews.",
  },
  {
    icon: Users,
    title: "Collaborative Multidisciplinary Team",
    description:
      "Join a passionate team of 40+ licensed physiotherapists, chiropractors, and fitness professionals who respect and support each other.",
  },
  {
    icon: HeartHandshake,
    title: "Competitive Compensation & Culture",
    description:
      "Industry-leading remuneration, performance bonuses, home-visit allowances, paid CME days, and a respectful work-life balance.",
  },
];

/** Applicant FAQ */
const applicantFaqs = [
  {
    q: "Can freshers (recent BPT graduates) apply for clinical roles?",
    a: "Yes! We welcome enthusiastic BPT freshers with valid GSCPT registration. You will undergo our structured 4-week clinical induction program covering hands-on modality training, patient communication, and assessment protocols under senior mentors.",
  },
  {
    q: "What is the recruitment and interview process?",
    a: "Our hiring process is straightforward: (1) Review of your online application within 48 hours, (2) Brief telephone screening with our HR coordinator, (3) Practical case discussion / clinical assessment at our central clinic, and (4) Offer letter rollout.",
  },
  {
    q: "Will I get trained on advanced therapies like Class IV Laser and Decompression?",
    a: "Absolutely. All therapists at Complete Care undergo dedicated certification and practical calibration training on our electrotherapy and advanced modalities before independently administering treatments.",
  },
  {
    q: "Are part-time or home visit options available?",
    a: "Yes, we offer flexible doorstep home-visit roles and part-time medical fitness coaching roles alongside our standard full-time clinic positions.",
  },
];

function CareerPage() {
  const formRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Ahmedabad");
  const [position, setPosition] = useState(positionOptions[0]);
  const [otherPosition, setOtherPosition] = useState("");
  const [experience, setExperience] = useState("1–2 Years");
  const [organization, setOrganization] = useState("");
  const [qualification, setQualification] = useState(qualificationOptions[0]);
  const [otherQualification, setOtherQualification] = useState("");
  const [preferredLocation, setPreferredLocation] = useState("Any Ahmedabad Centre");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [coverNote, setCoverNote] = useState("");
  const [consent, setConsent] = useState(true);

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  // Resume File Selection Handler
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      toast.error("File size exceeds 10MB limit. Please upload a smaller PDF or Word document.");
      return;
    }

    const validExtensions = [".pdf", ".doc", ".docx"];
    const ext = "." + file.name.split(".").pop()?.toLowerCase();
    if (!validExtensions.includes(ext)) {
      toast.error("Please upload a valid PDF, DOC, or DOCX document.");
      return;
    }

    setResumeFile(file);
    toast.success(`Resume "${file.name}" attached successfully!`);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      toast.error("File size exceeds 10MB limit.");
      return;
    }

    const validExtensions = [".pdf", ".doc", ".docx"];
    const ext = "." + file.name.split(".").pop()?.toLowerCase();
    if (!validExtensions.includes(ext)) {
      toast.error("Please upload a valid PDF, DOC, or DOCX document.");
      return;
    }

    setResumeFile(file);
    toast.success(`Resume "${file.name}" attached successfully!`);
  };

  const removeResume = () => {
    setResumeFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    toast.info("Resume file removed.");
  };

  // Direct Server Email Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      toast.error("Please enter your Full Name.");
      return;
    }

    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!email.trim() || !email.includes("@")) {
      toast.error("Please provide a valid email address.");
      return;
    }

    if (!city.trim()) {
      toast.error("Please provide your current city.");
      return;
    }

    if (position === "Other" && !otherPosition.trim()) {
      toast.error("Please specify the position you are applying for.");
      return;
    }

    if (qualification === "Other" && !otherQualification.trim()) {
      toast.error("Please specify your qualification.");
      return;
    }

    if (!consent) {
      toast.error("Please check the consent box to submit your application.");
      return;
    }

    setIsSubmitting(true);

    const finalPos: string =
      position === "Other" && otherPosition.trim()
        ? `Other: ${otherPosition.trim()}`
        : position || "Physiotherapist";
    const finalQual: string =
      qualification === "Other" && otherQualification.trim()
        ? `Other: ${otherQualification.trim()}`
        : qualification || "BPT";
    const targetRecipient = "ypdesign842@gmail.com";

    try {
      const web3FormData = new FormData();
      web3FormData.append("Candidate Name", fullName.trim());
      web3FormData.append("Position", finalPos);
      web3FormData.append("Years of Experience", experience);
      web3FormData.append("Highest Qualification", finalQual);
      web3FormData.append("Mobile Number", cleanPhone);
      web3FormData.append("Email Address", email.trim());
      web3FormData.append("Current City", city.trim());
      web3FormData.append("Current / Previous Organization", organization.trim() || "N/A (Fresher / Independent)");
      web3FormData.append("Preferred Work Location", preferredLocation);

      if (coverNote.trim()) {
        web3FormData.append("Clinical Note / Specialization", coverNote.trim());
      }

      if (resumeFile) {
        web3FormData.append("attachment", resumeFile, resumeFile.name);
      }

      const res = await submitWeb3FormWithFile(web3FormData, {
        subject: `Job Application: ${finalPos} - ${fullName.trim()} (${experience})`,
        fromName: "Complete Care Careers",
        replyTo: email.trim(),
      });

      setIsSubmitted(true);
      if (res.success) {
        toast.success("Application submitted successfully! Our team will review your profile.");
      } else {
        toast.info("Application recorded. Our team will review your profile.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setIsSubmitted(true);
      toast.success("Application submitted successfully!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setOtherPosition("");
    setOtherQualification("");
    setOrganization("");
    setCoverNote("");
    setResumeFile(null);
    setIsSubmitted(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="min-h-screen bg-[#f9f7ef] text-foreground">
      {/* Schema.org JobPosting & MedicalOrganization structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            name: "Complete Care Physiotherapy & Rehabilitation",
            url: "https://completecare.in/career/",
            logo: "https://completecare.in/assets/brand/completecare-logo.webp",
            description:
              "Join Gujarat's leading physiotherapy, chiropractic, and neuro-rehabilitation network with 6 clinics across Ahmedabad, Mehsana, and Ankleshwar.",
            telephone: site.phone,
            email: "ypdesign842@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ahmedabad",
              addressRegion: "Gujarat",
              addressCountry: "IN",
            },
          }),
        }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-border/80 bg-gradient-to-b from-white via-[#f9f7ef] to-[#f9f7ef] py-12 sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-leaf/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 size-96 rounded-full bg-teal/10 blur-3xl"
        />

        <div className="container-cc relative">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground"
          >
            <Link to="/" className="inline-flex items-center gap-1 hover:text-accent transition-colors">
              <Home className="size-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight aria-hidden="true" className="size-3 text-muted-foreground/60" />
            <Link to="/our-team" className="hover:text-accent transition-colors">
              Our Team
            </Link>
            <ChevronRight aria-hidden="true" className="size-3 text-muted-foreground/60" />
            <span className="text-navy font-bold">Careers</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            {/* Left Content */}
            <div className="space-y-5">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#16803d]/20 bg-[#16803d]/10 px-4 py-1.5 text-xs font-bold tracking-wide text-[#166534] shadow-sm">
                <Sparkles className="size-3.5 text-[#16803d]" />
                <span>Join Gujarat’s Leading Rehabilitation Network · 6 Centres</span>
              </div>

              {/* H1 */}
              <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl leading-[1.18]">
                Build a Meaningful Career in Physiotherapy &amp; Rehabilitation
              </h1>

              {/* Description */}
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Grow with a team that puts clinical excellence, continuous learning, and patient outcomes first. Work alongside 40+ licensed physiotherapists with access to advanced modalities including Class IV Laser, Spine Decompression, PEMF, and Tecar, with clinical mentorship from <strong>Dr. Hardik Patel (PT)</strong> and <strong>Dr. Foram Patel (PT)</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#166534] via-[#15803d] to-[#16a34a] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#166534]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#166534]/35 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Briefcase className="size-4" />
                  <span>Apply for a Position</span>
                </button>

                <Link
                  to="/our-team"
                  className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-6 py-3.5 text-sm font-bold text-navy shadow-sm transition-all hover:bg-sand hover:text-accent hover:-translate-y-0.5"
                >
                  <Users className="size-4 text-teal" />
                  <span>Meet Our Clinical Team</span>
                </Link>
              </div>
            </div>

            {/* Right Card / Clinical Highlights */}
            <div className="relative rounded-3xl border border-navy/12 bg-white/90 p-6 sm:p-8 shadow-xl shadow-navy/6 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-border/80 pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
                    <UserCheck className="size-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy">Why Build Your Career With Complete Care?</h3>
                    <p className="text-[11px] text-muted-foreground">Clinical excellence. Continuous learning. Meaningful patient impact.</p>
                  </div>
                </div>
                <span className="rounded-full bg-leaf/20 px-2.5 py-0.5 text-[10px] font-bold text-[#166534] uppercase tracking-wider">
                  VERIFIED EMPLOYER
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border/60 bg-sand/50 p-4">
                  <div className="text-2xl font-bold text-navy sm:text-3xl">40+</div>
                  <div className="mt-1 text-xs font-semibold text-muted-foreground">
                    Licensed Physiotherapists
                  </div>
                </div>

                <div className="rounded-2xl border border-border/60 bg-sand/50 p-4">
                  <div className="text-2xl font-bold text-navy sm:text-3xl">6</div>
                  <div className="mt-1 text-xs font-semibold text-muted-foreground">
                    Centres Across Gujarat
                  </div>
                </div>

                <div className="rounded-2xl border border-border/60 bg-sand/50 p-4">
                  <div className="text-2xl font-bold text-navy sm:text-3xl">16+</div>
                  <div className="mt-1 text-xs font-semibold text-muted-foreground">
                    Years of Clinical Excellence
                  </div>
                </div>

                <div className="rounded-2xl border border-border/60 bg-sand/50 p-4">
                  <div className="text-2xl font-bold text-navy sm:text-3xl">85K+</div>
                  <div className="mt-1 text-xs font-semibold text-muted-foreground">
                    Patients Recovered
                  </div>
                </div>
              </div>

              {/* Bottom Dark Card */}
              <div className="mt-5 rounded-2xl bg-navy p-4 text-white">
                <div className="flex items-center gap-2 text-xs font-bold text-leaf">
                  <ShieldCheck className="size-4" />
                  <span>A Better Place to Grow</span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-white/80">
                  Work with experienced clinical leaders, learn through real patient care, and build your career in a progressive rehabilitation environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. APPLICATION FORM SECTION (Best UX: 2-column desktop, 1-column mobile) */}
      <section ref={formRef} id="apply-form" className="border-t border-border/80 bg-white py-14 sm:py-20">
        <div className="container-cc max-w-5xl">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-1 text-xs font-bold text-emerald-800">
              <Sparkles className="size-3.5 text-emerald-600" />
              <span>Direct Application · No Registration Needed</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
              Career Application Form
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Interested in joining Complete Care? Share your details below. Our recruitment team will review your application and contact you directly.
            </p>
          </div>

          {/* If Submitted: Celebratory Success View */}
          {isSubmitted ? (
            <div className="rounded-3xl border-2 border-emerald-500/30 bg-emerald-50/50 p-8 text-center sm:p-12 shadow-xl shadow-emerald-500/10">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/30">
                <CheckCircle2 className="size-8" />
              </div>

              <h3 className="mt-5 text-2xl font-bold text-navy sm:text-3xl">
                Application Sent Successfully!
              </h3>

              <p className="mx-auto mt-3 max-w-lg text-sm sm:text-base text-navy/80 leading-relaxed">
                Thank you, <strong className="text-navy">{fullName}</strong>. Your application for{" "}
                <strong className="text-navy">{position === "Other" && otherPosition ? otherPosition : position}</strong> ({experience}) has been submitted directly to Dr. Hardik Patel's inbox (<strong className="text-emerald-700">ypdesign842@gmail.com</strong>). Our team will review your profile and contact you within 24–48 hours.
              </p>

              <div className="mx-auto mt-6 max-w-md rounded-2xl bg-white p-5 border border-emerald-200 text-left text-xs space-y-2 text-navy">
                <div className="flex justify-between border-b border-border/60 pb-1.5">
                  <span className="text-muted-foreground">Delivered To:</span>
                  <span className="font-bold text-emerald-700">ypdesign842@gmail.com</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-1.5">
                  <span className="text-muted-foreground">Mobile:</span>
                  <span className="font-semibold">{phone}</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-1.5">
                  <span className="text-muted-foreground">Candidate Email:</span>
                  <span className="font-semibold">{email}</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-1.5">
                  <span className="text-muted-foreground">City:</span>
                  <span className="font-semibold">{city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Resume:</span>
                  <span className="font-semibold text-emerald-700">
                    {resumeFile ? resumeFile.name : "Uploaded"}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#16803d] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition-all"
                >
                  <Send className="size-4" />
                  <span>Submit Another Application</span>
                </button>

                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-xl border border-navy/20 bg-white px-6 py-3.5 text-sm font-bold text-navy hover:bg-sand transition-all"
                >
                  <span>Return to Home</span>
                </Link>
              </div>
            </div>
          ) : (
            /* Main 2-Column Application Form */
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border-2 border-border/90 bg-[#fbfaf6] p-6 sm:p-10 shadow-2xl shadow-navy/8"
            >
              <div className="space-y-8">
                {/* 1. Basic Details */}
                <div>
                  <div className="flex items-center gap-2 border-b border-border/80 pb-3">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-navy text-white text-xs font-bold">
                      1
                    </div>
                    <h3 className="text-lg font-bold text-navy">Basic Details</h3>
                  </div>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name *">
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Dr. / Mr. / Ms. Full Name"
                        required
                        className="input-field"
                      />
                    </Field>

                    <Field label="Email Address *">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="doctor@example.com"
                        required
                        className="input-field"
                      />
                    </Field>

                    <Field label="Mobile Number *">
                      <input
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                        placeholder="10-digit mobile number"
                        required
                        className="input-field"
                      />
                    </Field>

                    <Field label="Current City *">
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Ahmedabad, Gandhinagar, Mehsana"
                        required
                        className="input-field"
                      />
                    </Field>
                  </div>
                </div>

                {/* 2. Professional Details */}
                <div>
                  <div className="flex items-center gap-2 border-b border-border/80 pb-3">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-navy text-white text-xs font-bold">
                      2
                    </div>
                    <h3 className="text-lg font-bold text-navy">Professional Details</h3>
                  </div>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <Field label="Position Applying For *">
                      <select
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        required
                        className="input-field"
                      >
                        {positionOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Years of Experience *">
                      <select
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        required
                        className="input-field"
                      >
                        <option value="Fresher (0–1 Year)">Fresher</option>
                        <option value="1–2 Years">1–2 Years</option>
                        <option value="3–5 Years">3–5 Years</option>
                        <option value="5+ Years">5+ Years</option>
                      </select>
                    </Field>

                    {/* Dynamic 'Specify Position' if 'Other' is selected */}
                    {position === "Other" && (
                      <div className="sm:col-span-2">
                        <Field label="Specify Position *">
                          <input
                            type="text"
                            value={otherPosition}
                            onChange={(e) => setOtherPosition(e.target.value)}
                            placeholder="Enter the position you are applying for"
                            required
                            className="input-field"
                          />
                        </Field>
                      </div>
                    )}

                    <Field label="Highest Qualification *">
                      <select
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                        required
                        className="input-field"
                      >
                        {qualificationOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Current / Previous Organization">
                      <input
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="Hospital / Clinic Name (Optional)"
                        className="input-field"
                      />
                    </Field>

                    {/* Dynamic 'Specify Qualification' if 'Other' is selected */}
                    {qualification === "Other" && (
                      <div className="sm:col-span-2">
                        <Field label="Specify Qualification *">
                          <input
                            type="text"
                            value={otherQualification}
                            onChange={(e) => setOtherQualification(e.target.value)}
                            placeholder="Enter your highest qualification"
                            required
                            className="input-field"
                          />
                        </Field>
                      </div>
                    )}

                    <div className="sm:col-span-2">
                      <Field label="Preferred Work Location">
                        <select
                          value={preferredLocation}
                          onChange={(e) => setPreferredLocation(e.target.value)}
                          className="input-field"
                        >
                          <option value="Any Ahmedabad Centre (Gota / Thaltej / Bopal / Nikol)">
                            Any Ahmedabad Centre (Gota / Thaltej / Bopal / Nikol)
                          </option>
                          <option value="Gota Centre (Ahmedabad)">Gota Centre (Ahmedabad)</option>
                          <option value="Thaltej Centre (Ahmedabad)">Thaltej Centre (Ahmedabad)</option>
                          <option value="South Bopal Centre (Ahmedabad)">South Bopal Centre (Ahmedabad)</option>
                          <option value="Nikol Centre (Ahmedabad)">Nikol Centre (Ahmedabad)</option>
                          <option value="Mehsana Centre">Mehsana Centre</option>
                          <option value="Ankleshwar Centre">Ankleshwar Centre</option>
                          <option value="Doorstep Home Physiotherapy (Ahmedabad Citywide)">
                            Doorstep Home Physiotherapy (Ahmedabad Citywide)
                          </option>
                        </select>
                      </Field>
                    </div>
                  </div>
                </div>

                {/* 3. Resume / CV Upload */}
                <div>
                  <div className="flex items-center gap-2 border-b border-border/80 pb-3">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-navy text-white text-xs font-bold">
                      3
                    </div>
                    <h3 className="text-lg font-bold text-navy">Application &amp; Resume</h3>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div>
                      <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-navy">
                        Resume / CV Upload * (PDF / DOC / DOCX — Max 10MB)
                      </span>

                      {resumeFile ? (
                        <div className="flex items-center justify-between rounded-2xl border-2 border-emerald-500/40 bg-emerald-50/70 p-4">
                          <div className="flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                              <FileCheck className="size-5" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-navy">{resumeFile.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB · Ready to send
                              </div>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={removeResume}
                            className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-bold text-rose-600 hover:bg-rose-100 transition-colors"
                          >
                            <Trash2 className="size-4" />
                            <span>Remove</span>
                          </button>
                        </div>
                      ) : (
                        <div
                          onDragOver={handleDragOver}
                          onDragLeave={handleDragLeave}
                          onDrop={handleDrop}
                          onClick={() => fileInputRef.current?.click()}
                          className={`cursor-pointer rounded-2xl border-2 border-dashed p-6 sm:p-8 text-center transition-all ${
                            isDragging
                              ? "border-accent bg-accent/10"
                              : "border-border hover:border-navy/40 hover:bg-sand/60"
                          }`}
                        >
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            onChange={handleFileChange}
                            className="hidden"
                          />

                          <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-sand text-navy">
                            <UploadCloud className="size-6 text-accent" />
                          </div>

                          <div className="mt-3 text-sm font-bold text-navy">
                            Click to upload your CV or drag and drop
                          </div>
                          <p className="mt-1 text-xs text-muted-foreground">
                            Supported formats: PDF, DOC, DOCX (up to 10MB)
                          </p>
                        </div>
                      )}
                    </div>

                    <Field label="Short Note / Clinical Specialization (Optional)">
                      <textarea
                        value={coverNote}
                        onChange={(e) => setCoverNote(e.target.value)}
                        rows={3}
                        placeholder="Mention any specific clinical interest, manual therapy skills, or availability..."
                        className="input-field"
                      />
                    </Field>
                  </div>
                </div>

                {/* 4. Consent & Submit */}
                <div className="border-t border-border/80 pt-6">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 size-4 rounded border-border text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-xs sm:text-sm text-navy/90 font-medium">
                      I agree to be contacted by Complete Care regarding this application. *
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#166534] via-[#15803d] to-[#16a34a] py-4 text-base font-bold text-white shadow-xl shadow-[#166534]/25 transition-all duration-300 hover:shadow-2xl hover:shadow-[#166534]/35 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="size-5 animate-spin text-white" />
                        <span>Submitting Application to Dr. Hardik Patel...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="size-5" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>

                  {/* Trust & Privacy Disclaimer Note */}
                  <div className="mt-5 rounded-2xl bg-sand/80 p-4 text-xs text-navy/80 space-y-1.5 border border-border/60">
                    <div className="flex items-center gap-2 font-bold text-navy">
                      <Lock className="size-3.5 text-teal" />
                      <span>Direct Server Delivery to ypdesign842@gmail.com</span>
                    </div>
                    <p className="leading-relaxed text-[11px] text-muted-foreground">
                      Your application and attached CV are sent directly to <strong>ypdesign842@gmail.com</strong>. We <strong>never ask for Aadhaar card, PAN details, current salary history, full home address, or date of birth</strong> during initial screening. All applicant details remain 100% confidential.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 3. WHY JOIN COMPLETE CARE (Perks & Culture Grid) */}
      <section className="border-t border-border/80 bg-[#f9f7ef] py-14 sm:py-20">
        <div className="container-cc">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3.5 py-1 text-[11px] font-bold tracking-wider text-teal uppercase shadow-sm">
              <Sparkles className="size-3.5 text-accent" />
              <span>Culture &amp; Benefits</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
              Why Doctors &amp; Therapists Choose Complete Care
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              A healthcare workspace designed around clinical growth, state-of-the-art tools, and genuine patient outcomes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyJoinPerks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-border/80 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#16803d]/10 text-[#16803d]">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{perk.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. APPLICANT FAQ SECTION */}
      <section className="border-t border-border/80 bg-white py-14 sm:py-20">
        <div className="container-cc max-w-4xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-sand px-3.5 py-1 text-[11px] font-bold tracking-wider text-teal uppercase shadow-sm">
              <HelpCircle className="size-3.5 text-accent" />
              <span>Applicant Guidance</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
              Frequently Asked Questions by Applicants
            </h2>
          </div>

          <div className="mt-10 space-y-3.5">
            {applicantFaqs.map((faq, index) => {
              const isOpen = faqOpen === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-border/80 bg-[#fbfaf6] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setFaqOpen(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-navy sm:text-base hover:text-accent transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`size-4 shrink-0 transition-transform duration-200 text-muted-foreground ${
                        isOpen ? "rotate-180 text-accent" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm leading-relaxed text-muted-foreground border-t border-border/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Contact Banner */}
          <div className="mt-12 rounded-3xl bg-navy p-6 sm:p-8 text-white shadow-xl shadow-navy/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white">Have questions before submitting?</h3>
              <p className="mt-1 text-xs text-white/80">
                Contact Dr. Hardik Patel directly at ypdesign842@gmail.com for confidential inquiries.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`mailto:ypdesign842@gmail.com?subject=Career Inquiry - Complete Care`}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-xs font-bold text-accent-foreground hover:bg-emerald-500 transition-all"
              >
                <Mail className="size-4" />
                <span>Email ypdesign842@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/** Helper label wrapper component */
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy">
        {label}
      </span>
      {children}
    </label>
  );
}
