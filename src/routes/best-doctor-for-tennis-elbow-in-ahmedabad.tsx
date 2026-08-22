import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/best-doctor-for-tennis-elbow-in-ahmedabad";

export const Route = createFileRoute("/best-doctor-for-tennis-elbow-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Best Doctor for Tennis Elbow in Ahmedabad | Complete Care" },
      { name: "description", content: "Physiotherapy for tennis elbow and golfer's elbow in Ahmedabad using eccentric loading, dry needling, shockwave-style soft tissue work and laser therapy." },
      { property: "og:title", content: "Best Doctor for Tennis Elbow in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Physiotherapy for tennis elbow and golfer's elbow in Ahmedabad using eccentric loading, dry needling, shockwave-style soft tissue work and laser therapy." },
    ],
  }),
  component: () => <ContentTemplate data={page("best-doctor-for-tennis-elbow-in-ahmedabad")} content={content} />,
});
