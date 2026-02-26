"use client";

import { Project } from "@/lib/data";
import { ArrowUpRight, Lock } from "lucide-react";

interface ProjectShowcaseProps {
  project: Project;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  const isClickable = !!project.link;
  
  return (
    <div
      onClick={() => {
        if (project.link) window.open(project.link);
      }}
      className={`group modern-card shadow-sm ${
        isClickable 
          ? "cursor-pointer hover-lift" 
          : "cursor-default"
      }`}
    >
      <div className="space-y-4 p-6">
        {/* Title and Icon */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-tight tracking-tight">
            {project.title}
          </h3>
          <div className="flex-shrink-0 mt-0.5">
            {project.link ? (
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            ) : (
              <Lock className="h-4 w-4 text-muted-foreground/50" />
            )}
          </div>
        </div>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        
        {/* Tags */}
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
    </div>
  );
}
