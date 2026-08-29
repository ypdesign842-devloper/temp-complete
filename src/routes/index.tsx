import { createFileRoute } from "@tanstack/react-router";
import { HomeTemplate } from "@/components/templates/HomeTemplate";

const title = "Complete Care | Best Physiotherapy & Rehabilitation Centre in Ahmedabad";
const description =
  "Doctor-led physiotherapy, chiropractic care, spine decompression and medical fitness at 6 Complete Care centres across Gujarat. 40+ licensed physiotherapists.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: "/assets/treatments/cc-home-page-image.webp",
        imageSrcSet: "/assets/treatments/cc-home-page-image-500w.webp 500w, /assets/treatments/cc-home-page-image.webp 1000w",
        imageSizes: "(max-width: 640px) 420px, (max-width: 1024px) 500px, 580px",
        fetchPriority: "high",
      },
    ],
  }),
  component: HomeTemplate,
});
