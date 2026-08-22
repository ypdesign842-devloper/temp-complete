import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/how-physiotherapy-helps-you-overcome-sciatica-naturally";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "how-physiotherapy-helps-you-overcome-sciatica-naturally")!;

export const Route = createFileRoute("/how-physiotherapy-helps-you-overcome-sciatica-naturally")({
  head: () => ({
    meta: [
      { title: "How Physiotherapy Helps you Overcome SCIatica Naturally | Complete Care" },
      { name: "description", content: "How Physiotherapy Helps you Overcome SCIatica Naturally — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "How Physiotherapy Helps you Overcome SCIatica Naturally | Complete Care" },
      { property: "og:description", content: "How Physiotherapy Helps you Overcome SCIatica Naturally — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Sciatica-Naturally.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Sciatica-Naturally.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
