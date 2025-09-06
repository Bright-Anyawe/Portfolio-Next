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
  title: "Anyawe Bright | Creative Digital Solutions Expert | Web Design, Graphics, Video & Marketing",
  description: "Creative Digital Solutions Expert in Tema & Golf City. Specializing in Web Development, Graphic Design, Mobile Apps, Video Editing, Social Media Management & Digital Marketing. Transform your brand with comprehensive creative solutions that drive results.",
  keywords: [
    "Creative digital solutions Tema",
    "Graphic designer Golf City Ghana",
    "Web developer Tema",
    "Mobile app developer Ghana",
    "Video editor Tema Golf City",
    "Social media manager Ghana",
    "Digital marketing expert Tema",
    "UI UX designer Ghana",
    "Brand designer Golf City",
    "Logo design Tema",
    "Website design Ghana",
    "Creative agency Tema",
    "Anyawe Bright",
    "Multi-disciplinary designer Ghana"
  ],
  openGraph: {
    title: "Anyawe Bright | Creative Digital Solutions Expert | Complete Digital Transformation",
    description: "Creative Digital Solutions Expert offering Web Development, Graphic Design, Mobile Apps, Video Editing, Social Media Management & Digital Marketing in Tema & Golf City. Complete digital transformation solutions.",
    url: "https://anyawe-optimize.vercel.app/",
    images: "/assets/In person-portfolio-face-edit.jpg",
    type: "website",
    locale: "en_GH",
    siteName: "Anyawe Bright Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anyawe Bright | Creative Digital Solutions Expert | Web Design, Graphics, Video & Marketing",
    description: "Creative Digital Solutions Expert in Tema & Golf City. Web Development, Graphic Design, Mobile Apps, Video Editing, Social Media Management & Digital Marketing services. Transform your brand today!",
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
