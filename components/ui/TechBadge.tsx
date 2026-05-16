import { cn } from "@/lib/utils";

export function TechBadge({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 font-mono text-[0.72rem] text-blue-600 dark:text-blue-300",
        className
      )}
    >
      {children}
    </span>
  );
}
