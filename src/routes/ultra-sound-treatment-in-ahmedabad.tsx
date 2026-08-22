import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/ultra-sound-treatment-in-ahmedabad";

export const Route = createFileRoute("/ultra-sound-treatment-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Ultrasound Treatment in Ahmedabad | Complete Care Physiotherapy" },
      { name: "description", content: "Therapeutic ultrasound in Ahmedabad for soft tissue healing, scar tissue and localised inflammation." },
      { property: "og:title", content: "Ultrasound Treatment in Ahmedabad | Complete Care Physiotherapy" },
      { property: "og:description", content: "Therapeutic ultrasound in Ahmedabad for soft tissue healing, scar tissue and localised inflammation." },
    ],
  }),
  component: () => <ContentTemplate data={page("ultra-sound-treatment-in-ahmedabad")} content={content} />,
});
