"use client";
import ProjectsItem from "@/components/ProjectsItem";
import { data } from "@/data/data";
import { useAnimatedInView } from "@/hooks/useAnimateInView";

export default function Projects() {

  const {ref, inView} = useAnimatedInView();

  return (
    <main id="projects" className={`max-w-5xl mx-auto px-5 lg:px-0 py-28 ${inView ? "animate-fade-left" : "opacity-0"}`} ref={ref}>
      <p className="text-gray-500 font-bold text-sm text-center">
        Mis proyectos.
      </p>
      <h2 className="text-2xl text-white font-bold text-center mt-5">
        Explora mis{" "}
        <span className="text-primary-500">
          Proyectos <br />
          Personales.
        </span>
      </h2>

      <div className="flex flex-col gap-y-16 my-20">
        {data.map((project) => (
          <ProjectsItem key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
