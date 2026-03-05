import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Anyawe Bright — Software Development Articles",
  description:
    "Blog posts and articles by Anyawe Bright (Bright Anyawe / Optisware). Covering software development, web optimization, Next.js, React, and modern web technologies.",
  openGraph: {
    title: "Blog | Anyawe Bright — Software Developer",
    description:
      "Software development articles by Anyawe Bright. Web development insights, tutorials, and modern tech topics.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
