import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/step-aerobics-physiotherapy-treatment-in-ahmedabad";

export const Route = createFileRoute("/step-aerobics-physiotherapy-treatment-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Step Aerobics Physiotherapy Treatment in Ahmedabad | Complete Care" },
      { name: "description", content: "Step aerobics sessions in Ahmedabad for lower body strength, coordination and cardiovascular conditioning." },
      { property: "og:title", content: "Step Aerobics Physiotherapy Treatment in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Step aerobics sessions in Ahmedabad for lower body strength, coordination and cardiovascular conditioning." },
    ],
  }),
  component: () => <ContentTemplate data={page("step-aerobics-physiotherapy-treatment-in-ahmedabad")} content={content} />,
});
