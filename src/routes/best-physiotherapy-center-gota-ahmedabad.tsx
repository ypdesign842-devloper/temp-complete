import { createFileRoute } from "@tanstack/react-router";
import { LocationTemplate } from "@/components/templates/LocationTemplate";
import { locations } from "@/data/locations";
import { content } from "@/content/locations/best-physiotherapy-center-gota-ahmedabad";

const data = locations.find((l) => l.slug === "best-physiotherapy-center-gota-ahmedabad")!;

export const Route = createFileRoute("/best-physiotherapy-center-gota-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Best Physiotherapy Center in Gota, Ahmedabad | Complete Care" },
      { name: "description", content: "Doctor-led physiotherapy, chiropractic treatment and rehabilitation at Complete Care Gota, Ahmedabad. Clinic sessions and home physiotherapy visits available." },
      { property: "og:title", content: "Best Physiotherapy Center in Gota, Ahmedabad | Complete Care" },
      { property: "og:description", content: "Doctor-led physiotherapy, chiropractic treatment and rehabilitation at Complete Care Gota, Ahmedabad. Clinic sessions and home physiotherapy visits available." },
      { property: "og:image", content: "https://completecare.in/assets/media/Complete-care-Thaltej-Ahmedabad-Clinic-photos1.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/media/Complete-care-Thaltej-Ahmedabad-Clinic-photos1.webp" },
    ],
  }),
  component: () => <LocationTemplate data={data} content={content} />,
});
