import {
  aboutYou,
  achievements,
  blog,
  cratesProfile,
  educationExperiences,
  Project,
  siteUpdated,
  skills,
  socials,
  websiteMetadata,
  workExperiences,
} from "@/lib/data";
import type { ProjectPage } from "@/lib/project-pages";

// schema.org data for search engines and LLM crawlers.

export const PERSON_ID = `${websiteMetadata.url}/#person`;

const currentRole = workExperiences.find((experience) =>
  experience.years.endsWith("Present"),
);

const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: aboutYou.name,
  alternateName: websiteMetadata.alternateName,
  url: websiteMetadata.url,
  image: websiteMetadata.logo_url,
  email: `mailto:${aboutYou.email}`,
  jobTitle: websiteMetadata.jobTitle,
  description: aboutYou.description,
  address: { "@type": "PostalAddress", addressLocality: aboutYou.location },
  ...(currentRole && {
    worksFor: {
      "@type": "Organization",
      name: currentRole.company,
      ...(currentRole.link && { url: currentRole.link }),
    },
  }),
  alumniOf: educationExperiences.map((education) => ({
    "@type": "EducationalOrganization",
    name: education.company,
    ...(education.link && { url: education.link }),
  })),
  knowsAbout: skills.map((skill) => skill.text),
  award: achievements.map((achievement) => `${achievement.title}, ${achievement.event} (${achievement.date})`),
  sameAs: [...socials.map((social) => social.link), blog.href, cratesProfile],
};

export const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: websiteMetadata.url,
  name: websiteMetadata.title,
  dateModified: siteUpdated,
  mainEntity: person,
};

export function projectUrl(project: Project) {
  return `${websiteMetadata.url}/projects/${project.slug}`;
}

export function projectJsonLd(project: Project, page: ProjectPage) {
  const url = projectUrl(project);
  const { sourceCode } = page;

  return [
    {
      "@context": "https://schema.org",
      "@type": sourceCode ? "SoftwareSourceCode" : "CreativeWork",
      name: project.title,
      headline: `${project.title}: ${page.headline}`,
      description: project.tagline,
      url,
      author: { "@id": PERSON_ID },
      keywords: project.tags?.join(", "),
      ...(sourceCode && {
        codeRepository: sourceCode.repository,
        programmingLanguage: sourceCode.language,
      }),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: websiteMetadata.url },
        { "@type": "ListItem", position: 2, name: "Projects", item: `${websiteMetadata.url}/#projects` },
        { "@type": "ListItem", position: 3, name: project.title, item: url },
      ],
    },
  ];
}
