import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/congratulations-to-complete-care-and-team";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "congratulations-to-complete-care-and-team")!;

export const Route = createFileRoute("/congratulations-to-complete-care-and-team")({
  head: () => ({
    meta: [
      { title: "Congratulations to Complete Care and Team | Complete Care" },
      { name: "description", content: "Congratulations to Complete Care and Team — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Congratulations to Complete Care and Team | Complete Care" },
      { property: "og:description", content: "Congratulations to Complete Care and Team — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Award.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Award.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
