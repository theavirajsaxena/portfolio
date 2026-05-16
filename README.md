# Aviraj Saxena Portfolio

Production-grade personal portfolio website for `avirajsaxena.dev`, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Resend, and Groq.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.local.example` to `.env.local` and set:

```env
GROQ_API_KEY=your_groq_key
RESEND_API_KEY=your_resend_key
```

## Features

- Dark/light theme toggle persisted with `next-themes`
- Animated single-page portfolio with sections for about, experience, projects, and contact
- Floating AI assistant powered by Groq
- Contact form powered by Resend
- Resume download from `/public/resume.pdf`
