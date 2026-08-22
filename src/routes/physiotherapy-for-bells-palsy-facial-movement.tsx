import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/physiotherapy-for-bells-palsy-facial-movement";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "physiotherapy-for-bells-palsy-facial-movement")!;

export const Route = createFileRoute("/physiotherapy-for-bells-palsy-facial-movement")({
  head: () => ({
    meta: [
      { title: "Physiotherapy for Bell’s Palsy Facial Movement | Complete Care" },
      { name: "description", content: "Physiotherapy for Bell’s Palsy Facial Movement — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Physiotherapy for Bell’s Palsy Facial Movement | Complete Care" },
      { property: "og:description", content: "Physiotherapy for Bell’s Palsy Facial Movement — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Physiotherapy-for-Better-Facial-Movement-After-Bells-Palsy.jpeg" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Physiotherapy-for-Better-Facial-Movement-After-Bells-Palsy.jpeg" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
