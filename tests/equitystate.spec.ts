import {
  Browser,
  chromium,
  firefox,
  Page,
  test,
  webkit,
} from "@playwright/test";

test.use({ storageState: "./src/equitywebstate.json" });

test("launch transfer page test without login", async ({ page }) => {
  await page.goto("https://oneequity-uat.equitygroupholdings.com/en/transfer");

  await page.pause();
});
