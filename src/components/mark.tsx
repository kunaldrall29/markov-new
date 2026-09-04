import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("size-8", className)}
    >
      <rect width="32" height="32" rx="7" className="fill-surface" />
      <path
        d="M7 24V9.2L16 20.4L25 9.2V24"
        className="stroke-fg"
        strokeWidth="2.1"
        fill="none"
      />
      <path
        d="M11.2 24V14.6L16 20.5L20.8 14.6V24"
        className="stroke-fg"
        strokeWidth="1.35"
        opacity="0.5"
        fill="none"
      />
    </svg>
  );
}
