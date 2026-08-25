export type PageGroup = "pillar" | "condition-ortho" | "condition-neuro" | "modality" | "fitness";

/** Content block parsed from the completecare.in clinical pages. */
export type Block =
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "img"; src: string; alt?: string | undefined }
  | { t: "snapshot"; title?: string; items: { label: string; value: string }[] }
  | { t: "grid"; title?: string; subtitle?: string; columns?: 2 | 3; items: { title: string; desc: string; icon?: string; badge?: string }[] }
  | { t: "steps"; title?: string; subtitle?: string; steps: { step: string; title: string; desc: string }[] }
  | { t: "callout"; title: string; text: string; variant?: "warning" | "info" | "tip" }
  | { t: "faq"; faqs: { q: string; a: string }[] }
  | { t: "doctor"; name?: string; role?: string; bio?: string; to?: string; image?: string; ctaText?: string }
  | {
      t: "pricing";
      title?: string;
      range: string;
      consultationFee?: string;
      treatmentRange?: string;
      currency?: string;
      lowPrice?: number;
      highPrice?: number;
      context: string;
      inclusions?: string[];
    };

/** Card / navigation metadata for a clinical page. */
export type ContentPage = {
  slug: string;
  group: PageGroup;
  /** Short label used on cards and in navigation. */
  label: string;
  h1: string;
  title: string;
  description: string;
  lead: string;
  image?: string | null | undefined;
  related?: string[] | undefined;
};

/** Full page body, code-split per slug in src/content/pages. */
export type PageContent = {
  slug: string;
  h1: string;
  lead: string;
  hero: string | null;
  blocks: Block[];
  quickLinks?: { label: string; to: string }[];
};

export type LocationContent = {
  slug: string;
  hero: string | null;
  gallery: string[];
  blocks: Block[];
};

export type PostContent = {
  slug: string;
  title: string;
  date: string;
  image: string;
  author: string | null;
  category: string | null;
  blocks: Block[];
};
