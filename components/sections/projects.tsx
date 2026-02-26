"use client";

import { Project, projects } from "@/lib/data";
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

// Add event listener for hash changes
if (typeof window !== "undefined") {
  window.addEventListener("hashchange", handleHashChange);
  // Check if the current hash is #projects on initial load
  handleHashChange();
}

export default function Projects() {
  return (
    <section id="projects" key="projects" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold tracking-tight">Projects</h2>
        <p className="text-muted-foreground">A selection of my recent work and contributions</p>
      </div>
      <div id="projects-section" className="space-y-4">
        {projects.map((project: Project) => (
          <ProjectShowcase key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
