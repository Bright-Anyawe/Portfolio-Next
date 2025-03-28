// "use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "./components/SideNav";
import PageTransition from "./components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anyawe Bright",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-gray-900 text-gray-100 min-h-screen`}>
        <PageTransition />
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64 bg-gray-800/50 backdrop-blur-sm">
            <SideNav />
          </div>
          <div className="flex-grow p-6 overflow-y-auto md:p-12 bg-gray-900">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
