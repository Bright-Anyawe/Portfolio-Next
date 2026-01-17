import { NextRequest, NextResponse } from "next/server";
import portfolioData from "./portfolioData.json";

export const runtime = "nodejs";

type ProviderName = "gemini" | "groq" | "fallback";

// Simple keyword search in portfolio data
function searchPortfolio(data: any, query: string): string {
  const q = query.toLowerCase();
  let context = [];
  // About
  if (data.about && q.match(/about|yourself|who are you|name|background/)) {
    context.push(`About: ${data.about}`);
  }
  // Education
  if (data.education && q.match(/school|education|study|learn|degree|graduate|odin/)) {
    context.push(
      "Education: " +
        data.education
          .map((e: any) => `${e.degree} at ${e.institution} (${e.years}): ${e.description}`)
          .join("; ")
    );
  }
  // Experience
  if (data.experience && q.match(/work|experience|job|intern|project|company|role|build/)) {
    context.push(
      "Experience: " +
        data.experience
          .map((e: any) => `${e.role} at ${e.company} (${e.years}): ${Array.isArray(e.description) ? e.description.join(" ") : e.description}`)
          .join("; ")
    );
  }
  // Projects
  if (data.projects && q.match(/project|build|app|site|portfolio|cv|todo|church|e-commerce/)) {
    context.push("Projects: " + data.projects.join(", "));
  }
  // If nothing matched, give a general intro
  if (context.length === 0 && data.about) {
    context.push(`About: ${data.about}`);
  }
  return context.join("\n");
}

function getGeminiApiKey() {
  return (
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
    process.env.GOOGLE_AI_API_KEY
  );
}

function getGroqApiKey() {
  return process.env.GROQ_API_KEY;
}

function safeJsonParse(text: string) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function getGeminiModel() {
  // Allow easy model switching without code changes.
  // Example: GEMINI_MODEL=gemini-1.5-flash
  return process.env.GEMINI_MODEL || "gemini-2.0-flash";
}

function getGroqModel() {
  // Groq is OpenAI-compatible; default to a commonly available small/fast model.
  return process.env.GROQ_MODEL || "llama3-8b-8192";
}

function buildFallbackReply(userMessage: string, context: string) {
  const q = userMessage.toLowerCase();

  if (q.match(/contact|email|whatsapp|phone|call|reach/)) {
    return `You can contact Anyawe Bright via email at anyawe.work@gmail.com or WhatsApp at +233 059 417 2522.`;
  }

  if (q.match(/service|offer|pricing|quote/)) {
    return [
      "Here are the main services offered:",
      "- Web Development (React/Next.js, responsive design, e-commerce, CMS integration)",
      "- Graphic Design (logos, brand identity, print & digital graphics)",
      "- Mobile Apps (iOS/Android, React Native, UI/UX)",
      "- Video Editing (promo videos, social media content, motion graphics)",
      "- Social Media (content strategy, community management, analytics, paid ads)",
      "- Digital Marketing (SEO, PPC, email marketing, analytics/reporting)",
    ].join("\n");
  }

  // If we have relevant portfolio context, return it instead of a generic message.
  if (context && context.trim()) {
    return `${context}\n\n(Offline mode: AI is temporarily unavailable, but I can still answer using the portfolio info above.)`;
  }

  return "AI is temporarily unavailable. Ask about Anyawe Bright’s experience, projects, services, or how to contact him.";
}

async function callGemini(prompt: string, apiKey: string, model: string) {
  const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20_000);
  const res = await fetch(`${geminiEndpoint}?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
    signal: controller.signal,
  }).finally(() => clearTimeout(timeout));

  if (!res.ok) {
    const raw = await res.text();
    const parsed = safeJsonParse(raw);
    const status = res.status;
    const apiMessage =
      parsed?.error?.message ||
      parsed?.message ||
      (typeof raw === "string" && raw.length ? raw.slice(0, 500) : "Unknown error");
    const err: any = new Error("Gemini request failed");
    err.provider = "gemini";
    err.status = status;
    err.apiMessage = apiMessage;
    err.apiStatus = parsed?.error?.status;
    throw err;
  }

  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.";
}

async function callGroq(prompt: string, apiKey: string, model: string) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20_000);

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.4,
      messages: [
        {
          role: "system",
          content: "You are a helpful portfolio assistant for Anyawe Bright. Use the provided context and be concise.",
        },
        { role: "user", content: prompt },
      ],
    }),
    signal: controller.signal,
  }).finally(() => clearTimeout(timeout));

  if (!res.ok) {
    const raw = await res.text();
    const parsed = safeJsonParse(raw);
    const status = res.status;
    const apiMessage =
      parsed?.error?.message || parsed?.message || (typeof raw === "string" && raw.length ? raw.slice(0, 500) : "Unknown error");
    const err: any = new Error("Groq request failed");
    err.provider = "groq";
    err.status = status;
    err.apiMessage = apiMessage;
    throw err;
  }

  const data = await res.json();
  return data?.choices?.[0]?.message?.content || "Sorry, I couldn't understand that.";
}

export async function POST(req: NextRequest) {
  const { message, history } = await req.json();
  if (typeof message !== "string" || !message.trim()) {
    return NextResponse.json({ reply: "Please enter a message." }, { status: 400 });
  }

  // Basic input limits to avoid accidental huge payloads
  const userMessage = message.slice(0, 2000);
  const safeHistory = Array.isArray(history) ? history.slice(-8) : [];

  // RAG: Find relevant context
  const context = searchPortfolio(portfolioData, userMessage);
  let conversation = "";
  if (safeHistory.length > 0) {
    conversation = safeHistory
      .map((h: any) => `${h?.role === "user" ? "User" : "Bot"}: ${String(h?.text ?? "").slice(0, 2000)}`)
      .join("\n");
  }
  const prompt = `You are a portfolio assistant for Anyawe Bright. Use the following context to answer the user's question.\nContext:\n${context}\n${conversation}\nUser: ${userMessage}`;

  const providersTried: ProviderName[] = [];
  const debugErrors: any[] = [];

  // 1) Gemini (if configured)
  const geminiKey = getGeminiApiKey();
  if (geminiKey) {
    try {
      providersTried.push("gemini");
      const reply = await callGemini(prompt, geminiKey, getGeminiModel());
      return NextResponse.json({ reply, provider: "gemini" });
    } catch (err: any) {
      debugErrors.push({ provider: "gemini", status: err?.status, apiStatus: err?.apiStatus, apiMessage: err?.apiMessage });
      // Continue to next provider
    }
  }

  // 2) Groq (hosted, often free tier) (if configured)
  const groqKey = getGroqApiKey();
  if (groqKey) {
    try {
      providersTried.push("groq");
      const reply = await callGroq(prompt, groqKey, getGroqModel());
      return NextResponse.json({ reply, provider: "groq" });
    } catch (err: any) {
      debugErrors.push({ provider: "groq", status: err?.status, apiMessage: err?.apiMessage });
      // Continue to fallback
    }
  }

  // 3) No-AI fallback (always available)
  providersTried.push("fallback");
  const reply = buildFallbackReply(userMessage, context);
  return NextResponse.json(
    {
      reply,
      provider: "fallback",
      ...(process.env.NODE_ENV !== "production" ? { debug: { providersTried, errors: debugErrors } } : {}),
    },
    { status: 200 }
  );
}
