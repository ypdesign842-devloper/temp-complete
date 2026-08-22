import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/how-early-physiotherapy-can-prevent-knee-surgery";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "how-early-physiotherapy-can-prevent-knee-surgery")!;

export const Route = createFileRoute("/how-early-physiotherapy-can-prevent-knee-surgery")({
  head: () => ({
    meta: [
      { title: "How Early Physiotherapy can Prevent Knee Surgery | Complete Care" },
      { name: "description", content: "How Early Physiotherapy can Prevent Knee Surgery — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "How Early Physiotherapy can Prevent Knee Surgery | Complete Care" },
      { property: "og:description", content: "How Early Physiotherapy can Prevent Knee Surgery — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Physiotherapy-Can-Prevent-Knee-Surgery.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Physiotherapy-Can-Prevent-Knee-Surgery.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
