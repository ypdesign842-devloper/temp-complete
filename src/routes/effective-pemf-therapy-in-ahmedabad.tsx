import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/effective-pemf-therapy-in-ahmedabad";

export const Route = createFileRoute("/effective-pemf-therapy-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Effective PEMF Therapy in Ahmedabad | Complete Care" },
      { name: "description", content: "high frequency PEMF therapy in Ahmedabad for joint inflammation, bone healing and cartilage recovery, delivered on hospital-grade equipment." },
      { property: "og:title", content: "Effective PEMF Therapy in Ahmedabad | Complete Care" },
      { property: "og:description", content: "high frequency PEMF therapy in Ahmedabad for joint inflammation, bone healing and cartilage recovery, delivered on hospital-grade equipment." },
      { property: "og:image", content: "https://completecare.in/assets/heroes/img02-1024x683.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/heroes/img02-1024x683.webp" },
    ],
  }),
  component: () => <ContentTemplate data={page("effective-pemf-therapy-in-ahmedabad")} content={content} />,
});
