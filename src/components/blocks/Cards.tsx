import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar, Sparkles } from "lucide-react";
import type { ContentPage } from "@/data/types";
import type { Post } from "@/data/posts";

export function LinkCard({
  page,
  kicker,
}: {
  page: ContentPage;
  kicker?: string | undefined;
}) {
  const isLandscapeBanner =
    Boolean(page.image) &&
    (page.image!.includes("/conditions/") ||
      page.image!.includes("/fitness/") ||
      page.image!.includes("Banner") ||
      page.image!.includes("theraphy") ||
      page.image!.endsWith(".png"));

  return (
    <Link
      to={`/${page.slug}` as never}
      className="group card-premium card-premium-hover flex flex-col justify-between p-6"
    >
      <div>
        {page.image ? (
          <div className="mb-4 overflow-hidden rounded-xl border border-border bg-sand/60 flex items-center justify-center">
            <img
              src={page.image}
              alt={page.label}
              loading="lazy"
              className={`${
                isLandscapeBanner ? "aspect-[2.56/1] object-contain p-1.5" : "aspect-[16/10] object-cover"
              } w-full transition-transform duration-500 group-hover:scale-105`}
            />
          </div>
        ) : null}

        <div className="flex items-center justify-between">
          <span className="badge-clinical text-[10px] text-teal">
            {kicker ?? "Treatment Pathway"}
          </span>
          <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
        </div>

        <h3 className="mt-3 text-xl font-bold leading-snug text-navy group-hover:text-accent transition-colors">
          {page.label}
        </h3>

        <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {page.lead}
        </p>
      </div>

      <div className="mt-5 border-t border-border pt-3.5 flex items-center justify-between text-xs font-bold text-accent">
        <span>View Clinical Guide</span>
        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
      </div>
    </Link>
  );
}

export function CardGrid({
  title,
  subtitle,
  pages,
  kicker,
  tone = "light",
}: {
  title: string;
  subtitle?: string;
  pages: ContentPage[];
  kicker?: string;
  tone?: "light" | "sand";
}) {
  return (
    <section className={tone === "sand" ? "section-y bg-sand" : "section-y bg-background"}>
      <div className="container-cc">
        <div className="max-w-3xl">
          {kicker ? (
            <span className="badge-clinical mb-3 text-teal">
              {kicker}
            </span>
          ) : null}
          <h2 className="text-3xl font-semibold leading-tight text-navy sm:text-4xl">{title}</h2>
          {subtitle && (
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((p) => (
            <LinkCard key={p.slug} page={p} kicker={kicker} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogCard({ post }: { post: Post }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      to={`/${post.slug}` as never}
      className="group card-premium card-premium-hover flex flex-col justify-between overflow-hidden"
    >
      <div>
        <div className="relative overflow-hidden bg-sand/60 flex items-center justify-center">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="aspect-[16/10] w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="aspect-[16/10] w-full bg-sand flex items-center justify-center text-muted-foreground">
              <Sparkles className="size-8 text-teal/40" />
            </div>
          )}
          <div className="absolute top-2.5 left-2.5 rounded-md bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-navy shadow-sm backdrop-blur-sm">
            Clinical Article
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-teal">
            <Calendar className="size-3.5" />
            <time>{formattedDate}</time>
          </div>

          <h3 className="mt-2.5 text-lg font-bold leading-snug text-navy group-hover:text-accent transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {post.excerpt ?? "Evidence-based physiotherapy and recovery guidance from Complete Care clinicians."}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0">
        <div className="border-t border-border pt-3.5 flex items-center justify-between text-xs font-bold text-accent">
          <span>Read Full Article</span>
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
