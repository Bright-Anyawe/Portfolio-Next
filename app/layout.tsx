import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "./components/SideNav";
import MobileNavigation from "./components/MobileNavigation";
import PageTransition from "./components/PageTransition";
import Providers from "./components/Providers";
import Chatbot from "./components/Chatbot";
import WhatsAppButton from "./components/WhatsAppButton";
import PWAFeatures from "./components/PWAFeatures";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Anyawe Bright | Full‑stack Software Developer & Optisware Solutions | Tema, Ghana",
  description:
    "Anyawe Bright (Anya / Bright Anyawe) — Full‑stack software developer in Tema, Ghana. Founder of Optisware (Optis). Services: web development, mobile apps, graphic design, video editing, social media, digital marketing, and AI content creation. Building optimized solutions with Next.js, React, and PostgreSQL.",
  keywords: [
    "Anyawe Bright",
    "Anyawe",
    "Bright Anyawe",
    "Anya",
    "anyawe",
    "Optisware",
    "Optis",
    "Optimize",
    "Anyawe Optimize",
    "Bright",
    "Software developer Ghana",
    "Software engineer Ghana",
    "Full-stack developer Ghana",
    "Next.js developer Ghana",
    "React developer Ghana",
    "PostgreSQL developer",
    "Prisma developer",
    "Web developer Tema",
    "UI UX designer Ghana",
    "Website design Ghana",
    "AI content creation Ghana",
    "Graphic design Ghana",
    "Mobile app development Ghana",
    "Video editing services Ghana",
    "Social media management Ghana",
    "Digital marketing Ghana",
    "Web development services Tema",
    "B-K-Numbers",
    "Benbaxco",
    "Cognitionus",
    "Rising Soul School"
  ],
  openGraph: {
    title: "Anyawe Bright | Full‑stack Software Developer & Optisware | Tema, Ghana",
    description:
      "Anyawe Bright (Anya / Bright) — Software developer building optimized web apps with Next.js, React & PostgreSQL. Optisware solutions for UX, performance, and reliability.",
    url: "https://anyawe-optimize.vercel.app/",
    images: "/assets/optimize.jpeg",
    type: "website",
    locale: "en_GH",
    siteName: "Anyawe Bright — Optisware",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anyawe Bright | Software Developer & Optisware | Ghana",
    description:
      "Anyawe Bright (Anya / Bright) — Software developer from Tema, Ghana. Building optimized web solutions with Next.js, React & PostgreSQL. Open to remote roles.",
    images: "/assets/optimize.jpeg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://anyawe-optimize.vercel.app",
  },
  verification: {
    google: "google36f14d228da91455",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Anyawe Bright — Optisware",
              "alternateName": ["Optisware", "Optis", "Anyawe Optimize", "Anyawe Bright Portfolio"],
              "url": "https://anyawe-optimize.vercel.app/",
              "description": "Portfolio and software development services by Anyawe Bright (Anya / Bright Anyawe). Optimized web solutions with Next.js, React, and PostgreSQL.",
              "publisher": {
                "@type": "Person",
                "name": "Anyawe Bright",
                "alternateName": ["Bright Anyawe", "Anya", "Anyawe", "Bright"]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-gray-900 text-gray-100 min-h-screen`}>
        <Providers>
          <PageTransition>
            <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
              <div className="w-full flex-none md:w-64 bg-gray-800/50 backdrop-blur-sm">
                <SideNav />
              </div>
              <div className="flex-grow p-6 overflow-y-auto md:p-12 bg-gray-900">
                {children}
                {/* Chatbot floating widget */}
                <Chatbot />
                <MobileNavigation />
                <WhatsAppButton />
                <PWAFeatures />
              </div>
            </div>
          </PageTransition>
        </Providers>
      </body>
    </html>
  );
}
