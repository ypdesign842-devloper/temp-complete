import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/frozen-shoulder-treatment-doctor-in-ahmedabad";

export const Route = createFileRoute("/frozen-shoulder-treatment-doctor-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Frozen Shoulder Treatment Doctor in Ahmedabad | Complete Care" },
      { name: "description", content: "Stage-specific physiotherapy for frozen shoulder (adhesive capsulitis) in Ahmedabad — pain relief, capsular stretching and mobility restoration." },
      { property: "og:title", content: "Frozen Shoulder Treatment Doctor in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Stage-specific physiotherapy for frozen shoulder (adhesive capsulitis) in Ahmedabad — pain relief, capsular stretching and mobility restoration." },
    ],
  }),
  component: () => <ContentTemplate data={page("frozen-shoulder-treatment-doctor-in-ahmedabad")} content={content} />,
});
