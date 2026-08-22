import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/stretching-physiotherapy-treatment-in-ahmedabad";

export const Route = createFileRoute("/stretching-physiotherapy-treatment-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Stretching Physiotherapy Treatment in Ahmedabad | Complete Care" },
      { name: "description", content: "Therapeutic stretching programmes in Ahmedabad for muscle tightness, joint stiffness and posture correction." },
      { property: "og:title", content: "Stretching Physiotherapy Treatment in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Therapeutic stretching programmes in Ahmedabad for muscle tightness, joint stiffness and posture correction." },
    ],
  }),
  component: () => <ContentTemplate data={page("stretching-physiotherapy-treatment-in-ahmedabad")} content={content} />,
});
