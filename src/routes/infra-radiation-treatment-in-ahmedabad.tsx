import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/infra-radiation-treatment-in-ahmedabad";

export const Route = createFileRoute("/infra-radiation-treatment-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Infra Radiation Treatment in Ahmedabad | Complete Care" },
      { name: "description", content: "Infrared therapy in Ahmedabad for muscle relaxation, circulation and pain relief before manual physiotherapy." },
      { property: "og:title", content: "Infra Radiation Treatment in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Infrared therapy in Ahmedabad for muscle relaxation, circulation and pain relief before manual physiotherapy." },
    ],
  }),
  component: () => <ContentTemplate data={page("infra-radiation-treatment-in-ahmedabad")} content={content} />,
});
