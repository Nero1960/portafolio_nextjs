"use client";
import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";
import { BiLogoGithub } from "react-icons/bi";
import Link from "next/link";

type ProjectsItemProps = {
  project: {
    id: number;
    title: string;
    tag: string;
    image: string;
    description: string;
    githubUrl: string;
    liveUrl: string;
  };
};

export default function ProjectsItem({ project }: ProjectsItemProps) {
  return (
    <div className="flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:items-center lg:gap-y-0 lg:gap-x-16">
      <div className={`${project.id % 2 === 0 ? "lg:order-2" : ""} lg:w-1/2`}>
        <Image
          src={project.image}
          alt="Imagen portafolio"
          width={474}
          height={397}
        />
      </div>

      <div className="flex flex-col gap-y-6 lg:px-8 lg:w-1/2">
        <p className="text-sm text-primary-500">{project.tag}</p>
        <p className="text-4xl text-white font-bold">{project.title}</p>
        <p className="text-sm text-gray-500">{project.description}</p>
        <div className="flex items-center gap-x-1">
          <Link
            href={project.liveUrl}
            target="_blank"
            className="rounded-full bg-black p-1 hover:bg-primary-500 hover:text-black duration-700"
          >
            <CgArrowTopRight className="text-2xl text-gray-500 hover:text-black" />
          </Link>

          {project.id !== 3 && (
            <Link
              href={project.githubUrl}
              target="_blank"
              className="rounded-full"
            >
              <BiLogoGithub className="text-[34px] text-gray-500 hover:-translate-y-1 duration-700 rounded-full" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
