import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Home,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/therapies")({
  head: () => ({
    meta: [
      { title: "Therapies | Advanced Therapies for Better Recovery | Complete Care" },
      {
        name: "description",
        content:
          "Explore advanced clinical modalities, electrotherapy, spinal decompression, and evidence-based manual therapies at Complete Care across Gujarat.",
      },
      { property: "og:title", content: "Therapies | Complete Care Physiotherapy & Rehabilitation" },
      {
        property: "og:description",
        content:
          "Evidence-based physiotherapy, electrotherapy, chiropractic and advanced rehabilitation techniques, tailored to support your recovery at every stage.",
      },
    ],
  }),
  component: TherapiesPage,
});

type TherapyItem = {
  name: string;
  to: string;
};

type TherapyCategory = {
  id: string;
  badge: string;
  title: string;
  description: string;
  items: TherapyItem[];
};

const therapyCategories: TherapyCategory[] = [
  {
    id: "electro-therapy",
    badge: "Electro Therapy",
    title: "Electro Therapy",
    description:
      "Advanced electro-physical modalities targeting cellular healing, deep tissue inflammation, pain inhibition, and muscle re-education.",
    items: [
      { name: "Class IV Laser Therapy", to: "/class-iv-laser-therapy-clinic-in-ahmedabad" },
      { name: "PEMF Therapy", to: "/effective-pemf-therapy-in-ahmedabad" },
      { name: "IFT", to: "/best-ift-treatment-center-in-ahmedabad" },
      { name: "TENS", to: "/effective-tens-treatment-in-ahmedabad-for-pain-relief" },
      { name: "SWD", to: "/top-short wave-diathermy-treatment-in-ahmedabad" },
      { name: "Electrical Stimulation", to: "/best-electrical-stimulation-therapy-in-ahmedabad" },
      { name: "Ultra Sound", to: "/ultra-sound-treatment-in-ahmedabad" },
      { name: "Infra Radiation", to: "/infra-radiation-treatment-in-ahmedabad" },
      { name: "Traction", to: "/effective-traction-treatment-in-ahmedabad" },
      { name: "Pneumatic Compression", to: "/best-pneumatic-compression-therapy-in-ahmedabad" },
      { name: "Paraffin Wax Bath", to: "/paraffin-wax-bath-therapy-in-ahmedabad" },
      { name: "Tecar", to: "/tecar-physiotherapy-treatment-in-ahmedabad" },
      { name: "Spine Decompression", to: "/spine-decompression-therapy-treatment-in-ahmedabad" },
    ],
  },
  {
    id: "advance-therapy",
    badge: "Advance Therapy",
    title: "Advance Therapy",
    description:
      "Hands-on specialized manual therapies, neuromuscular trigger point releases, myofascial manipulation, and spinal adjustments.",
    items: [
      { name: "Osteopathy", to: "/leading-osteopathy-treatment-in-ahmedabad" },
      { name: "Dry Needling", to: "/top-dry-needling-therapy-services-in-ahmedabad" },
      { name: "Manual Therapy", to: "/manual-therapy-near-me-in-ahmedabad" },
      { name: "Kinesio Taping", to: "/expert-kinesio-tape-therapy-in-ahmedabad" },
      { name: "IASTM", to: "/top-instrumented-soft tissue-mobilization-in-ahmedabad" },
      { name: "Cupping Therapy", to: "/best-cupping-therapy-in-ahmedabad" },
    ],
  },
];

function TherapiesPage() {
  return (
    <div className="bg-[#f9f7ef] min-h-screen">
      {/* Hero Section */}
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="container-cc">
          <div className="max-w-3xl space-y-4">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
              <Link to="/" className="inline-flex items-center gap-1 hover:text-accent transition-colors">
                <Home className="size-3.5" />
                <span>Home</span>
              </Link>
              <ChevronRight aria-hidden="true" className="size-3 text-muted-foreground/60" />
              <span className="text-navy font-bold">Therapies</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3.5 py-1 text-[11px] font-bold tracking-wider text-teal uppercase shadow-sm">
              <Sparkles className="size-3.5 text-accent" />
              <span>THERAPIES</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy leading-[1.15]">
              Advanced Therapies for Better Recovery
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground pt-1">
              evidence based physiotherapy, electrotherapy, chiropractic and advanced rehabilitation techniques, tailored to support your recovery at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <div className="space-y-4 pb-16">
        {therapyCategories.map((category) => (
          <section key={category.id} className="py-8 sm:py-10">
            <div className="container-cc space-y-6 sm:space-y-8">
              {/* Category Header */}
              <div className="max-w-2xl space-y-2">
                <span className="badge-clinical text-teal text-[11px]">
                  {category.badge}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy">
                  {category.title}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Compact Pill / Chip Button System */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3.5 pt-2">
                {category.items.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to as never}
                    className="group inline-flex items-center gap-2.5 rounded-full border border-navy/12 bg-white px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-semibold text-navy shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#16803d]/45 hover:bg-white hover:text-[#16803d] hover:shadow-md active:translate-y-0"
                  >
                    <CheckCircle2 className="size-3.5 sm:size-4 text-[#16803d] shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <span>{item.name}</span>
                    <ArrowUpRight className="size-3.5 text-muted-foreground/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#16803d]" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
