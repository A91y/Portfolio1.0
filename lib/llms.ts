import {
  aboutYou,
  achievements,
  availability,
  blog,
  communityExperiences,
  expertise,
  educationExperiences,
  Experience,
  Project,
  projects,
  resume,
  siteUpdated,
  skills,
  Skill,
  socials,
  websiteMetadata,
  workExperiences,
} from "@/lib/data";
import { loadProjectPage } from "@/lib/project-pages";

// Builds the llmstxt.org format: H1, blockquote summary, then H2 sections.
// "Optional" is the spec's name for the section readers may skip.

export const LLMS_FULL_PATH = "/llms-full.txt";

const SKILL_GROUP_LABELS: Record<Skill["group"], string> = {
  onchain: "On-chain",
  chains: "Other chains",
  backend: "Backend",
  frontend: "Frontend",
  tooling: "Tooling",
};

function linked(text: string, href?: string) {
  return href ? `[${text}](${href})` : text;
}

function pageUrl(project: Project) {
  return `${websiteMetadata.url}/projects/${project.slug}`;
}

// Internal hrefs ("/#id", "/projects/x") become absolute so the line stands alone.
function absolute(href: string) {
  return href.startsWith("/") ? `${websiteMetadata.url}${href}` : href;
}

function expertiseLines() {
  return expertise.map((area) => {
    const proofs = area.proofs
      .map((proof) => (proof.href ? `${proof.label} (${absolute(proof.href)})` : proof.label))
      .join(", ");
    return `- ${area.title}: ${area.claim} Proof: ${proofs}`;
  });
}

function experienceLines(experiences: Experience[]) {
  return experiences.map(
    (experience) =>
      `- ${linked(experience.company, experience.link)}: ${experience.position}, ${experience.years}. ${experience.description}`,
  );
}

function projectLines(list: Project[]) {
  return list.map((project) => {
    const tags = project.tags?.length ? ` Tags: ${project.tags.join(", ")}.` : "";
    const href = project.slug ? pageUrl(project) : project.link;
    return `- ${linked(project.title, href)}: ${project.description}${tags}`;
  });
}

function skillLines() {
  const groups = new Map<Skill["group"], string[]>();
  for (const skill of skills) {
    groups.set(skill.group, [...(groups.get(skill.group) ?? []), skill.text]);
  }
  return Array.from(groups, ([group, names]) => `- ${SKILL_GROUP_LABELS[group]}: ${names.join(", ")}`);
}

async function projectDetailLines() {
  const lines: string[] = [];
  for (const project of projects.filter((item) => item.slug)) {
    const page = await loadProjectPage(project.slug!);
    if (!page) continue;
    lines.push(
      `### ${project.title}: ${page.headline}`,
      "",
      `${project.tagline} Page: ${pageUrl(project)}`,
      ...(page.credit ? ["", page.credit] : []),
      "",
      `Problem: ${page.problem}`,
      "",
      "How it works:",
      ...page.howItWorks.map((item) => `- ${item}`),
      ...(page.results?.length ? ["", "Results:", ...page.results.map((item) => `- ${item}`)] : []),
      "",
      `Stack: ${page.stack.join(", ")}`,
      "",
      "Links:",
      ...page.links.map((link) => `- ${linked(link.label, link.href)}`),
      "",
    );
  }
  return lines;
}

export async function buildLlmsText({ full }: { full: boolean }) {
  const sections: [string, string[]][] = [
    [
      "About",
      [
        aboutYou.description,
        "",
        `- Location: ${aboutYou.location}`,
        `- Experience: ${aboutYou.yearsOfExperience}`,
      ],
    ],
    ["Expertise", expertiseLines()],
    [
      "Availability",
      [availability.open ? `${availability.headline}. ${availability.detail}` : "Not currently available."],
    ],
    ["Skills", skillLines()],
    ["Work", experienceLines(workExperiences)],
    ["Projects", projectLines(projects.filter((project) => project.featured))],
    ...(full ? [["Project details", await projectDetailLines()] as [string, string[]]] : []),
    [
      "Achievements",
      achievements.map(
        (achievement) =>
          `- ${linked(achievement.title, achievement.href)}: ${achievement.event}, ${achievement.date}.${achievement.detail ? ` ${achievement.detail}` : ""}`,
      ),
    ],
    ["Community", experienceLines(communityExperiences)],
    ["Education", experienceLines(educationExperiences)],
    [
      "Contact",
      [
        `- Email: ${aboutYou.email}`,
        `- ${linked(resume.label, resume.href)}`,
        `- ${linked(blog.label, blog.href)}`,
        ...socials.map((social) => `- ${linked(social.name, social.link)}`),
      ],
    ],
    ["Optional", projectLines(projects.filter((project) => !project.featured))],
  ];

  const pointer = full
    ? []
    : [`Full version with every project page's details: ${websiteMetadata.url}${LLMS_FULL_PATH}`];

  return [
    `# ${aboutYou.name}`,
    "",
    `> ${websiteMetadata.description}`,
    "",
    `Website: ${websiteMetadata.url}`,
    `Last updated: ${siteUpdated}`,
    ...pointer,
    ...sections.flatMap(([heading, lines]) => ["", `## ${heading}`, "", ...lines]),
    "",
  ].join("\n");
}

export function textResponse(body: string) {
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
