"use client";

import { Bot, MessageCircle, Send, X } from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const quickReplies = [
  "What do you work with?",
  "Tell me about your projects",
  "How do I contact Aviraj?"
];

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi, I'm Aviraj's assistant. Ask me about his skills, projects, research, or how to reach him."
    }
  ]);
  const [pending, setPending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function submitMessage(content: string) {
    if (!content.trim() || pending) return;

    const nextMessages: Message[] = [
      ...messages,
      { role: "user", content: content.trim() }
    ];
    setMessages(nextMessages);
    setPending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages })
      });

      if (!response.ok) throw new Error("Chat failed");
      const data = (await response.json()) as { message?: string };
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content:
            data.message ||
            "I'm not sure about that. Email Aviraj for the most accurate answer."
        }
      ]);
    } catch {
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content:
            "I couldn't connect right now. You can reach Aviraj at aviraj.saxena243@gmail.com."
        }
      ]);
    } finally {
      setPending(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = inputRef.current;
    if (!input) return;
    void submitMessage(input.value);
    input.value = "";
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div
        className={cn(
          "mb-4 w-[calc(100vw-2.5rem)] max-w-80 overflow-hidden rounded-2xl border border-border bg-background/85 shadow-2xl backdrop-blur-xl transition md:w-80",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        )}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-500 text-white">
              <Bot className="h-4 w-4" />
            </span>
            <div>
                <p className="text-sm font-semibold">Aviraj&apos;s Assistant</p>
              <p className="flex items-center gap-1 text-xs text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Online
              </p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Close chat"
            onClick={() => setOpen(false)}
            className="focus-ring grid h-8 w-8 place-items-center rounded-full hover:bg-card"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex h-96 flex-col">
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={cn(
                  "max-w-[88%] rounded-2xl px-3 py-2 text-sm leading-6",
                  message.role === "user"
                    ? "ml-auto bg-blue-500 text-white"
                    : "bg-card text-foreground"
                )}
              >
                {message.content}
              </div>
            ))}
            {messages.length === 1 ? (
              <div className="flex flex-wrap gap-2 pt-1">
                {quickReplies.map((reply) => (
                  <button
                    type="button"
                    key={reply}
                    onClick={() => submitMessage(reply)}
                    className="focus-ring rounded-full border border-border px-3 py-1.5 text-xs text-muted transition hover:border-blue-500/60 hover:text-blue-500"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-border p-3"
          >
            <input
              ref={inputRef}
              aria-label="Message"
              placeholder={pending ? "Thinking..." : "Ask about Aviraj"}
              disabled={pending}
              className="focus-ring min-w-0 flex-1 rounded-full border border-border bg-background px-3 py-2 text-sm"
            />
            <button
              type="submit"
              disabled={pending}
              aria-label="Send message"
              className="focus-ring grid h-9 w-9 place-items-center rounded-full bg-blue-500 text-white transition hover:bg-blue-400 disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <button
        type="button"
        aria-label="Open chat assistant"
        onClick={() => setOpen((value) => !value)}
        className="focus-ring relative grid h-14 w-14 place-items-center rounded-full bg-blue-500 text-white shadow-glow transition hover:bg-blue-400"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-blue-500/25" />
        <MessageCircle className="relative h-6 w-6" />
      </button>
    </div>
  );
}
