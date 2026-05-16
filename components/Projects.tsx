"use client";

import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Systems with a point of view."
        description="Selected work across full-stack web apps, AI-powered products, and retrieval systems."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <AnimatedCard key={project.name} className="flex min-h-80 flex-col">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-3xl font-bold">
                {project.name}
              </h3>
              <span className="mt-1 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 px-3 py-1 text-xs text-emerald-500">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {project.status}
              </span>
            </div>
            <p className="mt-5 flex-1 text-sm leading-7 text-muted">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <TechBadge key={tech}>{tech}</TechBadge>
              ))}
            </div>
            <div className="mt-7 flex gap-3">
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Live <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition hover:border-blue-500/60 hover:text-blue-500"
              >
                GitHub <Github className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedCard>
        ))}

        <article className="flex min-h-80 items-center justify-center rounded-lg border border-dashed border-border p-6 text-center text-muted">
          <div>
            <p className="font-display text-2xl font-bold text-foreground">
              More projects coming soon...
            </p>
            <p className="mt-3 text-sm">
              New builds, experiments, and research prototypes are on the way.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
