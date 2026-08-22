import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/cerebral-palsy-physiotherapy-walking";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "cerebral-palsy-physiotherapy-walking")!;

export const Route = createFileRoute("/cerebral-palsy-physiotherapy-walking")({
  head: () => ({
    meta: [
      { title: "Cerebral Palsy Physiotherapy Walking | Complete Care" },
      { name: "description", content: "Cerebral Palsy Physiotherapy Walking — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Cerebral Palsy Physiotherapy Walking | Complete Care" },
      { property: "og:description", content: "Cerebral Palsy Physiotherapy Walking — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/How-Physiotherapy-Helps-Improve-Walking-and-Mobility-in-Children-with-Cerebral-Palsy.jpeg" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/How-Physiotherapy-Helps-Improve-Walking-and-Mobility-in-Children-with-Cerebral-Palsy.jpeg" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
