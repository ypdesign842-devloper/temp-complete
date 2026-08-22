import { createFileRoute } from "@tanstack/react-router";
import { LocationTemplate } from "@/components/templates/LocationTemplate";
import { locations } from "@/data/locations";
import { content } from "@/content/locations/best-physiotherapy-center-mehsana";

const data = locations.find((l) => l.slug === "best-physiotherapy-center-mehsana")!;

export const Route = createFileRoute("/best-physiotherapy-center-mehsana")({
  head: () => ({
    meta: [
      { title: "Best Physiotherapy Center in Mehsana | Complete Care" },
      { name: "description", content: "Complete Care Mehsana provides physiotherapy, chiropractic adjustment, electrotherapy and rehabilitation for spine, joint and neurological conditions." },
      { property: "og:title", content: "Best Physiotherapy Center in Mehsana | Complete Care" },
      { property: "og:description", content: "Complete Care Mehsana provides physiotherapy, chiropractic adjustment, electrotherapy and rehabilitation for spine, joint and neurological conditions." },
      { property: "og:image", content: "https://completecare.in/assets/media/Complete-care-Thaltej-Ahmedabad-Clinic-photos1.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/media/Complete-care-Thaltej-Ahmedabad-Clinic-photos1.webp" },
    ],
  }),
  component: () => <LocationTemplate data={data} content={content} />,
});
