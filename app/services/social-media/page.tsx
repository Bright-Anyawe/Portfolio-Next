"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import QuoteButton from "@/app/components/QuoteButton";
import { 
  FaHashtag, 
  FaInstagram, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaTiktok,
  FaCheck,
  FaStar,
  FaArrowRight,
  FaUsers,
  FaChartLine,
  FaCalendarAlt,
  FaBullhorn,
  FaHeart,
  FaComments
} from "react-icons/fa";

const SocialMediaPage = () => {
  const services = [
    {
      icon: <FaCalendarAlt className="text-3xl text-blue-500" />,
      title: "Content Strategy & Planning",
      description: "Develop comprehensive social media strategies aligned with your business goals."
    },
    {
      icon: <FaUsers className="text-3xl text-purple-500" />,
      title: "Community Management",
      description: "Engage with your audience, respond to comments, and build meaningful relationships."
    },
    {
      icon: <FaChartLine className="text-3xl text-green-500" />,
      title: "Analytics & Reporting",
      description: "Track performance metrics and provide detailed insights to optimize your strategy."
    },
    {
      icon: <FaBullhorn className="text-3xl text-red-500" />,
      title: "Paid Social Advertising",
      description: "Create and manage targeted ad campaigns to reach your ideal audience."
    },
    {
      icon: <FaHeart className="text-3xl text-pink-500" />,
      title: "Content Creation",
      description: "Design engaging posts, graphics, and videos that resonate with your audience."
    },
    {
      icon: <FaHashtag className="text-3xl text-indigo-500" />,
      title: "Hashtag Research",
      description: "Identify trending and relevant hashtags to increase your content's reach."
    }
  ];

  const platforms = [
    {
      name: "Instagram",
      icon: <FaInstagram className="text-4xl text-pink-500" />,
      description: "Visual storytelling through posts, stories, reels, and IGTV",
      features: ["Feed posts", "Stories", "Reels", "IGTV", "Shopping tags"]
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="text-4xl text-blue-600" />,
      description: "Community building and targeted advertising",
      features: ["Page management", "Groups", "Events", "Ads", "Messenger"]
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-4xl text-blue-700" />,
      description: "Professional networking and B2B marketing",
      features: ["Company pages", "Articles", "LinkedIn Ads", "Groups", "Events"]
    },
    {
      name: "TikTok",
      icon: <FaTiktok className="text-4xl text-black" />,
      description: "Short-form video content for younger audiences",
      features: ["Video creation", "Trends", "Hashtag challenges", "Duets", "Effects"]
    },
    {
      name: "Twitter/X",
      icon: <FaTwitter className="text-4xl text-blue-400" />,
      description: "Real-time engagement and thought leadership",
      features: ["Tweets", "Threads", "Spaces", "Lists", "Twitter Ads"]
    }
  ];

  const tools = [
    { name: "Hootsuite", level: 95 },
    { name: "Buffer", level: 90 },
    { name: "Canva Pro", level: 95 },
    { name: "Facebook Business Manager", level: 90 },
    { name: "Instagram Creator Studio", level: 85 },
    { name: "Google Analytics", level: 88 },
    { name: "Sprout Social", level: 80 },
    { name: "Later", level: 85 }
  ];

  const packages = [
    {
      name: "Starter Package",
      price: "$300",
      description: "Perfect for small businesses getting started",
      features: [
        "2 social media platforms",
        "10 posts per month",
        "Basic graphic design",
        "Hashtag research",
        "Monthly analytics report",
        "Community management (2hrs/week)",
        "Content calendar",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Growth Package",
      price: "$600",
      description: "Ideal for growing businesses",
      features: [
        "4 social media platforms",
        "20 posts per month",
        "Custom graphic design",
        "Video content creation",
        "Advanced hashtag strategy",
        "Bi-weekly analytics reports",
        "Community management (5hrs/week)",
        "Paid ads management ($200 ad spend)",
        "Priority support",
        "Monthly strategy calls"
      ],
      popular: true
    },
    {
      name: "Enterprise Package",
      price: "$1,200+",
      description: "Comprehensive social media solution",
      features: [
        "All major platforms",
        "40+ posts per month",
        "Premium content creation",
        "Video & motion graphics",
        "Influencer outreach",
        "Weekly analytics reports",
        "Full community management",
        "Advanced paid advertising",
        "Dedicated account manager",
        "24/7 support",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const contentTypes = [
    {
      title: "Educational Content",
      description: "Informative posts that provide value to your audience",
      examples: ["How-to guides", "Tips & tricks", "Industry insights", "Tutorials"]
    },
    {
      title: "Behind-the-Scenes",
      description: "Authentic content that humanizes your brand",
      examples: ["Team spotlights", "Office tours", "Process videos", "Day-in-the-life"]
    },
    {
      title: "User-Generated Content",
      description: "Leverage content created by your customers and fans",
      examples: ["Customer reviews", "Photo contests", "Testimonials", "Reposted content"]
    },
    {
      title: "Promotional Content",
      description: "Strategic promotion of your products and services",
      examples: ["Product launches", "Special offers", "Event announcements", "Sales"]
    }
  ];

  const metrics = [
    { name: "Follower Growth", value: "+150%", description: "Average increase in followers" },
    { name: "Engagement Rate", value: "8.5%", description: "Average engagement across platforms" },
    { name: "Reach Increase", value: "+200%", description: "Improvement in content reach" },
    { name: "Lead Generation", value: "+75%", description: "Increase in social media leads" }
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
            <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl">
              <FaHashtag className="text-4xl text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-white">Social Media</span>{" "}
              <span className="text-gradient bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Management
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Build a strong social media presence with strategic content creation, 
            community management, and data-driven campaigns that engage your audience 
            and drive business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span>Proven Results</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>All Major Platforms</span>
            </div>
            <div className="flex items-center gap-2">
              <FaChartLine className="text-indigo-500" />
              <span>Data-Driven Strategy</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteButton 
              service="social-media"
              variant="secondary"
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
            >
              Get Social Media Quote
            </QuoteButton>
            <Link
              href="#results"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-indigo-500 text-indigo-500 font-bold rounded-xl hover:bg-indigo-500 hover:text-white transition-all duration-300"
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
            Social Media Management Services
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

        {/* Platforms Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Platforms We Manage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  {platform.icon}
                  <h3 className="text-2xl font-bold text-white">{platform.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{platform.description}</p>
                <div className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content Types Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Content We Create
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {type.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                      {example}
                    </div>
                  ))}
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
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
              >
                <div className="text-4xl font-bold text-indigo-500 mb-2">{metric.value}</div>
                <h3 className="text-xl font-bold text-white mb-2">{metric.name}</h3>
                <p className="text-gray-300 text-sm">{metric.description}</p>
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
            Tools & Expertise
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
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                    />
                  </div>
                  <span className="text-indigo-400 font-bold">{tool.level}%</span>
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
            Social Media Management Packages
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
                    ? 'border-indigo-500 scale-105' 
                    : 'border-gray-700/50 hover:border-gray-600/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-indigo-500 mb-4">{pkg.price}<span className="text-lg text-gray-400">/month</span></div>
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
                  service="social-media"
                  package={pkg.name}
                  variant={pkg.popular ? 'secondary' : 'outline'}
                  className={pkg.popular ? 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 w-full' : 'border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white w-full'}
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
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl p-12 border border-indigo-500/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Grow Your Social Presence?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's create a social media strategy that builds your brand, engages your audience, 
              and drives real business results across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <QuoteButton
                service="social-media"
                variant="secondary"
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
              >
                Start Growing Today
                <FaArrowRight className="ml-2" />
              </QuoteButton>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-indigo-500 text-indigo-500 font-bold text-lg rounded-xl hover:bg-indigo-500 hover:text-white transition-all duration-300"
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

export default SocialMediaPage;