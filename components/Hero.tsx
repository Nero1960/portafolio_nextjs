import Button from "@/components/ui/Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative z-10 px-5 lg:h-screen flex flex-col lg:flex-row gap-y-6  py-20 justify-between items-center lg:-mt-10 lg:px-0 lg:pb-10 lg:py-0 lg:gap-y-0 animate-fade-left">
      <div className="flex flex-col items-start gap-y-4">
        <h1 className="text-white font-bold text-4xl  lg:text-5xl">
          <span className="text-primary-500 block">
            <span className="text-gray-500 block">Hola! Soy</span>Andy Mena
          </span>
          Desarrollador web<span className="text-primary-500">.</span>
        </h1>
        <p className="text-gray-500 text-base">
          Apasionado por crear aplicaciones web dinámicas, <br /> eficientes e
          innovadoras.
        </p>
        <div className="flex gap-x-8">
          <Button href="#projects" title="Proyectos" />
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

      <Image
        priority
        src="/me.png"
        alt="Andy Mena"
        width={507}
        height={507}
        className="rounded-full"
      />
    </div>
  );
}
