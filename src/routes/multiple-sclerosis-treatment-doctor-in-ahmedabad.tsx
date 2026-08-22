import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/multiple-sclerosis-treatment-doctor-in-ahmedabad";

export const Route = createFileRoute("/multiple-sclerosis-treatment-doctor-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Multiple Sclerosis Treatment Doctor in Ahmedabad | Complete Care" },
      { name: "description", content: "Physiotherapy for multiple sclerosis in Ahmedabad — fatigue management, balance, gait, spasticity control and energy conservation strategies." },
      { property: "og:title", content: "Multiple Sclerosis Treatment Doctor in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Physiotherapy for multiple sclerosis in Ahmedabad — fatigue management, balance, gait, spasticity control and energy conservation strategies." },
    ],
  }),
  component: () => <ContentTemplate data={page("multiple-sclerosis-treatment-doctor-in-ahmedabad")} content={content} />,
});
