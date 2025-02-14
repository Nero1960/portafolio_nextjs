"use client";
import { AiOutlineCheck, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { CgArrowTopRight } from "react-icons/cg";
import { useAnimatedInView } from "@/hooks/useAnimateInView";
export default function About() {

  const { ref, inView } = useAnimatedInView();

  return (
    <section id="about" ref={ref} className="bg-black px-5 lg:px-11 py-20">
      <div className={`lg:max-w-5xl mx-auto flex flex-col lg:flex-row justify-between ${inView ? 'animate-fade-left' : 'opacity-0'}`}>
        <div className="w-full flex gap-y-6 flex-col lg:w-[578px]">
          <p className="text-gray-500 font-bold text-sm">Sobre mi.</p>
          <h2 className="font-bold text-2xl lg:text-3xl text-white">
            Hi There! Soy desarrollador web{" "}
            <span className="block text-primary-500">Frontend y Backend.</span>
          </h2>
          <p className="text-gray-500 text-base">
            Actualmente, soy estudiante de la carrera de Ingeniería en
            Computación y aprovecho mi tiempo libre para ampliar mis
            conocimientos en desarrollo de software, utilizando recursos como
            Udemy, documentación oficial, blogs y otras plataformas.
          </p>

          <div className="grid grid-cols-2 gap-x-2  lg:gap-x-32 gap-y-5">
            <div className="flex items-center gap-x-2.5">
              <AiOutlineCheck className="text-primary-500 text-2xl" />
              <p className="text-white text-base">Andy Mena</p>
            </div>

            <div className="flex items-center gap-x-2.5">
              <AiOutlineCheck className="text-primary-500 text-2xl" />
              <p className="text-white text-base">Nicaragua</p>
            </div>

            <div className="flex items-center gap-x-2.5">
              <AiOutlineCheck className="text-primary-500 text-2xl" />
              <p className="text-white text-base">
                {new Date().getFullYear() - 2001} años
              </p>
            </div>
          </div>

          <div className="bg-darkgray-500 rounded-lg p-6">
            <div className="flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row lg:justify-between lg:items-center lg:gap-x-2.5">
              <div className="flex items-center gap-5">
                <div className="bg-primary-500 rounded-full p-2">
                  <AiOutlineMail className="text-black" />
                </div>

                <div className="flex flex-col gap-y-0">
                  <span className="text-gray-500 font-bold text-sm">Email</span>
                  <p className="text-white text-base">menaandy198@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-primary-500 rounded-full p-2">
                  <AiOutlinePhone className="text-black" />
                </div>

                <div className="flex flex-col gap-y-0">
                  <span className="text-gray-500 font-bold text-sm">
                    Teléfono
                  </span>
                  <p className="text-white text-base">(+505) 7542-2545</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 lg:w-[381] lg:border-l lg:border-l-darkgray-500 lg:pl-11 space-y-5">
          <p className="text-white font-bold text-sm">
            Mi <span className="text-primary-500">Experiencia</span> laboral.
          </p>
          <div className="flex justify-start items-start gap-4 border-b border-darkgray-500 pb-4">
            <div className="rounded-full bg-primary-500 p-2">
              <CgArrowTopRight className="text-2xl text-darkgray-500" />
            </div>
            <div className="flex flex-col gap-y-1">
              <p className="text-gray-500 text-sm">2024 - 2025</p>
              <p className="text-white text-lg">Desarrollador web</p>
              <p className="text-gray-500 text-xs">Kromee Colombia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
