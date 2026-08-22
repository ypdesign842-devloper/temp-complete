import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/muscular-dystrophy-doctor-ahmedabad";

export const Route = createFileRoute("/muscular-dystrophy-doctor-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Muscular Dystrophy Doctor in Ahmedabad | Complete Care Physiotherapy" },
      { name: "description", content: "Physiotherapy for muscular dystrophy in Ahmedabad — contracture prevention, respiratory care, mobility support and family training." },
      { property: "og:title", content: "Muscular Dystrophy Doctor in Ahmedabad | Complete Care Physiotherapy" },
      { property: "og:description", content: "Physiotherapy for muscular dystrophy in Ahmedabad — contracture prevention, respiratory care, mobility support and family training." },
    ],
  }),
  component: () => <ContentTemplate data={page("muscular-dystrophy-doctor-ahmedabad")} content={content} />,
});
