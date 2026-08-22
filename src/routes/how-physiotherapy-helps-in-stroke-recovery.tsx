import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/how-physiotherapy-helps-in-stroke-recovery";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "how-physiotherapy-helps-in-stroke-recovery")!;

export const Route = createFileRoute("/how-physiotherapy-helps-in-stroke-recovery")({
  head: () => ({
    meta: [
      { title: "How Physiotherapy Helps in Stroke Recovery | Complete Care" },
      { name: "description", content: "How Physiotherapy Helps in Stroke Recovery — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "How Physiotherapy Helps in Stroke Recovery | Complete Care" },
      { property: "og:description", content: "How Physiotherapy Helps in Stroke Recovery — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/How-Physiotherapy-Helps-in-Stroke-Recovery.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/How-Physiotherapy-Helps-in-Stroke-Recovery.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
