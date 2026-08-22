import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/why-office-workers-in-ahmedabad-often-face-shoulder-pain";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "why-office-workers-in-ahmedabad-often-face-shoulder-pain")!;

export const Route = createFileRoute("/why-office-workers-in-ahmedabad-often-face-shoulder-pain")({
  head: () => ({
    meta: [
      { title: "Why Office Workers in Ahmedabad Often Face Shoulder Pain | Complete Care" },
      { name: "description", content: "Why Office Workers in Ahmedabad Often Face Shoulder Pain — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Why Office Workers in Ahmedabad Often Face Shoulder Pain | Complete Care" },
      { property: "og:description", content: "Why Office Workers in Ahmedabad Often Face Shoulder Pain — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Shoulder-Pain.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Shoulder-Pain.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
