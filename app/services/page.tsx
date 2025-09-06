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
  FaArrowRight,
  FaCheck,
  FaStar
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-5xl" />,
    title: "Web Development",
    description: "Custom websites & web applications built with cutting-edge technologies",
    longDescription: "Transform your digital presence with modern, responsive websites and powerful web applications. I specialize in creating fast, secure, and scalable solutions that drive business growth.",
    features: [
      "Custom Website Development",
      "E-commerce Solutions", 
      "Web Application Development",
      "CMS Integration",
      "API Development & Integration",
      "Performance Optimization",
      "SEO-Friendly Architecture",
      "Mobile-First Design"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    startingPrice: "$500",
    color: "from-blue-500 to-cyan-500",
    href: "/services/web-development"
  },
  {
    icon: <FaPaintBrush className="text-5xl" />,
    title: "Graphic Design",
    description: "Visual identity & brand design that captures your unique essence",
    longDescription: "Create a memorable brand identity with professional graphic design services. From logos to complete brand packages, I help businesses stand out in competitive markets.",
    features: [
      "Logo Design & Branding",
      "Business Card Design",
      "Brochure & Flyer Design",
      "Social Media Graphics",
      "Website Graphics & Icons",
      "Print Design",
      "Brand Guidelines",
      "Marketing Materials"
    ],
    technologies: ["Adobe Creative Suite", "Figma", "Canva Pro", "Sketch"],
    startingPrice: "$150",
    color: "from-purple-500 to-pink-500",
    href: "/services/graphic-design"
  },
  {
    icon: <FaMobile className="text-5xl" />,
    title: "Mobile App Development",
    description: "Native & cross-platform mobile applications for iOS and Android",
    longDescription: "Reach your customers on-the-go with custom mobile applications. I develop user-friendly, feature-rich apps that provide seamless experiences across all devices.",
    features: [
      "iOS & Android Development",
      "Cross-Platform Solutions",
      "UI/UX Design",
      "App Store Optimization",
      "Push Notifications",
      "In-App Purchases",
      "Analytics Integration",
      "Maintenance & Updates"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    startingPrice: "$1,200",
    color: "from-green-500 to-emerald-500",
    href: "/services/mobile-apps"
  },
  {
    icon: <FaVideo className="text-5xl" />,
    title: "Video Editing",
    description: "Professional video content for marketing, social media, and more",
    longDescription: "Engage your audience with compelling video content. From promotional videos to social media content, I create professional videos that tell your story effectively.",
    features: [
      "Promotional Videos",
      "Social Media Content",
      "Product Demonstrations",
      "Motion Graphics",
      "Color Grading",
      "Audio Enhancement",
      "Subtitle & Captions",
      "Multi-Platform Optimization"
    ],
    technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro"],
    startingPrice: "$200",
    color: "from-red-500 to-orange-500",
    href: "/services/video-editing"
  },
  {
    icon: <FaHashtag className="text-5xl" />,
    title: "Social Media Management",
    description: "Strategic social media management & content creation",
    longDescription: "Build a strong social media presence with strategic content and community management. I help businesses connect with their audience and grow their online community.",
    features: [
      "Content Strategy & Planning",
      "Social Media Graphics",
      "Community Management",
      "Hashtag Research",
      "Analytics & Reporting",
      "Paid Social Advertising",
      "Influencer Outreach",
      "Brand Monitoring"
    ],
    technologies: ["Hootsuite", "Buffer", "Canva", "Facebook Business Manager", "Google Analytics"],
    startingPrice: "$300",
    color: "from-indigo-500 to-purple-500",
    href: "/services/social-media"
  },
  {
    icon: <FaBullhorn className="text-5xl" />,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that deliver measurable results",
    longDescription: "Grow your business with comprehensive digital marketing strategies. I help businesses increase their online visibility, generate leads, and boost conversions through proven marketing techniques.",
    features: [
      "SEO Optimization",
      "Google Ads Management",
      "Email Marketing Campaigns",
      "Content Marketing",
      "Conversion Optimization",
      "Analytics & Reporting",
      "Marketing Automation",
      "Lead Generation"
    ],
    technologies: ["Google Analytics", "Google Ads", "Mailchimp", "SEMrush", "HubSpot"],
    startingPrice: "$400",
    color: "from-yellow-500 to-orange-500",
    href: "/services/digital-marketing"
  }
];

const ServicesPage = () => {
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Creative</span>{" "}
            <span className="text-gradient bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Comprehensive digital solutions to transform your business and accelerate growth. 
            From web development to digital marketing, I provide end-to-end creative services.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>Fast Turnaround</span>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white flex-shrink-0`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-lg">
                      {service.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">Starting at</div>
                    <div className="text-2xl font-bold text-red-500">{service.startingPrice}</div>
                  </div>
                </div>

                {/* Long Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.longDescription}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-4">
                  <QuoteButton
                    service={service.href.split('/').pop() as keyof typeof import('@/app/utils/whatsapp').serviceQuoteTemplates}
                    variant="secondary"
                    className={`flex-1 bg-gradient-to-r ${service.color} hover:opacity-90`}
                  >
                    Get Quote
                  </QuoteButton>
                  <Link
                    href={service.href}
                    className="flex items-center justify-center py-3 px-6 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-red-500 hover:text-red-500 transition-all duration-300"
                  >
                    Learn More
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-3xl p-12 border border-red-500/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss your project and create a custom solution that fits your needs and budget. 
              Get a free consultation and detailed quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <QuoteButton
                service="web-development"
                variant="secondary"
                size="lg"
                className="bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600"
              >
                Get Free Consultation
              </QuoteButton>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-red-500 text-red-500 font-bold text-lg rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;