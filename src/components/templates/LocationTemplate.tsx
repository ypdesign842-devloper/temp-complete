import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Clock,
  ExternalLink,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/blocks/PageHero";
import { CtaBand } from "@/components/blocks/CtaBand";
import { AppointmentForm } from "@/components/blocks/AppointmentForm";
import { BlockContent } from "@/components/blocks/BlockContent";
import { Testimonials } from "@/components/blocks/Testimonials";
import { locations, type Location } from "@/data/locations";
import { teamBranches } from "@/data/team";
import type { LocationContent } from "@/data/types";

export function LocationTemplate({ data, content }: { data: Location; content: LocationContent }) {
  const branchTeam =
    teamBranches.find((b) => b.branch.toLowerCase().startsWith(data.name.toLowerCase().slice(0, 4)))
      ?.members ?? [];
  const others = locations.filter((l) => l.slug !== data.slug);
  const gallery = content.gallery.filter((src) => src !== content.hero);

  return (
    <>
      {/* Page Hero */}
      <PageHero
        eyebrow={`Complete Care Centre · ${data.city}`}
        h1={data.h1}
        lead={data.lead}
        image={content.hero ?? undefined}
      />

      {/* Main Location Content & Booking */}
      <section className="section-y bg-background">
        <div className="container-cc grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <div className="space-y-10">
            {/* Quick Info Grid */}
            <div className="grid gap-4 sm:grid-cols-3">
              <InfoTile
                icon={<MapPin className="size-4 text-accent" />}
                title="Clinic Address"
              >
                <a
                  href={data.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-accent"
                >
                  <span>{data.address}</span>
                  <ExternalLink className="size-3 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </a>
              </InfoTile>

              <InfoTile
                icon={<Clock className="size-4 text-accent" />}
                title="Timings"
              >
                <span className="text-sm font-semibold text-navy">
                  {data.hours ?? "Mon – Sat: 8:00 AM – 8:00 PM"}
                </span>
              </InfoTile>

              <InfoTile
                icon={<Phone className="size-4 text-accent" />}
                title="Direct Phone"
              >
                <a
                  href={data.phoneHref}
                  className="text-sm font-bold text-navy hover:text-accent"
                >
                  {data.phone}
                </a>
              </InfoTile>
            </div>

            {/* Clinic Editorial Content */}
            <div className="pt-2">
              <BlockContent blocks={content.blocks} />
            </div>

            {/* Clinic Photo Gallery */}
            {gallery.length > 0 && (
              <div className="rounded-2xl border border-border/80 bg-sand/60 p-6 sm:p-7">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="badge-clinical text-[10px] text-teal">
                      Facility Showcase
                    </span>
                    <h2 className="mt-2 text-2xl font-bold text-navy">
                      Inside {data.name} Centre
                    </h2>
                  </div>
                  <span className="text-xs text-muted-foreground hidden sm:inline">
                    {gallery.length} Photos
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {gallery.map((src, i) => (
                    <div
                      key={src + i}
                      className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm"
                    >
                      <img
                        src={src}
                        alt={`Complete Care ${data.name} clinic photo ${i + 1}`}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Centre Booking Form */}
          <div className="lg:sticky lg:top-28">
            <AppointmentForm centre={`${data.name}, ${data.city}`} />
          </div>
        </div>
      </section>

      {/* On-Site Clinical Team */}
      {branchTeam.length > 0 && (
        <section className="section-y bg-sand">
          <div className="container-cc">
            <div className="max-w-2xl">
              <span className="badge-clinical text-teal">
                Clinical Team
              </span>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
                Physiotherapists at {data.name} Centre
              </h2>
              <p className="mt-2 text-base text-muted-foreground">
                Qualified physical therapists registered with the Gujarat State Council for Physiotherapy (GSCPT).
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {branchTeam.map((m) => (
                <div
                  key={m.name}
                  className="card-premium card-premium-hover flex flex-col justify-between overflow-hidden p-4"
                >
                  <div>
                    {m.image ? (
                      <div className="mb-3 overflow-hidden rounded-xl border border-border bg-sand">
                        <img
                          src={m.image}
                          alt={m.name}
                          loading="lazy"
                          className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ) : null}
                    <h3 className="text-base font-bold text-navy">{m.name}</h3>
                    {m.qualification && (
                      <p className="mt-0.5 text-xs text-muted-foreground font-medium">{m.qualification}</p>
                    )}
                  </div>

                  {m.credential ? (
                    <div className="mt-3 border-t border-border pt-2">
                      <span className="badge-emerald text-[10px]">{m.credential}</span>
                    </div>
                  ) : (
                    <div className="mt-3 border-t border-border pt-2 text-[11px] font-semibold text-teal">
                      Complete Care Clinician
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Centres Across Gujarat */}
      <section className="section-y bg-background">
        <div className="container-cc">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <span className="badge-clinical text-teal">
                Clinic Network
              </span>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
                Our other centres in Gujarat
              </h2>
            </div>
            <Link
              to="/our-team"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:text-emerald-700"
            >
              <span>Meet all clinicians</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((l) => (
              <Link
                key={l.slug}
                to={`/${l.slug}` as never}
                className="group card-premium card-premium-hover flex flex-col justify-between p-6"
              >
                <div>
                  <span className="badge-emerald text-[10px]">{l.city}</span>
                  <h3 className="mt-3 text-xl font-bold text-navy group-hover:text-accent transition-colors">
                    {l.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {l.address}
                  </p>
                </div>

                <div className="mt-5 border-t border-border pt-3.5 flex items-center justify-between text-xs font-bold text-navy">
                  <span className="text-teal">{l.phone}</span>
                  <span className="text-accent group-hover:underline">View Clinic &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials limit={3} />

      {/* Centre Closing CTA */}
      <CtaBand title={`Visit Complete Care ${data.name} Centre`} />
    </>
  );
}

function InfoTile({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-premium flex flex-col justify-between p-5">
      <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-teal uppercase">
        {icon}
        <span>{title}</span>
      </div>
      <div className="mt-2.5">{children}</div>
    </div>
  );
}
