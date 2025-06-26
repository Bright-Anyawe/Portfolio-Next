"use client";
import { motion } from "framer-motion";
import Script from "next/script";

export default function GolfCityPage() {
  return (
    <>
      <Script
        id="golf-city-location-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Frontend Development Services in Golf City",
            "description": "Professional frontend development services in Golf City, Ghana. Specializing in React, Next.js, and modern web technologies.",
            "url": "https://anyawe-bright-portfolio.vercel.app/locations/golf-city",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Anyawe Bright - Frontend Development Services",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Golf City",
                "addressRegion": "Greater Accra",
                "addressCountry": "GH"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "5.6037",
                "longitude": "-0.0170"
              }
            }
          })
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-8"
      >
        <h1 className="text-4xl font-bold text-blue-300 mb-6">
          Frontend Development Services in Golf City
        </h1>
        
        <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Premium Web Development in Golf City
          </h2>
          <p className="text-gray-300 mb-4">
            Serving the Golf City community with professional web development services. I help businesses and individuals establish a strong digital presence with modern, responsive websites and applications.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Custom website development for Golf City businesses</li>
            <li>Modern web applications with React and Next.js</li>
            <li>Responsive design for all devices</li>
            <li>Website optimization and maintenance</li>
            <li>Local business SEO services</li>
          </ul>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Benefits of Local Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium text-blue-300 mb-2">Community Focus</h3>
              <p className="text-gray-300">
                Understanding of Golf City&apos;s business community and needs
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-blue-300 mb-2">Personal Service</h3>
              <p className="text-gray-300">
                Dedicated attention to local business requirements
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-blue-300 mb-2">Local Meetings</h3>
              <p className="text-gray-300">
                Available for face-to-face consultations in Golf City
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-blue-300 mb-2">Quick Support</h3>
              <p className="text-gray-300">
                Fast response times for local businesses
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Start Your Project
          </h2>
          <p className="text-gray-300 mb-4">
            Looking to establish or improve your online presence in Golf City? Contact me for a free consultation about your web development needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Contact Now
          </a>
        </div>
      </motion.div>
    </>
  );
}