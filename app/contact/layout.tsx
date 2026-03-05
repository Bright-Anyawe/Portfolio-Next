import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Anyawe Bright | Optisware — Hire a Software Developer",
  description:
    "Get in touch with Anyawe Bright (Anya / Bright) for software development projects. Optisware offers optimized web solutions from Tema, Ghana. Available for remote work.",
  openGraph: {
    title: "Contact Anyawe Bright | Optisware",
    description:
      "Hire Anyawe Bright for software development. Optimized web solutions with Next.js, React, and PostgreSQL.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
