export type PageGroup = "pillar" | "condition-ortho" | "condition-neuro" | "modality" | "fitness";

/** Content block parsed from the original completecare.in page. */
export type Block =
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "img"; src: string; alt?: string | undefined };

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
