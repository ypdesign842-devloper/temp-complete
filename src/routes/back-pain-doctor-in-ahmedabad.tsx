import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/back-pain-doctor-in-ahmedabad";

export const Route = createFileRoute("/back-pain-doctor-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Back Pain Physiotherapy Treatment in Ahmedabad | Complete Care" },
      { name: "description", content: "Expert relief from lower back pain, lumbar stiffness, sciatica, and disc compression in Ahmedabad. Advanced spinal decompression, Class IV laser, and core rehabilitation." },
      { name: "keywords", content: "Back Pain in Ahmedabad, back pain physiotherapy treatment in ahmedabad, lower back pain treatment, relief from back pain, back pain exercises, slipped disc treatment, sciatica treatment" },
      { property: "og:title", content: "Back Pain Physiotherapy Treatment in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Expert relief from lower back pain, lumbar stiffness, sciatica, and disc compression in Ahmedabad. Advanced spinal decompression, Class IV laser, and core rehabilitation." },
      { property: "og:image", content: "https://completecare.in/assets/conditions/Back-Pain.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/conditions/Back-Pain.webp" },
    ],
  }),
  component: () => (
    <ContentTemplate
      data={page("back-pain-doctor-in-ahmedabad")}
      content={content}
      customEyebrow="Back Pain Physiotherapy Treatment in Ahmedabad"
      eyebrowAsH1={true}
    />
  ),
});
