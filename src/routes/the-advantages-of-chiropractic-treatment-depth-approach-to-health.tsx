import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/the-advantages-of-chiropractic-treatment-depth-approach-to-health";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "the-advantages-of-chiropractic-treatment-depth-approach-to-health")!;

export const Route = createFileRoute("/the-advantages-of-chiropractic-treatment-depth-approach-to-health")({
  head: () => ({
    meta: [
      { title: "The Advantages of Chiropractic Treatment Depth Approach to Health | Complete Care" },
      { name: "description", content: "The Advantages of Chiropractic Treatment Depth Approach to Health — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "The Advantages of Chiropractic Treatment Depth Approach to Health | Complete Care" },
      { property: "og:description", content: "The Advantages of Chiropractic Treatment Depth Approach to Health — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/The-Advantages-of-Chiropractic-Treatment-Depth-Approach-to-Health.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/The-Advantages-of-Chiropractic-Treatment-Depth-Approach-to-Health.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
