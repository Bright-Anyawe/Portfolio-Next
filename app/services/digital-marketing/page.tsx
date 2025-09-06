"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import QuoteButton from "@/app/components/QuoteButton";
import { 
  FaBullhorn, 
  FaSearch, 
  FaGoogle, 
  FaEnvelope, 
  FaChartLine, 
  FaTarget,
  FaCheck,
  FaStar,
  FaArrowRight,
  FaRocket,
  FaDollarSign,
  FaUsers,
  FaCog,
  FaLightbulb,
  FaShoppingCart
} from "react-icons/fa";

const DigitalMarketingPage = () => {
  const services = [
    {
      icon: <FaSearch className="text-3xl text-blue-500" />,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic to your website."
    },
    {
      icon: <FaGoogle className="text-3xl text-red-500" />,
      title: "Google Ads Management",
      description: "Create and optimize PPC campaigns that deliver high-quality leads and conversions."
    },
    {
      icon: <FaEnvelope className="text-3xl text-green-500" />,
      title: "Email Marketing",
      description: "Build and nurture customer relationships through targeted email campaigns."
    },
    {
      icon: <FaChartLine className="text-3xl text-purple-500" />,
      title: "Analytics & Reporting",
      description: "Track performance metrics and provide actionable insights for continuous improvement."
    },
    {
      icon: <FaShoppingCart className="text-3xl text-orange-500" />,
      title: "Conversion Optimization",
      description: "Optimize your website and funnels to increase conversion rates and sales."
    },
    {
      icon: <FaCog className="text-3xl text-indigo-500" />,
      title: "Marketing Automation",
      description: "Streamline your marketing processes with automated workflows and campaigns."
    }
  ];

  const strategies = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Increase organic visibility and drive qualified traffic",
      icon: <FaSearch className="text-4xl text-blue-500" />,
      features: ["Keyword research", "On-page optimization", "Technical SEO", "Link building"]
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Generate immediate results with targeted paid campaigns",
      icon: <FaGoogle className="text-4xl text-red-500" />,
      features: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Campaign optimization"]
    },
    {
      title: "Content Marketing",
      description: "Engage audiences with valuable, relevant content",
      icon: <FaLightbulb className="text-4xl text-yellow-500" />,
      features: ["Blog content", "Video marketing", "Infographics", "Content strategy"]
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and retain customers through email",
      icon: <FaEnvelope className="text-4xl text-green-500" />,
      features: ["Campaign design", "Automation", "Segmentation", "A/B testing"]
    }
  ];

  const tools = [
    { name: "Google Analytics", level: 95 },
    { name: "Google Ads", level: 90 },
    { name: "SEMrush", level: 88 },
    { name: "Mailchimp", level: 85 },
    { name: "HubSpot", level: 80 },
    { name: "Facebook Business Manager", level: 90 },
    { name: "Google Search Console", level: 92 },
    { name: "Hotjar", level: 75 }
  ];

  const packages = [
    {
      name: "Starter Marketing",
      price: "$400",
      description: "Essential digital marketing for small businesses",
      features: [
        "Basic SEO optimization",
        "Google My Business setup",
        "Social media setup",
        "Monthly analytics report",
        "Email marketing setup",
        "Basic keyword research",
        "Competitor analysis",
        "2 hours consultation/month"
      ],
      popular: false
    },
    {
      name: "Growth Marketing",
      price: "$800",
      description: "Comprehensive marketing for growing businesses",
      features: [
        "Advanced SEO optimization",
        "Google Ads management ($500 ad spend)",
        "Email marketing campaigns",
        "Content marketing strategy",
        "Social media advertising",
        "Conversion optimization",
        "Bi-weekly reports",
        "Landing page optimization",
        "4 hours consultation/month",
        "A/B testing"
      ],
      popular: true
    },
    {
      name: "Enterprise Marketing",
      price: "$1,500+",
      description: "Full-scale digital marketing solution",
      features: [
        "Complete SEO strategy",
        "Multi-platform PPC campaigns",
        "Marketing automation setup",
        "Advanced analytics & reporting",
        "Custom landing pages",
        "Lead nurturing campaigns",
        "Dedicated account manager",
        "Weekly strategy calls",
        "Custom integrations",
        "Priority support",
        "Unlimited consultations"
      ],
      popular: false
    }
  ];

  const results = [
    {
      metric: "Traffic Increase",
      value: "+250%",
      description: "Average organic traffic growth",
      icon: <FaChartLine className="text-3xl text-green-500" />
    },
    {
      metric: "Lead Generation",
      value: "+180%",
      description: "Increase in qualified leads",
      icon: <FaUsers className="text-3xl text-blue-500" />
    },
    {
      metric: "Conversion Rate",
      value: "+65%",
      description: "Improvement in conversion rates",
      icon: <FaTarget className="text-3xl text-purple-500" />
    },
    {
      metric: "ROI",
      value: "400%+",
      description: "Return on marketing investment",
      icon: <FaDollarSign className="text-3xl text-yellow-500" />
    }
  ];

  const process = [
    {
      step: "01",
      title: "Strategy Development",
      description: "Analyze your business, competitors, and market to create a custom strategy."
    },
    {
      step: "02",
      title: "Campaign Setup",
      description: "Implement tracking, create campaigns, and set up optimization tools."
    },
    {
      step: "03",
      title: "Execution & Monitoring",
      description: "Launch campaigns and continuously monitor performance metrics."
    },
    {
      step: "04",
      title: "Optimization",
      description: "Analyze data and optimize campaigns for better performance."
    },
    {
      step: "05",
      title: "Reporting & Growth",
      description: "Provide detailed reports and scale successful strategies."
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
            <div className="p-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl">
              <FaBullhorn className="text-4xl text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-white">Digital</span>{" "}
              <span className="text-gradient bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Marketing
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Drive business growth with data-driven digital marketing strategies that increase 
            visibility, generate qualified leads, and maximize ROI across all digital channels.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span>Proven ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>Data-Driven Results</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRocket className="text-yellow-500" />
              <span>Scalable Growth</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteButton 
              service="digital-marketing"
              variant="secondary"
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
            >
              Get Marketing Quote
            </QuoteButton>
            <Link
              href="#results"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-yellow-500 text-yellow-500 font-bold rounded-xl hover:bg-yellow-500 hover:text-white transition-all duration-300"
            >
              View Results
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
            Digital Marketing Services
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

        {/* Marketing Strategies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Marketing Strategies We Implement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">{strategy.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{strategy.title}</h3>
                    <p className="text-gray-300 mb-4">{strategy.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {strategy.features.map((feature, idx) => (
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

        {/* Results Section */}
        <motion.div
          id="results"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Results We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
              >
                <div className="mb-4 flex justify-center">{result.icon}</div>
                <div className="text-4xl font-bold text-yellow-500 mb-2">{result.value}</div>
                <h3 className="text-xl font-bold text-white mb-2">{result.metric}</h3>
                <p className="text-gray-300 text-sm">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Our Marketing Process
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
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Marketing Tools & Platforms
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
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full"
                    />
                  </div>
                  <span className="text-yellow-400 font-bold">{tool.level}%</span>
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
            Digital Marketing Packages
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
                    ? 'border-yellow-500 scale-105' 
                    : 'border-gray-700/50 hover:border-gray-600/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-yellow-500 mb-4">{pkg.price}<span className="text-lg text-gray-400">/month</span></div>
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
                  service="digital-marketing"
                  package={pkg.name}
                  variant={pkg.popular ? 'secondary' : 'outline'}
                  className={pkg.popular ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 w-full' : 'border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white w-full'}
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
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-3xl p-12 border border-yellow-500/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's create a data-driven digital marketing strategy that drives qualified leads, 
              increases conversions, and delivers measurable ROI for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <QuoteButton
                service="digital-marketing"
                variant="secondary"
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
              >
                Start Growing Today
                <FaArrowRight className="ml-2" />
              </QuoteButton>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-yellow-500 text-yellow-500 font-bold text-lg rounded-xl hover:bg-yellow-500 hover:text-white transition-all duration-300"
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

export default DigitalMarketingPage;