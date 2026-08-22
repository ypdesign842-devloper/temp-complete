import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/blocks/PageHero";
import { CtaBand } from "@/components/blocks/CtaBand";
import { mediaImages, mediaBranches } from "@/data/media";
import { Camera, MapPin, Sparkles } from "lucide-react";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media & Clinic Facility Gallery | Complete Care Gujarat" },
      {
        name: "description",
        content:
          "Photo gallery of Complete Care physiotherapy and chiropractic centres in Gota, Thaltej, South Bopal, Mehsana and Ankleshwar — modern assessment rooms and rehab equipment.",
      },
      { property: "og:title", content: "Media & Clinic Facility Gallery | Complete Care Gujarat" },
      {
        property: "og:description",
        content: "Inside our physiotherapy, rehabilitation and fitness facilities across Gujarat.",
      },
    ],
  }),
  component: MediaPage,
});

function MediaPage() {
  const [filter, setFilter] = useState<string>("All");
  const images = filter === "All" ? mediaImages : mediaImages.filter((i) => i.branch === filter);

  return (
    <>
      <PageHero
        eyebrow="Clinic Media Gallery"
        h1="Inside Our Centres Across Gujarat"
        lead="Take a look inside the Complete Care clinical facilities — advanced therapy suites, spinal decompression units, and rehabilitation gymnasiums in Gota, Thaltej, South Bopal, Mehsana, and Ankleshwar."
      />

      <section className="section-y bg-background">
        <div className="container-cc space-y-10">
          {/* Branch Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 border-b border-border/80 pb-6">
            <span className="mr-2 text-xs font-bold tracking-wider text-muted-foreground uppercase hidden sm:inline">
              Filter by Clinic:
            </span>
            {mediaBranches.map((b) => (
              <button
                key={b}
                type="button"
                aria-pressed={filter === b}
                onClick={() => setFilter(b)}
                className={`rounded-xl px-5 py-2.5 text-xs font-bold tracking-wide uppercase transition-all ${
                  filter === b
                    ? "bg-navy text-white shadow-md shadow-navy/20"
                    : "border border-border bg-card text-navy hover:border-accent hover:bg-sand"
                }`}
              >
                {b}
              </button>
            ))}
          </div>

          {/* Photo Gallery Grid */}
          <div
            aria-live="polite"
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {images.map((img, i) => (
              <figure
                key={img.src + i}
                className="group card-premium card-premium-hover overflow-hidden"
              >
                <div className="relative overflow-hidden bg-sand">
                  <img
                    src={img.src}
                    alt={img.caption}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 rounded-md bg-navy/80 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                    {img.branch}
                  </div>
                </div>
                <figcaption className="p-3.5 text-xs font-medium text-muted-foreground line-clamp-1">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
