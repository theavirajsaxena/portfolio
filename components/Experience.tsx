"use client";

import { BriefcaseBusiness, ChevronDown } from "lucide-react";
import { useState } from "react";
import { EXPERIENCE, VOLUNTEERING } from "@/lib/data";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { cn } from "@/lib/utils";

export function Experience() {
  const [open, setOpen] = useState(true);

  return (
    <section id="work" className="section-shell">
      <SectionHeading
        eyebrow="Work"
        title="Building in teams, shipping for people."
        description="Frontend internship experience, community leadership, and a habit of turning curiosity into useful systems."
      />

      <div className="relative space-y-6 border-l border-border pl-6">
        {EXPERIENCE.map((item) => (
          <AnimatedCard key={item.company} className="relative">
            <span className="absolute -left-[2.08rem] top-7 grid h-4 w-4 place-items-center rounded-full bg-blue-500 ring-4 ring-background" />
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-blue-500">
                  {item.duration} / {item.location}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold">
                  {item.company}
                </h3>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1 text-sm text-muted">
                <BriefcaseBusiness className="h-4 w-4 text-blue-500" />
                {item.role}
              </span>
            </div>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
              {item.bullets.map((bullet) => (
                <li key={bullet}>- {bullet}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tech.map((tech) => (
                <TechBadge key={tech}>{tech}</TechBadge>
              ))}
            </div>
          </AnimatedCard>
        ))}

        <div className="pt-2">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="focus-ring flex w-full items-center justify-between rounded-lg border border-border bg-card/40 px-4 py-3 text-left font-display text-xl font-bold transition hover:border-blue-500/50"
            aria-expanded={open}
          >
            Community & Leadership
            <ChevronDown
              className={cn("h-5 w-5 transition", open && "rotate-180")}
            />
          </button>
          <div
            className={cn(
              "grid overflow-hidden transition-all",
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}
          >
            <div className="min-h-0 space-y-4 pt-4">
              {VOLUNTEERING.map((item) => (
                <AnimatedCard key={item.org} className="relative">
                  <span className="absolute -left-[2.08rem] top-7 h-4 w-4 rounded-full border-2 border-blue-500 bg-background ring-4 ring-background" />
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-blue-500">
                    {item.duration}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold">
                    {item.org}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted">
                    {item.role}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>- {bullet}</li>
                    ))}
                  </ul>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
