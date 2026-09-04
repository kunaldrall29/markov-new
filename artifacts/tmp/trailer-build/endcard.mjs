import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 1,
});
await page.goto("file:///workspace/artifacts/tmp/trailer-build/endcard.html", {
  waitUntil: "load",
});
await page.screenshot({
  path: "/workspace/artifacts/tmp/trailer-build/endcard.png",
  type: "png",
});
await browser.close();
console.log("endcard.png");
