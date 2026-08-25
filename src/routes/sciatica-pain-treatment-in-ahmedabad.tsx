import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/sciatica-pain-treatment-in-ahmedabad";

export const Route = createFileRoute("/sciatica-pain-treatment-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Sciatica Pain Treatment in Ahmedabad | Complete Care Physiotherapy" },
      { name: "description", content: "non surgical  sciatica treatment in Ahmedabad using computerised spine decompression, nerve mobilisation and core rehabilitation." },
      { property: "og:title", content: "Sciatica Pain Treatment in Ahmedabad | Complete Care Physiotherapy" },
      { property: "og:description", content: "non surgical  sciatica treatment in Ahmedabad using computerised spine decompression, nerve mobilisation and core rehabilitation." },
    ],
  }),
  component: () => <ContentTemplate data={page("sciatica-pain-treatment-in-ahmedabad")} content={content} />,
});
