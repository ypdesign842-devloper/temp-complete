import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/diabetic-neuropathy-early-signs-you-might-miss";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "diabetic-neuropathy-early-signs-you-might-miss")!;

export const Route = createFileRoute("/diabetic-neuropathy-early-signs-you-might-miss")({
  head: () => ({
    meta: [
      { title: "Diabetic Neuropathy Early Signs you might miss | Complete Care" },
      { name: "description", content: "Diabetic Neuropathy Early Signs you might miss — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Diabetic Neuropathy Early Signs you might miss | Complete Care" },
      { property: "og:description", content: "Diabetic Neuropathy Early Signs you might miss — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Diabetic-Neuropathy.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Diabetic-Neuropathy.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
