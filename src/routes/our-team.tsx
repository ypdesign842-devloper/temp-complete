import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/blocks/PageHero";
import { CtaBand } from "@/components/blocks/CtaBand";
import { teamBranches } from "@/data/team";
import { site } from "@/data/site";
import { Award, CheckCircle2, HeartPulse, MapPin, ShieldCheck, Sparkles, UserCheck } from "lucide-react";

export const Route = createFileRoute("/our-team")({
  head: () => ({
    meta: [
      { title: "Our Clinical Team | Complete Care Physiotherapy, Gujarat" },
      {
        name: "description",
        content:
          "Meet the Complete Care clinical team across Gota, Thaltej, Nikol, Mehsana and Ankleshwar — licensed physiotherapists with GSCPT registration led by Dr. Hardik Patel (PT).",
      },
      { property: "og:title", content: "Our Clinical Team | Complete Care Physiotherapy, Gujarat" },
      {
        property: "og:description",
        content: "Qualified physiotherapists and fitness trainers across all Complete Care centres in Gujarat.",
      },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Clinical Leadership"
        h1="Meet Our Clinical Team"
        lead="Directed by Dr. Hardik Patel (PT), Complete Care brings together over 40+ licensed physical therapists, certified chiropractors, and clinical rehabilitation specialists across Gujarat."
      />

      {/* Director Spotlight Section */}
      <section className="section-y bg-background border-b border-border">
        <div className="container-cc">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-sand via-background to-sand/50 p-8 shadow-xl sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.8fr] lg:items-center">
              <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border-4 border-white shadow-xl">
                <img
                  src="/assets/treatments/Complete-Care-Doctor-Image-cc.webp"
                  alt="Dr. Hardik Patel (PT), Director, Complete Care"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/90 p-3 text-center backdrop-blur-md">
                  <div className="text-xs font-bold text-navy">Dr. Hardik Patel (PT)</div>
                  <div className="text-[11px] font-semibold text-accent">Director &amp; Chief Physiotherapist</div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3.5 py-1 text-xs font-bold tracking-wider text-teal uppercase">
                  <Award className="size-3.5 text-accent" />
                  <span>16+ Years Clinical Excellence</span>
                </div>

                <h2 className="text-3xl font-semibold leading-tight text-navy sm:text-4xl">
                  Dr. Hardik Patel (PT)
                </h2>

                <p className="text-sm font-bold tracking-wider text-accent uppercase">
                  Director · Certified Chiropractor · Senior Physical Therapist
                </p>

                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Dr. Hardik Patel is a pioneering clinical director in non-surgical spinal care in Gujarat. With over
                  16 years of expertise, he has guided thousands of patients away from invasive spine and joint surgeries
                  through evidence-based decompression, precision manual chiropractic adjustments, and personalized
                  neuro-muscular rehabilitation.
                </p>

                <div className="grid gap-3 sm:grid-cols-2 pt-2">
                  {[
                    "Certified Chiropractic Alignment",
                    "US-FDA Spinal Decompression Protocol",
                    "Sports Injury & ACL Rehabilitation",
                    "Stroke & Neurological Recovery",
                  ].map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-sm font-semibold text-navy">
                      <CheckCircle2 className="size-4 text-accent shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-md transition-all hover:bg-emerald-600"
                  >
                    <span>Consult with Dr. Hardik Patel</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Clinical Teams */}
      {teamBranches.map((branch, idx) => (
        <section
          key={branch.branch}
          className={`section-y ${idx % 2 === 0 ? "bg-sand" : "bg-background"}`}
        >
          <div className="container-cc">
            <div className="flex items-center justify-between">
              <div>
                <span className="badge-clinical text-teal">
                  Branch Team
                </span>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
                  {branch.branch}
                </h2>
              </div>
              <span className="badge-emerald text-xs hidden sm:inline-flex">
                {branch.members.length} Practitioners
              </span>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {branch.members.map((m) => (
                <div
                  key={m.name + branch.branch}
                  className="card-premium card-premium-hover flex flex-col justify-between overflow-hidden p-5"
                >
                  <div>
                    {m.image ? (
                      <div className="mb-4 overflow-hidden rounded-xl border border-border bg-sand">
                        <img
                          src={m.image}
                          alt={m.name}
                          loading="lazy"
                          className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="mb-4 flex aspect-[4/5] w-full items-center justify-center rounded-xl bg-sand text-teal/40">
                        <UserCheck className="size-12" />
                      </div>
                    )}
                    <h3 className="text-base font-bold text-navy">{m.name}</h3>
                    {m.qualification && (
                      <p className="mt-1 text-xs font-semibold text-muted-foreground">{m.qualification}</p>
                    )}
                  </div>

                  <div className="mt-4 border-t border-border pt-3 flex items-center justify-between">
                    {m.credential ? (
                      <span className="badge-emerald text-[10px]">{m.credential}</span>
                    ) : (
                      <span className="text-[11px] font-semibold text-teal">Licensed PT</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  );
}
