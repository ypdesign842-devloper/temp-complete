import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/decompression-core-stability-rehab";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "decompression-core-stability-rehab")!;

export const Route = createFileRoute("/decompression-core-stability-rehab")({
  head: () => ({
    meta: [
      { title: "Decompression Core Stability Rehab | Complete Care" },
      { name: "description", content: "Decompression Core Stability Rehab — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Decompression Core Stability Rehab | Complete Care" },
      { property: "og:description", content: "Decompression Core Stability Rehab — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Combining-Decompression-and-Core-Stability-for-Rehab.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Combining-Decompression-and-Core-Stability-for-Rehab.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
