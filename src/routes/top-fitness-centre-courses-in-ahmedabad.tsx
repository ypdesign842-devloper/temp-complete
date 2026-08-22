import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/top-fitness-centre-courses-in-ahmedabad";

export const Route = createFileRoute("/top-fitness-centre-courses-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Top Fitness Centre & Courses in Ahmedabad | Complete Care" },
      { name: "description", content: "Doctor-guided medical fitness in Ahmedabad — core stabilisation, clinical Pilates, strength and conditioning supervised by physiotherapists." },
      { property: "og:title", content: "Top Fitness Centre & Courses in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Doctor-guided medical fitness in Ahmedabad — core stabilisation, clinical Pilates, strength and conditioning supervised by physiotherapists." },
    ],
  }),
  component: () => <ContentTemplate data={page("top-fitness-centre-courses-in-ahmedabad")} content={content} />,
});
