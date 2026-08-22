import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/spinal-cord-specialist-in-ahmedabad";

export const Route = createFileRoute("/spinal-cord-specialist-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Spinal Cord Specialist & SCI Rehabilitation in Ahmedabad | Complete Care" },
      { name: "description", content: "Spinal cord injury rehabilitation in Ahmedabad — early mobilisation, neuromuscular re-education, gait training and functional independence programmes." },
      { property: "og:title", content: "Spinal Cord Specialist & SCI Rehabilitation in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Spinal cord injury rehabilitation in Ahmedabad — early mobilisation, neuromuscular re-education, gait training and functional independence programmes." },
    ],
  }),
  component: () => <ContentTemplate data={page("spinal-cord-specialist-in-ahmedabad")} content={content} />,
});
