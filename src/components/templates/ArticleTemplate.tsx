import { Link } from "@tanstack/react-router";
import {
  Calendar,
  ChevronRight,
  Home,
  Info,
  Phone,
  Share2,
  ShieldAlert,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { CtaBand } from "@/components/blocks/CtaBand";
import { BlogCard } from "@/components/blocks/Cards";
import { BlockContent } from "@/components/blocks/BlockContent";
import { posts, type Post } from "@/data/posts";
import { site } from "@/data/site";
import type { PostContent } from "@/data/types";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";

export function ArticleTemplate({ post, content }: { post: Post; content: PostContent }) {
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const published = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const schemas = [
    generateArticleSchema(post, content),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Blogs", url: "/blogs" },
      ...(content.category ? [{ name: content.category, url: "/blogs" }] : []),
      { name: post.title, url: `/${post.slug}` },
    ]),
  ];

  return (
    <>
      {/* Schema.org Structured Data (BlogPosting, MedicalWebPage, Breadcrumbs) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <article className="bg-background">
        {/* Article Header */}
        <header className="relative border-b border-border/80 bg-gradient-to-b from-sand via-background to-sand/40 py-12 lg:py-16">
          <div className="container-cc max-w-4xl space-y-5">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
              <Link to="/" className="inline-flex items-center gap-1 hover:text-accent transition-colors">
                <Home className="size-3.5" />
                <span>Home</span>
              </Link>
              <ChevronRight aria-hidden="true" className="size-3 text-muted-foreground/60" />
              <Link to="/blogs" className="hover:text-accent transition-colors">
                Blogs
              </Link>
              {content.category && (
                <>
                  <ChevronRight aria-hidden="true" className="size-3 text-muted-foreground/60" />
                  <span className="text-navy font-bold">{content.category}</span>
                </>
              )}
            </nav>

            {/* Category Pill */}
            {content.category && (
              <div className="inline-flex items-center gap-2 rounded-full border border-navy/12 bg-white/80 px-3.5 py-1 text-[11px] font-bold tracking-wider text-teal uppercase">
                <Sparkles className="size-3 text-accent" />
                <span>{content.category}</span>
              </div>
            )}

            {/* Article Title */}
            <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight text-navy sm:text-4xl lg:text-[3rem]">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground pt-1 border-t border-border/60">
              <div className="flex items-center gap-1.5 text-navy">
                <UserCheck className="size-4 text-accent" />
                <span>{content.author ?? "Complete Care Clinical Team"}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="size-3.5 text-teal" />
                <span>Published on {published}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Article Body & Sidebar */}
        <div className="container-cc grid gap-14 py-12 lg:grid-cols-[1.4fr_0.9fr] lg:items-start lg:py-16">
          {/* Main Article Content */}
          <div className="space-y-8">
            {/* Featured Image - Intelligently preserved with zero cropping */}
            {post.image && (
              <div className="overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-lg">
                <div className="overflow-hidden rounded-xl bg-sand/50 flex items-center justify-center">
                  <img
                    src={post.image}
                    alt={post.title}
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-auto max-h-[520px] object-contain rounded-xl"
                  />
                </div>
              </div>
            )}

            {/* Block Content */}
            <div className="pt-2">
              <BlockContent blocks={content.blocks} />
            </div>

            {/* Clinical Disclaimer Box */}
            <div className="rounded-2xl border border-teal/25 bg-sand/80 p-6 shadow-sm">
              <div className="flex items-start gap-3.5">
                <Info className="mt-0.5 size-5 shrink-0 text-teal" />
                <div className="space-y-1 text-sm leading-relaxed text-muted-foreground">
                  <strong className="block font-bold text-navy">Medical Notice &amp; Patient Advisory</strong>
                  <p>
                    This article is published for patient education and does not replace an in-person clinical assessment.
                    For personalized diagnosis and treatment planning, contact our physiotherapists on{" "}
                    <a href={site.phoneHref} className="font-bold text-navy hover:text-accent underline">
                      {site.phone}
                    </a>{" "}
                    or visit any of our six centres across Gujarat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28">
            {/* Consultation Card */}
            <div className="card-premium p-7 space-y-4">
              <span className="badge-emerald text-[10px]">
                In-Clinic &amp; Home Visit
              </span>
              <h2 className="text-2xl font-bold text-navy">Speak with Our Physiotherapists</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Get relief from acute or chronic pain with evidence based physiotherapy, chiropractic adjustments, and spinal decompression.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-bold text-accent-foreground shadow-md transition-all hover:bg-emerald-600"
                >
                  <span>Book Consultation on WhatsApp</span>
                </a>
                <a
                  href={site.phoneHref}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-navy/20 bg-sand py-3.5 text-sm font-bold text-navy transition-all hover:bg-navy hover:text-white"
                >
                  <Phone className="size-4 text-teal" />
                  <span>Call {site.phone}</span>
                </a>
              </div>
            </div>

            {/* Quick Clinic Directory */}
            <div className="rounded-2xl border border-border bg-sand/60 p-6 space-y-3">
              <h3 className="text-xs font-bold tracking-wider text-teal uppercase">
                6 Centres in Gujarat
              </h3>
              <p className="text-xs text-muted-foreground">
                Thaltej · Gota · South Bopal · Nikol · Mehsana · Ankleshwar
              </p>
            </div>
          </aside>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="section-y bg-sand border-t border-border">
        <div className="container-cc">
          <div className="max-w-2xl">
            <span className="badge-clinical text-teal">
              Further Reading
            </span>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              More guides from our clinicians
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
