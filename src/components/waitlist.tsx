import { useState, type FormEvent } from "react";
import { joinWaitlist } from "@/lib/waitlist";

export function Waitlist() {
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "")
      .trim()
      .toLowerCase();
    setErr(null);
    setOk(null);
    setPending(true);
    try {
      const result = await joinWaitlist({
        data: {
          name: String(data.get("name") || "").trim(),
          email,
          wallet: String(data.get("wallet") || "").trim(),
          role: (data.get("role") as
            | "holder"
            | "quoter"
            | "trader"
            | "other") || "holder",
          market: (data.get("market") as
            | "NVDAx-PERP"
            | "TSLAx-PERP"
            | "both") || "both",
          holds: data.get("holds") === "on",
        },
      });
      form.reset();
      setOk(
        result.status === "already"
          ? `Already on the list for ${email}.`
          : `${email} is on the list. Holders of NVDAx or TSLAx go first.`,
      );
    } catch {
      setErr("Could not write you in. Check the email and try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      aria-busy={pending}
      className="rounded-xl border border-line bg-surface p-5 sm:p-6"
    >
      <p className="font-mono text-[11px] tracking-[0.18em] text-after uppercase">
        Waitlist
      </p>
      <label className="mt-5 block">
        <span className="font-mono text-[11px] tracking-[0.14em] text-subtle uppercase">
          Name
        </span>
        <input
          id="waitlist-name"
          name="name"
          autoComplete="name"
          className="mt-1 h-11 w-full rounded-md border border-line bg-bg px-3 text-sm outline-none ring-fg/20 focus:ring-2"
        />
      </label>
      <label className="mt-4 block">
        <span className="font-mono text-[11px] tracking-[0.14em] text-subtle uppercase">
          Email
        </span>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1 h-11 w-full rounded-md border border-line bg-bg px-3 text-sm outline-none ring-fg/20 focus:ring-2"
        />
      </label>
      <label className="mt-4 block">
        <span className="font-mono text-[11px] tracking-[0.14em] text-subtle uppercase">
          Solana wallet
        </span>
        <input
          id="waitlist-wallet"
          name="wallet"
          spellCheck={false}
          placeholder="Optional — wallet that holds NVDAx / TSLAx"
          className="mt-1 h-11 w-full rounded-md border border-line bg-bg px-3 font-mono text-sm outline-none ring-fg/20 placeholder:text-subtle focus:ring-2"
        />
      </label>
      <label className="mt-4 block">
        <span className="font-mono text-[11px] tracking-[0.14em] text-subtle uppercase">
          What you are
        </span>
        <select
          id="waitlist-role"
          name="role"
          className="mt-1 h-11 w-full rounded-md border border-line bg-bg px-3 text-sm outline-none ring-fg/20 focus:ring-2"
          defaultValue="holder"
        >
          <option value="holder">I already hold NVDAx or TSLAx</option>
          <option value="quoter">I want to quote</option>
          <option value="trader">Trader, no inventory yet</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label className="mt-4 block">
        <span className="font-mono text-[11px] tracking-[0.14em] text-subtle uppercase">
          First market
        </span>
        <select
          id="waitlist-market"
          name="market"
          className="mt-1 h-11 w-full rounded-md border border-line bg-bg px-3 text-sm outline-none ring-fg/20 focus:ring-2"
          defaultValue="both"
        >
          <option value="NVDAx-PERP">NVDAx-PERP</option>
          <option value="TSLAx-PERP">TSLAx-PERP</option>
          <option value="both">Both</option>
        </select>
      </label>
      <label className="mt-4 flex items-start gap-3 text-sm text-muted">
        <input
          id="waitlist-holds"
          name="holds"
          type="checkbox"
          className="mt-1 size-4 shrink-0 accent-accent"
        />
        <span>I hold NVDAx or TSLAx in Phantom or Kraken Wallet. Prioritize this wallet.</span>
      </label>
      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-md bg-accent text-sm font-medium text-accent-fg transition-transform duration-150 enabled:active:scale-[0.96] disabled:opacity-60"
      >
        {pending ? "Writing…" : "Request early access"}
      </button>
      <p className="mt-3 text-xs text-subtle">
        Written to the waitlist. Not an offer. Assume geo-restrictions.
      </p>
      {ok ? (
        <p
          role="status"
          className="mt-4 rounded-md border border-after/40 bg-after/10 px-3 py-2 text-sm text-fg"
        >
          {ok}
        </p>
      ) : null}
      {err ? (
        <p
          role="alert"
          className="mt-4 rounded-md border border-line bg-bg px-3 py-2 text-sm text-fg"
        >
          {err}
        </p>
      ) : null}
    </form>
  );
}
