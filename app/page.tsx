"use client";
import "./styles/home.css";
import { PersonalImage } from "./components/PersonalImage";
import DownloadButton from "./components/Button";
import TypewriterComponent from "./components/TypeWriter";
import WelcomePopup from "./components/WelcomePopup";
import Testimonials from "./components/Testimonials";
import Script from "next/script";

export default function Home() {
  const stats = [
    { value: "28", label: "Months of experience" },
    { value: "7", label: "Projects completed" },
    { value: "1", label: "Language Learnt" },
  ];
  
  return (
    <main>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Anyawe Bright - Frontend Development Services",
            "image": "/assets/In person-portfolio-face-edit.jpg",
            "description": "Professional frontend development services in Tema and Golf City, specializing in React, Next.js, and modern web technologies.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tema",
              "addressRegion": "Greater Accra",
              "addressCountry": "GH"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "5.6037",
              "longitude": "-0.0170"
            },
            "url": "https://anyawe-bright-portfolio.vercel.app",
            "telephone": "+233-059-417-2522",
            "priceRange": "$$ or cedis",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "06:00",
              "closes": "20:00"
            },
            "sameAs": [
              "https://github.com/Bright-Anyawe",
              "https://www.linkedin.com/in/bright-anyawe-772b46324/",
              "https://x.com/BAnyawe78129"
            ]
          })
        }}
      />

      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Anyawe Bright",
            "url": "https://anyawe-bright-portfolio.vercel.app",
            "image": "/assets/In person-portfolio-face-edit.jpg",
            "sameAs": [
              "https://github.com/Bright-Anyawe",
              "https://www.linkedin.com/in/bright-anyawe-772b46324/",
              "https://x.com/BAnyawe78129"
            ],
            "jobTitle": "Frontend Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tema",
              "addressRegion": "Greater Accra",
              "addressCountry": "GH"
            }
          })
        }}
      />
      
      <WelcomePopup />
      <section className="flex flex-col items-center xl:items-start xl:flex-row gap-8 p-6 xl:p-12 max-w-screen-2xl mx-auto">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <h1 className="devTextEl h1 mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-medium leading-tight">
            Hello I am <br />
            <div className="home-name text-accent text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl text-gradient font-extrabold tracking-wide uppercase">
              Anyawe Bright
            </div>
          </h1>
          <TypewriterComponent />

          <div className="md:hidden my-4">
            <PersonalImage />
          </div>

          <h2 className="text-red-500 text-xl xl:text-2xl 2xl:text-3xl">
            Leading Frontend Developer in Tema & Golf City
          </h2>
          <p className="IntroType max-w-[80vw] xl:max-w-[500px] 2xl:max-w-[600px] mb-9 text-white text-lg xl:text-xl 2xl:text-2xl leading-relaxed">
            Looking for a skilled frontend developer in Tema or Golf City? I specialize in creating responsive, accessible, and high-performance web applications using React and Next.js. With expertise in modern web technologies and a focus on user experience, I help businesses and individuals establish a strong online presence. Whether you need a new website, web application, or improvements to your existing digital platform, I'm here to help. Based in Tema, I'm available for both local and remote projects.
          </p>

          <div className="flex flex-wrap gap-4 justify-center xl:justify-start mb-6">
            <a
              href="https://github.com/Bright-Anyawe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bright-anyawe-772b46324/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://x.com/BAnyawe78129"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-black hover:bg-gray-900 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              X (Twitter)
            </a>
          </div>

          <DownloadButton />
        </div>

        <div className="hidden md:block">
          <PersonalImage />
        </div>
      </section>

      <section className="py-12 xl:py-0">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none justify-center xl:justify-start">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <span className="text-4xl xl:text-6xl 2xl:text-7xl font-extrabold text-accent">
                  {stat.value}
                </span>
                <p className="max-w-[200px] leading-snug text-red-500 text-lg xl:text-xl 2xl:text-2xl">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </main>
  );
}
