import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

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

export async function POST(req: NextRequest) {
  const { message, history } = await req.json();
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ reply: "Error: Gemini API key is missing." }, { status: 500 });
  }

  // Load portfolio data
  const dataPath = path.join(process.cwd(), "app/api/gemini/portfolioData.json");
  let portfolioData = {};
  try {
    const file = await fs.readFile(dataPath, "utf-8");
    portfolioData = JSON.parse(file);
  } catch {
    return NextResponse.json({ reply: "Error loading portfolio data." }, { status: 500 });
  }

  // RAG: Find relevant context
  const context = searchPortfolio(portfolioData, message);
  let conversation = "";
  if (Array.isArray(history) && history.length > 0) {
    conversation = history.map((h: any) => `${h.role === "user" ? "User" : "Bot"}: ${h.text}`).join("\n");
  }
  const prompt = `You are a portfolio assistant for Anyawe Bright. Use the following context to answer the user's question.\nContext:\n${context}\n${conversation}\nUser: ${message}`;

  // Use Gemini 2.0 Flash model and v1beta endpoint
  try {
    const geminiEndpoint = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
    const geminiRes = await fetch(`${geminiEndpoint}?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );
    if (!geminiRes.ok) {
      const error = await geminiRes.text();
      return NextResponse.json({ reply: `Gemini API error: ${error}` }, { status: 500 });
    }
    const geminiData = await geminiRes.json();
    const reply = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.";
    return NextResponse.json({ reply });
  } catch (err: any) {
    return NextResponse.json({ reply: `Error: ${err.message || err}` }, { status: 500 });
  }
}
