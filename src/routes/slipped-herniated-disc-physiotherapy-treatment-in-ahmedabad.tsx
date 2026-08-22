import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/slipped-herniated-disc-physiotherapy-treatment-in-ahmedabad";

export const Route = createFileRoute("/slipped-herniated-disc-physiotherapy-treatment-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Slipped Disc Physiotherapy Treatment in Ahmedabad | Complete Care" },
      { name: "description", content: "Non-surgical treatment for slipped and herniated discs in Ahmedabad with US-FDA approved computerised spine decompression and graded core rehabilitation." },
      { property: "og:title", content: "Slipped Disc Physiotherapy Treatment in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Non-surgical treatment for slipped and herniated discs in Ahmedabad with US-FDA approved computerised spine decompression and graded core rehabilitation." },
    ],
  }),
  component: () => <ContentTemplate data={page("slipped-herniated-disc-physiotherapy-treatment-in-ahmedabad")} content={content} />,
});
