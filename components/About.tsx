"use client";

import { Award, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { PERSONAL, PUBLICATIONS, SKILLS } from "@/lib/data";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";

export function About() {
  const publication = PUBLICATIONS[0];

  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="Curious by default. Precise when it ships."
        description="I work across polished interfaces, backend systems, AI tooling, and open-source communities."
      />

      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-6">
          <AnimatedCard>
            <p className="text-lg leading-8 text-muted">{PERSONAL.bio}</p>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-blue-500" />
              {PERSONAL.location}
            </div>
          </AnimatedCard>

          <AnimatedCard className="relative overflow-hidden">
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 font-mono text-xs text-blue-500">
                <Award className="h-3.5 w-3.5" />
                {publication.award}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold">
                {publication.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{publication.venue}</p>
            </div>
          </AnimatedCard>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {Object.entries(SKILLS).map(([group, skills]) => (
            <div key={group} className="glass rounded-lg p-5">
              <h3 className="font-display text-xl font-bold">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <TechBadge key={skill}>{skill}</TechBadge>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
