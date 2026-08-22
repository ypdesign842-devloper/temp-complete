import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/integrative-chiropractic-physiotherapy-ahmedabad";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "integrative-chiropractic-physiotherapy-ahmedabad")!;

export const Route = createFileRoute("/integrative-chiropractic-physiotherapy-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Integrative Chiropractic Physiotherapy Ahmedabad | Complete Care" },
      { name: "description", content: "Integrative Chiropractic Physiotherapy Ahmedabad — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Integrative Chiropractic Physiotherapy Ahmedabad | Complete Care" },
      { property: "og:description", content: "Integrative Chiropractic Physiotherapy Ahmedabad — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Integrative-Chiropractic-Care-with-Physiotherapy.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Integrative-Chiropractic-Care-with-Physiotherapy.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
