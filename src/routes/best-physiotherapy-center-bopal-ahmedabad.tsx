import { createFileRoute } from "@tanstack/react-router";
import { LocationTemplate } from "@/components/templates/LocationTemplate";
import { locations } from "@/data/locations";
import { content } from "@/content/locations/best-physiotherapy-center-bopal-ahmedabad";

const data = locations.find((l) => l.slug === "best-physiotherapy-center-bopal-ahmedabad")!;

export const Route = createFileRoute("/best-physiotherapy-center-bopal-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Best Physiotherapy Center in Bopal, Ahmedabad | Complete Care" },
      { name: "description", content: "Complete Care South Bopal offers physiotherapy, chiropractic care, spine decompression and post-surgical rehabilitation in Ahmedabad." },
      { property: "og:title", content: "Best Physiotherapy Center in Bopal, Ahmedabad | Complete Care" },
      { property: "og:description", content: "Complete Care South Bopal offers physiotherapy, chiropractic care, spine decompression and post-surgical rehabilitation in Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/media/Complete-care-Thaltej-Ahmedabad-Clinic-photos1.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/media/Complete-care-Thaltej-Ahmedabad-Clinic-photos1.webp" },
    ],
  }),
  component: () => <LocationTemplate data={data} content={content} />,
});
