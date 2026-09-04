import { cn } from "@/lib/utils";
import type { SessionKind } from "@/lib/session";

export function SessionChip({
  kind,
  clock,
  className,
}: {
  kind: SessionKind;
  clock?: string;
  className?: string;
}) {
  const after = kind === "AFTER_HOURS";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] tracking-[0.16em] uppercase",
        after
          ? "border-after/40 bg-after/10 text-after"
          : "border-cash/40 bg-cash/10 text-cash",
        className,
      )}
    >
      <i
        className={cn(
          "size-1.5 rounded-full",
          after ? "bg-after" : "bg-cash",
        )}
        aria-hidden
      />
      {kind.replace("_", " ")}
      {clock ? (
        <span className="text-muted" suppressHydrationWarning>
          · {clock}
        </span>
      ) : null}
    </span>
  );
}
