import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/physiotherapy-for-muscular-dystrophy";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "physiotherapy-for-muscular-dystrophy")!;

export const Route = createFileRoute("/physiotherapy-for-muscular-dystrophy")({
  head: () => ({
    meta: [
      { title: "Physiotherapy for Muscular Dystrophy | Complete Care" },
      { name: "description", content: "Physiotherapy for Muscular Dystrophy — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Physiotherapy for Muscular Dystrophy | Complete Care" },
      { property: "og:description", content: "Physiotherapy for Muscular Dystrophy — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/How-Physiotherapy-Helps-Slow-Functional-Decline-in-Muscular-Dystrophy.jpeg" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/How-Physiotherapy-Helps-Slow-Functional-Decline-in-Muscular-Dystrophy.jpeg" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
