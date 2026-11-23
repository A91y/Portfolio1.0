"use client";

import { useEffect } from "react";
import { projects } from "@/lib/data";
import Collapsible from "@/components/collapsible";
import ProjectShowcase from "@/components/project-showcase";

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

const featuredProjects = projects.filter((project) => project.featured);
const archivedProjects = projects.filter((project) => !project.featured);

export default function Projects() {
  // Runs after hydration so the glow class never differs from the server HTML.
  useEffect(() => {
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section id="projects" key="projects" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold tracking-tight">Projects</h2>
        <p className="text-muted-foreground">
          Solana programs, tooling and payment rails I&apos;ve shipped
        </p>
      </div>
      <div id="projects-section" className="flex flex-col gap-4">
        {featuredProjects.map((project) => (
          <ProjectShowcase key={project.title} project={project} />
        ))}
      </div>
      {archivedProjects.length > 0 && (
        <Collapsible
          showLabel={`Show archive (${archivedProjects.length})`}
          hideLabel="Hide archive"
        >
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight">Archive</h3>
            <div className="flex flex-col gap-4">
              {archivedProjects.map((project) => (
                <ProjectShowcase key={project.title} project={project} />
              ))}
            </div>
          </div>
        </Collapsible>
      )}
    </section>
  );
}
