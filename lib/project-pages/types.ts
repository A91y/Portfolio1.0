// Every statement here must trace to the project's own repo or a confirmed fact.
export interface ProjectPage {
  // Short keyword phrase shown after the name in the page's h1 and title.
  headline: string;
  // Replaces headline in the <title> when the full title would run past the length limit.
  shortHeadline?: string;
  problem: string;
  howItWorks: string[];
  results?: string[];
  // Who else built it, or what it grew from.
  credit?: string;
  stack: string[];
  links: { label: string; href: string }[];
  // Set for a code artifact; switches its structured data to SoftwareSourceCode.
  sourceCode?: { repository: string; language: string };
}
