import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/tecar-physiotherapy-treatment-in-ahmedabad";

export const Route = createFileRoute("/tecar-physiotherapy-treatment-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "TECAR Physiotherapy Treatment in Ahmedabad | Complete Care" },
      { name: "description", content: "TECAR diathermy therapy in Ahmedabad for muscle, ligament and joint recovery through deep endogenous heat." },
      { property: "og:title", content: "TECAR Physiotherapy Treatment in Ahmedabad | Complete Care" },
      { property: "og:description", content: "TECAR diathermy therapy in Ahmedabad for muscle, ligament and joint recovery through deep endogenous heat." },
    ],
  }),
  component: () => <ContentTemplate data={page("tecar-physiotherapy-treatment-in-ahmedabad")} content={content} />,
});
