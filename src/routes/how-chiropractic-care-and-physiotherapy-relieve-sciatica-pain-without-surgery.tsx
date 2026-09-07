import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/how-chiropractic-care-and-physiotherapy-relieve-sciatica-pain-without-surgery";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "how-chiropractic-care-and-physiotherapy-relieve-sciatica-pain-without-surgery")!;

export const Route = createFileRoute("/how-chiropractic-care-and-physiotherapy-relieve-sciatica-pain-without-surgery")({
  head: () => ({
    meta: [
      { title: "How Chiropractic Care and Physiotherapy Relieve Sciatica Pain Without Surgery | Complete Care" },
      { name: "description", content: "Discover how computerized spinal decompression, doctor-led chiropractic adjustments, and evidence-based physiotherapy relieve chronic sciatic nerve pain and disc herniation naturally." },
      { property: "og:title", content: "How Chiropractic Care and Physiotherapy Relieve Sciatica Pain Without Surgery | Complete Care" },
      { property: "og:description", content: "Discover how computerized spinal decompression, doctor-led chiropractic adjustments, and evidence-based physiotherapy relieve chronic sciatic nerve pain and disc herniation naturally." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/a92ab07bfc5578cf39e48d08f835a618.jpg" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/a92ab07bfc5578cf39e48d08f835a618.jpg" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
