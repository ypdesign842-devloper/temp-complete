import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/best-cupping-therapy-in-ahmedabad";

export const Route = createFileRoute("/best-cupping-therapy-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Best Cupping Therapy in Ahmedabad | Complete Care" },
      { name: "description", content: "Therapeutic cupping in Ahmedabad for muscle tightness, circulation and myofascial pain relief." },
      { property: "og:title", content: "Best Cupping Therapy in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Therapeutic cupping in Ahmedabad for muscle tightness, circulation and myofascial pain relief." },
    ],
  }),
  component: () => <ContentTemplate data={page("best-cupping-therapy-in-ahmedabad")} content={content} />,
});
