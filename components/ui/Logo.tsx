"use client";
import { FaAsterisk } from "react-icons/fa";

export default function Logo() {
  return (
    <div className="flex items-center gap-x-4">
      <FaAsterisk className="text-3xl text-primary-500" />
      <h1 className="text-2xl font-bold text-white">Developer</h1>
    </div>
  );
}
