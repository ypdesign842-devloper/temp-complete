import type { Block, PostContent } from "@/data/types";

export interface BlogPayload {
  title: string;
  slug: string;
  date: string;
  category: string;
  author: string;
  excerpt: string;
  image: string; // URL path or filename
  imageFile?: {
    name: string;
    base64: string;
  } | undefined;
  contentMarkdown: string;
  faqs?: Array<{ question: string; answer: string }> | undefined;
  metaDescription?: string | undefined;
}

/**
 * Parses markdown/plain text content into Complete Care Block array.
 */
export function parseContentToBlocks(
  text: string,
  author: string,
  dateFormatted: string,
  category: string
): Block[] {
  const lines = text.split("\n");
  const blocks: Block[] = [];

  // Top metadata list block
  blocks.push({
    t: "ul",
    items: [author.replace(/\s+/g, "_").toLowerCase(), dateFormatted, category],
  });

  let currentParagraph = "";
  let currentList: string[] = [];

  function flushParagraph() {
    if (currentParagraph.trim()) {
      blocks.push({ t: "p", text: currentParagraph.trim() });
      currentParagraph = "";
    }
  }

  function flushList() {
    if (currentList.length > 0) {
      blocks.push({ t: "ul", items: [...currentList] });
      currentList = [];
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]?.trimEnd() ?? "";
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    // Heading 2
    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ t: "h2", text: trimmed.replace(/^##\s+/, "") });
      continue;
    }

    // Heading 3
    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push({ t: "h3", text: trimmed.replace(/^###\s+/, "") });
      continue;
    }

    // List (- or * or numbered)
    if (/^[-*]\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
      flushParagraph();
      currentList.push(trimmed.replace(/^[-*\d.]+\s+/, ""));
      continue;
    }

    // Normal paragraph text
    flushList();
    if (currentParagraph) {
      currentParagraph += " " + trimmed;
    } else {
      currentParagraph = trimmed;
    }
  }

  flushParagraph();
  flushList();

  return blocks;
}

/**
 * Generates the TypeScript content file code string for src/content/posts/[slug].ts
 */
export function generateContentFileCode(payload: BlogPayload): string {
  const blocks = parseContentToBlocks(
    payload.contentMarkdown,
    payload.author || "Complete Care",
    new Date(payload.date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    payload.category || "Physiotherapy"
  );

  return `import type { PostContent } from "@/data/types";

export const content: PostContent = ${JSON.stringify(
    {
      slug: payload.slug,
      title: payload.title,
      date: payload.date,
      image: payload.image,
      author: payload.author || "Complete Care",
      category: payload.category || "Physiotherapy",
      blocks,
    },
    null,
    2
  )};
`;
}

/**
 * Generates the TanStack router page code string for src/routes/[slug].tsx
 */
export function generateRouteFileCode(payload: BlogPayload): string {
  const metaDesc =
    payload.metaDescription ||
    payload.excerpt ||
    `${payload.title} — authoritative physiotherapy and recovery guidance from Complete Care.`;

  return `import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/${payload.slug}";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "${payload.slug}")!;

export const Route = createFileRoute("/${payload.slug}")({
  head: () => ({
    meta: [
      { title: "${payload.title.replace(/"/g, '\\"')} | Complete Care" },
      { name: "description", content: "${metaDesc.replace(/"/g, '\\"')}" },
      { property: "og:title", content: "${payload.title.replace(/"/g, '\\"')} | Complete Care" },
      { property: "og:description", content: "${metaDesc.replace(/"/g, '\\"')}" },
      { property: "og:image", content: "https://completecare.in${payload.image}" },
      { name: "twitter:image", content: "https://completecare.in${payload.image}" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
`;
}

/**
 * Updates or adds a post into src/data/posts.ts content string
 */
export function addOrUpdatePostInPostsTs(
  postsTsContent: string,
  item: {
    slug: string;
    title: string;
    date: string;
    image: string;
    excerpt: string;
    category: string | null;
  }
): string {
  if (postsTsContent.includes(`"slug": "${item.slug}"`)) {
    const regex = new RegExp(`\\{\\s*"slug":\\s*"${item.slug}"[\\s\\S]*?\\}(,|(?=\\s*\\]))?`);
    return postsTsContent.replace(regex, `${JSON.stringify(item, null, 2)},`);
  } else {
    return postsTsContent.replace(
      /export const rawPosts: Post\[\] = \[/,
      `export const rawPosts: Post[] = [\n  ${JSON.stringify(item, null, 2)},`
    );
  }
}

/**
 * Removes a post from src/data/posts.ts content string
 */
export function removePostFromPostsTs(postsTsContent: string, slug: string): string {
  const regex = new RegExp(`\\s*\\{[\\s\\r\\n]*"slug":\\s*"${slug}"[\\s\\S]*?\\}(,|(?=\\s*\\]))?`, "g");
  return postsTsContent.replace(regex, "");
}

/**
 * Updates public/sitemap.xml by adding the new blog URL with trailing slash.
 */
export function injectIntoSitemapXml(sitemapContent: string, slug: string, date: string): string {
  const urlEntry = `  <url>
    <loc>https://completecare.in/${slug}/</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`;

  if (sitemapContent.includes(`https://completecare.in/${slug}/`)) {
    // Update existing lastmod
    return sitemapContent.replace(
      new RegExp(
        `<url>[\\s\\S]*?<loc>https:\\/\\/completecare\\.in\\/${slug}\\/<\\/loc>[\\s\\S]*?<\\/url>`,
        "g"
      ),
      urlEntry
    );
  }

  // Insert before </urlset>
  return sitemapContent.replace("</urlset>", `${urlEntry}\n</urlset>`);
}

/**
 * Removes a URL entry from public/sitemap.xml
 */
export function removeFromSitemapXml(sitemapContent: string, slug: string): string {
  return sitemapContent.replace(
    new RegExp(
      `\\s*<url>[\\s\\S]*?<loc>https:\\/\\/completecare\\.in\\/${slug}\\/<\\/loc>[\\s\\S]*?<\\/url>`,
      "g"
    ),
    ""
  );
}

