import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/expert-kinesio-tape-therapy-in-ahmedabad";

export const Route = createFileRoute("/expert-kinesio-tape-therapy-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Expert Kinesio Tape Therapy in Ahmedabad | Complete Care" },
      { name: "description", content: "Kinesio taping in Ahmedabad for injury support, swelling control and postural cueing during sport and daily activity." },
      { property: "og:title", content: "Expert Kinesio Tape Therapy in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Kinesio taping in Ahmedabad for injury support, swelling control and postural cueing during sport and daily activity." },
    ],
  }),
  component: () => <ContentTemplate data={page("expert-kinesio-tape-therapy-in-ahmedabad")} content={content} />,
});
