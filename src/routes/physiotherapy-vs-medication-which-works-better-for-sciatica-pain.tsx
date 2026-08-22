import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/physiotherapy-vs-medication-which-works-better-for-sciatica-pain";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "physiotherapy-vs-medication-which-works-better-for-sciatica-pain")!;

export const Route = createFileRoute("/physiotherapy-vs-medication-which-works-better-for-sciatica-pain")({
  head: () => ({
    meta: [
      { title: "Physiotherapy vs Medication Which Works Better for SCIatica Pain | Complete Care" },
      { name: "description", content: "Physiotherapy vs Medication Which Works Better for SCIatica Pain — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Physiotherapy vs Medication Which Works Better for SCIatica Pain | Complete Care" },
      { property: "og:description", content: "Physiotherapy vs Medication Which Works Better for SCIatica Pain — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Physiotherapy-vs.-Medication-Which-Works-Better-for-Sciatica-Pain-Banner.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Physiotherapy-vs.-Medication-Which-Works-Better-for-Sciatica-Pain-Banner.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
