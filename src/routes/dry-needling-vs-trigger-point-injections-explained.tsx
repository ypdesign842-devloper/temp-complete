import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/dry-needling-vs-trigger-point-injections-explained";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "dry-needling-vs-trigger-point-injections-explained")!;

export const Route = createFileRoute("/dry-needling-vs-trigger-point-injections-explained")({
  head: () => ({
    meta: [
      { title: "Dry Needling vs Trigger Point Injections Explained | Complete Care" },
      { name: "description", content: "Dry Needling vs Trigger Point Injections Explained — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Dry Needling vs Trigger Point Injections Explained | Complete Care" },
      { property: "og:description", content: "Dry Needling vs Trigger Point Injections Explained — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Dry-Needling-vs-Trigger-Point-Injections.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Dry-Needling-vs-Trigger-Point-Injections.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
