import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/best-aerobics-classes-in-ahmedabad";

export const Route = createFileRoute("/best-aerobics-classes-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Best Aerobics Classes in Ahmedabad | Complete Care Fitness" },
      { name: "description", content: "Supervised aerobics classes in Ahmedabad for cardiovascular fitness, weight management and stamina, guided by physiotherapy-trained instructors." },
      { property: "og:title", content: "Best Aerobics Classes in Ahmedabad | Complete Care Fitness" },
      { property: "og:description", content: "Supervised aerobics classes in Ahmedabad for cardiovascular fitness, weight management and stamina, guided by physiotherapy-trained instructors." },
    ],
  }),
  component: () => <ContentTemplate data={page("best-aerobics-classes-in-ahmedabad")} content={content} />,
});
