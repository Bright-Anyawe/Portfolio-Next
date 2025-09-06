"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import QuoteButton from "@/app/components/QuoteButton";
import { 
  FaCode, 
  FaPaintBrush, 
  FaMobile, 
  FaVideo, 
  FaHashtag, 
  FaBullhorn,
  FaArrowRight 
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-4xl" />,
    title: "Web Development",
    description: "Custom websites & web applications built with modern technologies",
    features: ["React/Next.js", "Responsive Design", "E-commerce", "CMS Integration"],
    color: "from-blue-500 to-cyan-500",
    href: "/services/web-development"
  },
  {
    icon: <FaPaintBrush className="text-4xl" />,
    title: "Graphic Design",
    description: "Visual identity & brand design that captures your essence",
    features: ["Logo Design", "Brand Identity", "Print Design", "Digital Graphics"],
    color: "from-purple-500 to-pink-500",
    href: "/services/graphic-design"
  },
  {
    icon: <FaMobile className="text-4xl" />,
    title: "Mobile Apps",
    description: "Native & cross-platform mobile applications",
    features: ["iOS & Android", "React Native", "UI/UX Design", "App Store Optimization"],
    color: "from-green-500 to-emerald-500",
    href: "/services/mobile-apps"
  },
  {
    icon: <FaVideo className="text-4xl" />,
    title: "Video Editing",
    description: "Professional video content for all your marketing needs",
    features: ["Promotional Videos", "Social Media Content", "Motion Graphics", "Color Grading"],
    color: "from-red-500 to-orange-500",
    href: "/services/video-editing"
  },
  {
    icon: <FaHashtag className="text-4xl" />,
    title: "Social Media",
    description: "Strategic social media management & content creation",
    features: ["Content Strategy", "Community Management", "Analytics", "Paid Advertising"],
    color: "from-indigo-500 to-purple-500",
    href: "/services/social-media"
  },
  {
    icon: <FaBullhorn className="text-4xl" />,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that deliver results",
    features: ["SEO Optimization", "PPC Campaigns", "Email Marketing", "Analytics & Reporting"],
    color: "from-yellow-500 to-orange-500",
    href: "/services/digital-marketing"
  }
];

const ServicesShowcase = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Creative</span>{" "}
            <span className="text-gradient bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, I provide comprehensive digital solutions 
            that transform your vision into reality and drive measurable results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 h-full border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-red-500 hover:text-red-400 font-semibold group-hover:translate-x-2 transition-all duration-300"
                >
                  Learn More
                  <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl p-8 border border-red-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together. 
              Get a free consultation and custom quote for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton
                service="web-development"
                variant="secondary"
                size="lg"
                className="bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600"
              >
                Get Free Consultation
              </QuoteButton>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-red-500 text-red-500 font-semibold rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesShowcase;