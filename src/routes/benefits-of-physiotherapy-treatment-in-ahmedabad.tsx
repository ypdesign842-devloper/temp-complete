import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/benefits-of-physiotherapy-treatment-in-ahmedabad";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "benefits-of-physiotherapy-treatment-in-ahmedabad")!;

export const Route = createFileRoute("/benefits-of-physiotherapy-treatment-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Benefits of Physiotherapy Treatment in Ahmedabad | Complete Care" },
      { name: "description", content: "Benefits of Physiotherapy Treatment in Ahmedabad — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Benefits of Physiotherapy Treatment in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Benefits of Physiotherapy Treatment in Ahmedabad — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Benefits-of-Physiotherapy-Treatment-in-Ahmedabad-for-Pain-Relief-and-Recovery-Banner.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Benefits-of-Physiotherapy-Treatment-in-Ahmedabad-for-Pain-Relief-and-Recovery-Banner.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
