"use client";
import Link from "next/link";
import { BiLogoFacebook, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="pt-10 pb-2 space-y-10">
      <div className="max-w-5xl mx-auto  flex flex-col justify-center gap-y-4 lg:gapy-0 items-center lg:flex-row lg:justify-between">
        <p className="text-white font-bold text-center lg:text-left">Copyright @{new Date().getFullYear()}, <span className="text-primary-500 text-sm">Andy, todos los derechos reservados</span></p>
        <nav className="flex items-center gap-x-6">
        <Link href="https://www.facebook.com/andy.mena.5070/" target="_blank">
          <BiLogoFacebook className="text-gray-500 text-2xl hover:text-primary-500 duration-200" />
        </Link>

        <Link href="https://www.linkedin.com/in/andy-mena-/" target="_blank">
          <BiLogoLinkedin className="text-gray-500 text-2xl hover:text-primary-500 duration-200" />
        </Link>

        <Link href="https://github.com/Nero1960" target="_blank">
          <BiLogoGithub className="text-gray-500 text-2xl hover:text-primary-500 duration-200" />
        </Link>        
      </nav>

      </div>
    </footer>
  );
}
