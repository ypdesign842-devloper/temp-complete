import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/best-physiotherapist-in-ahmedabad";

export const Route = createFileRoute("/best-physiotherapist-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Best Physiotherapist in Ahmedabad | Dr. Hardik Patel (PT) | Complete Care" },
      { name: "description", content: "Meet the Complete Care physiotherapy team led by Dr. Hardik Patel (PT) — 16+ years of clinical experience across orthopaedic, neurological and sports rehabilitation." },
      { property: "og:title", content: "Best Physiotherapist in Ahmedabad | Dr. Hardik Patel (PT) | Complete Care" },
      { property: "og:description", content: "Meet the Complete Care physiotherapy team led by Dr. Hardik Patel (PT) — 16+ years of clinical experience across orthopaedic, neurological and sports rehabilitation." },
      { property: "og:image", content: "https://completecare.in/assets/heroes/Dr-Hardik-Patel.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/heroes/Dr-Hardik-Patel.webp" },
    ],
  }),
  component: () => <ContentTemplate data={page("best-physiotherapist-in-ahmedabad")} content={content} />,
});
