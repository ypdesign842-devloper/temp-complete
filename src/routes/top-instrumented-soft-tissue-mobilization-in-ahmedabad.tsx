import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/top-instrumented-soft-tissue-mobilization-in-ahmedabad";

export const Route = createFileRoute("/top-instrumented-soft-tissue-mobilization-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Top Instrumented Soft Tissue Mobilization in Ahmedabad | Complete Care" },
      { name: "description", content: "IASTM therapy in Ahmedabad for scar tissue, fascial restriction and chronic soft tissue tightness." },
      { property: "og:title", content: "Top Instrumented Soft Tissue Mobilization in Ahmedabad | Complete Care" },
      { property: "og:description", content: "IASTM therapy in Ahmedabad for scar tissue, fascial restriction and chronic soft tissue tightness." },
    ],
  }),
  component: () => <ContentTemplate data={page("top-instrumented-soft-tissue-mobilization-in-ahmedabad")} content={content} />,
});
