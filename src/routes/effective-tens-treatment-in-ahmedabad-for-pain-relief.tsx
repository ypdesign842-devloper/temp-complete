import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/effective-tens-treatment-in-ahmedabad-for-pain-relief";

export const Route = createFileRoute("/effective-tens-treatment-in-ahmedabad-for-pain-relief")({
  head: () => ({
    meta: [
      { title: "Effective TENS Treatment in Ahmedabad for Pain Relief | Complete Care" },
      { name: "description", content: "TENS therapy in Ahmedabad for acute and chronic pain relief, delivered in clinic or during home physiotherapy visits." },
      { property: "og:title", content: "Effective TENS Treatment in Ahmedabad for Pain Relief | Complete Care" },
      { property: "og:description", content: "TENS therapy in Ahmedabad for acute and chronic pain relief, delivered in clinic or during home physiotherapy visits." },
    ],
  }),
  component: () => <ContentTemplate data={page("effective-tens-treatment-in-ahmedabad-for-pain-relief")} content={content} />,
});
