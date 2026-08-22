import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/hiit-vs-cardio-for-weight-loss";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "hiit-vs-cardio-for-weight-loss")!;

export const Route = createFileRoute("/hiit-vs-cardio-for-weight-loss")({
  head: () => ({
    meta: [
      { title: "HIIT vs Cardio for Weight Loss | Complete Care" },
      { name: "description", content: "HIIT vs Cardio for Weight Loss — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "HIIT vs Cardio for Weight Loss | Complete Care" },
      { property: "og:description", content: "HIIT vs Cardio for Weight Loss — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Workout-Be-More-Effective-Than-an-Hour-of-Cardio.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Workout-Be-More-Effective-Than-an-Hour-of-Cardio.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
