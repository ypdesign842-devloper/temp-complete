import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/bone-strength-physiotherapy-for-osteoporosis";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "bone-strength-physiotherapy-for-osteoporosis")!;

export const Route = createFileRoute("/bone-strength-physiotherapy-for-osteoporosis")({
  head: () => ({
    meta: [
      { title: "Bone Strength Physiotherapy for Osteoporosis | Complete Care" },
      { name: "description", content: "Bone Strength Physiotherapy for Osteoporosis — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Bone Strength Physiotherapy for Osteoporosis | Complete Care" },
      { property: "og:description", content: "Bone Strength Physiotherapy for Osteoporosis — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/WhatsApp-Image-2026-07-01-at-14.09.47.jpeg" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/WhatsApp-Image-2026-07-01-at-14.09.47.jpeg" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
