import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/bells-palsy-treatment-in-ahmedabad";

export const Route = createFileRoute("/bells-palsy-treatment-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Bell's Palsy Treatment in Ahmedabad | Complete Care Physiotherapy" },
      { name: "description", content: "Facial physiotherapy for Bell's palsy in Ahmedabad — facial muscle re-education, electrical stimulation and eye protection guidance." },
      { property: "og:title", content: "Bell's Palsy Treatment in Ahmedabad | Complete Care Physiotherapy" },
      { property: "og:description", content: "Facial physiotherapy for Bell's palsy in Ahmedabad — facial muscle re-education, electrical stimulation and eye protection guidance." },
    ],
  }),
  component: () => <ContentTemplate data={page("bells-palsy-treatment-in-ahmedabad")} content={content} />,
});
