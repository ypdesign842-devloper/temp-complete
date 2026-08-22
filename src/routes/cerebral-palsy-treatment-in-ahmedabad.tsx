import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/cerebral-palsy-treatment-in-ahmedabad";

export const Route = createFileRoute("/cerebral-palsy-treatment-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Cerebral Palsy Treatment in Ahmedabad | Complete Care Physiotherapy" },
      { name: "description", content: "Paediatric physiotherapy for cerebral palsy in Ahmedabad — walking and mobility development, tone management, and family-centred home programmes." },
      { property: "og:title", content: "Cerebral Palsy Treatment in Ahmedabad | Complete Care Physiotherapy" },
      { property: "og:description", content: "Paediatric physiotherapy for cerebral palsy in Ahmedabad — walking and mobility development, tone management, and family-centred home programmes." },
    ],
  }),
  component: () => <ContentTemplate data={page("cerebral-palsy-treatment-in-ahmedabad")} content={content} />,
});
