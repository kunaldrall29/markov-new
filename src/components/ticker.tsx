const ITEMS = [
  "NVDAx-PERP",
  "TSLAx-PERP",
  "Isolated vaults",
  "Max 3x",
  "Two-sided RFQ",
  "USDC collateral",
  "Session chip on",
  "Solana",
  "No token",
  "No points",
];

export function Ticker() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="h-10 overflow-hidden border-y border-line bg-surface">
      <div className="ticker-track inline-flex h-10 items-center font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex shrink-0 items-center px-5">
            {item}
            <span className="ml-10 text-subtle">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
