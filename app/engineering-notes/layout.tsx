import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Notes | Anyawe Bright — Software Development Insights",
  description:
    "Engineering notes by Anyawe Bright (Optisware). Learn how Bright builds full-stack software with Next.js, React, and PostgreSQL — architecture decisions, optimization strategies, and development insights.",
  openGraph: {
    title: "Engineering Notes | Anyawe Bright",
    description:
      "Software development insights and engineering notes by Anyawe Bright. Full-stack architecture, optimization, and best practices.",
  },
};

export default function EngineeringNotesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
