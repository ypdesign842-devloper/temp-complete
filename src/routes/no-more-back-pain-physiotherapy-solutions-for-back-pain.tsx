import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/no-more-back-pain-physiotherapy-solutions-for-back-pain";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "no-more-back-pain-physiotherapy-solutions-for-back-pain")!;

export const Route = createFileRoute("/no-more-back-pain-physiotherapy-solutions-for-back-pain")({
  head: () => ({
    meta: [
      { title: "No more Back Pain Physiotherapy Solutions for Back Pain | Complete Care" },
      { name: "description", content: "No more Back Pain Physiotherapy Solutions for Back Pain — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "No more Back Pain Physiotherapy Solutions for Back Pain | Complete Care" },
      { property: "og:description", content: "No more Back Pain Physiotherapy Solutions for Back Pain — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/No-More-Back-Pain-Physiotherapy-Solutions-for-Back-Pain.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/No-More-Back-Pain-Physiotherapy-Solutions-for-Back-Pain.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
