import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/prevent-recurring-vertigo-with-physiotherapy";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "prevent-recurring-vertigo-with-physiotherapy")!;

export const Route = createFileRoute("/prevent-recurring-vertigo-with-physiotherapy")({
  head: () => ({
    meta: [
      { title: "Prevent Recurring Vertigo with Physiotherapy | Complete Care" },
      { name: "description", content: "Prevent Recurring Vertigo with Physiotherapy — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Prevent Recurring Vertigo with Physiotherapy | Complete Care" },
      { property: "og:description", content: "Prevent Recurring Vertigo with Physiotherapy — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Reduce-Recurring-Vertigo-Attacks.jpg" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Reduce-Recurring-Vertigo-Attacks.jpg" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
