import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/hiit-training-workouts-in-ahmedabad";

export const Route = createFileRoute("/hiit-training-workouts-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "HIIT Training Workouts in Ahmedabad | Complete Care Fitness" },
      { name: "description", content: "Supervised high-intensity interval training in Ahmedabad for fat loss, metabolic fitness and time-efficient conditioning." },
      { property: "og:title", content: "HIIT Training Workouts in Ahmedabad | Complete Care Fitness" },
      { property: "og:description", content: "Supervised high-intensity interval training in Ahmedabad for fat loss, metabolic fitness and time-efficient conditioning." },
    ],
  }),
  component: () => <ContentTemplate data={page("hiit-training-workouts-in-ahmedabad")} content={content} />,
});
