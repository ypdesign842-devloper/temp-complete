import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/how-stress-screens-worsen-vertigo-ahmedabad-physio-guide";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "how-stress-screens-worsen-vertigo-ahmedabad-physio-guide")!;

export const Route = createFileRoute("/how-stress-screens-worsen-vertigo-ahmedabad-physio-guide")({
  head: () => ({
    meta: [
      { title: "How Stress Screens Worsen Vertigo Ahmedabad Physio Guide | Complete Care" },
      { name: "description", content: "How Stress Screens Worsen Vertigo Ahmedabad Physio Guide — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "How Stress Screens Worsen Vertigo Ahmedabad Physio Guide | Complete Care" },
      { property: "og:description", content: "How Stress Screens Worsen Vertigo Ahmedabad Physio Guide — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/stress-screens-vertigo-banner.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/stress-screens-vertigo-banner.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
