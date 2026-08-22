import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/best-neuro-spine-rehabilitation-centre-in-ahmedabad";

export const Route = createFileRoute("/best-neuro-spine-rehabilitation-centre-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Best Neuro & Spine Rehabilitation Centre in Ahmedabad | Complete Care" },
      { name: "description", content: "Specialised neuro and spine rehabilitation in Ahmedabad for stroke, spinal cord injury, Parkinson's, cerebral palsy, MS and Bell's palsy." },
      { property: "og:title", content: "Best Neuro & Spine Rehabilitation Centre in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Specialised neuro and spine rehabilitation in Ahmedabad for stroke, spinal cord injury, Parkinson's, cerebral palsy, MS and Bell's palsy." },
    ],
  }),
  component: () => <ContentTemplate data={page("best-neuro-spine-rehabilitation-centre-in-ahmedabad")} content={content} />,
});
