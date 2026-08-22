import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/infrared-therapy-vs-traditional-heat-therapy";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "infrared-therapy-vs-traditional-heat-therapy")!;

export const Route = createFileRoute("/infrared-therapy-vs-traditional-heat-therapy")({
  head: () => ({
    meta: [
      { title: "Infrared Therapy vs Traditional Heat Therapy | Complete Care" },
      { name: "description", content: "Infrared Therapy vs Traditional Heat Therapy — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Infrared Therapy vs Traditional Heat Therapy | Complete Care" },
      { property: "og:description", content: "Infrared Therapy vs Traditional Heat Therapy — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Complete-Care-Blog-Images-1.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Complete-Care-Blog-Images-1.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
