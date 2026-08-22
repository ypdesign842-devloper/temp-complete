import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/ankle-pain-treatment-doctor-in-ahmedabad";

export const Route = createFileRoute("/ankle-pain-treatment-doctor-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Ankle Pain Treatment Doctor in Ahmedabad | Complete Care" },
      { name: "description", content: "Physiotherapy for ankle sprains, chronic ankle instability and tendon pain in Ahmedabad with balance retraining and strength rehabilitation." },
      { property: "og:title", content: "Ankle Pain Treatment Doctor in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Physiotherapy for ankle sprains, chronic ankle instability and tendon pain in Ahmedabad with balance retraining and strength rehabilitation." },
    ],
  }),
  component: () => <ContentTemplate data={page("ankle-pain-treatment-doctor-in-ahmedabad")} content={content} />,
});
