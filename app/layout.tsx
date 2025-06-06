import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "./components/SideNav";
import PageTransition from "./components/PageTransition";
import Providers from "./components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3001"),
  title: "Anyawe Bright",
  description: "Bridging the gap between design and functionality. I leverage my expertise in React, Next.js, and Tailwind CSS to create robust and scalable frontend architectures, ensuring optimal performance and accessibility.",
  keywords: ["Best frontend developer", "Best react developer", " Best nextjs", " Best web development", "Best portfolio", "ui/ux", "web design", "javascript", "typescript", "Writer", "Advertiser", "Designer", "Developer", "Blogger", "Freelancer", "Anyawe Bright"],
  openGraph: {
    title: "Anyawe Bright | Frontend Developer Portfolio",
    description: "Bridging the gap between design and functionality. I leverage my expertise in React, Next.js, and Tailwind CSS to create robust and scalable frontend architectures, ensuring optimal performance and accessibility.",
    url: "https://anyawe-bright-portfolio.vercel.app/", 
    images: "/assets/In person-portfolio-face-edit.jpg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anyawe Bright | Frontend Developer Portfolio",
    description: "Bridging the gap between design and functionality. I leverage my expertise in React, Next.js, and Tailwind CSS to create robust and scalable frontend architectures, ensuring optimal performance and accessibility.",
    images: "/assets/Anyawe Img.jpg", 
  },
  robots: {
    index: true,
    follow: true,
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
              </div>
            </div>
          </PageTransition>
        </Providers>
      </body>
    </html>
  );
}
