"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function EngineeringNotesPage() {
  const sections = [
    {
      title: "What you’ll learn here",
      points: [
        "How I structure Next.js apps (routing, components, data, and deployment).",
        "How I think about reliability (auth, validation, error handling, and safe fallbacks).",
        "How I improve UX (accessibility, performance, and clear UI states).",
      ],
    },
    {
      title: "Featured work (Full‑stack focus)",
      points: [
        "B‑K‑Numbers — virtual numbers platform (auth, dashboard, orders, wallet).",
        "Rising Soul School — modern school site with clear information architecture and strong UX for admissions + contact.",
      ],
    },
    {
      title: "How I build (high-level)",
      points: [
        "Start with user flows → define data model → build UI with accessible components.",
        "Prefer simple, maintainable architecture; add complexity only when needed.",
        "Ship iteratively: small changes, tight feedback loops, measurable improvements.",
      ],
    },
    {
      title: "What I’m optimizing for",
      points: [
        "Clean, readable code with strong defaults.",
        "Fast pages (good Core Web Vitals) and good SEO basics.",
        "Robust error handling (no broken UI when APIs fail).",
      ],
    },
  ];

  return (
    <section className="min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Engineering Notes
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            A short, recruiter-friendly look at how I think and build: tradeoffs, reliability,
            and the decisions behind my projects.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-purple-500 text-white font-bold hover:opacity-95 transition"
            >
              View Projects
            </Link>
            <a
              href="mailto:anyawe.work@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition"
            >
              Email: anyawe.work@gmail.com
            </a>
            <a
              href="/Resume.pdf"
              download="Anyawe-Bright-Resume.pdf"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {sections.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-3">{s.title}</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {s.points.map((p) => (
                  <li key={p} className="leading-relaxed">
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

