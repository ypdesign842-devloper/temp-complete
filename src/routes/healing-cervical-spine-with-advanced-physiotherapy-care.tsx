import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/healing-cervical-spine-with-advanced-physiotherapy-care";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "healing-cervical-spine-with-advanced-physiotherapy-care")!;

export const Route = createFileRoute("/healing-cervical-spine-with-advanced-physiotherapy-care")({
  head: () => ({
    meta: [
      { title: "Healing Cervical Spine with Advanced Physiotherapy Care | Complete Care" },
      { name: "description", content: "Healing Cervical Spine with Advanced Physiotherapy Care — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Healing Cervical Spine with Advanced Physiotherapy Care | Complete Care" },
      { property: "og:description", content: "Healing Cervical Spine with Advanced Physiotherapy Care — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Cervical-Spine.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Cervical-Spine.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
