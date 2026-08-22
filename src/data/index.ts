import { conditions } from "./conditions";
import { fitness } from "./fitness";
import { modalities, pillars } from "./treatments";
import type { ContentPage } from "./types";

export const contentPages: ContentPage[] = [...pillars, ...conditions, ...modalities, ...fitness];

export const contentBySlug = new Map(contentPages.map((p) => [p.slug, p]));

export function page(slug: string): ContentPage {
  const found = contentBySlug.get(slug);
  if (!found) throw new Error(`Unknown content page: ${slug}`);
  return found;
}

export const orthoConditions = conditions.filter((c) => c.group === "condition-ortho");
export const neuroConditions = conditions.filter((c) => c.group === "condition-neuro");
export { conditions, fitness, modalities, pillars };
export type { ContentPage };
