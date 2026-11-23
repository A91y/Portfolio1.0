import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import JsonLd from "@/components/json-ld";
import ProjectShowcase from "@/components/project-showcase";
import SiteShell from "@/components/site-shell";
import { aboutYou, projects, websiteMetadata } from "@/lib/data";
import { loadProjectPage } from "@/lib/project-pages";
import { projectJsonLd, projectUrl } from "@/lib/structured-data";

export const dynamicParams = false;

const TITLE_LIMIT = 60;

interface Params {
  params: Promise<{ slug: string }>;
}

const projectsWithPages = projects.filter((project) => project.slug);

function findProject(slug: string) {
  return projectsWithPages.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projectsWithPages.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  const page = await loadProjectPage(slug);
  if (!project || !page) return {};

  const base = `${project.title}: ${page.headline}`;
  const branded = `${base} | ${aboutYou.name}`;
  const title = branded.length <= TITLE_LIMIT ? branded : base;
  const description = project.tagline;
  const url = projectUrl(project);

  return {
    title,
    description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: websiteMetadata.title,
      images: [{ url: websiteMetadata.image_url, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      site: websiteMetadata.twitterSite,
      card: "summary_large_image",
      title,
      description,
      images: websiteMetadata.image_url,
    },
  };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed marker:text-foreground/40">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default async function ProjectPageRoute({ params }: Params) {
  const { slug } = await params;
  const project = findProject(slug);
  const page = await loadProjectPage(slug);
  if (!project || !page) notFound();

  const others = projectsWithPages.filter((other) => other.slug !== slug);

  return (
    <SiteShell nameIsHeading={false}>
      <JsonLd data={projectJsonLd(project, page)} />
      <article className="space-y-10">
        <header className="space-y-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground no-underline hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {project.title}
            <span className="text-muted-foreground">: {page.headline}</span>
          </h1>
          <p className="text-xl text-muted-foreground">{project.tagline}</p>
          {page.credit && <p className="text-sm text-muted-foreground">{page.credit}</p>}
        </header>

        <Section title="Problem">
          <p className="text-muted-foreground leading-relaxed">{page.problem}</p>
        </Section>

        <Section title="How it works">
          <BulletList items={page.howItWorks} />
        </Section>

        {page.results && page.results.length > 0 && (
          <Section title="Results">
            <BulletList items={page.results} />
          </Section>
        )}

        <Section title="Stack">
          <div className="flex flex-wrap gap-2">
            {page.stack.map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 text-sm font-medium bg-accent text-foreground rounded-md border border-border"
              >
                {item}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Links">
          <ul className="space-y-2">
            {page.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium"
                >
                  {link.label}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </article>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">More projects</h2>
        <div className="flex flex-col gap-4">
          {others.map((other) => (
            <ProjectShowcase key={other.title} project={other} />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
