import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/zumba-classes-in-ahmedabad";

export const Route = createFileRoute("/zumba-classes-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Zumba Classes in Ahmedabad | Complete Care Fitness" },
      { name: "description", content: "Energetic Zumba classes in Ahmedabad for cardiovascular fitness, coordination and enjoyable weight management." },
      { property: "og:title", content: "Zumba Classes in Ahmedabad | Complete Care Fitness" },
      { property: "og:description", content: "Energetic Zumba classes in Ahmedabad for cardiovascular fitness, coordination and enjoyable weight management." },
    ],
  }),
  component: () => <ContentTemplate data={page("zumba-classes-in-ahmedabad")} content={content} />,
});
