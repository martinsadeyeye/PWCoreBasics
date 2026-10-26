import {
  Browser,
  BrowserContext,
  chromium,
  Page,
  expect,
} from "playwright/test";

(async () => {
  const browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.saucedemo.com/");

  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("#login-button").click();

  await expect(page).toHaveTitle("Swag Labs");

  await context.storageState({ path: "saucedemostate.json" });
})();