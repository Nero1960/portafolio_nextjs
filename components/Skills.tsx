"use client";
import Link from "next/link";
import Button from "./ui/Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { skillsBottom, skillsTop } from "@/data/data";
import CardSkillTop from "./ui/CardSkillTop";
import { useAnimatedInView } from "@/hooks/useAnimateInView";

export default function Skills() {
  const { ref, inView } = useAnimatedInView();
  return (
    <section id="skills" className={`bg-black px-2.5 py-20 ${inView ? 'animate-fade-left' : 'opacity-0'}`} ref={ref}>
      <div className="lg:max-w-5xl px-5 mx-auto flex flex-col space-y-10 lg:px-0 lg:flex-row justify-between">
        <div className="flex flex-col gap-y-6 lg:w-[435px]">
          <p className="text-gray-500 font-bold text-sm">Mis habilidades.</p>
          <h2 className="font-bold text-2xl lg:text-3xl text-white">
            Explora mis <br />
            <span className="block text-primary-500">
              Habilidades y Experiencia.
            </span>
          </h2>
          <p className="text-gray-500 text-base">
            Usualmente trabajo con las siguientes tecnologías web, aunque me
            mantengo en constante aprendizaje y siempre estoy abierto a
            incorporar nuevas herramientas.
          </p>
          <div className="flex items-center gap-x-8">
            <Button title="Sobre Mi" href="#about" />
            <Link
              href="/cv_andy.pdf"
              download="cv_andy"
              className="flex items-center gap-x-2 text-sm text-white underline"
            >
              Descargar cv{" "}
              <MdKeyboardArrowRight className="text-primary-500 text-2xl" />
            </Link>
          </div>
        </div>

        <div className="lg:w-[527px] flex flex-col gap-y-4">
          <Marquee speed={35} direction="left" >
            {skillsTop.map((skill, index) => (
              <CardSkillTop key={index} skill={skill} />
            ))}
          </Marquee>

          <Marquee speed={30} direction="right">
            {skillsBottom.map((skill, index) => (
              <CardSkillTop key={index} skill={skill} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
