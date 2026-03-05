import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Anyawe Bright — Optisware Software Portfolio",
  description:
    "Browse software projects by Anyawe Bright (Bright Anyawe / Optisware). Full-stack web apps built with Next.js, React, and PostgreSQL — optimized for performance and great UX.",
  openGraph: {
    title: "Projects | Anyawe Bright — Optisware Portfolio",
    description:
      "Software portfolio by Anyawe Bright. Full-stack web applications optimized for performance, featuring B-K-Numbers and Rising Soul School.",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
