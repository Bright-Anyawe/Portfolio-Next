"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import QuoteButton from "./QuoteButton";
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaArrowRight } from "react-icons/fa";

const ContactCTA = () => {
  const contactMethods = [
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      description: "Quick response guaranteed",
      value: "+233 059 417 2522",
      action: "Chat Now",
      href: "https://wa.me/2330594172522",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      description: "Detailed project discussions",
      value: "anyawe.work@gmail.com",
      action: "Send Email",
      href: "mailto:anyawe.work@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      description: "Direct consultation call",
      value: "+233 059 417 2522",
      action: "Call Now",
      href: "tel:+2330594172522",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const businessInfo = [
    {
      icon: <FaMapMarkerAlt className="text-xl text-red-500" />,
      label: "Location",
      value: "Tema & Golf City, Ghana"
    },
    {
      icon: <FaClock className="text-xl text-blue-500" />,
      label: "Business Hours",
      value: "Mon-Sun: 6:00 AM - 8:00 PM (GMT)"
    },
    {
      icon: <FaArrowRight className="text-xl text-green-500" />,
      label: "Response Time",
      value: "Within 2 hours (business hours)"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto max-w-7xl">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Ready to Start</span>{" "}
            <span className="text-gradient bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
              Your Project?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Let's transform your ideas into reality. Get in touch today for a free consultation 
            and discover how we can help grow your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <QuoteButton
              service="web-development"
              variant="secondary"
              size="lg"
              className="bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600"
            >
              Get Free Quote
            </QuoteButton>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-red-500 text-red-500 font-bold text-lg rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              View All Services
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full text-center">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${method.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 mb-4">{method.description}</p>
                <p className="text-lg text-gray-300 mb-6 font-mono">{method.value}</p>
                
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${method.color} text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                >
                  {method.action}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Business Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Business Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessInfo.map((info, index) => (
              <div key={info.label} className="flex items-center gap-4">
                {info.icon}
                <div>
                  <div className="text-sm text-gray-400">{info.label}</div>
                  <div className="text-white font-semibold">{info.value}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Happy Clients" },
              { number: "100+", label: "Projects Delivered" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;