// chatbotData.ts
// Centralized data for chatbot quick replies and initial prompts

export const QUICK_REPLIES = [
  "Show me your projects",
  "Tell me about your experience",
  "What skills do you have?",
  "Contact info",
];

export const INITIAL_PROMPT = (name?: string) =>
  name
    ? `Hi ${name}! How can I help you today?`
    : "Hi! What's your name?";

export const GREETING_PROMPT = (name: string) =>
  `Nice to meet you, ${name}! How can I help you today?`;
