"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PERSONAL } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition",
        scrolled
          ? "border-b border-border/70 bg-background/80 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex h-16 w-[min(100%-2rem,1120px)] items-center justify-between">
        <Link
          href="#home"
          className="font-display text-xl font-bold tracking-normal"
          aria-label="Aviraj Saxena home"
        >
          aviraj<span className="text-blue-500">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group text-sm text-muted transition hover:text-foreground"
            >
              {link.label}
              <span className="block h-px w-0 bg-blue-500 transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href={PERSONAL.resumeUrl}
            className="focus-ring rounded-full border border-blue-500/40 px-4 py-2 text-sm font-medium text-foreground transition hover:border-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Resume
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-border bg-background/95 backdrop-blur-md transition-all md:hidden",
          open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          <div className="mx-auto flex w-[min(100%-2rem,1120px)] flex-col gap-4 py-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-lg font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <ThemeToggle />
              <Link
                href={PERSONAL.resumeUrl}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-full border border-blue-500/40 px-4 py-2 text-sm font-medium"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
