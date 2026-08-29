import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/advanced-physical-therapy-in-ahmedabad";

export const Route = createFileRoute("/advanced-physical-therapy-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Advanced Physical Therapy in Ahmedabad | Complete Care" },
      { name: "description", content: "Advanced physical therapy in Ahmedabad using hospital-grade PEMF, computerised spine decompression, Class IV laser and TECAR technology." },
      { property: "og:title", content: "Advanced Physical Therapy in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Advanced physical therapy in Ahmedabad using hospital-grade PEMF, computerised spine decompression, Class IV laser and TECAR technology." },
      { property: "og:image", content: "https://completecare.in/assets/treatments/cc-home-page-image.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/treatments/cc-home-page-image.webp" },
    ],
  }),
  component: () => <ContentTemplate data={page("advanced-physical-therapy-in-ahmedabad")} content={content} />,
});
