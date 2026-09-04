import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const waitlistInput = z.object({
  name: z.string().trim().max(80),
  email: z.string().trim().toLowerCase().pipe(z.email().max(254)),
  wallet: z.string().trim().max(88),
  role: z.enum(["holder", "quoter", "trader", "other"]),
  market: z.enum(["NVDAx-PERP", "TSLAx-PERP", "both"]),
  holds: z.boolean(),
});

export const joinWaitlist = createServerFn({ method: "POST" })
  .validator(waitlistInput)
  .handler(async ({ data }) => {
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    const inserted = await sql<{ id: number }>`
      insert into waitlist (email, name, wallet, role, market, holds)
      values (
        ${data.email},
        ${data.name},
        ${data.wallet},
        ${data.role},
        ${data.market},
        ${data.holds}
      )
      on conflict (email) do nothing
      returning id
    `;
    return { status: inserted.length ? "ok" : "already" } as const;
  });
