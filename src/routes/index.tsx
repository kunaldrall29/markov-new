import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav } from "@/components/nav";
import { RfqTicket } from "@/components/rfq-ticket";
import { SessionChip } from "@/components/session-chip";
import { Ticker } from "@/components/ticker";
import { Waitlist } from "@/components/waitlist";
import { Mark } from "@/components/mark";
import { getUsSession } from "@/lib/session";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [session, setSession] = useState(() => getUsSession());

  useEffect(() => {
    const tick = () => setSession(getUsSession());
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div id="top" className="min-h-dvh bg-bg text-fg">
      <Nav kind={session.kind} clock={session.clock} />
      <Ticker />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
        <div>
          <SessionChip kind={session.kind} clock={session.clock} />
          <h1 className="mt-5 font-display text-[2.5rem] leading-[1.05] font-semibold tracking-[-0.03em] sm:text-6xl">
            After hours
            <br />
            is the session.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Isolated perpetual markets on the onchain mark of NVDAx and TSLAx.
            Trackers, not shares. Two-sided RFQ, not a pool. The book that stays
            open when US cash closes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#waitlist"
              className="inline-flex h-12 items-center rounded-md bg-accent px-5 text-sm font-medium text-accent-fg transition-transform duration-150 active:scale-[0.96]"
            >
              Join the waitlist
            </a>
            <a
              href="#teaser"
              className="inline-flex h-12 items-center rounded-md border border-line px-5 text-sm font-medium text-fg transition-transform duration-150 active:scale-[0.96]"
            >
              Watch 41s
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
            {[
              ["v1", "NVDAx · TSLAx"],
              ["Lev", "3x max"],
              ["Settle", "Solana"],
              ["Book", "RFQ"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">
                  {k}
                </dt>
                <dd className="mt-1 text-sm">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <RfqTicket kind={session.kind} />
      </section>

      <section id="book" className="border-t border-line">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
          <figure className="relative min-h-[280px] overflow-hidden lg:min-h-[420px]">
            <img
              src="/img/nyse.jpg"
              alt="New York Stock Exchange facade"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-bg/80 to-bg/10" />
            <figcaption className="absolute bottom-5 left-5">
              <SessionChip kind="CASH" />
            </figcaption>
          </figure>
          <div className="flex flex-col justify-center bg-surface px-5 py-12 sm:px-10">
            <p className="font-mono text-[11px] tracking-[0.18em] text-subtle uppercase">
              Insight
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Solana already won the spot.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              NVDAx and TSLAx already live as tracker tokens. When US cash
              closes they keep floating. Markov is the leveraged book for that
              window — nights, weekends, holidays. Weekend is the product, not a
              footnote.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
          <div className="flex flex-col justify-center bg-surface px-5 py-12 sm:px-10 lg:order-1">
            <p className="font-mono text-[11px] tracking-[0.18em] text-subtle uppercase">
              Mechanism
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Request. Quote. Accept.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              Two-sided RFQ. You request. A quoter answers. You accept or you
              walk. Each market has its own vault, published OI, and per-wallet
              cap. Collateral is USDC.
            </p>
            <ol className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["01", "Request", "Size, leverage, market."],
                ["02", "Quote", "Two-sided bid / ask."],
                ["03", "Accept", "Isolated vault. Caps on."],
              ].map(([n, t, d]) => (
                <li key={n} className="rounded-lg border border-line bg-bg p-4">
                  <p className="font-mono text-[11px] text-subtle">{n}</p>
                  <p className="mt-1 text-sm font-medium">{t}</p>
                  <p className="mt-1 text-xs text-muted">{d}</p>
                </li>
              ))}
            </ol>
          </div>
          <figure className="relative min-h-[280px] overflow-hidden lg:min-h-[420px]">
            <img
              src="/img/trader-desk.jpg"
              alt="Trader at a desk after hours"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-bg/80 to-transparent" />
            <figcaption className="absolute bottom-5 left-5">
              <SessionChip kind="AFTER_HOURS" />
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="markets" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="font-mono text-[11px] tracking-[0.18em] text-subtle uppercase">
          v1 markets
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          Two names. That is the demo.
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          Perpetual on the onchain mark of a tracker token. Trackers generally
          have no voting rights and are not the listed share. No BTC. No ETH. No
          SOL perps.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            {
              src: "/img/nvidia-campus.jpg",
              alt: "NVIDIA campus",
              name: "NVDAx-PERP",
            },
            {
              src: "/img/tesla-night.jpg",
              alt: "Tesla building at night",
              name: "TSLAx-PERP",
            },
          ].map((m) => (
            <article
              key={m.name}
              className="relative min-h-[340px] overflow-hidden rounded-xl"
            >
              <img src={m.src} alt={m.alt} className="size-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <SessionChip kind={session.kind} />
                <h3 className="mt-3 font-display text-2xl font-semibold">
                  {m.name}
                </h3>
                <p className="mt-1 font-mono text-xs text-muted">
                  Isolated · 3x cap · RFQ · USDC
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="teaser" className="border-y border-line bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-mono text-[11px] tracking-[0.18em] text-subtle uppercase">
            Teaser
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em]">
            A Sunday-night trade. Not a TAM slide.
          </h2>
          <video
            controls
            playsInline
            preload="metadata"
            poster="/img/teaser-poster.jpg"
            className="mt-6 aspect-video w-full rounded-lg border border-line bg-bg object-cover"
            src="/video/teaser.mp4"
          />
          <p className="mt-3 font-mono text-[11px] text-subtle uppercase">
            41s · after-hours cut
          </p>
        </div>
      </section>

      <section id="rules" className="border-b border-line">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["RFQ", "Two-sided request / accept. Not a CLOB. Not an AMM."],
            ["3x max", "Hard cap. Isolated per market. Published OI."],
            ["Session chip", "CASH vs AFTER_HOURS is always on screen."],
            ["Open core", "Programs public. Factory (B3) is later."],
          ].map(([t, d], i) => (
            <div
              key={t}
              className={`border-line px-5 py-8 ${i < 3 ? "lg:border-r" : ""} ${i < 2 ? "sm:border-b lg:border-b-0" : ""} ${i % 2 === 0 ? "sm:border-r lg:border-r" : ""} ${i === 2 ? "lg:border-r" : ""}`}
            >
              <p className="font-medium">{t}</p>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="waitlist" className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-[11px] tracking-[0.18em] text-subtle uppercase">
            Early access
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Get on the book before it opens.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted">
            Tiny caps first. One market, then two. If you quote, say so. If you
            already hold the tracker, say so. Beachhead is Phantom and Kraken
            Wallet holders — not crypto Twitter.
          </p>
          <img
            src="/img/phone-afterhours.jpg"
            alt="Phone showing after-hours mark"
            className="mt-8 w-full rounded-lg border border-line"
          />
        </div>
        <Waitlist />
      </section>

      <footer className="border-t border-line px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <span className="flex items-center gap-2 text-sm">
            <Mark className="size-7" />
            Markov · markov.trade
          </span>
        </div>
        <p className="mx-auto mt-6 max-w-6xl text-xs leading-relaxed text-subtle">
          Markov lists isolated perpetual markets on the onchain mark of tokenized
          US equity/ETF tracker tokens (xStocks and peers). Those tokens are not
          shares of the named company and generally carry no voting rights.
          Nothing here is an offer of securities or a promise that any specific
          country can trade. Assume geo-restrictions. No token. No points. Core
          programs will be open source. Unaudited until an audit exists. The RFQ
          ticket on this page is a demo.
        </p>
      </footer>
    </div>
  );
}
