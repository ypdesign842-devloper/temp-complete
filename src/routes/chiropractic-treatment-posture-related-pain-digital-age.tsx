import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/chiropractic-treatment-posture-related-pain-digital-age";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "chiropractic-treatment-posture-related-pain-digital-age")!;

export const Route = createFileRoute("/chiropractic-treatment-posture-related-pain-digital-age")({
  head: () => ({
    meta: [
      { title: "Chiropractic Treatment Posture Related Pain Digital Age | Complete Care" },
      { name: "description", content: "Chiropractic Treatment Posture Related Pain Digital Age — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Chiropractic Treatment Posture Related Pain Digital Age | Complete Care" },
      { property: "og:description", content: "Chiropractic Treatment Posture Related Pain Digital Age — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Chiropractic-Treatment.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Chiropractic-Treatment.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
