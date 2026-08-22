import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/physiotherapy-at-home-a-convenient-and-effective-option-for-your-health";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "physiotherapy-at-home-a-convenient-and-effective-option-for-your-health")!;

export const Route = createFileRoute("/physiotherapy-at-home-a-convenient-and-effective-option-for-your-health")({
  head: () => ({
    meta: [
      { title: "Physiotherapy at Home a Convenient and Effective Option for your Health | Complete Care" },
      { name: "description", content: "Physiotherapy at Home a Convenient and Effective Option for your Health — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Physiotherapy at Home a Convenient and Effective Option for your Health | Complete Care" },
      { property: "og:description", content: "Physiotherapy at Home a Convenient and Effective Option for your Health — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Physiotherapy-at-Home-A-Convenient-and-Effective-Option-for-Your-Health.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Physiotherapy-at-Home-A-Convenient-and-Effective-Option-for-Your-Health.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
