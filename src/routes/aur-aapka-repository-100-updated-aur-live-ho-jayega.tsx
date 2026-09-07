import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/aur-aapka-repository-100-updated-aur-live-ho-jayega";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "aur-aapka-repository-100-updated-aur-live-ho-jayega")!;

export const Route = createFileRoute("/aur-aapka-repository-100-updated-aur-live-ho-jayega")({
  head: () => ({
    meta: [
      { title: "Aur aapka repository 100% updated aur live ho jayega! | Complete Care" },
      { name: "description", content: "Aur aapka repository 100% updated aur live ho jayega! 🎯

Aur aapka repository 100% updated aur live ho jayega! 🎯" },
      { property: "og:title", content: "Aur aapka repository 100% updated aur live ho jayega! | Complete Care" },
      { property: "og:description", content: "Aur aapka repository 100% updated aur live ho jayega! 🎯

Aur aapka repository 100% updated aur live ho jayega! 🎯" },
      { property: "og:image", content: "https://completecare.in/assets/blogs/a92ab07bfc5578cf39e48d08f835a618.jpg" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/a92ab07bfc5578cf39e48d08f835a618.jpg" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
