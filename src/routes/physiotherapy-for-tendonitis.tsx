import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/physiotherapy-for-tendonitis";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "physiotherapy-for-tendonitis")!;

export const Route = createFileRoute("/physiotherapy-for-tendonitis")({
  head: () => ({
    meta: [
      { title: "Physiotherapy for Tendonitis | Complete Care" },
      { name: "description", content: "Physiotherapy for Tendonitis — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Physiotherapy for Tendonitis | Complete Care" },
      { property: "og:description", content: "Physiotherapy for Tendonitis — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Physiotherapy-for-Tendonitis-A-Clinically-Proven-Path-to-Recovery-Banner.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Physiotherapy-for-Tendonitis-A-Clinically-Proven-Path-to-Recovery-Banner.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
