import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/how-a-physio-can-help-tennis-elbow";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "how-a-physio-can-help-tennis-elbow")!;

export const Route = createFileRoute("/how-a-physio-can-help-tennis-elbow")({
  head: () => ({
    meta: [
      { title: "How a Physio can Help Tennis Elbow | Complete Care" },
      { name: "description", content: "How a Physio can Help Tennis Elbow — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "How a Physio can Help Tennis Elbow | Complete Care" },
      { property: "og:description", content: "How a Physio can Help Tennis Elbow — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/How-a-Physio-Can-Help-Tennis-Elbow-Step-by-Step-Treatment-Guide-Banner.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/How-a-Physio-Can-Help-Tennis-Elbow-Step-by-Step-Treatment-Guide-Banner.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
