import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/best-power-yoga-classes-ahmedabad";

export const Route = createFileRoute("/best-power-yoga-classes-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Best Power Yoga Classes in Ahmedabad | Complete Care" },
      { name: "description", content: "Power yoga classes in Ahmedabad combining strength, flexibility and breath control with physiotherapy-informed alignment." },
      { property: "og:title", content: "Best Power Yoga Classes in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Power yoga classes in Ahmedabad combining strength, flexibility and breath control with physiotherapy-informed alignment." },
    ],
  }),
  component: () => <ContentTemplate data={page("best-power-yoga-classes-ahmedabad")} content={content} />,
});
