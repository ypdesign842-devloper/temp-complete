import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/neck-pain-treatment-doctor-in-ahmedabad";

export const Route = createFileRoute("/neck-pain-treatment-doctor-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Neck Pain Treatment Doctor in Ahmedabad | Complete Care Physiotherapy" },
      { name: "description", content: "Physiotherapy treatment for neck pain, cervical stiffness and pinched nerve pain in Ahmedabad. Manual therapy, posture correction and targeted exercise programmes." },
      { property: "og:title", content: "Neck Pain Treatment Doctor in Ahmedabad | Complete Care Physiotherapy" },
      { property: "og:description", content: "Physiotherapy treatment for neck pain, cervical stiffness and pinched nerve pain in Ahmedabad. Manual therapy, posture correction and targeted exercise programmes." },
      { property: "og:image", content: "https://completecare.in/assets/conditions/Neck-Pain.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/conditions/Neck-Pain.webp" },
    ],
  }),
  component: () => <ContentTemplate data={page("neck-pain-treatment-doctor-in-ahmedabad")} content={content} />,
});
