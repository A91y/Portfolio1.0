import {
  aboutYou,
  achievements,
  availability,
  blog,
  communityExperiences,
  educationExperiences,
  Experience,
  Project,
  projects,
  resume,
  skills,
  Skill,
  socials,
  websiteMetadata,
  workExperiences,
} from "@/lib/data";

// Serves the llmstxt.org format: H1, blockquote summary, then H2 sections.
// "Optional" is the spec's name for the section readers may skip.
export const dynamic = "force-static";

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

function experienceLines(experiences: Experience[]) {
  return experiences.map(
    (experience) =>
      `- ${linked(experience.company, experience.link)}: ${experience.position}, ${experience.years}. ${experience.description}`,
  );
}

function projectLines(list: Project[]) {
  return list.map((project) => {
    const tags = project.tags?.length ? ` Tags: ${project.tags.join(", ")}.` : "";
    const href = project.slug ? `${websiteMetadata.url}/projects/${project.slug}` : project.link;
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

function buildLlmsTxt() {
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
    [
      "Availability",
      [availability.open ? `${availability.headline}. ${availability.detail}` : "Not currently available."],
    ],
    ["Skills", skillLines()],
    ["Work", experienceLines(workExperiences)],
    ["Projects", projectLines(projects.filter((project) => project.featured))],
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

  return [
    `# ${aboutYou.name}`,
    "",
    `> ${websiteMetadata.description}`,
    "",
    `Website: ${websiteMetadata.url}`,
    `Last updated: ${new Date().toISOString().slice(0, 10)}`,
    ...sections.flatMap(([heading, lines]) => ["", `## ${heading}`, "", ...lines]),
    "",
  ].join("\n");
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
