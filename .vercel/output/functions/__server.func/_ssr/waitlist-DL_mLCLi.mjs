import { n as boolean, o as object, r as email, s as string, t as _enum } from "../_libs/zod.mjs";
import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/waitlist-DL_mLCLi.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
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
var joinWaitlist_createServerFn_handler = createServerRpc({
	id: "e998f4dfaf860bc7a5bafd829ea7b84d7f5da4e556df4f2df4bf11ef938ec7dd",
	name: "joinWaitlist",
	filename: "src/lib/waitlist.ts"
}, (opts) => joinWaitlist.__executeServer(opts));
var joinWaitlist = createServerFn({ method: "POST" }).validator(waitlistInput).handler(joinWaitlist_createServerFn_handler, async ({ data }) => {
	const { getSql } = await import("./db-B-Cir3zr.mjs");
	return { status: (await (await getSql())`
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
    `).length ? "ok" : "already" };
});
//#endregion
export { joinWaitlist_createServerFn_handler };
