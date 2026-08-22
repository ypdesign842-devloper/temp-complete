import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/sciatica-causes-physiotherapy-treatment";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "sciatica-causes-physiotherapy-treatment")!;

export const Route = createFileRoute("/sciatica-causes-physiotherapy-treatment")({
  head: () => ({
    meta: [
      { title: "SCIatica Causes Physiotherapy Treatment | Complete Care" },
      { name: "description", content: "SCIatica Causes Physiotherapy Treatment — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "SCIatica Causes Physiotherapy Treatment | Complete Care" },
      { property: "og:description", content: "SCIatica Causes Physiotherapy Treatment — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Sciatica-Causes-Explained.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Sciatica-Causes-Explained.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
