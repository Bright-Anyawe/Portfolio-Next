import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Anyawe Bright — Optisware Software Development & Web Solutions",
  description:
    "Professional services by Anyawe Bright (Optisware): web development, mobile apps, graphic design, video editing, social media, digital marketing, and AI content creation. Optimized for performance.",
  openGraph: {
    title: "Services | Anyawe Bright — Optisware",
    description:
      "Web development, mobile apps, graphic design, video editing, AI content creation & digital marketing by Anyawe Bright from Tema, Ghana.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
