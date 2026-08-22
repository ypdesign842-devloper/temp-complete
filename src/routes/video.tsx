import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/blocks/PageHero";
import { CtaBand } from "@/components/blocks/CtaBand";
import { videos, youtubeChannel } from "@/data/videos";
import { ExternalLink, Play, Tv, Youtube } from "lucide-react";

export const Route = createFileRoute("/video")({
  head: () => ({
    meta: [
      { title: "Clinical Demonstrations & Patient Videos | Complete Care Physiotherapy" },
      {
        name: "description",
        content:
          "Watch Complete Care treatment demonstrations, patient recovery stories and physiotherapy guidance from Dr. Hardik Patel and team.",
      },
      { property: "og:title", content: "Clinical Demonstrations & Patient Videos | Complete Care Physiotherapy" },
      {
        property: "og:description",
        content: "Treatment demonstrations and patient recovery videos from our Gujarat physiotherapy centres.",
      },
    ],
  }),
  component: VideoPage,
});

function VideoPage() {
  return (
    <>
      <PageHero
        eyebrow="Clinical Video Library"
        h1="Treatment Demos &amp; Patient Recoveries"
        lead="Watch hands-on treatment demonstrations, spinal decompression sessions, patient testimonials, and physiotherapy exercises explained by Dr. Hardik Patel (PT) and our clinical staff."
      />

      <section className="section-y bg-background">
        <div className="container-cc space-y-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <span className="badge-clinical text-teal">
                Featured Video Demonstrations
              </span>
              <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">Clinical Video Catalog</h2>
            </div>

            <a
              href={youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-red-700"
            >
              <Youtube className="size-4" />
              <span>Subscribe on YouTube</span>
              <ExternalLink className="size-3" />
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <article
                key={v.id}
                className="group card-premium card-premium-hover overflow-hidden"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="size-full border-none"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-teal mb-1">
                    <Play className="size-3 fill-current" />
                    <span>Clinical Demonstration</span>
                  </div>
                  <h2 className="text-base font-bold leading-snug text-navy group-hover:text-accent transition-colors">
                    {v.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-sand/60 p-8 text-center sm:p-10">
            <h3 className="text-2xl font-bold text-navy">Looking for more patient case studies?</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
              Visit our official YouTube channel to explore patient recovery journeys across back pain, slip disc, knee arthritis, and post-stroke rehabilitation.
            </p>
            <div className="mt-5">
              <a
                href={youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-navy-soft"
              >
                <Youtube className="size-4 text-red-400" />
                <span>Visit Complete Care YouTube Channel</span>
                <ExternalLink className="size-3.5 text-white/70" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
