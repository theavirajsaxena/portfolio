"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10 max-w-2xl"
    >
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-blue-500">
        {eyebrow}
      </p>
      <h2 className="relative font-display text-3xl font-bold leading-tight sm:text-5xl">
        <span className="absolute -left-3 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-blue-500/20 blur-2xl" />
        <span className="relative">{title}</span>
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted">{description}</p>
      ) : null}
    </motion.div>
  );
}
