import { o as __toESM } from "../_runtime.mjs";
import { R as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as boolean, o as object, r as email, s as string, t as _enum } from "../_libs/zod.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CFaatsrp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		fill: "none",
		"aria-hidden": "true",
		className: cn("size-8", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "32",
				height: "32",
				rx: "7",
				className: "fill-surface"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M7 24V9.2L16 20.4L25 9.2V24",
				className: "stroke-fg",
				strokeWidth: "2.1",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M11.2 24V14.6L16 20.5L20.8 14.6V24",
				className: "stroke-fg",
				strokeWidth: "1.35",
				opacity: "0.5",
				fill: "none"
			})
		]
	});
}
function SessionChip({ kind, clock, className }) {
	const after = kind === "AFTER_HOURS";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] tracking-[0.16em] uppercase", after ? "border-after/40 bg-after/10 text-after" : "border-cash/40 bg-cash/10 text-cash", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
				className: cn("size-1.5 rounded-full", after ? "bg-after" : "bg-cash"),
				"aria-hidden": true
			}),
			kind.replace("_", " "),
			clock ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-muted",
				children: ["· ", clock]
			}) : null
		]
	});
}
function Nav({ kind, clock }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-line/80 bg-bg/80 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-sm font-semibold tracking-[0.22em]",
						children: "MARKOV"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-7 text-sm text-muted md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#book",
							className: "transition-colors duration-150 hover:text-fg",
							children: "Book"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#markets",
							className: "transition-colors duration-150 hover:text-fg",
							children: "Markets"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#rules",
							className: "transition-colors duration-150 hover:text-fg",
							children: "Rules"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#waitlist",
							className: "transition-colors duration-150 hover:text-fg",
							children: "Access"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionChip, {
						kind,
						clock,
						className: "hidden sm:inline-flex"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#waitlist",
						className: "inline-flex h-11 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-fg transition-transform duration-150 ease-out active:scale-[0.96]",
						children: "Early access"
					})]
				})
			]
		})
	});
}
var MARKS = {
	"NVDAx-PERP": 231.78,
	"TSLAx-PERP": 368.33
};
function RfqTicket({ kind }) {
	const [market, setMarket] = (0, import_react.useState)("NVDAx-PERP");
	const [size, setSize] = (0, import_react.useState)("1.00");
	const [lev, setLev] = (0, import_react.useState)(3);
	const [state, setState] = (0, import_react.useState)("idle");
	const quote = (0, import_react.useMemo)(() => {
		const mark = MARKS[market];
		const spread = mark * .0014;
		return {
			mark,
			bid: mark - spread / 2,
			ask: mark + spread / 2
		};
	}, [market]);
	function requestQuote() {
		setState("quoted");
	}
	function accept() {
		setState("accepted");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-line bg-surface p-4 sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-[0.18em] text-muted uppercase",
					children: "RFQ ticket · demo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionChip, { kind })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2",
				children: ["NVDAx-PERP", "TSLAx-PERP"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setMarket(m);
						setState("idle");
					},
					className: cn("h-11 rounded-md border px-3 text-left font-mono text-xs transition-colors duration-150", market === m ? "border-fg/30 bg-raised text-fg" : "border-line bg-bg text-muted hover:text-fg"),
					children: m
				}, m))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-5 grid grid-cols-3 gap-3 font-mono text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-subtle",
						children: "Mark"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-sm tabular-nums text-fg",
						children: quote.mark.toFixed(2)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-subtle",
						children: "Bid"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-sm tabular-nums text-down",
						children: quote.bid.toFixed(2)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-subtle",
						children: "Ask"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-sm tabular-nums text-up",
						children: quote.ask.toFixed(2)
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[11px] tracking-[0.14em] text-subtle uppercase",
						children: "Size"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: size,
						onChange: (e) => setSize(e.target.value),
						className: "mt-1 h-11 w-full rounded-md border border-line bg-bg px-3 font-mono text-sm outline-none ring-fg/20 focus:ring-2",
						inputMode: "decimal"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[11px] tracking-[0.14em] text-subtle uppercase",
						children: "Leverage"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 grid grid-cols-3 gap-1",
						children: [
							1,
							2,
							3
						].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setLev(n),
							className: cn("h-11 rounded-md border font-mono text-sm transition-colors duration-150", lev === n ? "border-fg/30 bg-raised text-fg" : "border-line bg-bg text-muted"),
							children: [n, "x"]
						}, n))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-mono text-[11px] text-subtle",
				children: "Isolated vault · USDC collateral · published OI caps · not a pool"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: requestQuote,
					className: "h-12 rounded-md border border-line bg-bg text-sm font-medium text-fg transition-transform duration-150 active:scale-[0.96]",
					children: "Request"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: state === "idle",
					onClick: accept,
					className: "h-12 rounded-md bg-accent text-sm font-medium text-accent-fg transition-transform duration-150 enabled:active:scale-[0.96] disabled:opacity-40",
					children: "Accept"
				})]
			}),
			state !== "idle" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-mono text-[11px] text-muted",
				children: state === "quoted" ? "Quote up. Two-sided RFQ. Accept to lock on this demo." : "Accepted. Isolated. Demo only — no onchain fill yet."
			}) : null
		]
	});
}
var ITEMS = [
	"NVDAx-PERP",
	"TSLAx-PERP",
	"Isolated vaults",
	"Max 3x",
	"Two-sided RFQ",
	"USDC collateral",
	"Session chip on",
	"Solana",
	"No token",
	"No points"
];
function Ticker() {
	const row = [...ITEMS, ...ITEMS];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-10 overflow-hidden border-y border-line bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ticker-track inline-flex h-10 items-center font-mono text-[11px] tracking-[0.18em] text-muted uppercase",
			children: row.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex shrink-0 items-center px-5",
				children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-10 text-subtle",
					children: "/"
				})]
			}, `${item}-${i}`))
		})
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var waitlistInput = object({
	name: string().trim().max(80),
	email: string().trim().toLowerCase().pipe(email().max(254)),
	wallet: string().trim().max(88),
	role: _enum([
		"holder",
		"quoter",
		"trader",
		"other"
	]),
	market: _enum([
		"NVDAx-PERP",
		"TSLAx-PERP",
		"both"
	]),
	holds: boolean()
});
var joinWaitlist = createServerFn({ method: "POST" }).validator(waitlistInput).handler(createSsrRpc("e998f4dfaf860bc7a5bafd829ea7b84d7f5da4e556df4f2df4bf11ef938ec7dd"));
function Waitlist() {
	const [ok, setOk] = (0, import_react.useState)(null);
	const [err, setErr] = (0, import_react.useState)(null);
	const [pending, setPending] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		if (pending) return;
		const form = e.currentTarget;
		const data = new FormData(form);
		const email = String(data.get("email") || "").trim().toLowerCase();
		setErr(null);
		setOk(null);
		setPending(true);
		try {
			const result = await joinWaitlist({ data: {
				name: String(data.get("name") || "").trim(),
				email,
				wallet: String(data.get("wallet") || "").trim(),
				role: data.get("role") || "holder",
				market: data.get("market") || "both",
				holds: data.get("holds") === "on"
			} });
			form.reset();
			setOk(result.status === "already" ? `Already on the list for ${email}.` : `${email} is on the list. Holders of NVDAx or TSLAx go first.`);
		} catch {
			setErr("Could not write you in. Check the email and try again.");
		} finally {
			setPending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		"aria-busy": pending,
		className: "rounded-xl border border-line bg-surface p-5 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.18em] text-after uppercase",
				children: "Waitlist"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-5 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[11px] tracking-[0.14em] text-subtle uppercase",
					children: "Name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "waitlist-name",
					name: "name",
					autoComplete: "name",
					className: "mt-1 h-11 w-full rounded-md border border-line bg-bg px-3 text-sm outline-none ring-fg/20 focus:ring-2"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[11px] tracking-[0.14em] text-subtle uppercase",
					children: "Email"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "waitlist-email",
					name: "email",
					type: "email",
					required: true,
					autoComplete: "email",
					className: "mt-1 h-11 w-full rounded-md border border-line bg-bg px-3 text-sm outline-none ring-fg/20 focus:ring-2"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[11px] tracking-[0.14em] text-subtle uppercase",
					children: "Solana wallet"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "waitlist-wallet",
					name: "wallet",
					spellCheck: false,
					placeholder: "Optional — wallet that holds NVDAx / TSLAx",
					className: "mt-1 h-11 w-full rounded-md border border-line bg-bg px-3 font-mono text-sm outline-none ring-fg/20 placeholder:text-subtle focus:ring-2"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[11px] tracking-[0.14em] text-subtle uppercase",
					children: "What you are"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					id: "waitlist-role",
					name: "role",
					className: "mt-1 h-11 w-full rounded-md border border-line bg-bg px-3 text-sm outline-none ring-fg/20 focus:ring-2",
					defaultValue: "holder",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "holder",
							children: "I already hold NVDAx or TSLAx"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "quoter",
							children: "I want to quote"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "trader",
							children: "Trader, no inventory yet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "other",
							children: "Other"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[11px] tracking-[0.14em] text-subtle uppercase",
					children: "First market"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					id: "waitlist-market",
					name: "market",
					className: "mt-1 h-11 w-full rounded-md border border-line bg-bg px-3 text-sm outline-none ring-fg/20 focus:ring-2",
					defaultValue: "both",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "NVDAx-PERP",
							children: "NVDAx-PERP"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "TSLAx-PERP",
							children: "TSLAx-PERP"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "both",
							children: "Both"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 flex items-start gap-3 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "waitlist-holds",
					name: "holds",
					type: "checkbox",
					className: "mt-1 size-4 shrink-0 accent-accent"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I hold NVDAx or TSLAx in Phantom or Kraken Wallet. Prioritize this wallet." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: pending,
				className: "mt-6 inline-flex h-12 w-full items-center justify-center rounded-md bg-accent text-sm font-medium text-accent-fg transition-transform duration-150 enabled:active:scale-[0.96] disabled:opacity-60",
				children: pending ? "Writing…" : "Request early access"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-subtle",
				children: "Written to the waitlist. Not an offer. Assume geo-restrictions."
			}),
			ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "status",
				className: "mt-4 rounded-md border border-after/40 bg-after/10 px-3 py-2 text-sm text-fg",
				children: ok
			}) : null,
			err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "mt-4 rounded-md border border-line bg-bg px-3 py-2 text-sm text-fg",
				children: err
			}) : null
		]
	});
}
function etParts(now) {
	const fmt = new Intl.DateTimeFormat("en-US", {
		timeZone: "America/New_York",
		weekday: "short",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false
	});
	const bag = {};
	for (const p of fmt.formatToParts(now)) if (p.type !== "literal") bag[p.type] = p.value;
	return bag;
}
function getUsSession(now = /* @__PURE__ */ new Date()) {
	const bag = etParts(now);
	const hour = Number(bag.hour === "24" ? "0" : bag.hour);
	const minute = Number(bag.minute);
	const mins = hour * 60 + minute;
	const day = bag.weekday;
	return {
		kind: !["Sat", "Sun"].includes(day) && mins >= 570 && mins < 960 ? "CASH" : "AFTER_HOURS",
		clock: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")} ET`,
		weekday: day
	};
}
function Home() {
	const [session, setSession] = (0, import_react.useState)(() => getUsSession());
	(0, import_react.useEffect)(() => {
		const tick = () => setSession(getUsSession());
		tick();
		const id = setInterval(tick, 15e3);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
				kind: session.kind,
				clock: session.clock
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionChip, {
						kind: session.kind,
						clock: session.clock
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 font-display text-[2.5rem] leading-[1.05] font-semibold tracking-[-0.03em] sm:text-6xl",
						children: [
							"After hours",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"is the session."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg",
						children: "Isolated perpetual markets on the onchain mark of NVDAx and TSLAx. Trackers, not shares. Two-sided RFQ, not a pool. The book that stays open when US cash closes."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#waitlist",
							className: "inline-flex h-12 items-center rounded-md bg-accent px-5 text-sm font-medium text-accent-fg transition-transform duration-150 active:scale-[0.96]",
							children: "Join the waitlist"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#teaser",
							className: "inline-flex h-12 items-center rounded-md border border-line px-5 text-sm font-medium text-fg transition-transform duration-150 active:scale-[0.96]",
							children: "Watch 18s"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-10 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4",
						children: [
							["v1", "NVDAx · TSLAx"],
							["Lev", "3x max"],
							["Settle", "Solana"],
							["Book", "RFQ"]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-mono text-[11px] tracking-[0.16em] text-subtle uppercase",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-sm",
							children: v
						})] }, k))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RfqTicket, { kind: session.kind })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "book",
				className: "border-t border-line",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "relative min-h-[280px] overflow-hidden lg:min-h-[420px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/img/nyse.jpg",
								alt: "New York Stock Exchange facade",
								className: "size-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-bg/80 to-bg/10" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "absolute bottom-5 left-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionChip, { kind: "CASH" })
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center bg-surface px-5 py-12 sm:px-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] tracking-[0.18em] text-subtle uppercase",
								children: "Insight"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl",
								children: "Solana already won the spot."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md leading-relaxed text-muted",
								children: "NVDAx and TSLAx already live as tracker tokens. When US cash closes they keep floating. Markov is the leveraged book for that window — nights, weekends, holidays. Weekend is the product, not a footnote."
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center bg-surface px-5 py-12 sm:px-10 lg:order-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] tracking-[0.18em] text-subtle uppercase",
								children: "Mechanism"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl",
								children: "Request. Quote. Accept."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md leading-relaxed text-muted",
								children: "Two-sided RFQ. You request. A quoter answers. You accept or you walk. Each market has its own vault, published OI, and per-wallet cap. Collateral is USDC."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-8 grid gap-4 sm:grid-cols-3",
								children: [
									[
										"01",
										"Request",
										"Size, leverage, market."
									],
									[
										"02",
										"Quote",
										"Two-sided bid / ask."
									],
									[
										"03",
										"Accept",
										"Isolated vault. Caps on."
									]
								].map(([n, t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-lg border border-line bg-bg p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-[11px] text-subtle",
											children: n
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm font-medium",
											children: t
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted",
											children: d
										})
									]
								}, n))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "relative min-h-[280px] overflow-hidden lg:min-h-[420px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/img/trader-desk.jpg",
								alt: "Trader at a desk after hours",
								className: "size-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-bg/80 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "absolute bottom-5 left-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionChip, { kind: "AFTER_HOURS" })
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "markets",
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.18em] text-subtle uppercase",
						children: "v1 markets"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl",
						children: "Two names. That is the demo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-muted",
						children: "Perpetual on the onchain mark of a tracker token. Trackers generally have no voting rights and are not the listed share. No BTC. No ETH. No SOL perps."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 md:grid-cols-2",
						children: [{
							src: "/img/nvidia-campus.jpg",
							alt: "NVIDIA campus",
							name: "NVDAx-PERP"
						}, {
							src: "/img/tesla-night.jpg",
							alt: "Tesla building at night",
							name: "TSLAx-PERP"
						}].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "relative min-h-[340px] overflow-hidden rounded-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: m.src,
									alt: m.alt,
									className: "size-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-bg via-bg/30 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 bottom-0 p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionChip, { kind: session.kind }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 font-display text-2xl font-semibold",
											children: m.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-mono text-xs text-muted",
											children: "Isolated · 3x cap · RFQ · USDC"
										})
									]
								})
							]
						}, m.name))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "teaser",
				className: "border-y border-line bg-surface py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.18em] text-subtle uppercase",
							children: "Teaser"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-semibold tracking-[-0.03em]",
							children: "A Sunday-night trade. Not a TAM slide."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							controls: true,
							playsInline: true,
							preload: "metadata",
							poster: "/img/nyc-night.jpg",
							className: "mt-6 aspect-video w-full rounded-lg border border-line bg-bg object-cover",
							src: "/video/teaser.mp4"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-mono text-[11px] text-subtle uppercase",
							children: "18s · placeholder cut · live holder footage replaces this in W4"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "rules",
				className: "border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4",
					children: [
						["RFQ", "Two-sided request / accept. Not a CLOB. Not an AMM."],
						["3x max", "Hard cap. Isolated per market. Published OI."],
						["Session chip", "CASH vs AFTER_HOURS is always on screen."],
						["Open core", "Programs public. Factory (B3) is later."]
					].map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `border-line px-5 py-8 ${i < 3 ? "lg:border-r" : ""} ${i < 2 ? "sm:border-b lg:border-b-0" : ""} ${i % 2 === 0 ? "sm:border-r lg:border-r" : ""} ${i === 2 ? "lg:border-r" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: d
						})]
					}, t))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "waitlist",
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.18em] text-subtle uppercase",
						children: "Early access"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl",
						children: "Get on the book before it opens."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md leading-relaxed text-muted",
						children: "Tiny caps first. One market, then two. If you quote, say so. If you already hold the tracker, say so. Beachhead is Phantom and Kraken Wallet holders — not crypto Twitter."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-subtle",
						children: "Colosseum Crypto World’s Fair · build 14 Sep–12 Oct 2026."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/img/phone-afterhours.jpg",
						alt: "Phone showing after-hours mark",
						className: "mt-8 w-full rounded-lg border border-line"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waitlist, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-line px-4 py-10 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-7" }), "Markov · markov.trade"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[11px] text-subtle uppercase",
						children: "Colosseum Crypto World’s Fair"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-6xl text-xs leading-relaxed text-subtle",
					children: "Markov lists isolated perpetual markets on the onchain mark of tokenized US equity/ETF tracker tokens (xStocks and peers). Those tokens are not shares of the named company and generally carry no voting rights. Nothing here is an offer of securities or a promise that any specific country can trade. Assume geo-restrictions. No token. No points. Core programs will be open source. Unaudited until an audit exists. The RFQ ticket on this page is a demo."
				})]
			})
		]
	});
}
//#endregion
export { Home as component };
