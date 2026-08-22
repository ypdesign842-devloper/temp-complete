import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/from-pain-to-relief-physiotherapy-solutions-for-neck-pain";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "from-pain-to-relief-physiotherapy-solutions-for-neck-pain")!;

export const Route = createFileRoute("/from-pain-to-relief-physiotherapy-solutions-for-neck-pain")({
  head: () => ({
    meta: [
      { title: "From Pain to Relief Physiotherapy Solutions for Neck Pain | Complete Care" },
      { name: "description", content: "From Pain to Relief Physiotherapy Solutions for Neck Pain — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "From Pain to Relief Physiotherapy Solutions for Neck Pain | Complete Care" },
      { property: "og:description", content: "From Pain to Relief Physiotherapy Solutions for Neck Pain — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/From-Pain-to-Relief-Physiotherapy-Solutions-for-Neck-Pain.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/From-Pain-to-Relief-Physiotherapy-Solutions-for-Neck-Pain.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
