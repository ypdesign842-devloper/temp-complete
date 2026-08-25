import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Award,
  Calendar,
  ChevronRight,
  Clock,
  HeartPulse,
  Mail,
  MapPin,
  Navigation,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { locations } from "@/data/locations";
import { site } from "@/data/site";
import { conditions, modalities } from "@/data";

export function SiteFooter() {
  return (
    <>
      {/* 1. CTA Section on Light Page Background */}
      <section className="bg-[#f9f7ef] py-14 sm:py-20 border-t border-border/80">
        <div className="container-cc">
          <div className="relative overflow-hidden rounded-3xl bg-navy p-8 sm:p-12 lg:p-14 text-white shadow-2xl shadow-navy/15">
            {/* Ambient Lighting inside CTA card */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-teal/15 blur-3xl"
            />

            <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] font-bold tracking-wider text-leaf uppercase backdrop-blur-md">
                  <Sparkles className="size-3.5" />
                  <span>Fast Recovery · Non-Surgical Care</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-white">
                  Talk to a licensed physiotherapist about your pain
                </h2>

                <p className="max-w-xl text-sm sm:text-base leading-relaxed text-white/80">
                  Schedule an evidence-informed assessment at any of our six centres across Gujarat, or request doorstep home physiotherapy in Ahmedabad.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center lg:flex-col lg:items-stretch xl:flex-row xl:items-center">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-accent px-7 py-4 text-sm font-bold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:bg-emerald-500 hover:shadow-xl"
                >
                  <Calendar className="size-4" />
                  <span>Book Appointment</span>
                </a>

                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-navy hover:border-white shadow-sm"
                >
                  <Phone className="size-4 text-leaf" />
                  <span>Call {site.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Metrics Section on Light Page Background */}
      <section className="border-t border-border/80 bg-[#f9f7ef] py-10 sm:py-12">
        <div className="container-cc">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3.5">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Award className="size-6" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-navy">16+ Years Experience</div>
                <div className="text-xs text-muted-foreground">Led by {site.director}</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <ShieldCheck className="size-6" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-navy">40+ Licensed PTs</div>
                <div className="text-xs text-muted-foreground">GSCPT Certified Therapists</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <HeartPulse className="size-6" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-navy">85,000+ Recoveries</div>
                <div className="text-xs text-muted-foreground">Evidence-Based Rehabilitation</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <MapPin className="size-6" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-navy">6 Gujarat Centres</div>
                <div className="text-xs text-muted-foreground">Ahmedabad, Mehsana &amp; Ankleshwar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ONLY THE FOOTER ITSELF HAS THE DARK NAVY BACKGROUND */}
      <footer className="bg-navy text-navy-foreground border-t border-navy-deep">
        {/* Main Directory Links */}
        <div className="container-cc py-12 lg:py-14">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand Col */}
            <div className="lg:col-span-2 space-y-4">
              <Link to="/" className="inline-block">
                <div className="inline-block rounded-xl bg-white p-2.5 shadow-sm">
                  <img
                    src="/assets/brand/completecare-logo.webp"
                    alt="Complete Care Physiotherapy, Fitness & Rehabilitation"
                    width={168}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </Link>

              <p className="max-w-sm text-sm leading-relaxed text-navy-foreground/80">
                Doctor-led physiotherapy, precision chiropractic care, and comprehensive rehabilitation across Gujarat.
                Directed by <strong className="font-semibold text-white">{site.director}</strong> with 40+ licensed
                physiotherapists providing non-surgical healing.
              </p>

              <div className="space-y-2 text-sm pt-1">
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2.5 font-semibold text-white transition-colors hover:text-leaf"
                >
                  <Phone className="size-4 text-leaf" />
                  <span>{site.phone}</span>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 text-navy-foreground/80 transition-colors hover:text-leaf"
                >
                  <Mail className="size-4 text-leaf" />
                  <span>{site.email}</span>
                </a>
                <div className="flex items-center gap-2.5 text-xs text-navy-foreground/70">
                  <Clock className="size-4 text-leaf shrink-0" />
                  <span>Mon – Sat: 8:00 AM – 8:00 PM</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-xs text-white transition-colors hover:border-leaf hover:bg-leaf hover:text-leaf-foreground"
                    aria-label={s.label}
                  >
                    {s.label[0]}
                  </a>
                ))}
              </div>
            </div>

            {/* About Complete Care Column */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.18em] text-leaf uppercase">
                About Complete Care
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link
                    to="/best-physiotherapy-clinic-in-ahmedabad"
                    className="group flex items-center gap-1.5 text-navy-foreground/80 transition-colors hover:text-white"
                  >
                    <ChevronRight className="size-3 text-leaf/60 transition-transform group-hover:translate-x-1" />
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/our-team"
                    className="group flex items-center gap-1.5 text-navy-foreground/80 transition-colors hover:text-white"
                  >
                    <ChevronRight className="size-3 text-leaf/60 transition-transform group-hover:translate-x-1" />
                    <span>Our Clinical Team</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/certifications"
                    className="group flex items-center gap-1.5 font-medium text-white transition-colors hover:text-leaf"
                  >
                    <ChevronRight className="size-3 text-leaf transition-transform group-hover:translate-x-1" />
                    <span className="text-leaf">Certifications &amp; Credentials</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/media"
                    className="group flex items-center gap-1.5 text-navy-foreground/80 transition-colors hover:text-white"
                  >
                    <ChevronRight className="size-3 text-leaf/60 transition-transform group-hover:translate-x-1" />
                    <span>Media &amp; Video Gallery</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="group flex items-center gap-1.5 text-navy-foreground/80 transition-colors hover:text-white"
                  >
                    <ChevronRight className="size-3 text-leaf/60 transition-transform group-hover:translate-x-1" />
                    <span>Clinical Insights Blog</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Care Areas */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.18em] text-leaf uppercase">
                Care Areas
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {conditions.slice(0, 6).map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={`/${c.slug}` as never}
                      className="group flex items-center gap-1.5 text-navy-foreground/80 transition-colors hover:text-white"
                    >
                      <ChevronRight className="size-3 text-leaf/60 transition-transform group-hover:translate-x-1" />
                      <span>{c.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Therapies */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.18em] text-leaf uppercase">
                Therapies
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {modalities.slice(0, 6).map((m) => (
                  <li key={m.slug}>
                    <Link
                      to={`/${m.slug}` as never}
                      className="group flex items-center gap-1.5 text-navy-foreground/80 transition-colors hover:text-white"
                    >
                      <ChevronRight className="size-3 text-leaf/60 transition-transform group-hover:translate-x-1" />
                      <span>{m.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 6 Gujarat Clinic Locations — Small Cards with Full Proper Address */}
          <div className="mt-10 border-t border-white/10 pt-8">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
              <div className="flex items-center gap-2">
                <div className="flex size-6 items-center justify-center rounded-md bg-leaf/15 text-leaf">
                  <MapPin className="size-3.5" />
                </div>
                <h3 className="text-xs font-bold tracking-wider text-leaf uppercase">
                  Our 6 Gujarat Centres &amp; Clinic Addresses
                </h3>
              </div>
              <span className="text-[11px] text-navy-foreground/70">
                Walk-ins &amp; Consultations: Mon–Sat 8:00 AM – 8:00 PM
              </span>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {locations.map((loc) => (
                <div
                  key={loc.slug}
                  className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm transition-all duration-200 hover:border-leaf/40 hover:bg-white/[0.06] hover:shadow-md"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-1">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="size-3.5 text-leaf shrink-0" />
                        <h4 className="text-sm font-bold text-white group-hover:text-leaf transition-colors">
                          {loc.name}
                        </h4>
                      </div>
                      <span className="rounded bg-white/10 px-2 py-0.5 text-[9px] font-bold uppercase text-leaf">
                        {loc.city}
                      </span>
                    </div>

                    <p className="text-xs leading-relaxed text-navy-foreground/75">
                      {loc.address}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-white/80">
                      <Phone className="size-3 text-leaf shrink-0" />
                      <a
                        href={loc.phoneHref}
                        className="hover:text-leaf transition-colors font-medium"
                      >
                        {loc.phone}
                      </a>
                    </div>
                  </div>

                  {/* Action Buttons: GMB Map + Clinic Details */}
                  <div className="mt-3.5 pt-2.5 border-t border-white/10 flex items-center gap-2">
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-leaf/20 border border-leaf/30 py-1.5 text-xs font-bold text-leaf hover:bg-leaf hover:text-leaf-foreground transition-all duration-150"
                    >
                      <Navigation className="size-3" />
                      <span>Google Map (GMB)</span>
                    </a>
                    <Link
                      to={`/${loc.slug}` as never}
                      className="inline-flex items-center justify-center gap-1 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/80 hover:bg-white/20 hover:text-white transition-all duration-150"
                    >
                      <span>Details</span>
                      <ArrowUpRight className="size-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sub-Footer Legal / Medical Disclaimer */}
        <div className="border-t border-white/10 bg-navy-deep/90">
          <div className="container-cc flex flex-col gap-3 py-6 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Complete Care Physiotherapy, Fitness &amp; Rehabilitation. All rights reserved.</p>
            <p className="max-w-md text-navy-foreground/50">
              Medical Disclaimer: Content on this website is for educational purposes and does not substitute individual clinical diagnosis.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
