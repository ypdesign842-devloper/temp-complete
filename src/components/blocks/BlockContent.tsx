import { CheckCircle2 } from "lucide-react";
import type { Block } from "@/data/types";

/** Renders markdown-ish inline emphasis and links captured from the source content. */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
        if (link) {
          const href = link[2]!.replace("https://completecare.in", "");
          return (
            <a
              key={i}
              href={href}
              className="font-bold text-navy underline decoration-accent/60 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {link[1]!.replace(/\*\*/g, "")}
            </a>
          );
        }
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-bold text-navy">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export function BlockContent({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-7 text-foreground">
      {blocks.map((block, i) => {
        switch (block.t) {
          case "h2":
            return (
              <div key={i} className="pt-6 first:pt-0">
                <h2 className="relative flex items-center gap-3 text-2xl font-bold leading-snug text-navy sm:text-3xl">
                  <span className="h-6 w-1 rounded-full bg-accent" aria-hidden="true" />
                  <span>
                    <Inline text={block.text} />
                  </span>
                </h2>
              </div>
            );
          case "h3":
            return (
              <h3 key={i} className="pt-3 text-xl font-bold leading-snug text-navy">
                <Inline text={block.text} />
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
                <Inline text={block.text} />
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-3 rounded-2xl border border-border/80 bg-sand/60 p-5 sm:p-6">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-foreground sm:text-base">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                    <span>
                      <Inline text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "img":
            return (
              <figure key={i} className="my-6 overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-md">
                <div className="overflow-hidden rounded-xl bg-sand">
                  <img
                    src={block.src}
                    alt={block.alt ?? "Complete Care clinical illustration"}
                    loading="lazy"
                    className="w-full object-contain max-h-[500px]"
                  />
                </div>
                {block.alt ? (
                  <figcaption className="px-3 py-2 text-center text-xs text-muted-foreground">
                    {block.alt}
                  </figcaption>
                ) : null}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
