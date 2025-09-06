"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import QuoteButton from "@/app/components/QuoteButton";
import Image from "next/image";
import { 
  FaPaintBrush, 
  FaPalette, 
  FaPrint, 
  FaEye, 
  FaBullhorn, 
  FaCheck,
  FaStar,
  FaArrowRight,
  FaImage,
  FaVectorSquare,
  FaMagic
} from "react-icons/fa";

const GraphicDesignPage = () => {
  const services = [
    {
      icon: <FaVectorSquare className="text-3xl text-purple-500" />,
      title: "Logo Design & Branding",
      description: "Create memorable brand identities that capture your essence and resonate with your audience."
    },
    {
      icon: <FaPrint className="text-3xl text-pink-500" />,
      title: "Print Design",
      description: "Professional print materials including business cards, brochures, flyers, and marketing collateral."
    },
    {
      icon: <FaImage className="text-3xl text-indigo-500" />,
      title: "Digital Graphics",
      description: "Eye-catching digital designs for websites, social media, and online marketing campaigns."
    },
    {
      icon: <FaPalette className="text-3xl text-red-500" />,
      title: "Brand Guidelines",
      description: "Comprehensive brand style guides to ensure consistent visual identity across all platforms."
    },
    {
      icon: <FaBullhorn className="text-3xl text-yellow-500" />,
      title: "Marketing Materials",
      description: "Compelling visual content for advertisements, presentations, and promotional campaigns."
    },
    {
      icon: <FaMagic className="text-3xl text-green-500" />,
      title: "Custom Illustrations",
      description: "Unique illustrations and graphics tailored to your specific needs and brand personality."
    }
  ];

  const tools = [
    { name: "Adobe Photoshop", level: 95 },
    { name: "Adobe Illustrator", level: 90 },
    { name: "Adobe InDesign", level: 85 },
    { name: "Figma", level: 90 },
    { name: "Canva Pro", level: 95 },
    { name: "Adobe After Effects", level: 80 },
    { name: "Sketch", level: 75 },
    { name: "CorelDRAW", level: 70 }
  ];

  const packages = [
    {
      name: "Logo Package",
      price: "$150",
      description: "Perfect for new businesses and startups",
      features: [
        "3 logo concepts",
        "2 revisions included",
        "High-resolution files",
        "Vector formats (AI, EPS)",
        "PNG & JPG formats",
        "Basic brand guidelines"
      ],
      popular: false
    },
    {
      name: "Brand Identity",
      price: "$400",
      description: "Complete brand identity solution",
      features: [
        "Logo design + variations",
        "Business card design",
        "Letterhead design",
        "Brand color palette",
        "Typography selection",
        "Comprehensive brand guidelines",
        "Social media templates",
        "Unlimited revisions"
      ],
      popular: true
    },
    {
      name: "Marketing Suite",
      price: "$800",
      description: "Full marketing design package",
      features: [
        "Complete brand identity",
        "Website graphics package",
        "Social media templates (20+)",
        "Print marketing materials",
        "Email signature design",
        "Presentation template",
        "6 months design support",
        "Priority customer service"
      ],
      popular: false
    }
  ];

  const portfolio = [
    {
      title: "Tech Startup Branding",
      description: "Complete brand identity for innovative tech startup including logo, business cards, and digital assets",
      category: "Branding",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Restaurant Menu Design",
      description: "Elegant menu design with custom illustrations and typography for upscale dining establishment",
      category: "Print Design",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Social Media Campaign",
      description: "Cohesive social media graphics package for product launch campaign across multiple platforms",
      category: "Digital Graphics",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Corporate Presentation",
      description: "Professional presentation template with custom graphics and data visualization elements",
      category: "Marketing Materials",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "E-commerce Graphics",
      description: "Product showcase graphics and promotional banners for online store optimization",
      category: "Digital Graphics",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Event Branding",
      description: "Complete visual identity for corporate event including signage, programs, and digital assets",
      category: "Branding",
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl">
              <FaPaintBrush className="text-4xl text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-white">Graphic</span>{" "}
              <span className="text-gradient bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Design
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Create stunning visual identities that capture your brand's essence and connect 
            with your audience. From logos to complete brand packages, I bring your vision to life 
            with creative excellence and strategic thinking.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span>Award-Winning Designs</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>Unlimited Revisions</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEye className="text-purple-500" />
              <span>Creative Excellence</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteButton 
              service="graphic-design"
              variant="secondary"
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              Get Design Quote
            </QuoteButton>
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-500 text-purple-500 font-bold rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Graphic Design Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Design Tools & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl"
              >
                <span className="text-white font-semibold">{tool.name}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    />
                  </div>
                  <span className="text-purple-400 font-bold">{tool.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Design Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                  pkg.popular 
                    ? 'border-purple-500 scale-105' 
                    : 'border-gray-700/50 hover:border-gray-600/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-purple-500 mb-4">{pkg.price}</div>
                <p className="text-gray-300 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <QuoteButton
                  service="graphic-design"
                  package={pkg.name}
                  variant={pkg.popular ? 'secondary' : 'outline'}
                  className={pkg.popular ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 w-full' : 'border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white w-full'}
                >
                  Get Started
                </QuoteButton>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Section */}
        <motion.div
          id="portfolio"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Design Portfolio Showcase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
              >
                <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <div className="text-white text-center p-6">
                    <div className="text-6xl mb-4 opacity-20">
                      <FaPaintBrush />
                    </div>
                    <div className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                      {project.category}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      href="/contact"
                      className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                    >
                      Request Similar
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-12 border border-purple-500/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's bring your vision to life with stunning graphic design that captures 
              your brand's essence and connects with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <QuoteButton
                service="graphic-design"
                variant="secondary"
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                Start Your Project
                <FaArrowRight className="ml-2" />
              </QuoteButton>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-purple-500 text-purple-500 font-bold text-lg rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GraphicDesignPage;