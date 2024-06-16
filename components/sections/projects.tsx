import { Project, projects } from "@/lib/data";
import ProjectShowcase from "@/components/project-showcase";

export default function Projects() {
  return (
    <section id="projects" key="projects">
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      <div>
        <div className="space-y-5 mt-5">
          {projects.map((project: Project) => (
            <ProjectShowcase key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
