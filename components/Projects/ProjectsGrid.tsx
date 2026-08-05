import ProjectCard from "./ProjectCard";
import { projects } from "@/components/Projects/projects";

export default function ProjectsGrid() {
  return (
    <div className="mt-10 lg:mt-16">

      {/* First 4 Projects */}

      <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
        {projects.slice(0, 4).map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>

      {/* Center Last Project */}

      <div className="mt-6 hidden lg:grid lg:grid-cols-[1fr_minmax(0,540px)_1fr] lg:mt-8">
        <div />
        <ProjectCard {...projects[4]} />
        <div />
      </div>

      {/* Mobile */}

      <div className="mt-6 lg:hidden">
        <ProjectCard {...projects[4]} />
      </div>

    </div>
  );
}