import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/spine-decompression-therapy-treatment-in-ahmedabad";

export const Route = createFileRoute("/spine-decompression-therapy-treatment-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Spine Decompression Therapy Treatment in Ahmedabad | Complete Care" },
      { name: "description", content: "US-FDA approved computerised spine decompression in Ahmedabad for herniated discs, sciatica and nerve root compression." },
      { property: "og:title", content: "Spine Decompression Therapy Treatment in Ahmedabad | Complete Care" },
      { property: "og:description", content: "US-FDA approved computerised spine decompression in Ahmedabad for herniated discs, sciatica and nerve root compression." },
      { property: "og:image", content: "https://completecare.in/assets/treatments/Spine-Decompression-Therapy-Treatment.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/treatments/Spine-Decompression-Therapy-Treatment.png" },
    ],
  }),
  component: () => <ContentTemplate data={page("spine-decompression-therapy-treatment-in-ahmedabad")} content={content} />,
});
