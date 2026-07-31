"use client";

import { useState } from "react";
import { Project, projects } from "@/lib/data";
import ProjectShowcase from "@/components/project-showcase";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

// Function to handle hash change
const handleHashChange = () => {
  if (window.location.hash === "#projects") {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.classList.add("glow-border");
      setTimeout(() => {
        projectsSection.classList.remove("glow-border");
      }, 3000); // Remove the glow effect after 3 seconds
    }
  }
};

// Add event listener for hash changes
if (typeof window !== "undefined") {
  window.addEventListener("hashchange", handleHashChange);
  // Check if the current hash is #projects on initial load
  handleHashChange();
}

const featuredProjects = projects.filter((project) => project.featured);
const hasHiddenProjects = featuredProjects.length < projects.length;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : featuredProjects;

  return (
    <section id="projects" key="projects" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold tracking-tight">Projects</h2>
        <p className="text-muted-foreground">A selection of my recent work and contributions</p>
      </div>
      <div id="projects-section" className="space-y-4">
        {visibleProjects.map((project: Project) => (
          <ProjectShowcase key={project.title} project={project} />
        ))}
      </div>
      {hasHiddenProjects && (
        <Button
          onClick={() => setShowAll((previous) => !previous)}
          variant="outline"
          size="sm"
          aria-expanded={showAll}
          aria-controls="projects-section"
        >
          {showAll ? (
            <ChevronUp className="h-4 w-4 mr-2" />
          ) : (
            <ChevronDown className="h-4 w-4 mr-2" />
          )}
          {showAll ? "Show fewer projects" : "Show all projects"}
        </Button>
      )}
    </section>
  );
}
