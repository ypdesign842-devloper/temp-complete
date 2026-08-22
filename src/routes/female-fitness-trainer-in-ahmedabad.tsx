import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/female-fitness-trainer-in-ahmedabad";

export const Route = createFileRoute("/female-fitness-trainer-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Female Fitness Trainer in Ahmedabad | Complete Care" },
      { name: "description", content: "Qualified female fitness trainers and physiotherapists in Ahmedabad for women's strength, post-natal recovery and bone health programmes." },
      { property: "og:title", content: "Female Fitness Trainer in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Qualified female fitness trainers and physiotherapists in Ahmedabad for women's strength, post-natal recovery and bone health programmes." },
    ],
  }),
  component: () => <ContentTemplate data={page("female-fitness-trainer-in-ahmedabad")} content={content} />,
});
