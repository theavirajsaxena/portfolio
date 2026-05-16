"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-border bg-card/60 text-foreground transition hover:border-blue-500/60 hover:text-blue-500"
    >
      <Sun
        aria-hidden="true"
        className={`absolute h-4 w-4 transition ${isDark ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
      />
      <Moon
        aria-hidden="true"
        className={`h-4 w-4 transition ${isDark ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
      />
    </button>
  );
}
