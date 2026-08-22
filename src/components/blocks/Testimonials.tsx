import { Quote, Star, UserCheck } from "lucide-react";
import { testimonials, reviewSummary } from "@/data/testimonials";

export function Testimonials({ limit }: { limit?: number }) {
  const list = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="section-y bg-sand border-y border-border/80">
      <div className="container-cc">
        <div className="max-w-2xl">
          <span className="badge-clinical text-teal">
            Patient Stories &amp; Outcomes
          </span>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            {reviewSummary}
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            Read real recovery experiences from patients treated at our Gujarat physiotherapy and rehabilitation clinics.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((t) => (
            <figure
              key={t.name}
              className="card-premium card-premium-hover flex flex-col justify-between p-6 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-500">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="size-6 text-teal/25" />
                </div>

                <blockquote className="mt-4 text-sm leading-relaxed text-foreground sm:text-[0.95rem]">
                  “{t.quote}”
                </blockquote>
              </div>

              <figcaption className="mt-6 border-t border-border pt-4 flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-full bg-accent/15 text-accent font-bold text-xs">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-bold text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">Verified Patient · Complete Care</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
