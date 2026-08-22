import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/therapeutic-stretching-vs-general-flexibility-in-physiotherapy";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "therapeutic-stretching-vs-general-flexibility-in-physiotherapy")!;

export const Route = createFileRoute("/therapeutic-stretching-vs-general-flexibility-in-physiotherapy")({
  head: () => ({
    meta: [
      { title: "Therapeutic Stretching vs General Flexibility in Physiotherapy | Complete Care" },
      { name: "description", content: "Therapeutic Stretching vs General Flexibility in Physiotherapy — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Therapeutic Stretching vs General Flexibility in Physiotherapy | Complete Care" },
      { property: "og:description", content: "Therapeutic Stretching vs General Flexibility in Physiotherapy — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Stretching-vs-General-Flexibility.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Stretching-vs-General-Flexibility.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
