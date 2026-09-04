import { useMemo, useState } from "react";
import { SessionChip } from "@/components/session-chip";
import type { SessionKind } from "@/lib/session";
import { cn } from "@/lib/utils";

const MARKS: Record<"NVDAx-PERP" | "TSLAx-PERP", number> = {
  "NVDAx-PERP": 231.78,
  "TSLAx-PERP": 368.33,
};

export function RfqTicket({ kind }: { kind: SessionKind }) {
  const [market, setMarket] = useState<"NVDAx-PERP" | "TSLAx-PERP">("NVDAx-PERP");
  const [size, setSize] = useState("1.00");
  const [lev, setLev] = useState(3);
  const [state, setState] = useState<"idle" | "quoted" | "accepted">("idle");

  const quote = useMemo(() => {
    const mark = MARKS[market];
    const spread = mark * 0.0014;
    return {
      mark,
      bid: mark - spread / 2,
      ask: mark + spread / 2,
    };
  }, [market]);

  function requestQuote() {
    setState("quoted");
  }

  function accept() {
    setState("accepted");
  }

  return (
    <div className="rounded-xl border border-line bg-surface p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
          RFQ ticket · demo
        </p>
        <SessionChip kind={kind} />
      </div>

      <div className="grid grid-cols-2 gap-2">
        {(["NVDAx-PERP", "TSLAx-PERP"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => {
              setMarket(m);
              setState("idle");
            }}
            className={cn(
              "h-11 rounded-md border px-3 text-left font-mono text-xs transition-colors duration-150",
              market === m
                ? "border-fg/30 bg-raised text-fg"
                : "border-line bg-bg text-muted hover:text-fg",
            )}
          >
            {m}
          </button>
        ))}
      </div>

      <dl className="mt-5 grid grid-cols-3 gap-3 font-mono text-xs">
        <div>
          <dt className="text-subtle">Mark</dt>
          <dd className="mt-1 text-sm tabular-nums text-fg">{quote.mark.toFixed(2)}</dd>
        </div>
        <div>
          <dt className="text-subtle">Bid</dt>
          <dd className="mt-1 text-sm tabular-nums text-down">{quote.bid.toFixed(2)}</dd>
        </div>
        <div>
          <dt className="text-subtle">Ask</dt>
          <dd className="mt-1 text-sm tabular-nums text-up">{quote.ask.toFixed(2)}</dd>
        </div>
      </dl>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <label className="block">
          <span className="font-mono text-[11px] tracking-[0.14em] text-subtle uppercase">
            Size
          </span>
          <input
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="mt-1 h-11 w-full rounded-md border border-line bg-bg px-3 font-mono text-sm outline-none ring-fg/20 focus:ring-2"
            inputMode="decimal"
          />
        </label>
        <label className="block">
          <span className="font-mono text-[11px] tracking-[0.14em] text-subtle uppercase">
            Leverage
          </span>
          <div className="mt-1 grid grid-cols-3 gap-1">
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setLev(n)}
                className={cn(
                  "h-11 rounded-md border font-mono text-sm transition-colors duration-150",
                  lev === n
                    ? "border-fg/30 bg-raised text-fg"
                    : "border-line bg-bg text-muted",
                )}
              >
                {n}x
              </button>
            ))}
          </div>
        </label>
      </div>

      <p className="mt-4 font-mono text-[11px] text-subtle">
        Isolated vault · USDC collateral · published OI caps · not a pool
      </p>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={requestQuote}
          className="h-12 rounded-md border border-line bg-bg text-sm font-medium text-fg transition-transform duration-150 active:scale-[0.96]"
        >
          Request
        </button>
        <button
          type="button"
          disabled={state === "idle"}
          onClick={accept}
          className="h-12 rounded-md bg-accent text-sm font-medium text-accent-fg transition-transform duration-150 enabled:active:scale-[0.96] disabled:opacity-40"
        >
          Accept
        </button>
      </div>

      {state !== "idle" ? (
        <p className="mt-3 font-mono text-[11px] text-muted">
          {state === "quoted"
            ? "Quote up. Two-sided RFQ. Accept to lock on this demo."
            : "Accepted. Isolated. Demo only — no onchain fill yet."}
        </p>
      ) : null}
    </div>
  );
}
