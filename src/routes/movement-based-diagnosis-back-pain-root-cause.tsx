import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/movement-based-diagnosis-back-pain-root-cause";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "movement-based-diagnosis-back-pain-root-cause")!;

export const Route = createFileRoute("/movement-based-diagnosis-back-pain-root-cause")({
  head: () => ({
    meta: [
      { title: "Movement Based Diagnosis Back Pain Root Cause | Complete Care" },
      { name: "description", content: "Movement Based Diagnosis Back Pain Root Cause — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Movement Based Diagnosis Back Pain Root Cause | Complete Care" },
      { property: "og:description", content: "Movement Based Diagnosis Back Pain Root Cause — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Movement-Based-Diagnosis-in-Back-Pain.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Movement-Based-Diagnosis-in-Back-Pain.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
