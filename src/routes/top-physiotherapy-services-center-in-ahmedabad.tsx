import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/top-physiotherapy-services-center-in-ahmedabad";

export const Route = createFileRoute("/top-physiotherapy-services-center-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Top Physiotherapy Services Center in Ahmedabad | Complete Care" },
      { name: "description", content: "The complete range of Complete Care physiotherapy services in Ahmedabad — manual therapy, electrotherapy, spine care, neuro rehabilitation and medical fitness." },
      { property: "og:title", content: "Top Physiotherapy Services Center in Ahmedabad | Complete Care" },
      { property: "og:description", content: "The complete range of Complete Care physiotherapy services in Ahmedabad — manual therapy, electrotherapy, spine care, neuro rehabilitation and medical fitness." },
    ],
  }),
  component: () => <ContentTemplate data={page("top-physiotherapy-services-center-in-ahmedabad")} content={content} />,
});
