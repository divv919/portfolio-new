import { Suspense } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../lib/constants";

export default function Projects() {
  return (
    <div className="w-full p-0 pt-0 flex flex-col gap-8">
      <h3 className="text-md text-neutral-300 border-b-2 w-fit border-dashed border-neutral-700 font-inter tracking-tight title">
        Fullstack Projects
      </h3>
      <Suspense
        fallback={
          <div className="flex flex-col gap-4">
            {[...Array(3)].map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        }
      >
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </Suspense>
    </div>
  );
}

function ProjectCardSkeleton() {
  return (
    <div className="w-full aspect-video rounded-md bg-neutral-900/60 animate-pulse" />
  );
}
