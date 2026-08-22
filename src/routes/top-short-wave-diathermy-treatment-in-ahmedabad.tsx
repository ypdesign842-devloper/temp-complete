import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/top-short-wave-diathermy-treatment-in-ahmedabad";

export const Route = createFileRoute("/top-short-wave-diathermy-treatment-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Top Short Wave Diathermy Treatment in Ahmedabad | Complete Care" },
      { name: "description", content: "Short wave diathermy in Ahmedabad for deep heating of joints and muscles before manual therapy and mobilisation." },
      { property: "og:title", content: "Top Short Wave Diathermy Treatment in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Short wave diathermy in Ahmedabad for deep heating of joints and muscles before manual therapy and mobilisation." },
    ],
  }),
  component: () => <ContentTemplate data={page("top-short-wave-diathermy-treatment-in-ahmedabad")} content={content} />,
});
