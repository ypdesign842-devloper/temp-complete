import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/online-fitness-classes";

export const Route = createFileRoute("/online-fitness-classes")({
  head: () => ({
    meta: [
      { title: "Online Fitness Classes | Complete Care Physiotherapy & Fitness" },
      { name: "description", content: "Live online fitness and rehabilitation classes from Complete Care — supervised sessions you can join from home, anywhere." },
      { property: "og:title", content: "Online Fitness Classes | Complete Care Physiotherapy & Fitness" },
      { property: "og:description", content: "Live online fitness and rehabilitation classes from Complete Care — supervised sessions you can join from home, anywhere." },
    ],
  }),
  component: () => <ContentTemplate data={page("online-fitness-classes")} content={content} />,
});
