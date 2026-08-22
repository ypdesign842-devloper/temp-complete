import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/paraffin-wax-bath-therapy-in-ahmedabad";

export const Route = createFileRoute("/paraffin-wax-bath-therapy-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Paraffin Wax Bath Therapy in Ahmedabad | Complete Care" },
      { name: "description", content: "Paraffin wax bath therapy in Ahmedabad for hand and foot stiffness, arthritis pain and post-injury recovery." },
      { property: "og:title", content: "Paraffin Wax Bath Therapy in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Paraffin wax bath therapy in Ahmedabad for hand and foot stiffness, arthritis pain and post-injury recovery." },
    ],
  }),
  component: () => <ContentTemplate data={page("paraffin-wax-bath-therapy-in-ahmedabad")} content={content} />,
});
