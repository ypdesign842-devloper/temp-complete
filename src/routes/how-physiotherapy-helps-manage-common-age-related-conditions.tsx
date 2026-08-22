import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/how-physiotherapy-helps-manage-common-age-related-conditions";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "how-physiotherapy-helps-manage-common-age-related-conditions")!;

export const Route = createFileRoute("/how-physiotherapy-helps-manage-common-age-related-conditions")({
  head: () => ({
    meta: [
      { title: "How Physiotherapy Helps Manage Common Age Related Conditions | Complete Care" },
      { name: "description", content: "How Physiotherapy Helps Manage Common Age Related Conditions — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "How Physiotherapy Helps Manage Common Age Related Conditions | Complete Care" },
      { property: "og:description", content: "How Physiotherapy Helps Manage Common Age Related Conditions — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/How-Physiotherapy-Helps-Manage-Common-Age-Related-Conditions-Like-Arthritis-and-Osteoporosis-Banner.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/How-Physiotherapy-Helps-Manage-Common-Age-Related-Conditions-Like-Arthritis-and-Osteoporosis-Banner.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
