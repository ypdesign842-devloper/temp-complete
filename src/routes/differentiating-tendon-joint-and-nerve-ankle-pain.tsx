import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/differentiating-tendon-joint-and-nerve-ankle-pain";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "differentiating-tendon-joint-and-nerve-ankle-pain")!;

export const Route = createFileRoute("/differentiating-tendon-joint-and-nerve-ankle-pain")({
  head: () => ({
    meta: [
      { title: "Differentiating Tendon Joint and Nerve Ankle Pain | Complete Care" },
      { name: "description", content: "Differentiating Tendon Joint and Nerve Ankle Pain — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Differentiating Tendon Joint and Nerve Ankle Pain | Complete Care" },
      { property: "og:description", content: "Differentiating Tendon Joint and Nerve Ankle Pain — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Tendon-Joint-and-Nerve-Ankle-Pain.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Tendon-Joint-and-Nerve-Ankle-Pain.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
