import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/is-spine-surgery-necessary-dr-hardik-patel-explains";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "is-spine-surgery-necessary-dr-hardik-patel-explains")!;

export const Route = createFileRoute("/is-spine-surgery-necessary-dr-hardik-patel-explains")({
  head: () => ({
    meta: [
      { title: "Is Spine Surgery Necessary Dr Hardik Patel Explains | Complete Care" },
      { name: "description", content: "Is Spine Surgery Necessary Dr Hardik Patel Explains — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Is Spine Surgery Necessary Dr Hardik Patel Explains | Complete Care" },
      { property: "og:description", content: "Is Spine Surgery Necessary Dr Hardik Patel Explains — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Spine-Surgery-Necessary.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Spine-Surgery-Necessary.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
