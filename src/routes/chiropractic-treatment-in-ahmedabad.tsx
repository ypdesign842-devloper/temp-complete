import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/chiropractic-treatment-in-ahmedabad";

export const Route = createFileRoute("/chiropractic-treatment-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Chiropractic Treatment in Ahmedabad | Complete Care" },
      { name: "description", content: "Certified chiropractic care and spinal alignment in Ahmedabad by Dr. Hardik Patel (PT) — gentle vertebral adjustment for sciatica, disc and neck pain." },
      { name: "keywords", content: "Top Chiropractor in Ahmedabad, Back pain treatment chiropractor Ahmedabad, Spine specialist chiropractor Ahmedabad, Chiropractic Treatment Ahmedabad, Dr Hardik Patel chiropractor" },
      { property: "og:title", content: "Chiropractic Treatment in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Certified chiropractic care and spinal alignment in Ahmedabad by Dr. Hardik Patel (PT) — gentle vertebral adjustment for sciatica, disc and neck pain." },
      { property: "og:image", content: "https://completecare.in/assets/treatments/Complete-Care-Doctor-Image-cc.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/treatments/Complete-Care-Doctor-Image-cc.webp" },
    ],
  }),
  component: () => (
    <ContentTemplate
      data={page("chiropractic-treatment-in-ahmedabad")}
      content={content}
      customEyebrow="Best Chiropractic Treatment in Ahmedabad"
      eyebrowAsH1={true}
    />
  ),
});
