import { Mark } from "@/components/mark";
import { SessionChip } from "@/components/session-chip";
import type { SessionKind } from "@/lib/session";

export function Nav({ kind, clock }: { kind: SessionKind; clock: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Mark />
          <span className="font-display text-sm font-semibold tracking-[0.22em]">
            MARKOV
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          <a href="#book" className="transition-colors duration-150 hover:text-fg">
            Book
          </a>
          <a href="#markets" className="transition-colors duration-150 hover:text-fg">
            Markets
          </a>
          <a href="#rules" className="transition-colors duration-150 hover:text-fg">
            Rules
          </a>
          <a href="#waitlist" className="transition-colors duration-150 hover:text-fg">
            Access
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <SessionChip kind={kind} clock={clock} className="hidden sm:inline-flex" />
          <a
            href="#waitlist"
            className="inline-flex h-11 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-fg transition-transform duration-150 ease-out active:scale-[0.96]"
          >
            Early access
          </a>
        </div>
      </div>
    </header>
  );
}
