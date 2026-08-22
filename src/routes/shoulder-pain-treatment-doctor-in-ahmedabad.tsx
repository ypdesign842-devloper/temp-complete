import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/shoulder-pain-treatment-doctor-in-ahmedabad";

export const Route = createFileRoute("/shoulder-pain-treatment-doctor-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Shoulder Pain Treatment Doctor in Ahmedabad | Complete Care" },
      { name: "description", content: "Treatment for shoulder impingement, rotator cuff injury and overhead movement pain in Ahmedabad with manual therapy and scapular rehabilitation." },
      { property: "og:title", content: "Shoulder Pain Treatment Doctor in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Treatment for shoulder impingement, rotator cuff injury and overhead movement pain in Ahmedabad with manual therapy and scapular rehabilitation." },
    ],
  }),
  component: () => <ContentTemplate data={page("shoulder-pain-treatment-doctor-in-ahmedabad")} content={content} />,
});
