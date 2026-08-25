import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/knee-pain-treatment-in-ahmedabad";

export const Route = createFileRoute("/knee-pain-treatment-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Knee Pain Treatment in Ahmedabad | Complete Care Physiotherapy" },
      { name: "description", content: "Physiotherapy for knee osteoarthritis, ligament injury and post surgical  knee recovery in Ahmedabad using PEMF therapy, laser and progressive strengthening." },
      { property: "og:title", content: "Knee Pain Treatment in Ahmedabad | Complete Care Physiotherapy" },
      { property: "og:description", content: "Physiotherapy for knee osteoarthritis, ligament injury and post surgical  knee recovery in Ahmedabad using PEMF therapy, laser and progressive strengthening." },
    ],
  }),
  component: () => <ContentTemplate data={page("knee-pain-treatment-in-ahmedabad")} content={content} />,
});
