"use client";

import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { PERSONAL } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const socials = [
  { href: PERSONAL.socials.github, icon: Github, label: "GitHub" },
  { href: PERSONAL.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: PERSONAL.socials.twitter, icon: Twitter, label: "Twitter/X" }
];

export function Contact() {
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || "")
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent. Aviraj will get back to you soon.");
      form.reset();
    } catch {
      toast.error("Could not send the message. Try emailing directly.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="contact" className="section-shell">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          description="Have a project, research idea, community collaboration, or internship lead? Send a note and Aviraj will take it from there."
        />

        <form onSubmit={handleSubmit} className="glass rounded-lg p-5 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium">
              Name
              <input
                required
                name="name"
                autoComplete="name"
                className="focus-ring mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm transition placeholder:text-muted/70"
                placeholder="Your name"
              />
            </label>
            <label className="space-y-2 text-sm font-medium">
              Email
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="focus-ring mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm transition placeholder:text-muted/70"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-4 block space-y-2 text-sm font-medium">
            Message
            <textarea
              required
              name="message"
              rows={6}
              className="focus-ring mt-2 w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 text-sm transition placeholder:text-muted/70"
              placeholder="Tell me what you want to build."
            />
          </label>
          <button
            type="submit"
            disabled={pending}
            className="focus-ring mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? "Sending..." : "Send Message"}
            <Send className="h-4 w-4" />
          </button>
        </form>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 text-sm text-muted sm:flex-row sm:items-center">
          <Link
            href={`mailto:${PERSONAL.email}`}
            className="inline-flex items-center gap-2 transition hover:text-blue-500"
          >
            <Mail className="h-4 w-4" />
            {PERSONAL.email}
          </Link>
          <div className="flex gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-border transition hover:border-blue-500/60 hover:text-blue-500"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
