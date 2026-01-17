Hi 👋, I'm Anyawe Bright
A passionate Web developer from Ghana

🌱 I'm currently learning Nextjs, REACT

💬 Ask me about Nextjs,

📫 How to reach me brightanyawe55@gmail.com

⚡ Fun fact, I am gentle, good communication, likes to read, write.

Connect with me:
Anyawe Bright

Languages and Tools:
css3  figma firebase git github html5 javascript nextjs  react tailwind

## Local setup (Gemini chatbot)

This project’s chatbot calls a server route at `app/api/gemini/route.ts`.

It supports a **provider chain** so the chatbot keeps working:

- **Gemini** (if `GEMINI_API_KEY` is set)
- **Groq** (hosted alternative, if `GROQ_API_KEY` is set)
- **Offline fallback** (no-AI, always available)

- **Create `.env.local`** (recommended):
  - Copy `env.example` → `.env.local`
  - Set:
    - `GEMINI_API_KEY="..."` (preferred), or `GOOGLE_API_KEY="..."`
    - Optional: `GROQ_API_KEY="..."`
- **Restart dev server** after changing env vars:
  - `npm run dev`

## Production setup (Vercel)

Set the environment variable in your Vercel project settings (Environment Variables):

- `GEMINI_API_KEY` (or `GOOGLE_API_KEY`)
- Optional: `GROQ_API_KEY`

Then redeploy.

## Security notes (important)

- **Do not paste keys/secrets in chat or commits.**
- If a key/secret was exposed, **rotate it** (create a new one and replace it in `.env.local` / Vercel).

## Automated Code Quality

This project includes GitHub Actions workflows that automatically:

- Fix ESLint errors
- Remove unused TypeScript imports
- Format code with Prettier
- Commit fixes automatically on push or pull request

The workflow configuration is in `.github/workflows/auto-fix.yml`.
