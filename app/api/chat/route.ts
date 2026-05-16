import { NextResponse } from "next/server";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type GroqChatResponse = {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
};

const SYSTEM_PROMPT = `You are Aviraj Saxena's personal portfolio assistant. You are friendly, concise, and knowledgeable about Aviraj. Here is everything you know about him:

- Full Stack Developer & final-year CS student at Amity University, Lucknow
- Skills: Java, Python, JavaScript, SQL, React.js, Next.js, Tailwind CSS, Node.js, Express.js, MySQL, MongoDB, Git, Linux, Figma, Vercel
- Interned at Snapverse (Frontend Developer, May-Aug 2025) - built React components, worked in Agile teams
- Projects: CineSphere (Next.js movie discovery + AI recs), DocTor (RAG-based document Q&A)
- President of ALiAS (open-source community), Volunteer at FOSS United Lucknow, organized Lucknow's first FOSS Conference (200+ attendees, CTO of Zerodha attended)
- Published research: "Early Risk Detection for Heart Disease Using AI" - Best Paper Award at SCI-2026 (Scopus-indexed), Swinburne Vietnam
- Contact: aviraj.saxena243@gmail.com
- Socials: github.com/theavirajsaxena, linkedin.com/in/theavirajsaxena, x.com/theavirajsaxena

Answer questions about Aviraj's background, skills, projects, and how to reach him. Keep answers short (2-4 sentences max). If asked something you don't know, say you're not sure and suggest reaching out via email. Never make up facts.`;

export async function POST(request: Request) {
  const body = (await request.json()) as { messages?: ChatMessage[] };
  const messages = body.messages?.filter(
    (message) =>
      (message.role === "user" || message.role === "assistant") &&
      typeof message.content === "string" &&
      message.content.trim().length > 0
  );

  if (!messages?.length) {
    return NextResponse.json(
      { error: "At least one message is required" },
      { status: 400 }
    );
  }

  if (!process.env.GROQ_API_KEY) {
    return NextResponse.json(
      { message: "I'm not configured yet. Email Aviraj at aviraj.saxena243@gmail.com." },
      { status: 200 }
    );
  }

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      max_completion_tokens: 220,
      temperature: 0.4,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages
      ]
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "I couldn't connect right now. Email Aviraj at aviraj.saxena243@gmail.com." },
      { status: 200 }
    );
  }

  const data = (await response.json()) as GroqChatResponse;
  const message = data.choices?.[0]?.message?.content?.trim();

  return NextResponse.json({
    message:
      message ||
      "I'm not sure about that. Email Aviraj for the most accurate answer."
  });
}
