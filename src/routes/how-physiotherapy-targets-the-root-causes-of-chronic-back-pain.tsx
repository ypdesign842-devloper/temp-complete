import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/how-physiotherapy-targets-the-root-causes-of-chronic-back-pain";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "how-physiotherapy-targets-the-root-causes-of-chronic-back-pain")!;

export const Route = createFileRoute("/how-physiotherapy-targets-the-root-causes-of-chronic-back-pain")({
  head: () => ({
    meta: [
      { title: "How Physiotherapy Targets the Root Causes of Chronic Back Pain | Complete Care" },
      { name: "description", content: "How Physiotherapy Targets the Root Causes of Chronic Back Pain — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "How Physiotherapy Targets the Root Causes of Chronic Back Pain | Complete Care" },
      { property: "og:description", content: "How Physiotherapy Targets the Root Causes of Chronic Back Pain — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Chronic-Back-Pain.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Chronic-Back-Pain.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
