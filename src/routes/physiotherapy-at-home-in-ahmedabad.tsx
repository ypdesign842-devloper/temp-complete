import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/physiotherapy-at-home-in-ahmedabad";

export const Route = createFileRoute("/physiotherapy-at-home-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Physiotherapy at Home in Ahmedabad | Complete Care Home Visits" },
      { name: "description", content: "Licensed physiotherapists visit your home in Ahmedabad, Mehsana and Ankleshwar with portable TENS, IFT and ultrasound equipment for doorstep rehabilitation." },
      { property: "og:title", content: "Physiotherapy at Home in Ahmedabad | Complete Care Home Visits" },
      { property: "og:description", content: "Licensed physiotherapists visit your home in Ahmedabad, Mehsana and Ankleshwar with portable TENS, IFT and ultrasound equipment for doorstep rehabilitation." },
      { property: "og:image", content: "https://completecare.in/assets/media/Complete-care-Thaltej-Ahmedabad-Clinic-photos4.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/media/Complete-care-Thaltej-Ahmedabad-Clinic-photos4.webp" },
    ],
  }),
  component: () => <ContentTemplate data={page("physiotherapy-at-home-in-ahmedabad")} content={content} />,
});
