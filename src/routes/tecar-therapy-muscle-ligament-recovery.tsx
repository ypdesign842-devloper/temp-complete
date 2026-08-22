import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/tecar-therapy-muscle-ligament-recovery";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "tecar-therapy-muscle-ligament-recovery")!;

export const Route = createFileRoute("/tecar-therapy-muscle-ligament-recovery")({
  head: () => ({
    meta: [
      { title: "TECAR Therapy Muscle Ligament Recovery | Complete Care" },
      { name: "description", content: "TECAR Therapy Muscle Ligament Recovery — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "TECAR Therapy Muscle Ligament Recovery | Complete Care" },
      { property: "og:description", content: "TECAR Therapy Muscle Ligament Recovery — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/TECAR-Therapy-Speeds.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/TECAR-Therapy-Speeds.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
