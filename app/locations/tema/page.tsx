"use client";
import { motion } from "framer-motion";
import Script from "next/script";

export default function TemaPage() {
  return (
    <>
      <Script
        id="tema-location-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Frontend Development Services in Tema",
            "description": "Professional frontend development services in Tema, Ghana. Specializing in React, Next.js, and modern web technologies.",
            "url": "https://anyawe-bright-portfolio.vercel.app/locations/tema",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Anyawe Bright - Frontend Development Services",
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
          Frontend Development Services in Tema
        </h1>
        
        <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Local Web Development Expertise in Tema
          </h2>
          <p className="text-gray-300 mb-4">
            As a frontend developer based in Tema, I provide comprehensive web development services to businesses and individuals in the area. My expertise in modern web technologies ensures that your digital presence stands out in the local market.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Custom website development for Tema businesses</li>
            <li>E-commerce solutions for local retailers</li>
            <li>Responsive web design for mobile-first users</li>
            <li>Website maintenance and updates</li>
            <li>Local SEO optimization</li>
          </ul>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Why Choose Local Development Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium text-blue-300 mb-2">Local Understanding</h3>
              <p className="text-gray-300">
                Deep understanding of the Tema market and business environment
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-blue-300 mb-2">Quick Response</h3>
              <p className="text-gray-300">
                Faster communication and support for local businesses
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-blue-300 mb-2">Face-to-Face Meetings</h3>
              <p className="text-gray-300">
                Available for in-person consultations in Tema
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-blue-300 mb-2">Local Support</h3>
              <p className="text-gray-300">
                Dedicated support for businesses in the Tema area
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Contact for Local Services
          </h2>
          <p className="text-gray-300 mb-4">
            Ready to enhance your online presence in Tema? Contact me for a free consultation about your web development needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </>
  );
} 