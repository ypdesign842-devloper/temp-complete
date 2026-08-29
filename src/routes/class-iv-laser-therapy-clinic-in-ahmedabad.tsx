import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/class-iv-laser-therapy-clinic-in-ahmedabad";

export const Route = createFileRoute("/class-iv-laser-therapy-clinic-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Class IV Laser Therapy Clinic in Ahmedabad | Complete Care" },
      { name: "description", content: "Class IV deep tissue laser therapy in Ahmedabad for chronic pain, swelling and ligament or tendon recovery." },
      { property: "og:title", content: "Class IV Laser Therapy Clinic in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Class IV deep tissue laser therapy in Ahmedabad for chronic pain, swelling and ligament or tendon recovery." },
      { property: "og:image", content: "https://completecare.in/assets/treatments/Class-IV-Laser-Therapy.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/treatments/Class-IV-Laser-Therapy.webp" },
    ],
  }),
  component: () => <ContentTemplate data={page("class-iv-laser-therapy-clinic-in-ahmedabad")} content={content} />,
});
