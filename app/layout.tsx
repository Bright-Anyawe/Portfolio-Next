import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "./components/SideNav";
import PageTransition from "./components/PageTransition";
import Providers from "./components/Providers";
import Chatbot from "./components/Chatbot";
import WhatsAppButton from "./components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Anyawe Bright | Top Full Stack Developer in Tema & Golf City",
  description: "Leading full stack developer in Tema and Golf City, specializing in HTML5, CSS3, JavaScript, ReactJS, NextJS, Prisma ORM, PostgreSQL, SQL, and Neon DB. Expert in building robust, scalable, and high-performance web applications. Available for local and remote projects.",
  keywords: [
    "Best full stack developer in Tema",
    "Top full stack web developer in Golf City",
    "ReactJS developer Ghana",
    "NextJS expert Tema",
    "Prisma ORM developer Ghana",
    "PostgreSQL developer Ghana",
    "SQL developer Golf City",
    "Neon DB expert Ghana",
    "HTML5 CSS3 JavaScript developer",
    "Full stack web application development Tema",
    "Robust scalable web solutions Ghana",
    "Anyawe Bright",
    "Portfolio website developer"
  ],
  openGraph: {
    title: "Anyawe Bright | Top Full Stack Developer in Tema & Golf City",
    description: "Leading full stack developer in Tema and Golf City, specializing in HTML5, CSS3, JavaScript, ReactJS, NextJS, Prisma ORM, PostgreSQL, SQL, and Neon DB. Expert in building robust, scalable, and high-performance web applications.",
    url: "https://anyawe-bright-portfolio.vercel.app/",
    images: "/assets/In person-portfolio-face-edit.jpg",
    type: "website",
    locale: "en_GH",
    siteName: "Anyawe Bright Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anyawe Bright | Top Full Stack Developer in Tema & Golf City",
    description: "Leading full stack developer in Tema and Golf City, specializing in HTML5, CSS3, JavaScript, ReactJS, NextJS, Prisma ORM, PostgreSQL, SQL, and Neon DB. Expert in building robust, scalable, and high-performance web applications.",
    images: "/assets/Anyawe Img.jpg",
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
    canonical: "https://anyawe-bright-portfolio.vercel.app",
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
                <WhatsAppButton />
              </div>
            </div>
          </PageTransition>
        </Providers>
      </body>
    </html>
  );
}
