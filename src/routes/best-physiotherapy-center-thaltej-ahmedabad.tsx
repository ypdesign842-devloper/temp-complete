import { createFileRoute } from "@tanstack/react-router";
import { LocationTemplate } from "@/components/templates/LocationTemplate";
import { locations } from "@/data/locations";
import { content } from "@/content/locations/best-physiotherapy-center-thaltej-ahmedabad";

const data = locations.find((l) => l.slug === "best-physiotherapy-center-thaltej-ahmedabad")!;

export const Route = createFileRoute("/best-physiotherapy-center-thaltej-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Best Physiotherapy Center in Thaltej, Ahmedabad | Complete Care" },
      { name: "description", content: "Physiotherapy, chiropractic care, spine decompression and neuro rehabilitation at Complete Care Thaltej, Ahmedabad. Clinic visits and doorstep home physiotherapy." },
      { property: "og:title", content: "Best Physiotherapy Center in Thaltej, Ahmedabad | Complete Care" },
      { property: "og:description", content: "Physiotherapy, chiropractic care, spine decompression and neuro rehabilitation at Complete Care Thaltej, Ahmedabad. Clinic visits and doorstep home physiotherapy." },
      { property: "og:image", content: "https://completecare.in/assets/media/Complete-care-Thaltej-Ahmedabad-Clinic-photos1.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/media/Complete-care-Thaltej-Ahmedabad-Clinic-photos1.webp" },
    ],
  }),
  component: () => <LocationTemplate data={data} content={content} />,
});
