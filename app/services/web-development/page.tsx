"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import QuoteButton from "@/app/components/QuoteButton";
import { 
  FaCode, 
  FaRocket, 
  FaMobile, 
  FaSearch, 
  FaShieldAlt, 
  FaCheck,
  FaStar,
  FaArrowRight,
  FaLaptopCode,
  FaDatabase,
  FaCog
} from "react-icons/fa";

const WebDevelopmentPage = () => {
  const features = [
    {
      icon: <FaLaptopCode className="text-3xl text-blue-500" />,
      title: "Custom Web Development",
      description: "Tailored websites built from scratch to match your unique business needs and brand identity."
    },
    {
      icon: <FaMobile className="text-3xl text-green-500" />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring your website looks perfect on all devices and screen sizes."
    },
    {
      icon: <FaRocket className="text-3xl text-purple-500" />,
      title: "Performance Optimization",
      description: "Lightning-fast loading speeds with optimized code and modern web technologies."
    },
    {
      icon: <FaSearch className="text-3xl text-yellow-500" />,
      title: "SEO-Friendly",
      description: "Built-in SEO optimization to help your website rank higher in search results."
    },
    {
      icon: <FaShieldAlt className="text-3xl text-red-500" />,
      title: "Security First",
      description: "Robust security measures to protect your website and user data from threats."
    },
    {
      icon: <FaDatabase className="text-3xl text-indigo-500" />,
      title: "Database Integration",
      description: "Seamless integration with databases for dynamic content and user management."
    }
  ];

  const technologies = [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "PostgreSQL", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Prisma ORM", level: 80 },
    { name: "Vercel", level: 90 }
  ];

  const packages = [
    {
      name: "Starter Website",
      price: "$500",
      description: "Perfect for small businesses and personal brands",
      features: [
        "5-page responsive website",
        "Mobile-optimized design",
        "Basic SEO setup",
        "Contact form integration",
        "1 month support",
        "Free hosting setup"
      ],
      popular: false
    },
    {
      name: "Business Website",
      price: "$1,200",
      description: "Ideal for growing businesses and e-commerce",
      features: [
        "10-page responsive website",
        "E-commerce functionality",
        "Advanced SEO optimization",
        "Payment gateway integration",
        "Admin dashboard",
        "3 months support",
        "Free hosting & domain setup",
        "Google Analytics integration"
      ],
      popular: true
    },
    {
      name: "Enterprise Solution",
      price: "$2,500+",
      description: "Custom solutions for large businesses",
      features: [
        "Unlimited pages",
        "Custom web application",
        "Advanced database integration",
        "API development",
        "User authentication system",
        "6 months support",
        "Performance optimization",
        "Security audit included"
      ],
      popular: false
    }
  ];

  const portfolio = [
    {
      title: "B-K Numbers Platform",
      description: "Full-stack virtual numbers platform with user authentication and payment integration",
      image: "/assets/b-k numbers images.png",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
      link: "https://b-k-numbers.vercel.app/"
    },
    {
      title: "QuizGuard Pro",
      description: "Interactive quiz platform with real-time scoring and user management",
      image: "/assets/Quiz-gaurd image.png",
      technologies: ["React", "Next.js", "PostgreSQL", "Tailwind CSS"],
      link: "https://quizguard-pro.vercel.app/"
    },
    {
      title: "Devato Institute",
      description: "Educational institution website with course management system",
      image: "/assets/devato-institute-image.png",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      link: "https://devato-computing-training-institue.vercel.app/"
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
            <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl">
              <FaCode className="text-4xl text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-white">Web</span>{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Development
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your digital presence with custom websites and web applications 
            built using cutting-edge technologies. Fast, secure, and scalable solutions 
            that drive business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span>5-Star Rated Service</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRocket className="text-blue-500" />
              <span>Fast Delivery</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteButton 
              service="web-development"
              variant="secondary"
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
            >
              Get Free Quote
            </QuoteButton>
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-500 text-blue-500 font-bold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Why Choose My Web Development Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Technologies & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl"
              >
                <span className="text-white font-semibold">{tech.name}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                    />
                  </div>
                  <span className="text-blue-400 font-bold">{tech.level}%</span>
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
            Web Development Packages
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
                    ? 'border-blue-500 scale-105' 
                    : 'border-gray-700/50 hover:border-gray-600/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-blue-500 mb-4">{pkg.price}</div>
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
                  service="web-development"
                  package={pkg.name}
                  variant={pkg.popular ? 'secondary' : 'outline'}
                  className={pkg.popular ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 w-full' : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white w-full'}
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
            Recent Web Development Projects
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
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
                    >
                      View Live
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl p-12 border border-blue-500/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss your project requirements and create a custom web solution 
              that perfectly fits your business needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <QuoteButton
                service="web-development"
                variant="secondary"
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
              >
                Get Free Consultation
                <FaArrowRight className="ml-2" />
              </QuoteButton>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-blue-500 text-blue-500 font-bold text-lg rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;