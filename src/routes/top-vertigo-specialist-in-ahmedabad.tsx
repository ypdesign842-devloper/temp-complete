import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/top-vertigo-specialist-in-ahmedabad";

export const Route = createFileRoute("/top-vertigo-specialist-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Top Vertigo Specialist in Ahmedabad | Complete Care Physiotherapy" },
      { name: "description", content: "Vestibular rehabilitation for BPPV, dizziness and balance disorders in Ahmedabad, including repositioning manoeuvres and gaze stability training." },
      { property: "og:title", content: "Top Vertigo Specialist in Ahmedabad | Complete Care Physiotherapy" },
      { property: "og:description", content: "Vestibular rehabilitation for BPPV, dizziness and balance disorders in Ahmedabad, including repositioning manoeuvres and gaze stability training." },
    ],
  }),
  component: () => <ContentTemplate data={page("top-vertigo-specialist-in-ahmedabad")} content={content} />,
});
