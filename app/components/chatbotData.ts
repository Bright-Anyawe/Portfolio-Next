// chatbotData.ts
// Centralized data for chatbot quick replies and initial prompts

export const QUICK_REPLIES = [
  "What services do you offer?",
  "Can you tell me about your experience?",
  "How can I contact you?",
  "What technologies do you use?",
  "Tell me about your projects.",
];

export const INITIAL_PROMPT = (name: string | null) =>
  name
    ? `Hello ${name}! How can I help you today?`
    : "Hello! I'm Anyawe Bright's portfolio assistant. How can I help you today?";

export const GREETING_PROMPT = (name: string) =>
  `Nice to meet you, ${name}! I'm here to answer any questions you have about Anyawe Bright's portfolio. Feel free to ask about his experience, projects, or anything else!`;
