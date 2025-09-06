"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import QuoteButton from "@/app/components/QuoteButton";
import { 
  FaVideo, 
  FaPlay, 
  FaFilm, 
  FaPalette, 
  FaVolumeUp, 
  FaCheck,
  FaStar,
  FaArrowRight,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaMagic,
  FaCut
} from "react-icons/fa";

const VideoEditingPage = () => {
  const services = [
    {
      icon: <FaFilm className="text-3xl text-red-500" />,
      title: "Promotional Videos",
      description: "Compelling promotional content that showcases your products, services, and brand story."
    },
    {
      icon: <FaInstagram className="text-3xl text-pink-500" />,
      title: "Social Media Content",
      description: "Engaging short-form videos optimized for Instagram, TikTok, Facebook, and other platforms."
    },
    {
      icon: <FaPlay className="text-3xl text-blue-500" />,
      title: "Product Demonstrations",
      description: "Clear and engaging product demos that highlight features and benefits effectively."
    },
    {
      icon: <FaMagic className="text-3xl text-purple-500" />,
      title: "Motion Graphics",
      description: "Eye-catching animated graphics, titles, and visual effects to enhance your videos."
    },
    {
      icon: <FaPalette className="text-3xl text-yellow-500" />,
      title: "Color Grading",
      description: "Professional color correction and grading to achieve the perfect visual tone."
    },
    {
      icon: <FaVolumeUp className="text-3xl text-green-500" />,
      title: "Audio Enhancement",
      description: "Crystal clear audio with noise reduction, mixing, and soundtrack integration."
    }
  ];

  const software = [
    { name: "Adobe Premiere Pro", level: 95 },
    { name: "Adobe After Effects", level: 90 },
    { name: "DaVinci Resolve", level: 85 },
    { name: "Final Cut Pro", level: 80 },
    { name: "Adobe Audition", level: 85 },
    { name: "Motion Graphics", level: 90 },
    { name: "Color Grading", level: 88 },
    { name: "Audio Mixing", level: 82 }
  ];

  const packages = [
    {
      name: "Basic Edit",
      price: "$200",
      description: "Perfect for simple video projects",
      features: [
        "Up to 5 minutes final video",
        "Basic cuts and transitions",
        "Color correction",
        "Audio cleanup",
        "Title graphics",
        "2 revisions included",
        "HD 1080p export",
        "3-day turnaround"
      ],
      popular: false
    },
    {
      name: "Professional Edit",
      price: "$500",
      description: "Comprehensive video editing solution",
      features: [
        "Up to 10 minutes final video",
        "Advanced editing techniques",
        "Motion graphics & animations",
        "Professional color grading",
        "Audio mixing & enhancement",
        "Custom intro/outro",
        "Unlimited revisions",
        "4K export available",
        "5-day turnaround",
        "Social media versions"
      ],
      popular: true
    },
    {
      name: "Premium Production",
      price: "$1,000+",
      description: "Full-scale video production",
      features: [
        "Unlimited video length",
        "Complex motion graphics",
        "Advanced visual effects",
        "Professional sound design",
        "Multiple format exports",
        "Dedicated project manager",
        "Rush delivery available",
        "Source files included",
        "Extended support",
        "Commercial licensing"
      ],
      popular: false
    }
  ];

  const videoTypes = [
    {
      title: "Marketing Videos",
      description: "Promotional content that drives engagement and conversions",
      icon: <FaFilm className="text-4xl text-red-500" />,
      examples: ["Product launches", "Brand stories", "Testimonials", "Explainer videos"]
    },
    {
      title: "Social Media Content",
      description: "Platform-optimized videos for maximum social engagement",
      icon: <FaInstagram className="text-4xl text-pink-500" />,
      examples: ["Instagram Reels", "TikTok videos", "YouTube Shorts", "Facebook posts"]
    },
    {
      title: "Corporate Videos",
      description: "Professional content for business communications",
      icon: <FaLinkedin className="text-4xl text-blue-500" />,
      examples: ["Company overviews", "Training videos", "Event coverage", "Presentations"]
    },
    {
      title: "Educational Content",
      description: "Informative videos that teach and engage audiences",
      icon: <FaYoutube className="text-4xl text-red-600" />,
      examples: ["Tutorials", "How-to guides", "Course content", "Webinar editing"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Project Brief",
      description: "We discuss your vision, goals, and requirements for the video project."
    },
    {
      step: "02",
      title: "Content Review",
      description: "Analyze your raw footage and plan the editing approach and style."
    },
    {
      step: "03",
      title: "Rough Cut",
      description: "Create initial edit with basic cuts, structure, and pacing."
    },
    {
      step: "04",
      title: "Fine Editing",
      description: "Add effects, graphics, color grading, and audio enhancement."
    },
    {
      step: "05",
      title: "Final Delivery",
      description: "Export in required formats and deliver the completed video."
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
            <div className="p-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl">
              <FaVideo className="text-4xl text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-white">Video</span>{" "}
              <span className="text-gradient bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Editing
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your raw footage into compelling visual stories that captivate audiences 
            and drive results. Professional video editing services for marketing, social media, 
            and corporate communications.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span>Professional Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>Fast Turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPlay className="text-red-500" />
              <span>Multiple Formats</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteButton 
              service="video-editing"
              variant="secondary"
              size="lg"
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
            >
              Get Video Quote
            </QuoteButton>
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-red-500 text-red-500 font-bold rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300"
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
            Video Editing Services
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

        {/* Video Types Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Types of Videos We Edit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoTypes.map((type, index) => (
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
                      {type.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Software & Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Software & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {software.map((tool, index) => (
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
                      className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full"
                    />
                  </div>
                  <span className="text-red-400 font-bold">{tool.level}%</span>
                </div>
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
            Our Editing Process
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
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
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
            Video Editing Packages
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
                    ? 'border-red-500 scale-105' 
                    : 'border-gray-700/50 hover:border-gray-600/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-red-500 mb-4">{pkg.price}</div>
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
                  service="video-editing"
                  package={pkg.name}
                  variant={pkg.popular ? 'secondary' : 'outline'}
                  className={pkg.popular ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 w-full' : 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white w-full'}
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
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-3xl p-12 border border-red-500/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Amazing Videos?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your raw footage into compelling visual stories that engage 
              your audience and drive results. Let's bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <QuoteButton
                service="video-editing"
                variant="secondary"
                size="lg"
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
              >
                Start Your Video Project
                <FaArrowRight className="ml-2" />
              </QuoteButton>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-red-500 text-red-500 font-bold text-lg rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300"
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

export default VideoEditingPage;