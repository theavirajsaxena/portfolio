"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedCard({
  className,
  children,
  ...props
}: HTMLMotionProps<"article">) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.01 }}
      className={cn(
        "glass rounded-lg p-6 transition-colors hover:border-blue-500/45 hover:shadow-glow",
        className
      )}
      {...props}
    >
      {children}
    </motion.article>
  );
}
