import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/science-behind-knee-pain-physiotherapy-assessment";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "science-behind-knee-pain-physiotherapy-assessment")!;

export const Route = createFileRoute("/science-behind-knee-pain-physiotherapy-assessment")({
  head: () => ({
    meta: [
      { title: "SCIence Behind Knee Pain Physiotherapy Assessment | Complete Care" },
      { name: "description", content: "SCIence Behind Knee Pain Physiotherapy Assessment — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "SCIence Behind Knee Pain Physiotherapy Assessment | Complete Care" },
      { property: "og:description", content: "SCIence Behind Knee Pain Physiotherapy Assessment — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Knee-Pain.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Knee-Pain.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
