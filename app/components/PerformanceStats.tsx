"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaRocket, FaShieldAlt, FaMobile, FaSearch } from "react-icons/fa";

interface PerformanceStat {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  color: string;
}

const performanceStats: PerformanceStat[] = [
  {
    icon: <FaRocket className="text-3xl" />,
    title: "Page Load Speed",
    value: "< 2s",
    description: "Lightning-fast loading times for optimal user experience",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <FaMobile className="text-3xl" />,
    title: "Mobile Optimized",
    value: "100%",
    description: "Perfect responsive design across all devices",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <FaSearch className="text-3xl" />,
    title: "SEO Score",
    value: "95+",
    description: "Optimized for search engines and discoverability",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <FaShieldAlt className="text-3xl" />,
    title: "Security Rating",
    value: "A+",
    description: "Enterprise-grade security and data protection",
    color: "from-red-500 to-orange-500"
  }
];

const PerformanceStats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('performance-stats');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="performance-stats" className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Performance</span>{" "}
            <span className="text-gradient bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every project is built with performance, security, and user experience 
            as top priorities. Here's what you can expect from our work.
          </p>
        </motion.div>

        {/* Performance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {performanceStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-6`}>
                  {stat.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {stat.title}
                </h3>
                
                <div className="text-4xl font-bold mb-4">
                  <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </span>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Performance Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Performance Matters
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">53%</div>
                <div className="text-gray-300">of users abandon sites that take longer than 3 seconds to load</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">2x</div>
                <div className="text-gray-300">higher conversion rates with optimized performance</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                <div className="text-gray-300">better search rankings with fast-loading sites</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceStats;