import { createFileRoute } from "@tanstack/react-router";
import { LocationTemplate } from "@/components/templates/LocationTemplate";
import { locations } from "@/data/locations";
import { content } from "@/content/locations/best-physiotherapy-center-nikol-ahmedabad";

const data = locations.find((l) => l.slug === "best-physiotherapy-center-nikol-ahmedabad")!;

export const Route = createFileRoute("/best-physiotherapy-center-nikol-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Best Physiotherapy Center in Nikol, Ahmedabad | Complete Care" },
      { name: "description", content: "Physiotherapy, chiropractic treatment and neuro rehabilitation at Complete Care Nikol, Ahmedabad, plus doorstep home physiotherapy visits." },
      { property: "og:title", content: "Best Physiotherapy Center in Nikol, Ahmedabad | Complete Care" },
      { property: "og:description", content: "Physiotherapy, chiropractic treatment and neuro rehabilitation at Complete Care Nikol, Ahmedabad, plus doorstep home physiotherapy visits." },
      { property: "og:image", content: "https://completecare.in/assets/media/Complete-care-Thaltej-Ahmedabad-Clinic-photos1.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/media/Complete-care-Thaltej-Ahmedabad-Clinic-photos1.webp" },
    ],
  }),
  component: () => <LocationTemplate data={data} content={content} />,
});
