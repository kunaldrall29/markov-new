export type SessionKind = "CASH" | "AFTER_HOURS";

function etParts(now: Date) {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const bag: Record<string, string> = {};
  for (const p of fmt.formatToParts(now)) {
    if (p.type !== "literal") bag[p.type] = p.value;
  }
  return bag;
}

export function getUsSession(now = new Date()): {
  kind: SessionKind;
  clock: string;
  weekday: string;
} {
  const bag = etParts(now);
  const hour = Number(bag.hour === "24" ? "0" : bag.hour);
  const minute = Number(bag.minute);
  const mins = hour * 60 + minute;
  const day = bag.weekday;
  const isWeekday = !["Sat", "Sun"].includes(day);
  const inCash = isWeekday && mins >= 9 * 60 + 30 && mins < 16 * 60;
  return {
    kind: inCash ? "CASH" : "AFTER_HOURS",
    clock: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")} ET`,
    weekday: day,
  };
}
