import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary": {
          50: "#FAFFEB",
          100: "#F3FFD1",
          200: "#E8FFA4",
          300: "#DCFE76",
          400: "#D2FE4D",
          500: "#C6FE1E",
          600: "#ACE401",
          700: "#7EA801",
          800: "#547001",
          900: "#2A3800",
          950: "#171E00"
        },
        "darkgray": {
          50: "#E8E8E8",
          100: "#D3D3D4",
          200: "#A7A7AA",
          300: "#7B7B7F",
          400: "#4E4E50",
          500: "#242425",
          600: "#1C1C1C",
          700: "#171717",
          800: "#0F0F10",
          900: "#080808",
          950: "#030303"
        },
        "gray": {
          50: "#F2F2F2",
          100: "#E8E8E8",
          200: "#CFCFCF",
          300: "#B8B8B8",
          400: "#9E9E9E",
          500: "#868686",
          600: "#6B6B6B",
          700: "#525252",
          800: "#363636",
          900: "#1C1C1C",
          950: "#0D0D0D"
        },
        black: "#0D0D0D",
        white: "#ffffff"
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
} satisfies Config;
