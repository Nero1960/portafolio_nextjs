"use client";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from "react";
import MenuMobile from "./ui/MenuMobile";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="relative z-50 py-6 flex justify-between items-center animate-fade-left">
      <Logo />
      <nav className="hidden lg:flex lg:items-center lg:gap-x-6">
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
      <div
        className="relative rounded-full bg-primary-500 p-2 hover:cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        <RiMenu4Fill className="text-black text-xl font-bold" />
        {showMenu && <MenuMobile />}
      </div>
    </header>
  );
}
