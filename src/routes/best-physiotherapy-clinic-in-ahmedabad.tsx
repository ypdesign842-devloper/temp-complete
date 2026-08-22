import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/best-physiotherapy-clinic-in-ahmedabad";

export const Route = createFileRoute("/best-physiotherapy-clinic-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Best Physiotherapy Clinic in Ahmedabad | Complete Care" },
      { name: "description", content: "Complete Care is a doctor-led physiotherapy, chiropractic and rehabilitation network with six clinics across Gujarat and 40+ licensed physiotherapists." },
      { property: "og:title", content: "Best Physiotherapy Clinic in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Complete Care is a doctor-led physiotherapy, chiropractic and rehabilitation network with six clinics across Gujarat and 40+ licensed physiotherapists." },
      { property: "og:image", content: "https://completecare.in/assets/misc/cc-home-page-image-2.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/misc/cc-home-page-image-2.webp" },
    ],
  }),
  component: () => <ContentTemplate data={page("best-physiotherapy-clinic-in-ahmedabad")} content={content} />,
});
