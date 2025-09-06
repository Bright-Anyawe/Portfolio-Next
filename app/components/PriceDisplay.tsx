"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaDollarSign, FaExchangeAlt } from "react-icons/fa";
import { formatDualPrice, formatCurrency } from "@/app/utils/currency";

interface PriceDisplayProps {
  usdPrice: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showToggle?: boolean;
  layout?: 'horizontal' | 'vertical' | 'compact';
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
  usdPrice,
  className = '',
  size = 'md',
  showToggle = true,
  layout = 'horizontal'
}) => {
  const [showGHS, setShowGHS] = useState(false);
  const dualPrice = formatDualPrice(usdPrice);
  
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  const toggleCurrency = () => {
    setShowGHS(!showGHS);
  };

  if (layout === 'compact') {
    return (
      <div className={`${className}`}>
        <div className={`font-bold text-blue-500 ${sizeClasses[size]}`}>
          {showGHS ? dualPrice.ghs : dualPrice.usd}
        </div>
        {showToggle && (
          <button
            onClick={toggleCurrency}
            className="text-xs text-gray-400 hover:text-gray-300 transition-colors duration-200 flex items-center gap-1 mt-1"
          >
            <FaExchangeAlt className="text-xs" />
            {showGHS ? 'Show USD' : 'Show GHS'}
          </button>
        )}
      </div>
    );
  }

  if (layout === 'vertical') {
    return (
      <div className={`text-center ${className}`}>
        <motion.div
          key={showGHS ? 'ghs' : 'usd'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`font-bold text-blue-500 ${sizeClasses[size]} mb-2`}
        >
          {showGHS ? dualPrice.ghs : dualPrice.usd}
        </motion.div>
        
        <div className="text-sm text-gray-400 mb-2">
          {showGHS ? 'Ghanaian Cedis' : 'US Dollars'}
        </div>
        
        {showToggle && (
          <button
            onClick={toggleCurrency}
            className="inline-flex items-center gap-2 px-3 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-full transition-all duration-200"
          >
            <FaExchangeAlt />
            Switch to {showGHS ? 'USD' : 'GHS'}
          </button>
        )}
      </div>
    );
  }

  // Horizontal layout (default)
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <motion.div
        key={showGHS ? 'ghs' : 'usd'}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className={`font-bold text-blue-500 ${sizeClasses[size]}`}
      >
        {showGHS ? dualPrice.ghs : dualPrice.usd}
      </motion.div>
      
      <div className="text-sm text-gray-400">
        {showGHS ? 'GHS' : 'USD'}
      </div>
      
      {showToggle && (
        <button
          onClick={toggleCurrency}
          className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 rounded transition-all duration-200"
          title={`Switch to ${showGHS ? 'USD' : 'GHS'}`}
        >
          <FaExchangeAlt />
        </button>
      )}
    </div>
  );
};

export default PriceDisplay;