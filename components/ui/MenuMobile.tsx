import Link from "next/link";
import { CiHome, CiUser, CiBezier, CiDumbbell, CiChat1 } from "react-icons/ci";

export default function MenuMobile() {
  return (
    <nav className="absolute z-50 top-16 right-0 flex flex-col p-4 gap-y-4 bg-gray-900 rounded-md animate-fade-left ">
      <Link
        href="/"
        className="flex flex-col justify-center items-center gap-y-1 p-4 border-b border-gray-800 hover:bg-primary-500 hover:rounded-lg text-white hover:text-black duration-300"
      >
        <CiHome className="text-2xl" />
        <p className="text-xs">Inicio</p>
      </Link>

      <Link
        href="#about"
        className="flex flex-col justify-center items-center gap-y-1 p-4 border-b border-gray-800 hover:bg-primary-500 hover:rounded-lg text-white hover:text-black duration-300"
      >
        <CiUser className="text-2xl" />
        <p className="text-xs">Sobre</p>
      </Link>
      <Link
        href="#projects"
        className="flex flex-col justify-center items-center gap-y-1 p-4 border-b border-gray-800 hover:bg-primary-500 hover:rounded-lg text-white hover:text-black duration-300"
      >
        <CiBezier className="text-2xl" />
        <p className="text-xs">Proyectos</p>
      </Link>
      <Link
        href="#skills"
        className="flex flex-col justify-center items-center gap-y-1 p-4 border-b border-gray-800 hover:bg-primary-500 hover:rounded-lg text-white hover:text-black duration-300"
      >
        <CiDumbbell className="text-2xl" />
        <p className="text-xs">Habilidades</p>
      </Link>

      <Link
        href="#contact"
        className="flex flex-col justify-center items-center gap-y-1 p-4 hover:bg-primary-500 hover:rounded-lg text-white hover:text-black duration-300"
      >
        <CiChat1 className="text-2xl" />
        <p className="text-xs">Contacto</p>
      </Link>
    </nav>
  );
}
