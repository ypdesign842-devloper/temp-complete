import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/top-rheumatoid-arthritis-specialist-in-ahmedabad";

export const Route = createFileRoute("/top-rheumatoid-arthritis-specialist-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Top Rheumatoid Arthritis Specialist in Ahmedabad | Complete Care" },
      { name: "description", content: "Physiotherapy support for rheumatoid arthritis in Ahmedabad — joint protection, gentle mobility, hydrotherapy-style routines and pain management." },
      { property: "og:title", content: "Top Rheumatoid Arthritis Specialist in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Physiotherapy support for rheumatoid arthritis in Ahmedabad — joint protection, gentle mobility, hydrotherapy-style routines and pain management." },
    ],
  }),
  component: () => <ContentTemplate data={page("top-rheumatoid-arthritis-specialist-in-ahmedabad")} content={content} />,
});
