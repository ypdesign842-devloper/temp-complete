import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/chiropractic-tips-for-first-time-patients-in-ahmedabad";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "chiropractic-tips-for-first-time-patients-in-ahmedabad")!;

export const Route = createFileRoute("/chiropractic-tips-for-first-time-patients-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Chiropractic Tips for First Time Patients in Ahmedabad | Complete Care" },
      { name: "description", content: "Chiropractic Tips for First Time Patients in Ahmedabad — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Chiropractic Tips for First Time Patients in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Chiropractic Tips for First Time Patients in Ahmedabad — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Chiropractic-Tips-for-First-Time-Patients-in-Ahmedabad-Banner.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Chiropractic-Tips-for-First-Time-Patients-in-Ahmedabad-Banner.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
