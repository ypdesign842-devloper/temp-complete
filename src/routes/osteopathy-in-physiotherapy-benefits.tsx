import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/osteopathy-in-physiotherapy-benefits";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "osteopathy-in-physiotherapy-benefits")!;

export const Route = createFileRoute("/osteopathy-in-physiotherapy-benefits")({
  head: () => ({
    meta: [
      { title: "Osteopathy in Physiotherapy Benefits | Complete Care" },
      { name: "description", content: "Osteopathy in Physiotherapy Benefits — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Osteopathy in Physiotherapy Benefits | Complete Care" },
      { property: "og:description", content: "Osteopathy in Physiotherapy Benefits — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Complete-Care-Blog-poster.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Complete-Care-Blog-poster.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
