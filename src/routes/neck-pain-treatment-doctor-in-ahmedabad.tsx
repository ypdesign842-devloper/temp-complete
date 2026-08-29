import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/neck-pain-treatment-doctor-in-ahmedabad";

export const Route = createFileRoute("/neck-pain-treatment-doctor-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Neck Pain in Ahmedabad | Relief from Neck Pain & Cervical Care | Complete Care" },
      { name: "description", content: "Expert relief from neck pain, cervical stiffness, sore shoulder, and pinched nerves in Ahmedabad. Advanced IFT, laser therapy, and targeted neck pain exercises." },
      { name: "keywords", content: "Neck Pain in Ahmedabad, relief from neck pain, neck pain treatment, neck pain how to relieve, neck pain exercises, cause for neck pain, ift in physio, painful shoulder" },
      { property: "og:title", content: "Neck Pain in Ahmedabad | Relief from Neck Pain & Cervical Care | Complete Care" },
      { property: "og:description", content: "Expert relief from neck pain, cervical stiffness, sore shoulder, and pinched nerves in Ahmedabad. Advanced IFT, laser therapy, and targeted neck pain exercises." },
      { property: "og:image", content: "https://completecare.in/assets/conditions/Neck-Pain.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/conditions/Neck-Pain.webp" },
    ],
  }),
  component: () => (
    <ContentTemplate
      data={page("neck-pain-treatment-doctor-in-ahmedabad")}
      content={content}
      customEyebrow="Neck Pain Physiotherapy treatment in Ahmedabad"
      eyebrowAsH1={true}
    />
  ),
});
