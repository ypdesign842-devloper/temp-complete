import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Home,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/care-areas")({
  head: () => ({
    meta: [
      { title: "Care Areas | Conditions We Help You Recover From | Complete Care" },
      {
        name: "description",
        content:
          "Explore all clinical care areas at Complete Care across Gujarat — including physiotherapy for joint and back pain, specialized spine-neuro rehabilitation, and medical fitness programs.",
      },
      { property: "og:title", content: "Care Areas | Complete Care Physiotherapy & Rehabilitation" },
      {
        property: "og:description",
        content:
          "From everyday pain to complex neurological and rehabilitation needs, Complete Care provides personalized care designed around your movement and long-term wellbeing.",
      },
    ],
  }),
  component: CareAreasPage,
});

type CareItem = {
  name: string;
  to: string;
};

type CareCategory = {
  id: string;
  badge: string;
  title: string;
  description: string;
  items: CareItem[];
};

const careCategories: CareCategory[] = [
  {
    id: "physiotherapy",
    badge: "Physiotherapy",
    title: "Physiotherapy",
    description:
      "Targeted physical rehabilitation for spinal discs, joint degeneration, acute nerve compression, and sports injuries.",
    items: [
      { name: "Neck Pain", to: "/neck-pain-treatment-doctor-in-ahmedabad" },
      { name: "Back Pain", to: "/back-pain-doctor-in-ahmedabad" },
      { name: "Knee Pain", to: "/knee-pain-treatment-in-ahmedabad" },
      { name: "Shoulder Pain", to: "/shoulder-pain-treatment-doctor-in-ahmedabad" },
      { name: "Frozen Shoulder", to: "/frozen-shoulder-treatment-doctor-in-ahmedabad" },
      { name: "Slip/Herniated Disc", to: "/slipped-herniated-disc-physiotherapy-treatment-in-ahmedabad" },
      { name: "Sciatica", to: "/sciatica-pain-treatment-in-ahmedabad" },
      { name: "Ankle Pain", to: "/ankle-pain-treatment-doctor-in-ahmedabad" },
      { name: "Rheumatoid Arthritis", to: "/top-rheumatoid-arthritis-specialist-in-ahmedabad" },
      { name: "Sports Rehab", to: "/sports-physiotherapist-in-ahmedabad" },
      { name: "Tennis Elbow", to: "/best-doctor-for-tennis-elbow-in-ahmedabad" },
      { name: "Vertigo", to: "/top-vertigo-specialist-in-ahmedabad" },
      { name: "Osteoporosis", to: "/osteoporosis-treatment-doctor-in-ahmedabad" },
    ],
  },
  {
    id: "spine-neuro-rehab",
    badge: "Spine-Neuro Rehab",
    title: "Spine-Neuro Rehab",
    description:
      "Dedicated clinical neurological recovery pathways for brain, spinal cord, motor function, and peripheral nerve conditions.",
    items: [
      { name: "Spinal Cord Injury", to: "/spinal-cord-specialist-in-ahmedabad" },
      { name: "Stroke", to: "/stroke-in-treatment-ahmedabad" },
      { name: "Parkinson's Disease", to: "/parkinson-disease-treatment-in-ahmedabad" },
      { name: "Muscular Dystrophy", to: "/muscular-dystrophy-doctor-ahmedabad" },
      { name: "Multiple Sclerosis", to: "/multiple-sclerosis-treatment-doctor-in-ahmedabad" },
      { name: "Cerebral Palsy", to: "/cerebral-palsy-treatment-in-ahmedabad" },
      { name: "Bell's Palsy", to: "/bells-palsy-treatment-in-ahmedabad" },
      { name: "Diabetic Neuropathy", to: "/diabetic-neuropathy-treatment-doctor-in-ahmedabad" },
    ],
  },
  {
    id: "fitness",
    badge: "Fitness",
    title: "Fitness",
    description:
      "Clinically supervised functional movement, core stability, weight management, and active conditioning programs.",
    items: [
      { name: "Aerobics", to: "/best-aerobics-classes-in-ahmedabad" },
      { name: "HIIT Training", to: "/hiit-training-workouts-in-ahmedabad" },
      { name: "Strength Training", to: "/top-strength-training-studio-in-ahmedabad" },
      { name: "Zumba", to: "/zumba-classes-in-ahmedabad" },
      { name: "Pilates", to: "/pilates-studio-ahmedabad" },
      { name: "Power Yoga", to: "/best-power-yoga-classes-ahmedabad" },
      { name: "Step Aerobics", to: "/step-aerobics-physiotherapy-treatment-in-ahmedabad" },
      { name: "Ball & Band Training", to: "/ball-band-training-physiotherapy-treatment-in-ahmedabad" },
      { name: "Stretching", to: "/stretching-physiotherapy-treatment-in-ahmedabad" },
      { name: "Online Fitness Class", to: "/online-fitness-classes" },
    ],
  },
];

function CareAreasPage() {
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
              <span className="text-navy font-bold">Care Areas</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3.5 py-1 text-[11px] font-bold tracking-wider text-teal uppercase shadow-sm">
              <Sparkles className="size-3.5 text-accent" />
              <span>CARE AREAS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy leading-[1.15]">
              Conditions We Help You Recover From
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground pt-1">
              From everyday pain to complex neurological and rehabilitation needs, Complete Care provides personalized care designed around your movement, recovery, and long term wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <div className="space-y-4 pb-16">
        {careCategories.map((category) => (
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
