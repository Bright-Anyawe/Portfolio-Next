import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Anyawe Bright | Software Developer & Optisware Founder | Tema, Ghana",
  description:
    "Learn about Anyawe Bright (Anya / Bright Anyawe) — full-stack software developer from Tema, Ghana. Founder of Optisware, building optimized web solutions with Next.js, React, and PostgreSQL.",
  openGraph: {
    title: "About Anyawe Bright | Software Developer & Optisware",
    description:
      "Anyawe Bright — full-stack software developer from Tema, Ghana. Specializing in optimized web apps and modern tech stacks.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
