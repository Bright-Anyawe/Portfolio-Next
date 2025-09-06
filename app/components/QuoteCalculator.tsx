"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCalculator, FaWhatsapp, FaCheck, FaExchangeAlt } from "react-icons/fa";
import { openWhatsAppQuote } from "@/app/utils/whatsapp";
import { formatDualPrice } from "@/app/utils/currency";

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  description: string;
}

interface FeatureOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

const services: ServiceOption[] = [
  { id: 'web-development', name: 'Web Development', basePrice: 500, description: 'Custom websites & web apps' },
  { id: 'graphic-design', name: 'Graphic Design', basePrice: 150, description: 'Logos, branding & graphics' },
  { id: 'mobile-apps', name: 'Mobile Apps', basePrice: 1200, description: 'iOS & Android applications' },
  { id: 'video-editing', name: 'Video Editing', basePrice: 200, description: 'Professional video content' },
  { id: 'social-media', name: 'Social Media', basePrice: 300, description: 'Monthly management package' },
  { id: 'digital-marketing', name: 'Digital Marketing', basePrice: 400, description: 'Monthly marketing package' }
];

const features: FeatureOption[] = [
  { id: 'rush-delivery', name: 'Rush Delivery (50% faster)', price: 200, description: 'Priority handling' },
  { id: 'premium-support', name: 'Premium Support (6 months)', price: 150, description: 'Extended support' },
  { id: 'seo-optimization', name: 'Advanced SEO Package', price: 300, description: 'Complete SEO setup' },
  { id: 'analytics-setup', name: 'Analytics & Tracking', price: 100, description: 'Google Analytics & more' },
  { id: 'content-creation', name: 'Content Creation', price: 250, description: 'Professional content' },
  { id: 'maintenance', name: 'Monthly Maintenance', price: 100, description: 'Ongoing updates & fixes' }
];

const QuoteCalculator = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [projectComplexity, setProjectComplexity] = useState<number>(1);
  const [isOpen, setIsOpen] = useState(false);
  const [showGHS, setShowGHS] = useState(false);

  const complexityMultipliers = {
    1: { name: 'Basic', multiplier: 1, description: 'Simple requirements' },
    2: { name: 'Standard', multiplier: 1.5, description: 'Moderate complexity' },
    3: { name: 'Advanced', multiplier: 2.5, description: 'Complex requirements' },
    4: { name: 'Enterprise', multiplier: 4, description: 'Large-scale project' }
  };

  const calculateTotal = () => {
    if (!selectedService) return 0;
    
    const service = services.find(s => s.id === selectedService);
    if (!service) return 0;

    const basePrice = service.basePrice;
    const complexityMultiplier = complexityMultipliers[projectComplexity as keyof typeof complexityMultipliers].multiplier;
    const featuresPrice = selectedFeatures.reduce((total, featureId) => {
      const feature = features.find(f => f.id === featureId);
      return total + (feature?.price || 0);
    }, 0);

    return Math.round((basePrice * complexityMultiplier) + featuresPrice);
  };

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const handleGetQuote = () => {
    const service = services.find(s => s.id === selectedService);
    const selectedFeatureNames = selectedFeatures.map(id => 
      features.find(f => f.id === id)?.name
    ).filter(Boolean);
    
    const complexity = complexityMultipliers[projectComplexity as keyof typeof complexityMultipliers];
    const total = calculateTotal();

    let message = `I'm interested in ${service?.name} services.\n\n`;
    message += `Project Details:\n`;
    message += `• Complexity: ${complexity.name} (${complexity.description})\n`;
    message += `• Estimated Budget: $${total}\n\n`;
    
    if (selectedFeatureNames.length > 0) {
      message += `Additional Features:\n`;
      selectedFeatureNames.forEach(feature => {
        message += `• ${feature}\n`;
      });
      message += '\n';
    }
    
    message += `Please provide me with a detailed quote and let's discuss my project requirements.`;

    openWhatsAppQuote({
      service: service?.name || 'General Services',
      message
    });
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Toggle Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            <FaCalculator className="text-xl" />
            {isOpen ? 'Hide' : 'Get Instant'} Quote Calculator
          </button>
        </motion.div>

        {/* Calculator */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Quick Quote Calculator
            </h3>

            {/* Service Selection */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-white mb-4">
                Select Service
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedService === service.id
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <div className="font-semibold text-white">{service.name}</div>
                    <div className="text-sm text-gray-400 mb-2">{service.description}</div>
                    <div className="text-blue-400 font-bold">
                      From {showGHS 
                        ? formatDualPrice(service.basePrice).ghs 
                        : formatDualPrice(service.basePrice).usd
                      }
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Complexity Selection */}
            {selectedService && (
              <div className="mb-8">
                <label className="block text-lg font-semibold text-white mb-4">
                  Project Complexity
                </label>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {Object.entries(complexityMultipliers).map(([key, complexity]) => (
                    <button
                      key={key}
                      onClick={() => setProjectComplexity(parseInt(key))}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                        projectComplexity === parseInt(key)
                          ? 'border-purple-500 bg-purple-500/10'
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                    >
                      <div className="font-semibold text-white">{complexity.name}</div>
                      <div className="text-sm text-gray-400">{complexity.description}</div>
                      <div className="text-purple-400 font-bold">×{complexity.multiplier}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Features Selection */}
            {selectedService && (
              <div className="mb-8">
                <label className="block text-lg font-semibold text-white mb-4">
                  Additional Features (Optional)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <button
                      key={feature.id}
                      onClick={() => handleFeatureToggle(feature.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                        selectedFeatures.includes(feature.id)
                          ? 'border-green-500 bg-green-500/10'
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          selectedFeatures.includes(feature.id)
                            ? 'border-green-500 bg-green-500'
                            : 'border-gray-400'
                        }`}>
                          {selectedFeatures.includes(feature.id) && (
                            <FaCheck className="text-white text-xs" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-white">{feature.name}</div>
                          <div className="text-sm text-gray-400">{feature.description}</div>
                        </div>
                        <div className="text-green-400 font-bold">+${feature.price}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Total & CTA */}
            {selectedService && (
              <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-xl p-6 border border-red-500/20">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-gray-400">Estimated Total</div>
                    <div className="text-4xl font-bold text-white">
                      {showGHS 
                        ? formatDualPrice(calculateTotal()).ghs 
                        : formatDualPrice(calculateTotal()).usd
                      }
                    </div>
                    <button
                      onClick={() => setShowGHS(!showGHS)}
                      className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-300 transition-colors duration-200 mt-2"
                    >
                      <FaExchangeAlt className="text-xs" />
                      Switch to {showGHS ? 'USD' : 'GHS'}
                    </button>
                    <div className="text-sm text-gray-400">*Final price may vary based on specific requirements</div>
                  </div>
                  <button
                    onClick={handleGetQuote}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <FaWhatsapp className="text-xl" />
                    Get Detailed Quote
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteCalculator;