import { Link } from "@tanstack/react-router";
import {
  Calendar,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
  MessageCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { locations } from "@/data/locations";

// Mega menu data definition mirroring Complete Care authoritative structure
export const conditionsMegaMenu = [
  {
    title: "Physiotherapy",
    to: "/top-physiotherapy-services-center-in-ahmedabad",
    items: [
      { label: "Neck Pain", to: "/neck-pain-treatment-doctor-in-ahmedabad" },
      { label: "Back Pain", to: "/back-pain-doctor-in-ahmedabad" },
      { label: "Knee Pain", to: "/knee-pain-treatment-in-ahmedabad" },
      { label: "Shoulder Pain", to: "/shoulder-pain-treatment-doctor-in-ahmedabad" },
      { label: "Frozen Shoulder", to: "/frozen-shoulder-treatment-doctor-in-ahmedabad" },
      { label: "Slip/Herniated Disc", to: "/slipped-herniated-disc-physiotherapy-treatment-in-ahmedabad" },
      { label: "Sciatica", to: "/sciatica-pain-treatment-in-ahmedabad" },
      { label: "Ankle Pain", to: "/ankle-pain-treatment-doctor-in-ahmedabad" },
      { label: "Rheumatoid Arthritis", to: "/top-rheumatoid-arthritis-specialist-in-ahmedabad" },
      { label: "Sports Rehab", to: "/sports-physiotherapist-in-ahmedabad" },
      { label: "Tennis elbow", to: "/best-doctor-for-tennis-elbow-in-ahmedabad" },
      { label: "Vertigo", to: "/top-vertigo-specialist-in-ahmedabad" },
      { label: "Osteoporosis", to: "/osteoporosis-treatment-doctor-in-ahmedabad" },
      { label: "Post Surgical Rehab", to: "/post-surgical-rehabilitation-in-ahmedabad" },
    ],
  },
  {
    title: "Spine-Neuro Rehab",
    to: "/best-neuro-spine-rehabilitation-centre-in-ahmedabad",
    items: [
      { label: "Spinal Cord Injury", to: "/spinal-cord-specialist-in-ahmedabad" },
      { label: "Stroke", to: "/stroke-in-treatment-ahmedabad" },
      { label: "Parkinson's Disease", to: "/parkinson-disease-treatment-in-ahmedabad" },
      { label: "Muscular Dystrophy", to: "/muscular-dystrophy-doctor-ahmedabad" },
      { label: "Multiple Sclerosis", to: "/multiple-sclerosis-treatment-doctor-in-ahmedabad" },
      { label: "Cerebral Palsy", to: "/cerebral-palsy-treatment-in-ahmedabad" },
      { label: "Bell's Palsy", to: "/bells-palsy-treatment-in-ahmedabad" },
      { label: "Diabetic Neuropathy", to: "/diabetic-neuropathy-treatment-doctor-in-ahmedabad" },
    ],
  },
  {
    title: "Fitness",
    to: "/top-fitness-centre-courses-in-ahmedabad",
    items: [
      { label: "Aerobics", to: "/best-aerobics-classes-in-ahmedabad" },
      { label: "HIIT Training", to: "/hiit-training-workouts-in-ahmedabad" },
      { label: "Strength Training", to: "/top-strength-training-studio-in-ahmedabad" },
      { label: "Zumba", to: "/zumba-classes-in-ahmedabad" },
      { label: "Pilates", to: "/pilates-studio-ahmedabad" },
      { label: "Power Yoga", to: "/best-power-yoga-classes-ahmedabad" },
      { label: "Step Aerobics", to: "/step-aerobics-physiotherapy-treatment-in-ahmedabad" },
      { label: "Ball & Band Training", to: "/ball-band-training-physiotherapy-treatment-in-ahmedabad" },
      { label: "Stretching", to: "/stretching-physiotherapy-treatment-in-ahmedabad" },
      { label: "Online Fitness Class", to: "/online-fitness-classes" },
    ],
  },
];

export const servicesMegaMenu = [
  {
    title: "Electro Therapy",
    to: "/best-electro-therapy-in-ahmedabad",
    items: [
      { label: "Class IV Laser Therapy", to: "/class-iv-laser-therapy-clinic-in-ahmedabad" },
      { label: "PEMF Therapy", to: "/effective-pemf-therapy-in-ahmedabad" },
      { label: "IFT", to: "/best-ift-treatment-center-in-ahmedabad" },
      { label: "TENS", to: "/effective-tens-treatment-in-ahmedabad-for-pain-relief" },
      { label: "SWD", to: "/top-short-wave-diathermy-treatment-in-ahmedabad" },
      { label: "Electrical Stimulation", to: "/best-electrical-stimulation-therapy-in-ahmedabad" },
      { label: "Ultra Sound", to: "/ultra-sound-treatment-in-ahmedabad" },
      { label: "Infra Radiation", to: "/infra-radiation-treatment-in-ahmedabad" },
      { label: "Traction", to: "/effective-traction-treatment-in-ahmedabad" },
      { label: "Pneumatic compression", to: "/best-pneumatic-compression-therapy-in-ahmedabad" },
      { label: "Paraffin wax Bath", to: "/paraffin-wax-bath-therapy-in-ahmedabad" },
      { label: "Tecar", to: "/tecar-physiotherapy-treatment-in-ahmedabad" },
      { label: "Spine Decompression", to: "/spine-decompression-therapy-treatment-in-ahmedabad" },
    ],
  },
  {
    title: "Advance Therapy",
    to: "/advanced-physical-therapy-in-ahmedabad",
    items: [
      { label: "Osteopathy", to: "/leading-osteopathy-treatment-in-ahmedabad" },
      { label: "Dry Needling", to: "/top-dry-needling-therapy-services-in-ahmedabad" },
      { label: "Manual Therapy", to: "/manual-therapy-near-me-in-ahmedabad" },
      { label: "Kinesio Taping", to: "/expert-kinesio-tape-therapy-in-ahmedabad" },
      { label: "IASTM", to: "/top-instrumented-soft-tissue-mobilization-in-ahmedabad" },
      { label: "Cupping Therapy", to: "/best-cupping-therapy-in-ahmedabad" },
    ],
  },
];

export const aboutMenu = [
  { label: "About Complete Care", to: "/best-physiotherapy-clinic-in-ahmedabad" },
  { label: "Dr. Hardik Patel", to: "/best-physiotherapist-in-ahmedabad" },
  { label: "Dr. Foram Patel", to: "/female-fitness-trainer-in-ahmedabad" },
  { label: "Our Team", to: "/our-team" },
  { label: "Certifications & Credentials", to: "/certifications" },
  { label: "Our Centres", to: "/best-physiotherapy-center-thaltej-ahmedabad" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // 1.5 seconds grace period so user can smoothly move cursor to click without popup hiding
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveMenu(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 shadow-md shadow-navy/6 backdrop-blur-md dark:bg-navy/98"
          : "bg-background/98 backdrop-blur-sm"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only sr-only-focusable bg-navy text-sm font-semibold text-navy-foreground"
      >
        Skip to main content
      </a>

      {/* Top Clinical & Contact Bar */}
      <div
        className={`hidden border-b border-white/10 bg-navy text-navy-foreground transition-all duration-300 lg:block ${
          scrolled ? "h-0 overflow-hidden opacity-0 py-0 border-none" : "py-2 text-xs"
        }`}
      >
        <div className="container-cc flex items-center justify-between">
          <div className="flex items-center gap-6 text-navy-foreground/90 font-medium">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-leaf"
            >
              <Phone className="size-3.5 text-leaf" />
              <span>{site.phone}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-leaf"
            >
              <Mail className="size-3.5 text-leaf" />
              <span>{site.email}</span>
            </a>
            <span className="text-white/20">|</span>
            <span className="inline-flex items-center gap-1.5 text-navy-foreground/80">
              <Clock className="size-3.5 text-leaf" />
              <span>Mon to Sat: 8:00 AM to 8:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-[11px] font-semibold tracking-wider text-leaf uppercase">
              6 Clinics Across Gujarat
            </span>
            <div className="flex items-center gap-3 border-l border-white/15 pl-4">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-foreground/80 transition-colors hover:text-leaf"
                  aria-label={s.label}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`border-b border-border/80 transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="container-cc flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-3 transition-transform hover:opacity-95"
          >
            <img
              src="/assets/brand/completecare-logo.webp"
              alt="Complete Care Physiotherapy, Fitness & Rehabilitation"
              width={168}
              height={48}
              fetchPriority="high"
              decoding="async"
              className="h-10 w-auto object-contain sm:h-12"
            />
            <span className="sr-only">Complete Care Physiotherapy</span>
          </Link>

          {/* Desktop Primary Nav Bar with Mega Menus */}
          <nav
            aria-label="Main Navigation"
            className="hidden items-center gap-0.5 xl:flex"
          >
            {/* 1. Home */}
            <Link
              to="/"
              className="rounded-md px-3 py-2 text-[14px] font-semibold text-navy transition-all hover:bg-sand hover:text-accent"
            >
              Home
            </Link>

            {/* 2. About Us (Dropdown) */}
            <div className="group relative">
              <Link
                to="/best-physiotherapy-clinic-in-ahmedabad"
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-[14px] font-semibold text-navy transition-all group-hover:bg-sand group-hover:text-accent"
              >
                <span>About Us</span>
                <ChevronDown className="size-3.5 transition-transform duration-200 text-muted-foreground group-hover:rotate-180 group-hover:text-accent" />
              </Link>

              <div className="absolute left-0 top-full mt-1.5 w-72 rounded-2xl border border-border/80 bg-white p-3 shadow-2xl shadow-navy/15 z-50 hidden group-hover:block before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']">
                <div className="space-y-1">
                  {aboutMenu.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to as never}
                      className="block rounded-lg px-3 py-2 text-xs font-semibold text-navy transition-colors hover:bg-sand hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Care Areas (3-Column Mega Menu) */}
            <div className="group relative">
              <Link
                to="/care-areas"
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-[14px] font-semibold text-navy transition-all group-hover:bg-sand group-hover:text-accent"
              >
                <span>Care Areas</span>
                <ChevronDown className="size-3.5 transition-transform duration-200 text-muted-foreground group-hover:rotate-180 group-hover:text-accent" />
              </Link>

              <div className="absolute -left-20 top-full mt-1.5 w-[840px] rounded-2xl border border-border/80 bg-white p-7 shadow-2xl shadow-navy/15 z-50 hidden group-hover:block before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']">
                <div className="grid grid-cols-3 gap-8">
                  {conditionsMegaMenu.map((col) => (
                    <div key={col.title}>
                      <div className="border-b-2 border-navy pb-2">
                        <Link
                          to={col.to as never}
                          className="text-sm font-bold text-navy tracking-wide hover:text-accent transition-colors block"
                        >
                          {col.title}
                        </Link>
                      </div>
                      <ul className="mt-3.5 space-y-2">
                        {col.items.map((item) => (
                          <li key={item.to}>
                            <Link
                              to={item.to as never}
                              className="inline-block text-xs font-medium text-navy/85 transition-colors hover:text-accent hover:translate-x-0.5 transform"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Direct Link to Dedicated Care Areas Page */}
                <div className="mt-6 flex items-center justify-between border-t border-navy/10 pt-4">
                  <span className="text-xs text-muted-foreground">Looking for our complete care directory?</span>
                  <Link
                    to="/care-areas"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16803d] hover:underline"
                  >
                    <span>Explore All Care Areas</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 4. Therapies (2-Column Mega Menu) */}
            <div className="group relative">
              <Link
                to="/therapies"
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-[14px] font-semibold text-navy transition-all group-hover:bg-sand group-hover:text-accent"
              >
                <span>Therapies</span>
                <ChevronDown className="size-3.5 transition-transform duration-200 text-muted-foreground group-hover:rotate-180 group-hover:text-accent" />
              </Link>

              <div className="absolute -left-10 top-full mt-1.5 w-[560px] rounded-2xl border border-border/80 bg-white p-7 shadow-2xl shadow-navy/15 z-50 hidden group-hover:block before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']">
                <div className="grid grid-cols-2 gap-8">
                  {servicesMegaMenu.map((col) => (
                    <div key={col.title}>
                      <div className="border-b-2 border-navy pb-2">
                        <Link
                          to={col.to as never}
                          className="text-sm font-bold text-navy tracking-wide hover:text-accent transition-colors block"
                        >
                          {col.title}
                        </Link>
                      </div>
                      <ul className="mt-3.5 space-y-2">
                        {col.items.map((item) => (
                          <li key={item.to}>
                            <Link
                              to={item.to as never}
                              className="inline-block text-xs font-medium text-navy/85 transition-colors hover:text-accent hover:translate-x-0.5 transform"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Direct Link to Dedicated Therapies Page */}
                <div className="mt-6 flex items-center justify-between border-t border-navy/10 pt-4">
                  <span className="text-xs text-muted-foreground">Looking for all clinical therapies?</span>
                  <Link
                    to="/therapies"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16803d] hover:underline"
                  >
                    <span>Explore All Therapies</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 5. Chiropractic Treatment */}
            <Link
              to="/chiropractic-treatment-in-ahmedabad"
              className="rounded-md px-3 py-2 text-[14px] font-semibold text-navy transition-all hover:bg-sand hover:text-accent"
            >
              Chiropractic Treatment
            </Link>

            {/* 6. Blogs */}
            <Link
              to="/blogs"
              className="rounded-md px-3 py-2 text-[14px] font-semibold text-navy transition-all hover:bg-sand hover:text-accent"
            >
              Blogs
            </Link>

            {/* 7. Home Visit */}
            <Link
              to="/physiotherapy-at-home-in-ahmedabad"
              className="rounded-md px-3 py-2 text-[14px] font-semibold text-navy transition-all hover:bg-sand hover:text-accent"
            >
              Home Visit
            </Link>

            {/* 8. Gallery */}
            <Link
              to="/media"
              className="rounded-md px-3 py-2 text-[14px] font-semibold text-navy transition-all hover:bg-sand hover:text-accent"
            >
              Gallery
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Book Consultation Button */}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-xs font-bold text-accent-foreground shadow-sm transition-all hover:bg-emerald-600 hover:shadow-md hover:shadow-accent/20 sm:inline-flex"
            >
              <Calendar className="size-3.5" />
              <span>Book Consultation</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-card text-navy transition-colors hover:bg-sand xl:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-nav"
        className={`fixed inset-x-0 top-full max-h-[85vh] overflow-y-auto border-b border-border bg-card/98 p-5 shadow-2xl backdrop-blur-xl xl:hidden z-50 ${open ? "block" : "hidden"}`}
      >
          <div className="space-y-3 pb-6">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="block rounded-xl border border-border/80 bg-background/50 px-5 py-3 text-sm font-bold text-navy hover:bg-sand"
            >
              Home
            </Link>

            {/* Mobile About Accordion */}
            <div className="rounded-xl border border-border/80 bg-background/50 p-2">
              <div className="flex min-h-11 w-full items-center justify-between px-3 py-1">
                <Link
                  to="/best-physiotherapy-clinic-in-ahmedabad"
                  onClick={() => setOpen(false)}
                  className="text-sm font-bold text-navy hover:text-accent flex-1 py-1"
                >
                  About Us
                </Link>
                <button
                  type="button"
                  aria-label="Toggle About Us menu"
                  onClick={() => setMobileExpanded((m) => (m === "about" ? null : "about"))}
                  className="flex size-9 items-center justify-center rounded-lg hover:bg-sand text-navy text-lg font-bold"
                >
                  <span className={`inline-block transition-transform duration-200 ${mobileExpanded === "about" ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
              </div>
              <div className={`space-y-1 border-t border-border/60 pt-2 ${mobileExpanded === "about" ? "block" : "hidden"}`}>
                {aboutMenu.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to as never}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg py-2 pl-4 pr-3 text-xs font-medium text-muted-foreground hover:bg-sand hover:text-navy"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Care Areas Accordion */}
            <div className="rounded-xl border border-border/80 bg-background/50 p-2">
              <div className="flex min-h-11 w-full items-center justify-between px-3 py-1">
                <Link
                  to="/care-areas"
                  onClick={() => setOpen(false)}
                  className="text-sm font-bold text-navy hover:text-accent flex-1 py-1"
                >
                  Care Areas
                </Link>
                <button
                  type="button"
                  aria-label="Toggle Care Areas menu"
                  onClick={() => setMobileExpanded((m) => (m === "conditions" ? null : "conditions"))}
                  className="flex size-9 items-center justify-center rounded-lg hover:bg-sand text-navy text-lg font-bold"
                >
                  <span className={`inline-block transition-transform duration-200 ${mobileExpanded === "conditions" ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
              </div>
              <div className={`space-y-4 border-t border-border/60 pt-3 ${mobileExpanded === "conditions" ? "block" : "hidden"}`}>
                {conditionsMegaMenu.map((col) => (
                  <div key={col.title} className="pl-3">
                    <Link
                      to={col.to as never}
                      onClick={() => setOpen(false)}
                      className="text-xs font-bold text-navy border-b border-navy/30 pb-1 mb-2 block hover:text-accent"
                    >
                      {col.title}
                    </Link>
                    <div className="space-y-1">
                      {col.items.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to as never}
                          onClick={() => setOpen(false)}
                          className="block py-1 pl-2 text-xs text-muted-foreground hover:text-accent"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="border-t border-border/60 pt-2 pl-3">
                  <Link
                    to="/care-areas"
                    onClick={() => setOpen(false)}
                    className="block py-1.5 text-xs font-bold text-[#16803d] hover:underline"
                  >
                    Explore All Care Areas &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Therapies Accordion */}
            <div className="rounded-xl border border-border/80 bg-background/50 p-2">
              <div className="flex min-h-11 w-full items-center justify-between px-3 py-1">
                <Link
                  to="/therapies"
                  onClick={() => setOpen(false)}
                  className="text-sm font-bold text-navy hover:text-accent flex-1 py-1"
                >
                  Therapies
                </Link>
                <button
                  type="button"
                  aria-label="Toggle Therapies menu"
                  onClick={() => setMobileExpanded((m) => (m === "services" ? null : "services"))}
                  className="flex size-9 items-center justify-center rounded-lg hover:bg-sand text-navy text-lg font-bold"
                >
                  <span className={`inline-block transition-transform duration-200 ${mobileExpanded === "services" ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
              </div>
              <div className={`space-y-4 border-t border-border/60 pt-3 ${mobileExpanded === "services" ? "block" : "hidden"}`}>
                {servicesMegaMenu.map((col) => (
                  <div key={col.title} className="pl-3">
                    <Link
                      to={col.to as never}
                      onClick={() => setOpen(false)}
                      className="text-xs font-bold text-navy border-b border-navy/30 pb-1 mb-2 block hover:text-accent"
                    >
                      {col.title}
                    </Link>
                    <div className="space-y-1">
                      {col.items.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to as never}
                          onClick={() => setOpen(false)}
                          className="block py-1 pl-2 text-xs text-muted-foreground hover:text-accent"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="border-t border-border/60 pt-2 pl-3">
                  <Link
                    to="/therapies"
                    onClick={() => setOpen(false)}
                    className="block py-1.5 text-xs font-bold text-[#16803d] hover:underline"
                  >
                    Explore All Therapies &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Other Mobile Links */}
            <Link
              to="/chiropractic-treatment-in-ahmedabad"
              onClick={() => setOpen(false)}
              className="block rounded-xl border border-border/80 bg-background/50 px-5 py-3 text-sm font-bold text-navy hover:bg-sand"
            >
              Chiropractic Treatment
            </Link>

            <Link
              to="/blogs"
              onClick={() => setOpen(false)}
              className="block rounded-xl border border-border/80 bg-background/50 px-5 py-3 text-sm font-bold text-navy hover:bg-sand"
            >
              Blogs
            </Link>

            <Link
              to="/physiotherapy-at-home-in-ahmedabad"
              onClick={() => setOpen(false)}
              className="block rounded-xl border border-border/80 bg-background/50 px-5 py-3 text-sm font-bold text-navy hover:bg-sand"
            >
              Home Visit
            </Link>

            <Link
              to="/media"
              onClick={() => setOpen(false)}
              className="block rounded-xl border border-border/80 bg-background/50 px-5 py-3 text-sm font-bold text-navy hover:bg-sand"
            >
              Gallery
            </Link>

            {/* Mobile Action Buttons */}
            <div className="mt-6 space-y-2.5 pt-4 border-t border-border">
              <a
                href={site.whatsapp}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-bold text-accent-foreground shadow-sm"
              >
                <Calendar className="size-4" />
                Book Consultation Now
              </a>
              <a
                href={site.phoneHref}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-navy/20 bg-sand py-3 text-sm font-bold text-navy"
              >
                <Phone className="size-4 text-teal" />
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
    </header>
  );
}
