import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/say-goodbye-to-back-pain-with-physiotherapy-treatment";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "say-goodbye-to-back-pain-with-physiotherapy-treatment")!;

export const Route = createFileRoute("/say-goodbye-to-back-pain-with-physiotherapy-treatment")({
  head: () => ({
    meta: [
      { title: "Say Goodbye to Back Pain with Physiotherapy Treatment | Complete Care" },
      { name: "description", content: "Say Goodbye to Back Pain with Physiotherapy Treatment — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Say Goodbye to Back Pain with Physiotherapy Treatment | Complete Care" },
      { property: "og:description", content: "Say Goodbye to Back Pain with Physiotherapy Treatment — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Physiotherapy-Treatment.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Physiotherapy-Treatment.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
