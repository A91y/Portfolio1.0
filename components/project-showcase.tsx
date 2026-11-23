import Link from "next/link";
import { Project } from "@/lib/data";
import { ArrowUpRight, Lock } from "lucide-react";

interface ProjectShowcaseProps {
  project: Project;
}

const CARD = "group block modern-card shadow-xs no-underline hover:text-inherit";
const CLICKABLE = `${CARD} cursor-pointer hover-lift`;

function CardBody({ project, linked }: { project: Project; linked: boolean }) {
  return (
    <div className="space-y-4 p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold leading-tight tracking-tight">
          {project.title}
        </h3>
        <div className="shrink-0 mt-0.5">
          {linked ? (
            <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          ) : (
            <Lock className="h-4 w-4 text-muted-foreground/50" />
          )}
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {project.description}
      </p>

      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium bg-accent text-foreground rounded-md border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  if (project.slug) {
    return (
      <Link href={`/projects/${project.slug}`} className={CLICKABLE}>
        <CardBody project={project} linked />
      </Link>
    );
  }

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={CLICKABLE}
      >
        <CardBody project={project} linked />
      </a>
    );
  }

  return (
    <div className={`${CARD} cursor-default`}>
      <CardBody project={project} linked={false} />
    </div>
  );
}
