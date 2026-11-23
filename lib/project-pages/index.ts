import type { ProjectPage } from "./types";

export type { ProjectPage };

// One module per page, so a page loads only its own content and none of it reaches lib/data.ts.
const LOADERS: Record<string, () => Promise<{ default: ProjectPage }>> = {
  stealthx: () => import("./stealthx"),
  pinoc: () => import("./pinoc"),
  "full-time": () => import("./full-time"),
  octasol: () => import("./octasol"),
  arachnid: () => import("./arachnid"),
  "svm-exploit-gym": () => import("./svm-exploit-gym"),
};

export async function loadProjectPage(slug: string): Promise<ProjectPage | undefined> {
  return (await LOADERS[slug]?.())?.default;
}
