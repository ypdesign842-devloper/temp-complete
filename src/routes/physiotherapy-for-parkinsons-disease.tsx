import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/physiotherapy-for-parkinsons-disease";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "physiotherapy-for-parkinsons-disease")!;

export const Route = createFileRoute("/physiotherapy-for-parkinsons-disease")({
  head: () => ({
    meta: [
      { title: "Physiotherapy for Parkinsons Disease | Complete Care" },
      { name: "description", content: "Physiotherapy for Parkinsons Disease — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Physiotherapy for Parkinsons Disease | Complete Care" },
      { property: "og:description", content: "Physiotherapy for Parkinsons Disease — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/How-Physiotherapy-Helps-Improve-Movement-in-Parkinsons-Disease.jpeg" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/How-Physiotherapy-Helps-Improve-Movement-in-Parkinsons-Disease.jpeg" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
