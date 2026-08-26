import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/post-surgical-rehabilitation-in-ahmedabad";

export const Route = createFileRoute("/post-surgical-rehabilitation-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Post Surgical Rehabilitation in Ahmedabad | Complete Care" },
      {
        name: "description",
        content:
          "Recover safely, rebuild strength, and return to everyday movement with structured post surgical physiotherapy at Complete Care. Guidance from experienced physiotherapists.",
      },
      { property: "og:title", content: "Post Surgical Rehabilitation in Ahmedabad | Complete Care" },
      {
        property: "og:description",
        content:
          "Recover safely, rebuild strength, and return to everyday movement with structured post surgical physiotherapy at Complete Care. Guidance from experienced physiotherapists.",
      },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Knee-Surgery.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Knee-Surgery.png" },
    ],
  }),
  component: () => (
    <ContentTemplate
      data={page("post-surgical-rehabilitation-in-ahmedabad")}
      content={content}
    />
  ),
});
