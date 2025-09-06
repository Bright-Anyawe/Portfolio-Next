"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import QuoteButton from "@/app/components/QuoteButton";
import { 
  FaMobile, 
  FaApple, 
  FaAndroid, 
  FaRocket, 
  FaShieldAlt, 
  FaCheck,
  FaStar,
  FaArrowRight,
  FaCode,
  FaUsers,
  FaBell,
  FaCreditCard,
  FaChartLine,
  FaCog
} from "react-icons/fa";

const MobileAppsPage = () => {
  const features = [
    {
      icon: <FaApple className="text-3xl text-gray-300" />,
      title: "iOS Development",
      description: "Native iOS apps built with Swift and modern iOS frameworks for optimal performance."
    },
    {
      icon: <FaAndroid className="text-3xl text-green-500" />,
      title: "Android Development",
      description: "Native Android apps using Kotlin and Java for seamless Android experience."
    },
    {
      icon: <FaCode className="text-3xl text-blue-500" />,
      title: "Cross-Platform",
      description: "React Native and Flutter apps that work perfectly on both iOS and Android."
    },
    {
      icon: <FaUsers className="text-3xl text-purple-500" />,
      title: "UI/UX Design",
      description: "Intuitive and beautiful app interfaces designed for optimal user experience."
    },
    {
      icon: <FaBell className="text-3xl text-yellow-500" />,
      title: "Push Notifications",
      description: "Engage users with targeted push notifications and real-time updates."
    },
    {
      icon: <FaCreditCard className="text-3xl text-red-500" />,
      title: "Payment Integration",
      description: "Secure payment processing with popular payment gateways and wallets."
    }
  ];

  const technologies = [
    { name: "React Native", level: 90 },
    { name: "Flutter", level: 85 },
    { name: "Swift (iOS)", level: 80 },
    { name: "Kotlin (Android)", level: 75 },
    { name: "Firebase", level: 90 },
    { name: "Node.js Backend", level: 85 },
    { name: "App Store Optimization", level: 80 },
    { name: "Mobile UI/UX", level: 95 }
  ];

  const packages = [
    {
      name: "Basic App",
      price: "$1,200",
      description: "Simple mobile app for small businesses",
      features: [
        "Cross-platform development",
        "5-7 screens/pages",
        "Basic UI/UX design",
        "User authentication",
        "Push notifications",
        "App store submission",
        "3 months support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Business App",
      price: "$2,500",
      description: "Feature-rich app for growing businesses",
      features: [
        "Native iOS & Android apps",
        "10-15 screens/pages",
        "Custom UI/UX design",
        "User profiles & authentication",
        "Payment gateway integration",
        "Push notifications & chat",
        "Admin dashboard",
        "6 months support",
        "Advanced analytics",
        "App store optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise App",
      price: "$5,000+",
      description: "Complex enterprise-grade solution",
      features: [
        "Custom native development",
        "Unlimited screens/features",
        "Advanced UI/UX design",
        "Multi-user system",
        "Complex integrations",
        "Real-time features",
        "Advanced security",
        "12 months support",
        "Performance optimization",
        "Dedicated project manager"
      ],
      popular: false
    }
  ];

  const appTypes = [
    {
      title: "E-commerce Apps",
      description: "Mobile shopping experiences with cart, payments, and order tracking",
      icon: <FaCreditCard className="text-4xl text-green-500" />,
      features: ["Product catalogs", "Shopping cart", "Payment processing", "Order tracking"]
    },
    {
      title: "Social Apps",
      description: "Community and social networking applications with real-time features",
      icon: <FaUsers className="text-4xl text-blue-500" />,
      features: ["User profiles", "Real-time chat", "Social feeds", "Media sharing"]
    },
    {
      title: "Business Apps",
      description: "Productivity and business management applications",
      icon: <FaChartLine className="text-4xl text-purple-500" />,
      features: ["Dashboard analytics", "Task management", "Team collaboration", "Reporting"]
    },
    {
      title: "Utility Apps",
      description: "Tools and utilities that solve specific problems",
      icon: <FaCog className="text-4xl text-yellow-500" />,
      features: ["Custom tools", "Data processing", "Automation", "Integration APIs"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, target audience, and create a detailed project roadmap."
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Create wireframes, mockups, and interactive prototypes for your approval."
    },
    {
      step: "03",
      title: "Development",
      description: "Build your app using the latest technologies and best practices."
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Rigorous testing across devices to ensure quality and performance."
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "App store submission and ongoing support for updates and maintenance."
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
            <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl">
              <FaMobile className="text-4xl text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-white">Mobile</span>{" "}
              <span className="text-gradient bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                Apps
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Bring your ideas to life with custom mobile applications that engage users 
            and drive business growth. Native iOS, Android, and cross-platform solutions 
            built with cutting-edge technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span>App Store Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>Cross-Platform Compatible</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRocket className="text-green-500" />
              <span>Fast Development</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteButton 
              service="mobile-apps"
              variant="secondary"
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
            >
              Get App Quote
            </QuoteButton>
            <Link
              href="#process"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-500 text-green-500 font-bold rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              View Process
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
            Mobile App Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* App Types Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Types of Apps We Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">{type.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{type.title}</h3>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                    />
                  </div>
                  <span className="text-green-400 font-bold">{tech.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Process */}
        <motion.div
          id="process"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
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
            Mobile App Development Packages
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
                    ? 'border-green-500 scale-105' 
                    : 'border-gray-700/50 hover:border-gray-600/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-green-500 mb-4">{pkg.price}</div>
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
                  service="mobile-apps"
                  package={pkg.name}
                  variant={pkg.popular ? 'secondary' : 'outline'}
                  className={pkg.popular ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 w-full' : 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white w-full'}
                >
                  Get Started
                </QuoteButton>
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
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl p-12 border border-green-500/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your idea into a powerful mobile application that engages users 
              and drives business growth. Let's discuss your project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <QuoteButton
                service="mobile-apps"
                variant="secondary"
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
              >
                Start Your App Project
                <FaArrowRight className="ml-2" />
              </QuoteButton>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-green-500 text-green-500 font-bold text-lg rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300"
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

export default MobileAppsPage;