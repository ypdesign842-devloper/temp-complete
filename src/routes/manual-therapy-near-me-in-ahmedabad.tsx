import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/manual-therapy-near-me-in-ahmedabad";

export const Route = createFileRoute("/manual-therapy-near-me-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Manual Therapy Near Me in Ahmedabad | Complete Care" },
      { name: "description", content: "Hands-on manual therapy in Ahmedabad — joint mobilisation, soft tissue release and mobilisation with movement." },
      { property: "og:title", content: "Manual Therapy Near Me in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Hands-on manual therapy in Ahmedabad — joint mobilisation, soft tissue release and mobilisation with movement." },
    ],
  }),
  component: () => <ContentTemplate data={page("manual-therapy-near-me-in-ahmedabad")} content={content} />,
});
