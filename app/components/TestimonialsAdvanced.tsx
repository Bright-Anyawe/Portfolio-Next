"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  service: string;
  result: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    image: "/assets/testimonial-1.jpg",
    rating: 5,
    text: "Anyawe transformed our digital presence completely. The website he built not only looks amazing but also increased our conversion rate by 150%. His attention to detail and understanding of our business needs was exceptional.",
    service: "Web Development",
    result: "150% increase in conversions"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "GreenTech Solutions",
    image: "/assets/testimonial-2.jpg",
    rating: 5,
    text: "The mobile app Anyawe developed for us exceeded all expectations. It's user-friendly, fast, and our customers love it. We've seen a 200% increase in user engagement since launch.",
    service: "Mobile App Development",
    result: "200% increase in user engagement"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Brand Manager",
    company: "Fashion Forward",
    image: "/assets/testimonial-3.jpg",
    rating: 5,
    text: "Anyawe's graphic design work is outstanding. He created our entire brand identity from scratch, and the results speak for themselves. Our brand recognition has improved dramatically.",
    service: "Graphic Design",
    result: "Dramatic brand recognition improvement"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Restaurant Owner",
    company: "Bella Vista Restaurant",
    image: "/assets/testimonial-4.jpg",
    rating: 5,
    text: "The social media management service has been a game-changer for our restaurant. Our follower count tripled, and we're seeing more customers than ever before. Highly recommended!",
    service: "Social Media Management",
    result: "300% increase in followers"
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Marketing Manager",
    company: "Fitness Plus",
    image: "/assets/testimonial-5.jpg",
    rating: 5,
    text: "The video content Anyawe created for our fitness programs is absolutely professional. The editing quality is top-notch, and our video engagement rates have skyrocketed.",
    service: "Video Editing",
    result: "Skyrocketed engagement rates"
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "Business Owner",
    company: "Local Services Co.",
    image: "/assets/testimonial-6.jpg",
    rating: 5,
    text: "The digital marketing strategy Anyawe implemented generated more leads in 3 months than we had in the entire previous year. The ROI has been incredible.",
    service: "Digital Marketing",
    result: "400% increase in leads"
  }
];

const TestimonialsAdvanced = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

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
            <span className="text-white">Client</span>{" "}
            <span className="text-gradient bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients say about 
            working with us and the results they've achieved.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/50 mb-12"
        >
          {/* Quote Icon */}
          <div className="absolute top-8 left-8 text-red-500/20">
            <FaQuoteLeft className="text-6xl" />
          </div>

          <div className="relative z-10">
            {/* Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 text-xl" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-medium">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Result Highlight */}
            <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-xl p-4 mb-8 border border-red-500/20">
              <div className="text-sm text-red-400 font-semibold mb-1">RESULT ACHIEVED</div>
              <div className="text-lg font-bold text-white">{currentTestimonial.result}</div>
            </div>

            {/* Client Info */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="text-xl font-bold text-white">{currentTestimonial.name}</div>
                <div className="text-gray-300">{currentTestimonial.role}</div>
                <div className="text-gray-400">{currentTestimonial.company}</div>
              </div>
              <div className="ml-auto">
                <div className="text-sm text-gray-400">Service:</div>
                <div className="text-red-400 font-semibold">{currentTestimonial.service}</div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-all duration-300 pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-all duration-300 pointer-events-auto"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </motion.div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-red-500 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "50+", label: "Happy Clients" },
            { number: "100+", label: "Projects Completed" },
            { number: "99%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsAdvanced;