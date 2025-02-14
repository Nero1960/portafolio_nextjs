import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andy Mena",
  description:
    "Hi There! Soy Andy Mena, un desarrollador de software, apasionado por la tecnología y la programación. Me encanta aprender cosas nuevas y compartir conocimiento. ¡Bienvenido a mi sitio web!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-darkgray-500`}
      >
        <div className="lg:max-w-6xl lg:mx-auto px-5 lg:px-0">{children}</div>
      </body>
    </html>
  );
}
