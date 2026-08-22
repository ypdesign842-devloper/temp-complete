import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/ball-band-training-physiotherapy-treatment-in-ahmedabad";

export const Route = createFileRoute("/ball-band-training-physiotherapy-treatment-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Ball & Band Training Physiotherapy Treatment in Ahmedabad | Complete Care" },
      { name: "description", content: "Swiss ball and resistance band training in Ahmedabad for core stability, joint control and home-friendly rehabilitation." },
      { property: "og:title", content: "Ball & Band Training Physiotherapy Treatment in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Swiss ball and resistance band training in Ahmedabad for core stability, joint control and home-friendly rehabilitation." },
    ],
  }),
  component: () => <ContentTemplate data={page("ball-band-training-physiotherapy-treatment-in-ahmedabad")} content={content} />,
});
