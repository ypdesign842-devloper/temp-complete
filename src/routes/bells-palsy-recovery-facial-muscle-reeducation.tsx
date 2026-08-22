import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/bells-palsy-recovery-facial-muscle-reeducation";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "bells-palsy-recovery-facial-muscle-reeducation")!;

export const Route = createFileRoute("/bells-palsy-recovery-facial-muscle-reeducation")({
  head: () => ({
    meta: [
      { title: "Bell’s Palsy Recovery Facial Muscle Reeducation | Complete Care" },
      { name: "description", content: "Bell’s Palsy Recovery Facial Muscle Reeducation — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Bell’s Palsy Recovery Facial Muscle Reeducation | Complete Care" },
      { property: "og:description", content: "Bell’s Palsy Recovery Facial Muscle Reeducation — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Bells-Palsy.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Bells-Palsy.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
