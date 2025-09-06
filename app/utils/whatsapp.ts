// WhatsApp utility functions for quote requests

export const WHATSAPP_NUMBER = "2330594172522";

export interface QuoteRequest {
  service: string;
  package?: string;
  message?: string;
}

export const generateWhatsAppQuoteURL = ({ service, package: packageName, message }: QuoteRequest): string => {
  let defaultMessage = `Hi! I'm interested in getting a quote for ${service}`;
  
  if (packageName) {
    defaultMessage += ` - ${packageName} package`;
  }
  
  if (message) {
    defaultMessage += `.\n\nAdditional details: ${message}`;
  } else {
    defaultMessage += ". Could you please provide me with more information and pricing details?";
  }
  
  defaultMessage += "\n\nThank you!";
  
  const encodedMessage = encodeURIComponent(defaultMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const openWhatsAppQuote = (quoteRequest: QuoteRequest): void => {
  const url = generateWhatsAppQuoteURL(quoteRequest);
  window.open(url, '_blank', 'noopener,noreferrer');
};

// Service-specific quote templates
export const serviceQuoteTemplates = {
  'web-development': {
    service: 'Web Development',
    defaultMessage: 'I would like to discuss my website project requirements and get a custom quote.'
  },
  'graphic-design': {
    service: 'Graphic Design',
    defaultMessage: 'I need graphic design services and would like to discuss my project requirements.'
  },
  'mobile-apps': {
    service: 'Mobile App Development',
    defaultMessage: 'I want to develop a mobile app and would like to get a quote for my project.'
  },
  'video-editing': {
    service: 'Video Editing',
    defaultMessage: 'I have video content that needs professional editing and would like to get a quote.'
  },
  'social-media': {
    service: 'Social Media Management',
    defaultMessage: 'I need help with social media management and would like to discuss pricing options.'
  },
  'digital-marketing': {
    service: 'Digital Marketing',
    defaultMessage: 'I want to improve my digital marketing and would like to get a custom strategy quote.'
  }
};

export const getServiceQuote = (serviceKey: keyof typeof serviceQuoteTemplates, packageName?: string): void => {
  const template = serviceQuoteTemplates[serviceKey];
  openWhatsAppQuote({
    service: template.service,
    package: packageName,
    message: template.defaultMessage
  });
};