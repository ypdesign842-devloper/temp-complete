import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/top-dry-needling-therapy-services-in-ahmedabad";

export const Route = createFileRoute("/top-dry-needling-therapy-services-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Top Dry Needling Therapy Services in Ahmedabad | Complete Care" },
      { name: "description", content: "Dry needling in Ahmedabad for myofascial trigger points, muscle tightness and chronic pain patterns." },
      { property: "og:title", content: "Top Dry Needling Therapy Services in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Dry needling in Ahmedabad for myofascial trigger points, muscle tightness and chronic pain patterns." },
    ],
  }),
  component: () => <ContentTemplate data={page("top-dry-needling-therapy-services-in-ahmedabad")} content={content} />,
});
