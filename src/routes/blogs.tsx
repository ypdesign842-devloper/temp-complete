import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/blocks/PageHero";
import { CtaBand } from "@/components/blocks/CtaBand";
import { BlogCard } from "@/components/blocks/Cards";
import { posts } from "@/data/posts";
import { ArrowUpRight, BookOpen, Calendar, Search, Sparkles } from "lucide-react";

const title = "Physiotherapy Blogs & Patient Recovery Guides | Complete Care Ahmedabad";
const description =
  "Evidence-informed physiotherapy articles on back pain, sciatica, knee surgery prevention, stroke rehabilitation, and spinal health by the Complete Care clinical team.";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  const [search, setSearch] = useState("");
  const featured = posts[0];
  const allPosts = posts;

  const filtered = search.trim()
    ? allPosts.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.slug.toLowerCase().includes(search.toLowerCase()),
      )
    : allPosts;

  return (
    <>
      <PageHero
        eyebrow="Clinical Library"
        h1="Physiotherapy &amp; Rehabilitation Guides"
        lead="Practical, evidence informed guides on non surgical  pain relief, injury rehabilitation, spinal health, and movement recovery, authored by Complete Care licensed physiotherapists."
      />

      {/* Featured Article Banner */}
      {featured && !search && (
        <section className="section-y bg-sand border-b border-border">
          <div className="container-cc">
            <div className="mb-4">
              <span className="badge-clinical text-teal">
                Featured Clinical Guide
              </span>
            </div>

            <div className="card-premium overflow-hidden p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
                  {featured.image ? (
                    <img
                      src={featured.image}
                      alt={featured.title}
                      fetchPriority="high"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : null}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-teal">
                    <Calendar className="size-4" />
                    <span>
                      {new Date(featured.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold leading-tight text-navy sm:text-3xl lg:text-4xl">
                    <Link
                      to={`/${featured.slug}` as never}
                      className="hover:text-accent transition-colors"
                    >
                      {featured.title}
                    </Link>
                  </h2>

                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    Discover clinical insights from our experienced physical therapists on non surgical  treatment pathways,
                    disc decompression, and restorative exercise therapy.
                  </p>

                  <div className="pt-2">
                    <Link
                      to={`/${featured.slug}` as never}
                      className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-md transition-all hover:bg-emerald-600"
                    >
                      <span>Read Complete Article</span>
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Articles Index */}
      <section className="section-y bg-background">
        <div className="container-cc space-y-10">
          {/* Search Bar & Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">All Clinical Articles</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Showing {filtered.length} of {allPosts.length} published articles
              </p>
            </div>

            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles by topic or condition..."
                className="w-full rounded-xl border border-input bg-card py-2.5 pl-10 pr-4 text-sm font-medium text-navy placeholder:text-muted-foreground focus:border-accent focus:outline-none shadow-sm"
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="rounded-2xl border border-border bg-sand p-12 text-center">
              <BookOpen className="mx-auto size-10 text-muted-foreground" />
              <h3 className="mt-3 text-lg font-bold text-navy">No articles match your search</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Try searching for another topic such as "back pain", "sciatica", or "knee".
              </p>
              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-4 rounded-lg bg-accent px-4 py-2 text-xs font-bold text-accent-foreground"
              >
                Clear Search Filter
              </button>
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
