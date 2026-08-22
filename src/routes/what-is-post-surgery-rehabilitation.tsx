import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/what-is-post-surgery-rehabilitation";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "what-is-post-surgery-rehabilitation")!;

export const Route = createFileRoute("/what-is-post-surgery-rehabilitation")({
  head: () => ({
    meta: [
      { title: "What is Post Surgery Rehabilitation | Complete Care" },
      { name: "description", content: "What is Post Surgery Rehabilitation — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "What is Post Surgery Rehabilitation | Complete Care" },
      { property: "og:description", content: "What is Post Surgery Rehabilitation — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Learn-about-Post-Surgery-Rehabilitation-Banner.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Learn-about-Post-Surgery-Rehabilitation-Banner.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
