import { createFileRoute } from "@tanstack/react-router";
import { LocationTemplate } from "@/components/templates/LocationTemplate";
import { locations } from "@/data/locations";
import { content } from "@/content/locations/best-physiotherapy-center-ankleshwar";

const data = locations.find((l) => l.slug === "best-physiotherapy-center-ankleshwar")!;

export const Route = createFileRoute("/best-physiotherapy-center-ankleshwar")({
  head: () => ({
    meta: [
      { title: "Best Physiotherapy Center in Ankleshwar | Complete Care" },
      { name: "description", content: "Physiotherapy, chiropractic care, sports injury rehabilitation and home physiotherapy visits at Complete Care Ankleshwar, Gujarat." },
      { property: "og:title", content: "Best Physiotherapy Center in Ankleshwar | Complete Care" },
      { property: "og:description", content: "Physiotherapy, chiropractic care, sports injury rehabilitation and home physiotherapy visits at Complete Care Ankleshwar, Gujarat." },
      { property: "og:image", content: "https://completecare.in/assets/media/Complete-care-Thaltej-Ahmedabad-Clinic-photos1.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/media/Complete-care-Thaltej-Ahmedabad-Clinic-photos1.webp" },
    ],
  }),
  component: () => <LocationTemplate data={data} content={content} />,
});
