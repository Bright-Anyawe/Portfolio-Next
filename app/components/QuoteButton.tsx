"use client";
import { FaWhatsapp, FaQuoteLeft } from "react-icons/fa";
import { getServiceQuote, serviceQuoteTemplates } from "@/app/utils/whatsapp";

interface QuoteButtonProps {
  service: keyof typeof serviceQuoteTemplates;
  package?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  showWhatsAppIcon?: boolean;
}

const QuoteButton: React.FC<QuoteButtonProps> = ({
  service,
  package: packageName,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  showWhatsAppIcon = true
}) => {
  const handleQuoteClick = () => {
    getServiceQuote(service, packageName);
  };

  const baseClasses = "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 transform hover:scale-105";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700",
    secondary: "bg-gradient-to-r from-red-500 to-purple-500 text-white hover:from-red-600 hover:to-purple-600",
    outline: "border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      onClick={handleQuoteClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      aria-label={`Get quote for ${serviceQuoteTemplates[service].service} via WhatsApp`}
    >
      {showWhatsAppIcon && <FaWhatsapp className="mr-2" />}
      {children || (
        <>
          <FaQuoteLeft className="mr-2" />
          Get Quote
        </>
      )}
    </button>
  );
};

export default QuoteButton;