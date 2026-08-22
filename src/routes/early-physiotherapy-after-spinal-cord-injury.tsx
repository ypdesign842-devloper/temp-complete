import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/early-physiotherapy-after-spinal-cord-injury";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "early-physiotherapy-after-spinal-cord-injury")!;

export const Route = createFileRoute("/early-physiotherapy-after-spinal-cord-injury")({
  head: () => ({
    meta: [
      { title: "Early Physiotherapy after Spinal Cord Injury | Complete Care" },
      { name: "description", content: "Early Physiotherapy after Spinal Cord Injury — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Early Physiotherapy after Spinal Cord Injury | Complete Care" },
      { property: "og:description", content: "Early Physiotherapy after Spinal Cord Injury — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/How-Early-Physiotherapy-Improves-Recovery-After-a-Spinal-Cord-Injury.jpeg" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/How-Early-Physiotherapy-Improves-Recovery-After-a-Spinal-Cord-Injury.jpeg" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
