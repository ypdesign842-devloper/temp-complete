import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/parkinson-disease-treatment-in-ahmedabad";

export const Route = createFileRoute("/parkinson-disease-treatment-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Parkinson's Disease Treatment in Ahmedabad | Complete Care Physiotherapy" },
      { name: "description", content: "Physiotherapy for Parkinson's disease in Ahmedabad — gait retraining, freezing strategies, posture, balance and amplitude-based exercise." },
      { property: "og:title", content: "Parkinson's Disease Treatment in Ahmedabad | Complete Care Physiotherapy" },
      { property: "og:description", content: "Physiotherapy for Parkinson's disease in Ahmedabad — gait retraining, freezing strategies, posture, balance and amplitude-based exercise." },
    ],
  }),
  component: () => <ContentTemplate data={page("parkinson-disease-treatment-in-ahmedabad")} content={content} />,
});
