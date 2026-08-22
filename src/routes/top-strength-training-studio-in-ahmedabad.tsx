import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/top-strength-training-studio-in-ahmedabad";

export const Route = createFileRoute("/top-strength-training-studio-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Top Strength Training Studio in Ahmedabad | Complete Care" },
      { name: "description", content: "Supervised strength training in Ahmedabad for bone health, joint support, posture and long-term pain prevention." },
      { property: "og:title", content: "Top Strength Training Studio in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Supervised strength training in Ahmedabad for bone health, joint support, posture and long-term pain prevention." },
    ],
  }),
  component: () => <ContentTemplate data={page("top-strength-training-studio-in-ahmedabad")} content={content} />,
});
