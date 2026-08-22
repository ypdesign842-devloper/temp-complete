import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/back-pain-doctor-in-ahmedabad";

export const Route = createFileRoute("/back-pain-doctor-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Back Pain Doctor in Ahmedabad | Complete Care Physiotherapy" },
      { name: "description", content: "Non-surgical treatment for lower back pain, lumbar stiffness and radiating leg pain in Ahmedabad with spine decompression, manual therapy and core rehabilitation." },
      { property: "og:title", content: "Back Pain Doctor in Ahmedabad | Complete Care Physiotherapy" },
      { property: "og:description", content: "Non-surgical treatment for lower back pain, lumbar stiffness and radiating leg pain in Ahmedabad with spine decompression, manual therapy and core rehabilitation." },
    ],
  }),
  component: () => <ContentTemplate data={page("back-pain-doctor-in-ahmedabad")} content={content} />,
});
