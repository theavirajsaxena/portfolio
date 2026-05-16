import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { PERSONAL } from "@/lib/data";

const socials = [
  { href: PERSONAL.socials.github, icon: Github, label: "GitHub" },
  { href: PERSONAL.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: PERSONAL.socials.twitter, icon: Twitter, label: "Twitter/X" }
];

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex w-[min(100%-2rem,1120px)] flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>Designed & built by Aviraj Saxena - 2025</p>
        <div className="flex items-center gap-3">
          <span>Built with Next.js</span>
          {socials.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="transition hover:text-blue-500"
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
