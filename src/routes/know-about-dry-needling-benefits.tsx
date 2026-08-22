import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/know-about-dry-needling-benefits";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "know-about-dry-needling-benefits")!;

export const Route = createFileRoute("/know-about-dry-needling-benefits")({
  head: () => ({
    meta: [
      { title: "Know About Dry Needling Benefits | Complete Care" },
      { name: "description", content: "Know About Dry Needling Benefits — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Know About Dry Needling Benefits | Complete Care" },
      { property: "og:description", content: "Know About Dry Needling Benefits — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Dry-Needling-Benefits.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Dry-Needling-Benefits.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
