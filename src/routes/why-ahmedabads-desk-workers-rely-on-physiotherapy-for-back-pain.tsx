import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/why-ahmedabads-desk-workers-rely-on-physiotherapy-for-back-pain";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "why-ahmedabads-desk-workers-rely-on-physiotherapy-for-back-pain")!;

export const Route = createFileRoute("/why-ahmedabads-desk-workers-rely-on-physiotherapy-for-back-pain")({
  head: () => ({
    meta: [
      { title: "Why Ahmedabads Desk Workers Rely on Physiotherapy for Back Pain | Complete Care" },
      { name: "description", content: "Why Ahmedabads Desk Workers Rely on Physiotherapy for Back Pain — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Why Ahmedabads Desk Workers Rely on Physiotherapy for Back Pain | Complete Care" },
      { property: "og:description", content: "Why Ahmedabads Desk Workers Rely on Physiotherapy for Back Pain — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Why-Ahmedabads-Desk-Workers-Rely-on-Physiotherapy-for-Back-Pain-Banner.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Why-Ahmedabads-Desk-Workers-Rely-on-Physiotherapy-for-Back-Pain-Banner.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
