"use client";

import { Github, Linkedin, Mail, MoveRight, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PERSONAL } from "@/lib/data";

const socials = [
  { href: PERSONAL.socials.github, icon: Github, label: "GitHub" },
  { href: PERSONAL.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: PERSONAL.socials.twitter, icon: Twitter, label: "Twitter/X" },
  { href: `mailto:${PERSONAL.email}`, icon: Mail, label: "Email" }
];

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export function Hero() {
  function scrollToProjects() {
    const projects = document.getElementById("projects");
    if (!projects) return;

    const navOffset = 72;
    const top =
      projects.getBoundingClientRect().top + window.scrollY - navOffset;

    window.scrollTo({
      top,
      behavior: "smooth"
    });
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="mx-auto grid w-[min(100%-2rem,1120px)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-blue-500"
          >
            Full Stack Developer & CS Student
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[0.95] tracking-normal text-foreground sm:text-7xl lg:text-8xl"
            style={{ textShadow: "0 0 34px rgba(59, 130, 246, 0.18)" }}
          >
            {PERSONAL.name}
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl"
          >
            {PERSONAL.tagline}
          </motion.p>
          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <button
              type="button"
              onTouchStart={scrollToProjects}
              onClick={scrollToProjects}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-400"
            >
              View Projects <MoveRight className="h-4 w-4" />
            </button>
            <Link
              href="#contact"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-blue-500/70 hover:text-blue-500"
            >
              Get in Touch
            </Link>
          </motion.div>
          <motion.div variants={item} className="mt-8 flex gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-border bg-card/50 text-muted transition hover:border-blue-500/60 hover:text-blue-500 hover:shadow-glow"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          aria-hidden="true"
          className="relative hidden aspect-square lg:block"
        >
          <div className="absolute inset-12 rounded-full border border-blue-500/20 blur-sm" />
          <div className="absolute left-12 top-16 h-52 w-72 rotate-[-8deg] rounded-lg border border-white/10 bg-white/10 shadow-glow backdrop-blur-md" />
          <div className="absolute right-10 top-28 h-60 w-64 rotate-6 rounded-lg border border-blue-500/25 bg-blue-500/10 backdrop-blur-md" />
          <div className="absolute bottom-16 left-24 h-44 w-80 rotate-3 rounded-lg border border-white/10 bg-card/50 backdrop-blur-md" />
          <div className="absolute inset-24 bg-[linear-gradient(rgba(59,130,246,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.22)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />
          {Array.from({ length: 8 }).map((_, index) => (
            <span
              key={index}
              className="absolute h-2 w-2 rounded-full bg-blue-400 shadow-glow"
              style={{
                left: `${20 + ((index * 17) % 62)}%`,
                top: `${18 + ((index * 23) % 60)}%`
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
